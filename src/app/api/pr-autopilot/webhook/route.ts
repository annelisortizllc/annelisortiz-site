import { NextResponse } from 'next/server'
import { env } from '@/lib/pr/env'
import { db } from '@/lib/pr/db'
import { scoreAndDraft } from '@/lib/pr/ai'
import { validatePayload, parseEmailAddress } from '@/lib/pr/parser'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/**
 * POST /api/pr-autopilot/webhook
 * Receives forwarded PR query emails from the Apps Script forwarder.
 * Authenticated via x-webhook-secret header.
 */
export async function POST(req: Request) {
  // ---- Authn -------------------------------------------------------------
  const provided = req.headers.get('x-webhook-secret')
  const expected = env.PR_AUTOPILOT_WEBHOOK_SECRET()
  if (!provided || provided !== expected) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  }

  // ---- Parse + validate --------------------------------------------------
  let raw: unknown
  try {
    raw = await req.json()
  } catch {
    return NextResponse.json({ error: 'bad json' }, { status: 400 })
  }
  const parsed = validatePayload(raw)
  if ('error' in parsed) {
    return NextResponse.json({ error: parsed.error }, { status: 400 })
  }

  // ---- Dedupe: same (source, message_id) is a re-forward, ignore ---------
  const supabase = db()
  const { data: existing } = await supabase
    .from('pr_queries')
    .select('id')
    .eq('source', parsed.source)
    .eq('source_email_id', parsed.message_id)
    .maybeSingle()
  if (existing) {
    return NextResponse.json({ ok: true, deduped: true, id: existing.id })
  }

  // ---- AI scoring + draft (best effort; failure still persists row) ------
  const ai = await scoreAndDraft(parsed.body, {
    subject: parsed.subject,
    from: parsed.from,
  })
  const { name: journalist_name, email: journalist_email } = parseEmailAddress(parsed.from)

  // ---- Persist -----------------------------------------------------------
  const { data: inserted, error } = await supabase
    .from('pr_queries')
    .insert({
      user_id: parsed.user_id,
      source: parsed.source,
      source_email_id: parsed.message_id,
      received_at: parsed.received_at ?? new Date().toISOString(),
      journalist_name: ai?.journalist_name ?? journalist_name,
      journalist_email,
      outlet: ai?.outlet ?? null,
      query_subject: parsed.subject,
      query_body: parsed.body,
      deadline: ai?.deadline ?? null,
      score: ai?.score ?? null,
      score_rationale: ai?.score_rationale ?? null,
      draft_response: ai?.draft_response ?? null,
      status: 'pending',
      raw_email: { from: parsed.from, subject: parsed.subject },
    })
    .select('id, score')
    .single()

  if (error) {
    console.error('[pr-autopilot/webhook] insert failed', error)
    return NextResponse.json({ error: 'persist failed' }, { status: 500 })
  }

  return NextResponse.json({ ok: true, id: inserted.id, score: inserted.score })
}

// Health check for the forwarder
export async function GET() {
  return NextResponse.json({ ok: true, service: 'pr-autopilot-webhook' })
}
