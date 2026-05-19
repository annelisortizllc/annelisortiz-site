import 'server-only'

/**
 * Lightweight email parser shared by the webhook.
 * Apps Script forwarder sends a JSON payload like:
 * {
 *   source: 'haro' | 'qwoted' | 'connectively' | 'sos' | 'journorequests' | 'other',
 *   user_id: 'uuid',           // the LO/coach this query belongs to
 *   message_id: 'gmail-msg-id',
 *   from: '"Reporter" <reporter@outlet.com>',
 *   subject: 'string',
 *   body: 'plaintext',
 *   received_at: 'ISO 8601'
 * }
 */

export interface ForwarderPayload {
  source: string
  user_id: string
  message_id: string
  from: string
  subject: string
  body: string
  received_at?: string
}

const ALLOWED_SOURCES = new Set([
  'haro',
  'qwoted',
  'connectively',
  'sos',
  'journorequests',
  'other',
])

export function validatePayload(input: unknown): ForwarderPayload | { error: string } {
  if (typeof input !== 'object' || input === null) return { error: 'not an object' }
  const r = input as Partial<ForwarderPayload>
  for (const k of ['source', 'user_id', 'message_id', 'from', 'subject', 'body'] as const) {
    const v = r[k]
    if (typeof v !== 'string' || !v.trim()) return { error: `missing field: ${k}` }
  }
  const src = r.source!.toLowerCase().trim()
  if (!ALLOWED_SOURCES.has(src)) return { error: `invalid source: ${src}` }
  return {
    source: src,
    user_id: r.user_id!,
    message_id: r.message_id!,
    from: r.from!,
    subject: r.subject!,
    body: r.body!,
    received_at: r.received_at,
  }
}

export function parseEmailAddress(from: string): { name: string | null; email: string | null } {
  const match = from.match(/^"?([^"<]+?)"?\s*<([^>]+)>$/)
  if (match) return { name: match[1].trim() || null, email: match[2].trim() }
  if (from.includes('@')) return { name: null, email: from.trim() }
  return { name: from.trim() || null, email: null }
}
