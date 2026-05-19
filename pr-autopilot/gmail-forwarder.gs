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
  USER_ID: 'REPLACE_WITH_PR_USER_ID',                          // pr_users.id from bootstrap script output
  WEBHOOK_URL: 'https://annelisortiz.com/api/pr-autopilot/webhook',
  WEBHOOK_SECRET: 'REPLACE_WITH_PR_AUTOPILOT_WEBHOOK_SECRET',  // from Vercel env vars
  MAX_PER_RUN: 25,                                              // safety: don't process more than this per trigger
}

// Sender fingerprints → source name. Add new rows when you sign up to more platforms.
const ROUTES = [
  { source: 'haro',           match: /(haro|featured\.com|helpareporter)/i },
  { source: 'qwoted',         match: /qwoted/i },
  { source: 'connectively',   match: /connectively/i },
  { source: 'sos',            match: /sourceofsources/i },
  { source: 'journorequests', match: /journorequests/i },
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

  // Build a Gmail search query that covers all PR platforms, last 24h, unread or
  // unlabeled. The Gmail search "newer_than:1d" excludes ancient emails.
  const sinceClause = '-label:' + LABEL_FORWARDED + ' newer_than:2d'
  const senderClauses = ROUTES.map((r) => 'from:(' + r.source + ' OR ' + r.source.toUpperCase() + ')').join(' OR ')
  const query = '(' + senderClauses + ' OR from:haro@featured.com OR from:noreply@qwoted.com OR from:hi@connectively.us OR from:notify@sourceofsources.com OR from:hello@journorequests.com) ' + sinceClause

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

// ============================================================================
// Internals
// ============================================================================

function detectSource_(msg) {
  const from = msg.getFrom() || ''
  for (const r of ROUTES) {
    if (r.match.test(from)) return r.source
  }
  return null
}

function postToWebhook_(source, msg) {
  const payload = {
    source: source,
    user_id: CONFIG.USER_ID,
    message_id: msg.getId(),
    from: msg.getFrom(),
    subject: msg.getSubject(),
    body: msg.getPlainBody().slice(0, 50000), // bound size
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
