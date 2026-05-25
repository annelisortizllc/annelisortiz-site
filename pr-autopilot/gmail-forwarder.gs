/**
 * PR Auto-Pilot · Gmail forwarder (Google Apps Script)
 * ----------------------------------------------------
 * Reads incoming PR-query emails from Gmail and POSTs each to the site's
 * webhook so they show up in the admin dashboard for Annelis to review.
 *
 * SETUP (one-time, takes ~5 min):
 *   1. Open https://script.google.com → New project
 *   2. Replace the default Code.gs with this entire file
 *   3. Edit the CONFIG block below — set USER_ID, WEBHOOK_URL, WEBHOOK_SECRET
 *   4. Save (Ctrl/Cmd+S), name the project "PR Auto-Pilot Forwarder"
 *   5. Run the function `setupLabels` once — it asks for Gmail permission, accept.
 *      Wait — Google will warn "App not verified" → click Advanced → Go to project.
 *   6. Run `pollOnce` once to test (should POST 0 emails the first time).
 *   7. Click the clock icon (Triggers) → "Add Trigger":
 *        - Function: pollPrQueries
 *        - Event source: Time-driven
 *        - Type: Minutes timer · Every 5 minutes
 *      Save. Done.
 *
 * HOW IT TAGS EMAILS:
 *   - Every PR platform sender is matched by domain/keyword (see ROUTES below)
 *   - Each unprocessed match gets POSTed to the webhook
 *   - On 2xx response, the email gets the label "pr-autopilot/forwarded"
 *   - On error, it gets "pr-autopilot/error" with the message in a snippet
 *   - Already-labeled emails are skipped on subsequent runs (idempotent)
 */

// ============================================================================
// CONFIG — Edit these before running
// ============================================================================
const CONFIG = {
  USER_ID: 'f8b6b150-e0ae-445c-92d7-e31b805cabf7',                          // pr_users.id from bootstrap script output
  WEBHOOK_URL: 'https://annelisortiz.com/api/pr-autopilot/webhook',
  WEBHOOK_SECRET: '52fc6dd30e61c0b8109dc71382d468a7445ee44f883d00e3a392b9dc92043e6a',  // from Vercel env vars
  MAX_PER_RUN: 25,                                              // safety: don't process more than this per trigger
}

// Sender fingerprints → source name. Add new rows when you sign up to more platforms.
// `match` is checked against msg.getFrom() for routing AFTER Gmail returns results.
// `searchKey` is what we inject into the Gmail `from:` operator at search time —
// keep it as a domain or distinctive substring that Gmail will tokenize cleanly.
const ROUTES = [
  { source: 'haro',           match: /(haro|featured\.com|helpareporter)/i,    searchKey: 'featured.com OR helpareporter OR haro' },
  { source: 'qwoted',         match: /qwoted/i,                                  searchKey: 'qwoted.com OR qwoted' },
  { source: 'connectively',   match: /connectively/i,                            searchKey: 'connectively.us OR connectively.com OR connectively' },
  { source: 'sos',            match: /sourceofsources/i,                         searchKey: 'sourceofsources.com OR sourceofsources' },
  { source: 'journorequests', match: /journorequests/i,                          searchKey: 'journorequests.com OR journorequests' },
]

const LABEL_FORWARDED = 'pr-autopilot/forwarded'
const LABEL_ERROR     = 'pr-autopilot/error'

// ============================================================================
// Public functions
// ============================================================================

function setupLabels() {
  getOrCreateLabel_(LABEL_FORWARDED)
  getOrCreateLabel_(LABEL_ERROR)
  Logger.log('Labels created: %s, %s', LABEL_FORWARDED, LABEL_ERROR)
}

function pollPrQueries() {
  const labelForwarded = getOrCreateLabel_(LABEL_FORWARDED)
  const labelError = getOrCreateLabel_(LABEL_ERROR)

  // Build a Gmail search query covering all PR platforms in the last 14 days.
  // We accept BOTH direct sends (From: matches a PR domain) AND Outlook
  // auto-forwards from info@annelisortiz.com (From: matches the user's pro
  // email). 14d is wide enough to catch welcome emails received during signup
  // week without re-scanning ancient threads each poll.
  //
  // IMPORTANT: flatten all searchKeys into ONE `from:(...)` clause — Gmail
  // does not reliably evaluate multiple `from:(...) OR from:(...)` clauses
  // joined by OR (verified empirically — debugListPrEmails finds emails, the
  // multi-clause variant returned 0).
  const allSenderKeys = ROUTES.map((r) => r.searchKey).join(' OR ')
  const sinceClause = '-label:' + LABEL_FORWARDED + ' newer_than:14d'
  const query = '(from:(' + allSenderKeys + ' OR info@annelisortiz.com)) ' + sinceClause

  Logger.log('Query: %s', query)
  const threads = GmailApp.search(query, 0, CONFIG.MAX_PER_RUN)
  Logger.log('Found %s threads matching query', threads.length)

  let processed = 0
  for (const thread of threads) {
    const messages = thread.getMessages()
    for (const msg of messages) {
      try {
        const source = detectSource_(msg)
        if (!source) continue
        if (thread.getLabels().some((l) => l.getName() === LABEL_FORWARDED)) continue

        const res = postToWebhook_(source, msg)
        if (res.ok) {
          thread.addLabel(labelForwarded)
          processed += 1
        } else {
          thread.addLabel(labelError)
          Logger.log('Forwarder error: %s', res.error)
        }
      } catch (err) {
        Logger.log('Exception forwarding msg: %s', err && err.toString ? err.toString() : err)
        thread.addLabel(labelError)
      }
    }
  }
  Logger.log('Forwarded %s emails', processed)
  return processed
}

function pollOnce() {
  return pollPrQueries()
}

/**
 * DIAGNOSTIC — lists every email in the last 30 days that could plausibly be
 * from a PR platform, with its From: address. Use to calibrate ROUTES regex
 * when the live forwarder is finding 0 threads but the inbox supposedly has
 * welcomes. Does NOT post to the webhook or apply labels.
 */
function debugListPrEmails() {
  const query = '(from:(featured.com OR helpareporter OR haro OR qwoted OR connectively OR sourceofsources OR journorequests OR mailgun.com OR sendgrid.net)) newer_than:30d'
  const threads = GmailApp.search(query, 0, 50)
  Logger.log('debugListPrEmails: found %s threads matching broad PR keyword search', threads.length)
  threads.forEach(function (thread, i) {
    const msg = thread.getMessages()[0]
    const labels = thread.getLabels().map(function (l) { return l.getName() }).join(',') || '-'
    Logger.log(
      '[%s] FROM: %s | SUBJECT: %s | DATE: %s | LABELS: %s',
      i + 1,
      msg.getFrom(),
      msg.getSubject().slice(0, 80),
      msg.getDate().toISOString(),
      labels
    )
  })
}

// ============================================================================
// Internals
// ============================================================================

/**
 * Identifies which PR platform an email came from.
 *
 * Case 1 — DIRECT: the email's From: header matches a known PR platform
 * domain (e.g. `support@featured.com` → `haro`). This is the canonical flow
 * when the user subscribes to PR platforms with the same Gmail address.
 *
 * Case 2 — OUTLOOK FORWARD: the user is subscribed with `info@annelisortiz.com`
 * (Microsoft 365) and an Outlook rule auto-forwards PR emails to the Gmail.
 * "Forward to" (vs "Redirect to") rewrites the From: header to the user's own
 * address, so the platform identity is only visible inside the quoted body.
 * We scan the body for either a "From: ..." line in the forwarded section or
 * any platform keyword in the first ~3KB of the body.
 *
 * Returns the source slug (e.g. 'haro') or null if no platform is recognized.
 */
function detectSource_(msg) {
  const from = msg.getFrom() || ''

  // Case 1: direct send
  for (const r of ROUTES) {
    if (r.match.test(from)) return r.source
  }

  // Case 2: Outlook auto-forward from user's pro inbox
  const isForwardFromOutlook = /info@annelisortiz\.com/i.test(from)
  if (isForwardFromOutlook) {
    const body = (msg.getPlainBody() || '').slice(0, 3000)
    // Try the "From:" line inside the forwarded body first.
    const forwardedFromMatch = body.match(/^\s*From:\s*([^\n\r]+)/im)
    if (forwardedFromMatch) {
      for (const r of ROUTES) {
        if (r.match.test(forwardedFromMatch[1])) return r.source
      }
    }
    // Fallback: any platform keyword anywhere in subject+body.
    const haystack = (msg.getSubject() || '') + ' ' + body
    for (const r of ROUTES) {
      if (r.match.test(haystack)) return r.source
    }
  }

  return null
}

function postToWebhook_(source, msg) {
  const rawFrom = msg.getFrom() || ''
  const body = msg.getPlainBody() || ''

  // When the email arrives via Outlook auto-forward the visible From: is the
  // user's own inbox, not the journalist/platform. Try to recover the original
  // sender from the quoted "From:" line in the forwarded body so the AI scorer
  // and dashboard see the real source — falling back to the raw From: if not
  // present.
  let effectiveFrom = rawFrom
  if (/info@annelisortiz\.com/i.test(rawFrom)) {
    const forwardedFromMatch = body.slice(0, 3000).match(/^\s*From:\s*([^\n\r]+)/im)
    if (forwardedFromMatch) effectiveFrom = forwardedFromMatch[1].trim()
  }

  const payload = {
    source: source,
    user_id: CONFIG.USER_ID,
    message_id: msg.getId(),
    from: effectiveFrom,
    subject: msg.getSubject(),
    body: body.slice(0, 50000), // bound size
    received_at: msg.getDate().toISOString(),
  }

  const response = UrlFetchApp.fetch(CONFIG.WEBHOOK_URL, {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify(payload),
    headers: { 'x-webhook-secret': CONFIG.WEBHOOK_SECRET },
    muteHttpExceptions: true,
  })
  const code = response.getResponseCode()
  if (code >= 200 && code < 300) return { ok: true }
  return { ok: false, error: 'HTTP ' + code + ': ' + response.getContentText().slice(0, 200) }
}

function getOrCreateLabel_(name) {
  return GmailApp.getUserLabelByName(name) || GmailApp.createLabel(name)
}

// ============================================================================
// setupAll: one-click setup. Creates labels + the 5-min trigger + runs once.
// Run this ONCE from the Apps Script editor after first paste.
// ============================================================================
function setupAll() {
  setupLabels()

  // Idempotent: remove any existing pollPrQueries trigger before creating a new one
  ScriptApp.getProjectTriggers().forEach(function(t) {
    if (t.getHandlerFunction() === 'pollPrQueries') {
      ScriptApp.deleteTrigger(t)
    }
  })

  ScriptApp.newTrigger('pollPrQueries')
    .timeBased()
    .everyMinutes(5)
    .create()
  Logger.log('Trigger created: pollPrQueries every 5 minutes')

  var processed = pollPrQueries()
  Logger.log('Initial pollPrQueries processed %s emails', processed)
  Logger.log('SETUP COMPLETE. Trigger is now running every 5 minutes.')
}
