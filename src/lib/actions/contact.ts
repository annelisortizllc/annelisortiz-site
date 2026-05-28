'use server'

import { headers } from 'next/headers'
import { z } from 'zod'
import { Resend } from 'resend'
import { createClient } from '@supabase/supabase-js'
import { contact as siteContact } from '@/lib/site'

const ContactSchema = z.object({
  name: z.string().min(2, 'Nombre muy corto'),
  email: z.string().email('Email inválido'),
  whatsapp: z.string().optional().default(''),
  company: z.string().optional().default(''),
  type: z.string().min(1, 'Selecciona un tipo'),
  message: z.string().min(10, 'Cuéntame un poco más'),
  // Honeypot — must stay empty
  website: z.string().max(0).optional(),
})

type LeadInsertContext = {
  locale: string | null
  source_path: string | null
  user_agent: string | null
  referrer: string | null
}

// Persiste el lead en Supabase ANTES de intentar Resend para no perderlo si el
// envío de email falla. Devuelve el lead id o null si Supabase no está
// configurado (dev sin env) o si el insert falla.
async function persistLead(
  data: z.infer<typeof ContactSchema>,
  ctx: LeadInsertContext,
): Promise<string | null> {
  const url = process.env.SUPABASE_URL
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !serviceKey) {
    console.warn('[contact] Supabase env missing — lead not persisted')
    return null
  }

  try {
    const supabase = createClient(url, serviceKey, {
      auth: { persistSession: false, autoRefreshToken: false },
      global: { headers: { 'x-application-name': 'annelisortiz-leads' } },
    })
    const { data: row, error } = await supabase
      .from('leads')
      .insert({
        name: data.name,
        email: data.email,
        whatsapp: data.whatsapp || null,
        company: data.company || null,
        inquiry_type: data.type,
        message: data.message,
        locale: ctx.locale,
        source_path: ctx.source_path,
        user_agent: ctx.user_agent,
        referrer: ctx.referrer,
        email_status: 'pending',
      })
      .select('id')
      .single()
    if (error) {
      console.error('[contact] Supabase insert failed', error)
      return null
    }
    return row?.id ?? null
  } catch (err) {
    console.error('[contact] Supabase unexpected error', err)
    return null
  }
}

async function updateLeadEmailStatus(
  leadId: string,
  patch: { email_status: string; resend_email_id?: string | null; email_error?: string | null },
) {
  const url = process.env.SUPABASE_URL
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !serviceKey) return
  try {
    const supabase = createClient(url, serviceKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    })
    await supabase
      .from('leads')
      .update({
        ...patch,
        emailed_at: new Date().toISOString(),
      })
      .eq('id', leadId)
  } catch (err) {
    console.error('[contact] Supabase status update failed', err)
  }
}

export type ContactState = {
  ok: boolean
  message: string
  fieldErrors?: Record<string, string[] | undefined>
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function htmlBody(data: z.infer<typeof ContactSchema>) {
  const fields = [
    ['Nombre', data.name],
    ['Email', data.email],
    ['WhatsApp', data.whatsapp || '—'],
    ['Empresa', data.company || '—'],
    ['Tipo de consulta', data.type],
  ]
  return `
<!doctype html>
<html lang="es">
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:560px;margin:0 auto;padding:32px 16px;color:#0a0a0a;background:#fafafa;">
  <div style="background:#fff;border:1px solid #eaeaea;border-radius:12px;padding:32px;">
    <p style="margin:0 0 6px;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:#a07f3f;">annelisortiz.com</p>
    <h1 style="margin:0 0 20px;font-family:'Cormorant Garamond',Georgia,serif;font-size:26px;font-weight:500;">Nueva consulta del sitio</h1>
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      ${fields
        .map(
          ([label, value]) => `
        <tr>
          <td style="padding:8px 0;color:#666;width:35%;vertical-align:top;">${escapeHtml(label!)}</td>
          <td style="padding:8px 0;color:#0a0a0a;vertical-align:top;"><strong>${escapeHtml(value!)}</strong></td>
        </tr>`,
        )
        .join('')}
    </table>
    <hr style="border:none;border-top:1px solid #eaeaea;margin:24px 0;">
    <p style="margin:0 0 6px;font-size:12px;color:#666;">Mensaje:</p>
    <p style="margin:0;white-space:pre-wrap;line-height:1.6;">${escapeHtml(data.message)}</p>
  </div>
  <p style="margin:24px 0 0;text-align:center;font-size:11px;color:#999;">
    Recibido por annelisortiz.com — responde directo al remitente para empezar la conversación.
  </p>
</body>
</html>`.trim()
}

function plainBody(data: z.infer<typeof ContactSchema>) {
  return `Nueva consulta desde annelisortiz.com

Nombre: ${data.name}
Email: ${data.email}
WhatsApp: ${data.whatsapp || '—'}
Empresa: ${data.company || '—'}
Tipo: ${data.type}

Mensaje:
${data.message}
`
}

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const parsed = ContactSchema.safeParse(Object.fromEntries(formData))
  if (!parsed.success) {
    return {
      ok: false,
      message: 'Revisa los campos marcados.',
      fieldErrors: parsed.error.flatten().fieldErrors,
    }
  }

  const data = parsed.data
  const h = await headers()
  const ctx: LeadInsertContext = {
    locale: h.get('x-locale') || (h.get('referer')?.includes('/en/') ? 'en' : 'es'),
    source_path: h.get('referer') ?? null,
    user_agent: h.get('user-agent') ?? null,
    referrer: h.get('referer') ?? null,
  }

  // 1) Persistimos PRIMERO en Supabase — si Resend falla después, no perdemos el lead.
  const leadId = await persistLead(data, ctx)

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_EMAIL || siteContact.email

  // 2) Si Resend no está configurado (dev sin env), igual ya guardamos el lead arriba.
  if (!apiKey) {
    console.warn('[contact] RESEND_API_KEY missing — lead persisted only')
    if (leadId) await updateLeadEmailStatus(leadId, { email_status: 'skipped' })
    return { ok: true, message: 'Gracias. Recibirás respuesta en menos de 24 horas.' }
  }

  try {
    const resend = new Resend(apiKey)
    const { data: sent, error } = await resend.emails.send({
      from: 'Annelis Ortiz <hola@annelisortiz.com>',
      to: [to],
      replyTo: data.email,
      subject: `${data.type} — ${data.name}`,
      html: htmlBody(data),
      text: plainBody(data),
    })

    if (error) {
      console.error('[contact] Resend error', error)
      if (leadId)
        await updateLeadEmailStatus(leadId, {
          email_status: 'failed',
          email_error: error.message ?? String(error),
        })
      // El lead ya está guardado en Supabase, así que mantenemos UX positivo.
      return { ok: true, message: 'Gracias. Recibirás respuesta en menos de 24 horas.' }
    }

    if (leadId)
      await updateLeadEmailStatus(leadId, {
        email_status: 'sent',
        resend_email_id: sent?.id ?? null,
      })
  } catch (err) {
    console.error('[contact] unexpected error', err)
    if (leadId)
      await updateLeadEmailStatus(leadId, {
        email_status: 'failed',
        email_error: err instanceof Error ? err.message : String(err),
      })
    return { ok: true, message: 'Gracias. Recibirás respuesta en menos de 24 horas.' }
  }

  return { ok: true, message: 'Gracias. Recibirás respuesta en menos de 24 horas.' }
}
