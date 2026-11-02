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
import { GUIA_META, tagValue } from '@/lib/inquiry-codes'
import { upsertContact } from '@/lib/crm/gohighlevel'
import { PDF_PATH } from '@/lib/guia'

// ============================================================================
// La Guía Definitiva para Comprar Casa en USA — destino del enlace #1 de
// Instagram ("Guía gratis 👇").
//
// Flujo: Zod → Supabase (fuente de verdad) → GoHighLevel (CRM) → Resend
// (la guía + notificación interna). Ningún paso posterior a Supabase puede
// tumbar el registro.
//
// 🔑 DIFERENCIA CLAVE con /preparate: aquí se pide SOLO el correo. Decisión de
// Annelis ("solo email, y PDF"). Menos fricción, y sin teléfono no hace falta
// consentimiento de SMS. El teléfono llega después, en el calendario.
//
// 🔑 La guía NO depende de ningún workflow de GoHighLevel: a la fecha no existe
// ninguno que dispare con la etiqueta `guia-instagram`. El correo lo manda esta
// acción por Resend, y además la página muestra el PDF al instante. Así que si
// el correo falla, la persona YA tiene su guía.
// ============================================================================

const GuiaSchema = z.object({
  email: z.string().email('Revisa el correo'),
  locale: z.enum(['es', 'en']).default('es'),
  // Honeypot — los bots llenan todo, las personas no ven este campo.
  website: z.string().max(0).optional(),
})

export type GuiaState = {
  ok: boolean
  message: string
  /** Sólo se llena al tener éxito: la página la muestra para descargar ya. */
  pdfUrl?: string
  fieldErrors?: Record<string, string[] | undefined>
}

const INQUIRY_TYPE = 'Lead magnet · Guía Definitiva (Instagram)'

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

// ============================================================================
// Supabase
// ============================================================================

function supabaseAdmin() {
  const url = process.env.SUPABASE_URL
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !serviceKey) return null
  return createClient(url, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
    global: { headers: { 'x-application-name': 'annelisortiz-leads' } },
  })
}

async function persistLead(
  data: z.infer<typeof GuiaSchema>,
  ctx: Ctx,
): Promise<string | null> {
  const supabase = supabaseAdmin()
  if (!supabase) {
    console.warn('[guia] Supabase env missing — lead not persisted')
    return null
  }
  try {
    const { data: row, error } = await supabase
      .from('leads')
      .insert({
        // No pedimos nombre. La columna existe y es NOT NULL en otros flujos,
        // así que se guarda el correo como etiqueta legible.
        name: data.email.split('@')[0],
        email: data.email,
        whatsapp: null,
        company: null,
        inquiry_type: INQUIRY_TYPE,
        message: `Pidió La Guía Definitiva para Comprar Casa en USA (enlace de Instagram · ${data.locale === 'en' ? '/en/guide' : '/guia'})`,
        locale: data.locale,
        source_path: ctx.source_path,
        user_agent: ctx.user_agent,
        referrer: ctx.referrer,
        email_status: 'pending',
      })
      .select('id')
      .single()
    if (error) {
      console.error('[guia] Supabase insert failed', error)
      return null
    }
    return row?.id ?? null
  } catch (err) {
    console.error('[guia] Supabase unexpected error', err)
    return null
  }
}

async function updateLead(leadId: string, patch: Record<string, unknown>) {
  const supabase = supabaseAdmin()
  if (!supabase) return
  try {
    await supabase.from('leads').update(patch).eq('id', leadId)
  } catch (err) {
    console.error('[guia] Supabase status update failed', err)
  }
}

// ============================================================================
// CRM
// ============================================================================

async function syncToCrm(
  data: z.infer<typeof GuiaSchema>,
  leadId: string | null,
) {
  const result = await upsertContact({
    // GoHighLevel pide un nombre; sin él el contacto sale en blanco en la lista.
    firstName: data.email.split('@')[0],
    email: data.email,
    source: 'annelisortiz.com — Guía Definitiva (Instagram)',
    // `guia-instagram` = quién la pidió. Es la etiqueta que Annelis pidió para
    // poder ver quién llega por el enlace de la bio.
    tags: ['guia-instagram', 'lead', `idioma-${data.locale}`],
  })

  if (!leadId) return
  const now = new Date().toISOString()
  if (result.status === 'synced') {
    await updateLead(leadId, {
      crm_status: 'synced',
      crm_contact_id: result.contactId,
      crm_synced_at: now,
    })
  } else if (result.status === 'skipped') {
    await updateLead(leadId, { crm_status: 'skipped', crm_error: result.reason })
  } else {
    await updateLead(leadId, {
      crm_status: 'failed',
      crm_error: result.error,
      crm_synced_at: now,
    })
  }
}

// ============================================================================
// Emails
// ============================================================================

function guiaSubject(locale: 'es' | 'en'): string {
  return locale === 'en'
    ? 'Your guide — The Definitive Guide to Buying a Home in the USA'
    : 'Tu guía — La Guía Definitiva para Comprar Casa en USA'
}

/** El aviso NMLS es obligatorio en toda pieza de hipoteca. No se quita. */
function disclosure(isEn: boolean): string {
  return isEn
    ? `NMLS #${siteBusiness.nmlsLoanOfficer} (Annelis Ortiz) · NMLS #${siteBusiness.nmlsCompany} (NEXA Lending LLC) · Equal Housing Lender. This is not a credit offer or a guarantee of approval; all applications are subject to qualification.`
    : `NMLS #${siteBusiness.nmlsLoanOfficer} (Annelis Ortiz) · NMLS #${siteBusiness.nmlsCompany} (NEXA Lending LLC) · Igualdad de Oportunidad en la Vivienda. Esto no es una oferta de crédito ni una garantía de aprobación; toda solicitud está sujeta a calificación.`
}

function guiaHtml(data: z.infer<typeof GuiaSchema>): string {
  const isEn = data.locale === 'en'
  const pdf = `${site.url}${PDF_PATH}`

  const greeting = isEn ? 'Hi,' : 'Hola,'
  const intro = isEn
    ? `Here's your copy of <strong>The Definitive Guide to Buying a Home in the USA</strong> — 12 pages, from credit all the way to the keys.`
    : `Aquí está tu copia de <strong>La Guía Definitiva para Comprar Casa en USA</strong> — 12 páginas, desde el crédito hasta las llaves.`
  const cta = isEn ? 'Download the guide' : 'Descargar la guía'
  const subnote = isEn
    ? `Save this email — the link doesn't expire, so you can come back to it whenever you need it.`
    : `Guarda este correo — el enlace no vence, así que puedes volver a él cuando lo necesites.`
  const talkTitle = isEn
    ? `Rather go through it together?`
    : `¿Prefieres que lo veamos juntos?`
  const talkBody = isEn
    ? `In 30 minutes I'll tell you where you really stand — and what exactly is missing for you to qualify.`
    : `En 30 minutos te digo en qué punto estás de verdad — y qué te falta exactamente para calificar.`
  const bookLabel = isEn ? 'Book my call' : 'Agendar mi cita'
  const waLabel = isEn ? 'Direct WhatsApp' : 'WhatsApp directo'
  const closing = isEn ? 'See you soon,' : 'Nos vemos pronto,'
  const role = isEn
    ? 'Mortgage Loan Originator'
    : 'Originadora de Préstamos Hipotecarios'

  return `
<!doctype html>
<html lang="${data.locale}">
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:560px;margin:0 auto;padding:32px 16px;color:#1c1c1c;background:#faf8f4;">
  <div style="background:#fff;border:1px solid #ece4d6;border-radius:16px;padding:32px;">
    <p style="margin:0 0 6px;font-size:12px;letter-spacing:0.16em;text-transform:uppercase;color:#a07f3f;">annelisortiz.com</p>
    <p style="margin:0 0 16px;font-size:20px;font-weight:700;">${greeting}</p>
    <p style="margin:0 0 26px;font-size:15px;line-height:1.7;">${intro}</p>

    <p style="margin:0 0 10px;">
      <a href="${pdf}" style="display:inline-block;background:#a07f3f;color:#fff;text-decoration:none;font-weight:600;padding:14px 28px;border-radius:999px;font-size:15px;">${cta} →</a>
    </p>
    <p style="margin:0 0 28px;font-size:13px;line-height:1.6;color:#6b6b6b;">${subnote}</p>

    <hr style="border:none;border-top:1px solid #f0eade;margin:0 0 24px;">

    <p style="margin:0 0 8px;font-size:15px;font-weight:700;color:#a07f3f;">${talkTitle}</p>
    <p style="margin:0 0 16px;font-size:14px;line-height:1.65;color:#4a4a4a;">${talkBody}</p>
    <p style="margin:0 0 6px;font-size:14px;">
      📅 <a href="${applicationPortal.url}" style="color:#a07f3f;text-decoration:none;font-weight:600;">${bookLabel}</a>
    </p>
    <p style="margin:0 0 28px;font-size:14px;">
      💬 <a href="${siteContact.whatsappUrl}" style="color:#a07f3f;text-decoration:none;font-weight:600;">${waLabel}</a>
    </p>

    <p style="margin:0 0 4px;font-size:15px;">${closing}</p>
    <p style="margin:0;font-size:15px;line-height:1.5;">
      <strong>Annelis Ortiz</strong><br>
      <span style="color:#7a7a7a;font-size:13px;">${role} · NMLS #${siteBusiness.nmlsLoanOfficer}</span>
    </p>
  </div>
  <p style="margin:20px auto 0;max-width:560px;text-align:center;font-size:11px;color:#9a9a9a;line-height:1.6;">
    ${disclosure(isEn)}
  </p>
</body>
</html>`.trim()
}

function guiaPlain(data: z.infer<typeof GuiaSchema>): string {
  const isEn = data.locale === 'en'
  const pdf = `${site.url}${PDF_PATH}`
  if (isEn) {
    return `Hi,

Here's your copy of The Definitive Guide to Buying a Home in the USA — 12 pages, from credit all the way to the keys.

Download it here:
${pdf}

Save this email — the link doesn't expire.

Rather go through it together? In 30 minutes I'll tell you where you really stand, and what exactly is missing for you to qualify.
Book my call: ${applicationPortal.url}
WhatsApp: ${siteContact.whatsappUrl}

See you soon,
Annelis Ortiz
Mortgage Loan Originator · NMLS #${siteBusiness.nmlsLoanOfficer}

${disclosure(true)}
`
  }
  return `Hola,

Aquí está tu copia de La Guía Definitiva para Comprar Casa en USA — 12 páginas, desde el crédito hasta las llaves.

Descárgala aquí:
${pdf}

Guarda este correo — el enlace no vence.

¿Prefieres que lo veamos juntos? En 30 minutos te digo en qué punto estás de verdad, y qué te falta exactamente para calificar.
Agendar mi cita: ${applicationPortal.url}
WhatsApp: ${siteContact.whatsappUrl}

Nos vemos pronto,
Annelis Ortiz
Originadora de Préstamos Hipotecarios · NMLS #${siteBusiness.nmlsLoanOfficer}

${disclosure(false)}
`
}

function internalHtml(data: z.infer<typeof GuiaSchema>): string {
  return `
<!doctype html>
<html lang="es">
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:560px;margin:0 auto;padding:32px 16px;color:#0a0a0a;background:#fafafa;">
  <div style="background:#fff;border:1px solid #eaeaea;border-radius:12px;padding:32px;">
    <p style="margin:0 0 6px;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:#a07f3f;">annelisortiz.com · Guía</p>
    <h1 style="margin:0 0 20px;font-size:22px;font-weight:600;">Alguien pidió la Guía Definitiva</h1>
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      <tr><td style="padding:8px 0;color:#666;width:38%;">Email</td><td style="padding:8px 0;"><strong>${escapeHtml(data.email)}</strong></td></tr>
      <tr><td style="padding:8px 0;color:#666;">Idioma</td><td style="padding:8px 0;"><strong>${data.locale.toUpperCase()}</strong></td></tr>
      <tr><td style="padding:8px 0;color:#666;">Origen</td><td style="padding:8px 0;"><strong>Enlace de Instagram → /guia</strong></td></tr>
    </table>
  </div>
  <p style="margin:24px 0 0;text-align:center;font-size:11px;color:#999;line-height:1.6;">
    Ya se le envió la guía y se creó el contacto en GoHighLevel con la etiqueta <strong>guia-instagram</strong>.
  </p>
</body>
</html>`.trim()
}

// ============================================================================
// Server action
// ============================================================================

export async function pedirGuia(
  _prev: GuiaState,
  formData: FormData,
): Promise<GuiaState> {
  const parsed = GuiaSchema.safeParse(Object.fromEntries(formData))
  if (!parsed.success) {
    return {
      ok: false,
      message: 'Revisa el correo.',
      fieldErrors: parsed.error.flatten().fieldErrors,
    }
  }
  // El honeypot lo ataja el propio esquema: `website` es `.max(0)`, así que si
  // un bot lo llena, el `safeParse` de arriba ya falló. No hace falta un
  // segundo chequeo aquí — probado en el navegador: llenar el campo oculto
  // devuelve error de validación y no escribe nada.
  const data = parsed.data

  const h = await headers()
  const ctx: Ctx = {
    source_path: h.get('referer') ?? null,
    user_agent: h.get('user-agent') ?? null,
    referrer: h.get('referer') ?? null,
  }

  // 1) Fuente de verdad primero — nunca perdemos un registro.
  const leadId = await persistLead(data, ctx)

  // 2) CRM. Nunca lanza; sólo marca el estado.
  await syncToCrm(data, leadId)

  // 3) Correos.
  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_EMAIL || siteContact.email
  // El PDF se entrega SIEMPRE, falle lo que falle después de este punto.
  const success: GuiaState = { ok: true, message: '', pdfUrl: PDF_PATH }

  if (!apiKey) {
    console.warn('[guia] RESEND_API_KEY missing')
    if (leadId)
      await updateLead(leadId, {
        email_status: 'skipped',
        auto_response_status: 'skipped',
      })
    return success
  }

  const resend = new Resend(apiKey)
  const tags = [
    { name: 'inquiry_type', value: tagValue(GUIA_META.slug) },
    { name: 'locale', value: data.locale },
  ]

  // 3a) La guía — es el entregable principal.
  try {
    const { data: sent, error } = await resend.emails.send({
      from: 'Annelis Ortiz <hola@annelisortiz.com>',
      to: [data.email],
      replyTo: siteContact.email,
      subject: guiaSubject(data.locale),
      html: guiaHtml(data),
      text: guiaPlain(data),
      tags: [{ name: 'source', value: 'guia_entrega' }, ...tags],
    })
    if (error) throw new Error(error.message ?? String(error))
    if (leadId)
      await updateLead(leadId, {
        auto_response_status: 'sent',
        auto_response_id: sent?.id ?? null,
        auto_responded_at: new Date().toISOString(),
      })
  } catch (err) {
    console.error('[guia] guide email failed', err)
    if (leadId)
      await updateLead(leadId, {
        auto_response_status: 'failed',
        auto_response_error: err instanceof Error ? err.message : String(err),
        auto_responded_at: new Date().toISOString(),
      })
  }

  // 3b) Notificación interna a Annelis.
  try {
    const { data: sent, error } = await resend.emails.send({
      from: 'Annelis Ortiz <hola@annelisortiz.com>',
      to: [to],
      replyTo: data.email,
      subject: `[${GUIA_META.code}] ${data.email} — Guía Definitiva (Instagram)`,
      html: internalHtml(data),
      text: `Alguien pidió la Guía Definitiva:\n\nEmail: ${data.email}\nIdioma: ${data.locale}\nOrigen: enlace de Instagram → /guia\n`,
      tags: [{ name: 'source', value: 'guia_signup' }, ...tags],
    })
    if (error) throw new Error(error.message ?? String(error))
    if (leadId)
      await updateLead(leadId, {
        email_status: 'sent',
        resend_email_id: sent?.id ?? null,
        emailed_at: new Date().toISOString(),
      })
  } catch (err) {
    console.error('[guia] internal notification failed', err)
    if (leadId)
      await updateLead(leadId, {
        email_status: 'failed',
        email_error: err instanceof Error ? err.message : String(err),
      })
  }

  return success
}
