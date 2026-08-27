// GoHighLevel CRM client — API v2 (services.leadconnectorhq.com)
//
// Se usa desde Server Actions para empujar cada lead al CRM.
// REGLA DE ORO: este módulo NUNCA lanza. Un fallo del CRM jamás puede
// tumbar un registro — el lead ya está guardado en Supabase y el sync
// se puede reintentar leyendo `leads.crm_status in ('pending','failed')`.
//
// Env vars requeridas:
//   GHL_API_TOKEN    — Private Integration Token (Settings → Private Integrations)
//                      Scopes: contacts.readonly, contacts.write
//   GHL_LOCATION_ID  — el ID de la sub-cuenta (Settings → Business Profile)

const GHL_BASE = 'https://services.leadconnectorhq.com'
const GHL_VERSION = '2021-07-28'
const TIMEOUT_MS = 8000

export type GhlResult =
  | { status: 'synced'; contactId: string | null }
  | { status: 'skipped'; reason: string }
  | { status: 'failed'; error: string }

export type GhlContactInput = {
  firstName: string
  lastName?: string
  email: string
  phone?: string
  /** Etiquetas a AGREGAR. Nunca reemplazan las que el contacto ya tiene. */
  tags?: string[]
  /** Texto libre que GHL muestra como origen del contacto. */
  source?: string
  /** Campos personalizados por key (deben existir ya en GHL). */
  customFields?: Record<string, string>
}

function creds(): { token: string; locationId: string } | null {
  const token = process.env.GHL_API_TOKEN
  const locationId = process.env.GHL_LOCATION_ID
  if (!token || !locationId) return null
  return { token, locationId }
}

async function ghlFetch(
  path: string,
  token: string,
  init: RequestInit,
): Promise<{ ok: boolean; status: number; body: unknown }> {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS)
  try {
    const res = await fetch(`${GHL_BASE}${path}`, {
      ...init,
      signal: controller.signal,
      headers: {
        Authorization: `Bearer ${token}`,
        Version: GHL_VERSION,
        'Content-Type': 'application/json',
        Accept: 'application/json',
        ...(init.headers ?? {}),
      },
      cache: 'no-store',
    })
    let body: unknown = null
    try {
      body = await res.json()
    } catch {
      // respuesta sin JSON — no es fatal
    }
    return { ok: res.ok, status: res.status, body }
  } finally {
    clearTimeout(timer)
  }
}

function pickContactId(body: unknown): string | null {
  if (!body || typeof body !== 'object') return null
  const b = body as Record<string, unknown>
  const contact = b.contact
  if (contact && typeof contact === 'object') {
    const id = (contact as Record<string, unknown>).id
    if (typeof id === 'string') return id
  }
  if (typeof b.id === 'string') return b.id
  if (typeof b.contactId === 'string') return b.contactId
  return null
}

function readTags(body: unknown): string[] {
  if (!body || typeof body !== 'object') return []
  const b = body as Record<string, unknown>
  const source =
    b.contact && typeof b.contact === 'object'
      ? (b.contact as Record<string, unknown>)
      : b
  const tags = source.tags
  if (!Array.isArray(tags)) return []
  return tags.filter((t): t is string => typeof t === 'string')
}

function errText(status: number, body: unknown): string {
  if (body && typeof body === 'object') {
    const b = body as Record<string, unknown>
    const msg = b.message ?? b.error
    if (typeof msg === 'string') return `${status}: ${msg}`
    if (Array.isArray(msg)) return `${status}: ${msg.join('; ')}`
  }
  return `HTTP ${status}`
}

/**
 * Crea o actualiza un contacto en GoHighLevel y le AGREGA las tags indicadas.
 *
 * Por qué dos llamadas: en `contacts/upsert` el array `tags` REEMPLAZA por
 * completo las etiquetas existentes. Muchos papás del club ya son contactos
 * de Annelis (leads de hipoteca) — mandar tags en el upsert les borraría todo
 * su historial de segmentación. Así que:
 *   1. upsert SIN tags  → obtiene contactId y las tags actuales
 *   2. PUT con la unión (actuales ∪ nuevas) → aditivo, no destructivo
 */
export async function upsertContact(input: GhlContactInput): Promise<GhlResult> {
  const c = creds()
  if (!c) {
    console.warn('[ghl] GHL_API_TOKEN o GHL_LOCATION_ID ausentes — sync omitido')
    return { status: 'skipped', reason: 'env_missing' }
  }

  try {
    // ---- 1) Upsert sin tags -------------------------------------------------
    const payload: Record<string, unknown> = {
      locationId: c.locationId,
      firstName: input.firstName,
      email: input.email,
    }
    if (input.lastName) payload.lastName = input.lastName
    if (input.phone) payload.phone = input.phone
    if (input.source) payload.source = input.source
    if (input.customFields && Object.keys(input.customFields).length > 0) {
      payload.customFields = Object.entries(input.customFields).map(
        ([key, field_value]) => ({ key, field_value }),
      )
    }

    const up = await ghlFetch('/contacts/upsert', c.token, {
      method: 'POST',
      body: JSON.stringify(payload),
    })

    if (!up.ok) {
      const error = errText(up.status, up.body)
      console.error('[ghl] upsert failed', error)
      return { status: 'failed', error }
    }

    const contactId = pickContactId(up.body)

    // ---- 2) Merge de tags (aditivo) ----------------------------------------
    const wanted = (input.tags ?? []).map(normalizeTag).filter(Boolean)
    if (contactId && wanted.length > 0) {
      const existing = readTags(up.body).map(normalizeTag)
      const missing = wanted.filter((t) => !existing.includes(t))
      if (missing.length > 0) {
        const merged = Array.from(new Set([...existing, ...missing]))
        const tagRes = await ghlFetch(`/contacts/${contactId}`, c.token, {
          method: 'PUT',
          body: JSON.stringify({ tags: merged }),
        })
        if (!tagRes.ok) {
          // El contacto SÍ se creó — no lo marcamos como fallido por las tags.
          console.error('[ghl] tag merge failed', errText(tagRes.status, tagRes.body))
        }
      }
    }

    return { status: 'synced', contactId }
  } catch (err) {
    const error =
      err instanceof Error
        ? err.name === 'AbortError'
          ? `timeout tras ${TIMEOUT_MS}ms`
          : err.message
        : String(err)
    console.error('[ghl] unexpected error', error)
    return { status: 'failed', error }
  }
}

/** GHL acepta casi cualquier string; normalizamos para no duplicar por casing. */
function normalizeTag(t: string): string {
  return t.trim().toLowerCase()
}
