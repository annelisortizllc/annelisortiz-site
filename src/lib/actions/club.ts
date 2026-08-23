'use server'

import { headers } from 'next/headers'
import { z } from 'zod'
import { Resend } from 'resend'
import { createClient } from '@supabase/supabase-js'
import { site, contact as siteContact } from '@/lib/site'
import { CLUB_META, tagValue } from '@/lib/inquiry-codes'
import { upsertContact } from '@/lib/crm/gohighlevel'

// ============================================================================
// Club Pequeños Héroes del Dinero — registro gratis
//
// Flujo: Zod → Supabase (fuente de verdad) → GoHighLevel (CRM) → Resend
// (bienvenida al papá/mamá + notificación interna). Ningún paso posterior a
// Supabase puede tumbar el registro: si GHL o Resend fallan, el lead ya está
// guardado y queda marcado como reintentable.
// ============================================================================

const ClubSchema = z.object({
  name: z.string().min(2, 'Escribe tu nombre'),
  email: z.string().email('Revisa el email'),
  childAge: z.string().max(40).optional(),
  locale: z.enum(['es', 'en']).default('es'),
  // Honeypot — los bots llenan todo, las personas no ven este campo.
  website: z.string().max(0).optional(),
})

export type ClubState = {
  ok: boolean
  message: string
  fieldErrors?: Record<string, string[] | undefined>
}

const INQUIRY_TYPE = 'Club Pequeños Héroes'

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

function supabaseAdmin() {
  const url = process.env.SUPABASE_URL
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !serviceKey) return null
  return createClient(url, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
    global: { headers: { 'x-application-name': 'annelisortiz-club' } },
  })
}

async function persistLead(
  data: z.infer<typeof ClubSchema>,
  ctx: Ctx,
): Promise<string | null> {
  const supabase = supabaseAdmin()
  if (!supabase) {
    console.warn('[club] Supabase env missing — registro no persistido')
    return null
  }
  try {
    const ageNote = data.childAge ? ` · Edad del niño/a: ${data.childAge}` : ''
    const { data: row, error } = await supabase
      .from('leads')
      .insert({
        name: data.name,
        email: data.email,
        whatsapp: null,
        company: null,
        inquiry_type: INQUIRY_TYPE,
        message: `Se registró al Club Pequeños Héroes del Dinero (gratis)${ageNote}`,
        locale: data.locale,
        source_path: ctx.source_path,
        user_agent: ctx.user_agent,
        referrer: ctx.referrer,
        email_status: 'pending',
        crm_status: 'pending',
      })
      .select('id')
      .single()
    if (error) {
      console.error('[club] Supabase insert failed', error)
      return null
    }
    return row?.id ?? null
  } catch (err) {
    console.error('[club] Supabase unexpected error', err)
    return null
  }
}

async function updateLead(leadId: string, patch: Record<string, unknown>) {
  const supabase = supabaseAdmin()
  if (!supabase) return
  try {
    await supabase.from('leads').update(patch).eq('id', leadId)
  } catch (err) {
    console.error('[club] Supabase status update failed', err)
  }
}

// ============================================================================
// CRM
// ============================================================================

async function syncToCrm(
  data: z.infer<typeof ClubSchema>,
  leadId: string | null,
) {
  const [firstName, ...rest] = data.name.trim().split(/\s+/)
  const result = await upsertContact({
    firstName: firstName || data.name,
    lastName: rest.join(' ') || undefined,
    email: data.email,
    source: 'annelisortiz.com — Club Pequeños Héroes',
    tags: [
      'club-pequenos-heroes',
      'pequenos-heroes',
      `idioma-${data.locale}`,
      ...(data.childAge ? [`edad-hijo-${data.childAge}`] : []),
    ],
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

function welcomeSubject(locale: 'es' | 'en'): string {
  return locale === 'en'
    ? '🎉 Welcome to the Little Money Heroes Club!'
    : '🎉 ¡Bienvenidos al Club Pequeños Héroes del Dinero!'
}

function welcomeHtml(data: z.infer<typeof ClubSchema>): string {
  const isEn = data.locale === 'en'
  const name = escapeHtml(data.name)
  const bookUrl = `${site.url}/pequenos-heroes`

  const greeting = isEn ? `Hi ${name}!` : `¡Hola ${name}!`
  const intro = isEn
    ? `Your family is officially in the <strong>Little Money Heroes Club</strong>. From now on you'll receive activities, printables and family challenges to teach your kids about money — playing, not lecturing.`
    : `Tu familia ya está oficialmente en el <strong>Club Pequeños Héroes del Dinero</strong>. De ahora en adelante vas a recibir actividades, material para imprimir y retos familiares para enseñarle a tus hijos sobre el dinero — jugando, no dando sermones.`
  const whatsNext = isEn ? 'What happens next' : 'Qué sigue'
  const items = isEn
    ? [
        'New activities every month, straight to this inbox',
        'Printable material you can use the same afternoon',
        'Family challenges to do together',
        'Exclusive resources before anyone else',
      ]
    : [
        'Actividades nuevas cada mes, directo a este correo',
        'Material descargable que puedes usar esa misma tarde',
        'Retos familiares para hacer juntos',
        'Recursos exclusivos antes que nadie',
      ]
  const cta = isEn ? 'See the book' : 'Ver el libro'
  const ctaNote = isEn
    ? `While the first activity arrives, take a look at <em>Little Money Heroes</em> — 80 pages of coloring and activities.`
    : `Mientras llega la primera actividad, dale un vistazo a <em>Pequeños Héroes del Dinero</em> — 80 páginas para colorear y hacer actividades.`
  const closing = isEn ? 'A big hug,' : 'Un abrazo grande,'
  const role = isEn ? 'Author & financial educator' : 'Autora y educadora financiera'

  const li = items
    .map(
      (t) =>
        `<li style="margin:0 0 10px;font-size:15px;line-height:1.6;color:#3d3d5c;">${t}</li>`,
    )
    .join('')

  return `
<!doctype html>
<html lang="${data.locale}">
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:560px;margin:0 auto;padding:32px 16px;color:#2d2d44;background:#fdf7ff;">
  <div style="background:#fff;border:2px solid #efe1fb;border-radius:20px;padding:32px;">
    <p style="margin:0 0 6px;font-size:12px;letter-spacing:0.16em;text-transform:uppercase;color:#7c3aed;">Club Pequeños Héroes</p>
    <p style="margin:0 0 16px;font-size:20px;font-weight:700;color:#2d2d44;">${greeting}</p>
    <p style="margin:0 0 24px;font-size:15px;line-height:1.7;">${intro}</p>

    <p style="margin:0 0 10px;font-size:15px;font-weight:700;color:#7c3aed;">${whatsNext}</p>
    <ul style="margin:0 0 28px;padding-left:20px;">${li}</ul>

    <p style="margin:0 0 20px;font-size:14px;line-height:1.65;color:#5a5a73;">${ctaNote}</p>
    <p style="margin:0 0 8px;">
      <a href="${bookUrl}" style="display:inline-block;background:#7c3aed;color:#fff;text-decoration:none;font-weight:700;padding:14px 28px;border-radius:999px;font-size:15px;">${cta} →</a>
    </p>

    <hr style="border:none;border-top:1px solid #f0e6fa;margin:28px 0 20px;">

    <p style="margin:0 0 4px;font-size:15px;">${closing}</p>
    <p style="margin:0;font-size:15px;line-height:1.5;">
      <strong>Annelis Ortiz</strong><br>
      <span style="color:#7a7a93;font-size:13px;">${role}</span>
    </p>
  </div>
  <p style="margin:20px auto 0;max-width:560px;text-align:center;font-size:11px;color:#a3a3b8;line-height:1.5;">
    ${isEn ? 'You received this because you signed up at' : 'Recibes este correo porque te registraste en'} annelisortiz.com/pequenos-heroes/club
  </p>
</body>
</html>`.trim()
}

function welcomePlain(data: z.infer<typeof ClubSchema>): string {
  const isEn = data.locale === 'en'
  const bookUrl = `${site.url}/pequenos-heroes`
  if (isEn) {
    return `Hi ${data.name}!

Your family is officially in the Little Money Heroes Club.

What happens next:
  - New activities every month, straight to this inbox
  - Printable material you can use the same afternoon
  - Family challenges to do together
  - Exclusive resources before anyone else

While the first activity arrives, take a look at the book:
${bookUrl}

A big hug,
Annelis Ortiz
Author & financial educator
`
  }
  return `¡Hola ${data.name}!

Tu familia ya está oficialmente en el Club Pequeños Héroes del Dinero.

Qué sigue:
  - Actividades nuevas cada mes, directo a este correo
  - Material descargable que puedes usar esa misma tarde
  - Retos familiares para hacer juntos
  - Recursos exclusivos antes que nadie

Mientras llega la primera actividad, dale un vistazo al libro:
${bookUrl}

Un abrazo grande,
Annelis Ortiz
Autora y educadora financiera
`
}

function internalHtml(data: z.infer<typeof ClubSchema>): string {
  const age = data.childAge
    ? `<tr><td style="padding:8px 0;color:#666;">Edad del niño/a</td><td style="padding:8px 0;"><strong>${escapeHtml(data.childAge)}</strong></td></tr>`
    : ''
  return `
<!doctype html>
<html lang="es">
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:560px;margin:0 auto;padding:32px 16px;color:#0a0a0a;background:#fafafa;">
  <div style="background:#fff;border:1px solid #eaeaea;border-radius:12px;padding:32px;">
    <p style="margin:0 0 6px;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:#7c3aed;">annelisortiz.com · Club</p>
    <h1 style="margin:0 0 20px;font-size:22px;font-weight:600;">Nuevo miembro del Club</h1>
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      <tr><td style="padding:8px 0;color:#666;width:38%;">Nombre</td><td style="padding:8px 0;"><strong>${escapeHtml(data.name)}</strong></td></tr>
      <tr><td style="padding:8px 0;color:#666;">Email</td><td style="padding:8px 0;"><strong>${escapeHtml(data.email)}</strong></td></tr>
      ${age}
      <tr><td style="padding:8px 0;color:#666;">Idioma</td><td style="padding:8px 0;"><strong>${data.locale.toUpperCase()}</strong></td></tr>
    </table>
  </div>
  <p style="margin:24px 0 0;text-align:center;font-size:11px;color:#999;">
    Ya se le envió el correo de bienvenida y se sincronizó con GoHighLevel.
  </p>
</body>
</html>`.trim()
}

// ============================================================================
// Server action
// ============================================================================

export async function joinClub(
  _prev: ClubState,
  formData: FormData,
): Promise<ClubState> {
  const parsed = ClubSchema.safeParse(Object.fromEntries(formData))
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
      ? '🎉 You’re in! Check your inbox for the welcome email.'
      : '🎉 ¡Ya estás dentro! Revisa tu correo, te mandamos la bienvenida.'

  // 1) Fuente de verdad primero — nunca perdemos un registro.
  const leadId = await persistLead(data, ctx)

  // 2) CRM. Nunca lanza; solo marca el estado.
  await syncToCrm(data, leadId)

  // 3) Emails.
  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_EMAIL || siteContact.email
  if (!apiKey) {
    console.warn('[club] RESEND_API_KEY missing')
    if (leadId)
      await updateLead(leadId, {
        email_status: 'skipped',
        auto_response_status: 'skipped',
      })
    return { ok: true, message: successMsg }
  }

  const resend = new Resend(apiKey)
  const tags = [
    { name: 'inquiry_type', value: tagValue(CLUB_META.slug) },
    { name: 'locale', value: data.locale },
  ]

  // 3a) Bienvenida al papá/mamá — es el entregable principal.
  try {
    const { data: sent, error } = await resend.emails.send({
      from: 'Annelis Ortiz <hola@annelisortiz.com>',
      to: [data.email],
      replyTo: siteContact.email,
      subject: welcomeSubject(data.locale),
      html: welcomeHtml(data),
      text: welcomePlain(data),
      tags: [{ name: 'source', value: 'club_welcome' }, ...tags],
    })
    if (error) throw new Error(error.message ?? String(error))
    if (leadId)
      await updateLead(leadId, {
        auto_response_status: 'sent',
        auto_response_id: sent?.id ?? null,
        auto_responded_at: new Date().toISOString(),
      })
  } catch (err) {
    console.error('[club] welcome email failed', err)
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
      subject: `[${CLUB_META.code}] ${data.name} — Club Pequeños Héroes (${data.locale.toUpperCase()})`,
      html: internalHtml(data),
      text: `Nuevo miembro del Club:\n\nNombre: ${data.name}\nEmail: ${data.email}\nEdad del niño/a: ${data.childAge ?? '—'}\nIdioma: ${data.locale}\n`,
      tags: [{ name: 'source', value: 'club_signup' }, ...tags],
    })
    if (error) throw new Error(error.message ?? String(error))
    if (leadId)
      await updateLead(leadId, {
        email_status: 'sent',
        resend_email_id: sent?.id ?? null,
        emailed_at: new Date().toISOString(),
      })
  } catch (err) {
    console.error('[club] internal notification failed', err)
    if (leadId)
      await updateLead(leadId, {
        email_status: 'failed',
        email_error: err instanceof Error ? err.message : String(err),
        emailed_at: new Date().toISOString(),
      })
  }

  return { ok: true, message: successMsg }
}
