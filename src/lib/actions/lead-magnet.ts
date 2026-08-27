'use server'

import { headers } from 'next/headers'
import { z } from 'zod'
import { Resend } from 'resend'
import { createClient } from '@supabase/supabase-js'
import {
  site,
  contact as siteContact,
  applicationPortal,
  business as siteBusiness,
} from '@/lib/site'
import { LEAD_MAGNET_META, tagValue } from '@/lib/inquiry-codes'
import { classifyLine } from '@/lib/crm/pipeline'

const LeadMagnetSchema = z.object({
  name: z.string().min(2, 'Nombre muy corto'),
  email: z.string().email('Email inválido'),
  locale: z.enum(['es', 'en']).default('es'),
  // Honeypot
  website: z.string().max(0).optional(),
})

export type LeadMagnetState = {
  ok: boolean
  message: string
  fieldErrors?: Record<string, string[] | undefined>
}

const INQUIRY_TYPE = 'Lead magnet · Checklist de Preparación'

type Ctx = {
  source_path: string | null
  user_agent: string | null
  referrer: string | null
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

async function persistLead(
  data: z.infer<typeof LeadMagnetSchema>,
  ctx: Ctx,
): Promise<string | null> {
  const url = process.env.SUPABASE_URL
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !serviceKey) {
    console.warn('[lead-magnet] Supabase env missing — lead not persisted')
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
        whatsapp: null,
        company: null,
        inquiry_type: INQUIRY_TYPE,
        business_line: classifyLine(INQUIRY_TYPE),
        message: `Solicitó el checklist de preparación (lead magnet · landing ${data.locale === 'en' ? '/en/get-ready' : '/preparate'})`,
        locale: data.locale,
        source_path: ctx.source_path,
        user_agent: ctx.user_agent,
        referrer: ctx.referrer,
        email_status: 'pending',
      })
      .select('id')
      .single()
    if (error) {
      console.error('[lead-magnet] Supabase insert failed', error)
      return null
    }
    return row?.id ?? null
  } catch (err) {
    console.error('[lead-magnet] Supabase unexpected error', err)
    return null
  }
}

async function updateLeadStatus(
  leadId: string,
  patch: Record<string, unknown>,
) {
  const url = process.env.SUPABASE_URL
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !serviceKey) return
  try {
    const supabase = createClient(url, serviceKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    })
    await supabase.from('leads').update(patch).eq('id', leadId)
  } catch (err) {
    console.error('[lead-magnet] Supabase status update failed', err)
  }
}

// ============================================================================
// Email content — bilingüe
// ============================================================================

function resourcePath(locale: 'es' | 'en'): string {
  return locale === 'en'
    ? `${site.url}/en/resource/preparation-checklist`
    : `${site.url}/recurso/checklist-preparacion`
}

function leadEmailSubject(locale: 'es' | 'en'): string {
  return locale === 'en'
    ? 'Your checklist — Antes de Decidir'
    : 'Tu checklist — Antes de Decidir'
}

function leadEmailHtml(
  data: z.infer<typeof LeadMagnetSchema>,
): string {
  const isEn = data.locale === 'en'
  const resource = resourcePath(data.locale)
  const greeting = isEn ? `Hi ${escapeHtml(data.name)},` : `Hola ${escapeHtml(data.name)},`
  const intro = isEn
    ? `Here's your <strong>10-step preparation checklist</strong> — the same framework I walk through with every family before they apply for a mortgage.`
    : `Aquí está tu <strong>checklist de 10 pasos</strong> — el mismo marco que reviso con cada familia antes de aplicar para una hipoteca.`
  const cta = isEn ? 'Open the checklist' : 'Abrir el checklist'
  const subnote = isEn
    ? `Save the link — you can re-read it anytime. The same checklist appears in my book <em>"Antes de Decidir"</em>.`
    : `Guarda el link — lo puedes releer cuando quieras. El mismo checklist aparece en mi libro <em>"Antes de Decidir"</em>.`
  const waLabel = isEn ? 'Direct WhatsApp' : 'WhatsApp directo'
  const waNote = isEn ? 'for anything urgent' : 'para algo urgente'
  const bookLabel = isEn ? 'Book a consultation' : 'Agenda una consulta'
  const bookNote = isEn ? '30 min on my calendar' : 'bloquea 30 min en mi calendario'
  const meanwhile = isEn ? 'Two more ways to reach me:' : 'Otras formas de contactarme:'
  const closing = isEn ? 'See you in the checklist,' : 'Nos vemos en el checklist,'
  const role = isEn ? 'Mortgage Loan Originator' : 'Prestamista'
  const altRole = isEn ? 'Real Estate Agent' : 'Agente de Bienes Raíces'
  const disclaimer = isEn
    ? `NMLS #${siteBusiness.nmlsLoanOfficer} (Annelis) · NMLS #${siteBusiness.nmlsCompany} (NEXA Lending LLC) · Equal Housing Lender. This is not a credit offer or guarantee of approval; all applications are subject to qualification.`
    : `NMLS #${siteBusiness.nmlsLoanOfficer} (Annelis) · NMLS #${siteBusiness.nmlsCompany} (NEXA Lending LLC) · Equal Housing Lender. Esto no es una oferta de crédito ni garantía de aprobación; toda solicitud está sujeta a calificación.`

  return `
<!doctype html>
<html lang="${data.locale}">
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:560px;margin:0 auto;padding:32px 16px;color:#0a0a0a;background:#fafafa;">
  <div style="background:#fff;border:1px solid #eaeaea;border-radius:12px;padding:32px;">
    <p style="margin:0 0 6px;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:#a07f3f;">annelisortiz.com</p>
    <p style="margin:0 0 16px;font-size:16px;line-height:1.6;">${greeting}</p>
    <p style="margin:0 0 24px;font-size:15px;line-height:1.65;color:#333;">${intro}</p>

    <p style="margin:0 0 32px;">
      <a href="${resource}" style="display:inline-block;background:#a07f3f;color:#fff;text-decoration:none;font-weight:600;padding:14px 28px;border-radius:999px;font-size:15px;">${cta} →</a>
    </p>

    <p style="margin:0 0 28px;font-size:13px;color:#666;line-height:1.6;">${subnote}</p>

    <hr style="border:none;border-top:1px solid #eaeaea;margin:24px 0;">

    <p style="margin:0 0 12px;font-size:14px;font-weight:600;color:#0a0a0a;">${meanwhile}</p>
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      <tr>
        <td style="padding:10px 0;color:#0a0a0a;">
          💬 <a href="${siteContact.whatsappUrl}" style="color:#a07f3f;text-decoration:none;font-weight:600;">${waLabel}</a>
          <span style="color:#666;"> — ${waNote}</span>
        </td>
      </tr>
      <tr>
        <td style="padding:10px 0;color:#0a0a0a;">
          📅 <a href="${applicationPortal.url}" style="color:#a07f3f;text-decoration:none;font-weight:600;">${bookLabel}</a>
          <span style="color:#666;"> — ${bookNote}</span>
        </td>
      </tr>
    </table>

    <p style="margin:28px 0 4px;font-size:15px;color:#333;">${closing}</p>
    <p style="margin:0;font-size:15px;line-height:1.5;">
      <strong>Annelis Ortiz</strong><br>
      <span style="color:#666;font-size:13px;">${role}</span><br>
      <span style="color:#666;font-size:13px;">${altRole}</span>
    </p>
  </div>
  <p style="margin:24px auto 0;max-width:560px;text-align:center;font-size:11px;color:#999;line-height:1.5;">
    ${disclaimer}
  </p>
</body>
</html>`.trim()
}

function leadEmailPlain(data: z.infer<typeof LeadMagnetSchema>): string {
  const isEn = data.locale === 'en'
  const resource = resourcePath(data.locale)
  if (isEn) {
    return `Hi ${data.name},

Here's your 10-step preparation checklist — the same framework I walk through with every family before they apply for a mortgage.

Open the checklist:
${resource}

Save the link — you can re-read it anytime. The same checklist appears in my book "Antes de Decidir".

Two more ways to reach me:

  Direct WhatsApp — for anything urgent
  ${siteContact.whatsappPretty}
  ${siteContact.whatsappUrl}

  Book a consultation — 30 min on my calendar
  ${applicationPortal.url}

See you in the checklist,
Annelis Ortiz
Mortgage Loan Originator
Real Estate Agent

---
NMLS #${siteBusiness.nmlsLoanOfficer} (Annelis) · NMLS #${siteBusiness.nmlsCompany} (NEXA Lending LLC) · Equal Housing Lender. This is not a credit offer or guarantee of approval; all applications are subject to qualification.
`
  }
  return `Hola ${data.name},

Aquí está tu checklist de 10 pasos — el mismo marco que reviso con cada familia antes de aplicar para una hipoteca.

Abrir el checklist:
${resource}

Guarda el link — lo puedes releer cuando quieras. El mismo checklist aparece en mi libro "Antes de Decidir".

Otras formas de contactarme:

  WhatsApp directo — para algo urgente
  ${siteContact.whatsappPretty}
  ${siteContact.whatsappUrl}

  Agenda una consulta — bloquea 30 min en mi calendario
  ${applicationPortal.url}

Nos vemos en el checklist,
Annelis Ortiz
Prestamista
Agente de Bienes Raíces

---
NMLS #${siteBusiness.nmlsLoanOfficer} (Annelis) · NMLS #${siteBusiness.nmlsCompany} (NEXA Lending LLC) · Equal Housing Lender. Esto no es una oferta de crédito ni garantía de aprobación; toda solicitud está sujeta a calificación.
`
}

function internalHtml(data: z.infer<typeof LeadMagnetSchema>): string {
  return `
<!doctype html>
<html lang="es">
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:560px;margin:0 auto;padding:32px 16px;color:#0a0a0a;background:#fafafa;">
  <div style="background:#fff;border:1px solid #eaeaea;border-radius:12px;padding:32px;">
    <p style="margin:0 0 6px;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:#a07f3f;">annelisortiz.com · Lead magnet</p>
    <h1 style="margin:0 0 20px;font-family:'Cormorant Garamond',Georgia,serif;font-size:24px;font-weight:500;">Descarga de checklist</h1>
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      <tr><td style="padding:8px 0;color:#666;width:35%;">Nombre</td><td style="padding:8px 0;"><strong>${escapeHtml(data.name)}</strong></td></tr>
      <tr><td style="padding:8px 0;color:#666;">Email</td><td style="padding:8px 0;"><strong>${escapeHtml(data.email)}</strong></td></tr>
      <tr><td style="padding:8px 0;color:#666;">Idioma</td><td style="padding:8px 0;"><strong>${data.locale.toUpperCase()}</strong></td></tr>
    </table>
  </div>
  <p style="margin:24px 0 0;text-align:center;font-size:11px;color:#999;">
    Lead capturado por annelisortiz.com — el checklist ya se envió al lead automáticamente.
  </p>
</body>
</html>`.trim()
}

// ============================================================================
// Server action
// ============================================================================

export async function submitLeadMagnet(
  _prev: LeadMagnetState,
  formData: FormData,
): Promise<LeadMagnetState> {
  const parsed = LeadMagnetSchema.safeParse(Object.fromEntries(formData))
  if (!parsed.success) {
    return {
      ok: false,
      message: 'Revisa los campos marcados.',
      fieldErrors: parsed.error.flatten().fieldErrors,
    }
  }
  const data = parsed.data
  const h = await headers()
  const ctx: Ctx = {
    source_path: h.get('referer') ?? null,
    user_agent: h.get('user-agent') ?? null,
    referrer: h.get('referer') ?? null,
  }

  const successMsg =
    data.locale === 'en'
      ? 'Check your inbox — the checklist is on the way.'
      : 'Revisa tu inbox — el checklist va en camino.'

  const leadId = await persistLead(data, ctx)

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_EMAIL || siteContact.email
  if (!apiKey) {
    console.warn('[lead-magnet] RESEND_API_KEY missing')
    if (leadId)
      await updateLeadStatus(leadId, {
        email_status: 'skipped',
        auto_response_status: 'skipped',
      })
    return { ok: true, message: successMsg }
  }

  const resend = new Resend(apiKey)

  // 1) Internal notification to Annelis
  try {
    const { data: sent, error } = await resend.emails.send({
      from: 'Annelis Ortiz <hola@annelisortiz.com>',
      to: [to],
      replyTo: data.email,
      subject: `[${LEAD_MAGNET_META.code}] ${data.name} — Checklist (${data.locale.toUpperCase()})`,
      html: internalHtml(data),
      text: `Nuevo lead del magnet:\n\nNombre: ${data.name}\nEmail: ${data.email}\nIdioma: ${data.locale}\n`,
      tags: [
        { name: 'source', value: 'lead_magnet' },
        { name: 'inquiry_type', value: tagValue(LEAD_MAGNET_META.slug) },
        { name: 'locale', value: data.locale },
      ],
    })
    if (error) throw new Error(error.message ?? String(error))
    if (leadId)
      await updateLeadStatus(leadId, {
        email_status: 'sent',
        resend_email_id: sent?.id ?? null,
        emailed_at: new Date().toISOString(),
      })
  } catch (err) {
    console.error('[lead-magnet] internal notification failed', err)
    if (leadId)
      await updateLeadStatus(leadId, {
        email_status: 'failed',
        email_error: err instanceof Error ? err.message : String(err),
        emailed_at: new Date().toISOString(),
      })
  }

  // 2) Magnet email to the lead (the main deliverable)
  try {
    const { data: sent, error } = await resend.emails.send({
      from: 'Annelis Ortiz <hola@annelisortiz.com>',
      to: [data.email],
      replyTo: siteContact.email,
      subject: leadEmailSubject(data.locale),
      html: leadEmailHtml(data),
      text: leadEmailPlain(data),
      tags: [
        { name: 'source', value: 'lead_magnet_delivery' },
        { name: 'inquiry_type', value: tagValue(LEAD_MAGNET_META.slug) },
        { name: 'locale', value: data.locale },
      ],
    })
    if (error) throw new Error(error.message ?? String(error))
    if (leadId)
      await updateLeadStatus(leadId, {
        auto_response_status: 'sent',
        auto_response_id: sent?.id ?? null,
        auto_responded_at: new Date().toISOString(),
      })
  } catch (err) {
    console.error('[lead-magnet] magnet email failed', err)
    if (leadId)
      await updateLeadStatus(leadId, {
        auto_response_status: 'failed',
        auto_response_error: err instanceof Error ? err.message : String(err),
        auto_responded_at: new Date().toISOString(),
      })
  }

  return { ok: true, message: successMsg }
}
