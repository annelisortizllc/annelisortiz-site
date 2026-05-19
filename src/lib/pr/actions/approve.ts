'use server'

import { revalidatePath } from 'next/cache'
import { Resend } from 'resend'
import { requireRole } from '@/lib/pr/auth'
import { db } from '@/lib/pr/db'
import { env } from '@/lib/pr/env'

export interface ActionState {
  ok: boolean
  message: string
}

const senderName = 'Annelis Ortiz'
const senderEmail = 'hola@annelisortiz.com'

export async function approveAndSendAction(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const session = await requireRole('owner', 'editor')
  const queryId = String(formData.get('query_id') ?? '')
  const editedDraft = String(formData.get('draft_response') ?? '').trim()
  if (!queryId || !editedDraft) return { ok: false, message: 'Faltan datos' }

  const supabase = db()
  const { data: q, error: fetchErr } = await supabase
    .from('pr_queries')
    .select('*')
    .eq('id', queryId)
    .single()
  if (fetchErr || !q) return { ok: false, message: 'Query no encontrada' }
  if (!q.journalist_email) return { ok: false, message: 'Sin email del periodista' }
  if (q.status === 'sent') return { ok: false, message: 'Ya enviada' }

  // Send the response
  const resend = new Resend(env.RESEND_API_KEY())
  const subject = q.query_subject
    ? `Re: ${q.query_subject}`
    : `Quoted source — Annelis Ortiz (NMLS #2006182)`

  try {
    const { data: sent, error: sendErr } = await resend.emails.send({
      from: `${senderName} <${senderEmail}>`,
      to: [q.journalist_email],
      replyTo: 'info@annelisortiz.com',
      subject,
      text: editedDraft,
    })
    if (sendErr) throw sendErr

    await supabase
      .from('pr_queries')
      .update({
        status: 'sent',
        draft_response: editedDraft,
        approved_by_user_id: session.sub,
        approved_at: new Date().toISOString(),
        sent_at: new Date().toISOString(),
        resend_email_id: sent?.id ?? null,
      })
      .eq('id', queryId)

    revalidatePath('/admin/pr-autopilot')
    return { ok: true, message: 'Respuesta enviada' }
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Error desconocido'
    await supabase
      .from('pr_queries')
      .update({ status: 'error', error_message: msg })
      .eq('id', queryId)
    return { ok: false, message: `Falló envío: ${msg}` }
  }
}

export async function rejectAction(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const session = await requireRole('owner', 'editor')
  const queryId = String(formData.get('query_id') ?? '')
  if (!queryId) return { ok: false, message: 'Falta ID' }

  const { error } = await db()
    .from('pr_queries')
    .update({
      status: 'rejected',
      approved_by_user_id: session.sub,
      approved_at: new Date().toISOString(),
    })
    .eq('id', queryId)

  if (error) return { ok: false, message: 'No se pudo rechazar' }
  revalidatePath('/admin/pr-autopilot')
  return { ok: true, message: 'Rechazada' }
}

export async function logoutAction(): Promise<void> {
  await requireRole('owner', 'editor', 'viewer')
  const { logout } = await import('@/lib/pr/auth')
  await logout()
  const { redirect } = await import('next/navigation')
  redirect('/admin/login')
}
