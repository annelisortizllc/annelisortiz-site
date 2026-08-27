// DAB v2.0 Fase 2 · Gap E (segmentación inbox)
// Mapping de tipos de consulta → código corto + slug para tags de Resend.
// Los códigos se usan como subject prefix `[XXX]` en notificaciones internas
// para que Annelis pueda filtrar el inbox con reglas simples.

type InquiryMeta = {
  code: string // 3 letras, mayúsculas — visible en subject "[XXX]"
  slug: string // snake_case — usado como Resend tag para analytics
}

// Maestro de mapping. Los keys son los valores EXACTOS de `dict.contact.types`
// (ES y EN en paralelo). El default `unknown` cubre cualquier valor que llegue
// sin estar mapeado — el código no rompe si el form crece sin actualizar esto.
const map: Record<string, InquiryMeta> = {
  // ES
  'Préstamo hipotecario': { code: 'HIP', slug: 'mortgage' },
  'Compra de propiedad': { code: 'PRP', slug: 'property_purchase' },
  'Inversión en bienes raíces': { code: 'INV', slug: 'real_estate_investment' },
  'Preparación financiera / crédito': { code: 'CRD', slug: 'credit_prep' },
  'Coaching': { code: 'COA', slug: 'coaching' },
  'Conferencia / Evento': { code: 'CON', slug: 'speaking' },
  'Medios / Prensa': { code: 'PRS', slug: 'press' },
  'Otro': { code: 'OTR', slug: 'other' },

  // EN (paralelo de los anteriores; mismo code+slug para que las tags
  // agreguen ES+EN bajo una sola categoría en analytics).
  // Note: 'Coaching' es la misma palabra en ES y EN — una sola entrada arriba cubre ambos.
  'Mortgage loan': { code: 'HIP', slug: 'mortgage' },
  'Property purchase': { code: 'PRP', slug: 'property_purchase' },
  'Real estate investment': { code: 'INV', slug: 'real_estate_investment' },
  'Financial preparation / credit': { code: 'CRD', slug: 'credit_prep' },
  'Speaking / Event': { code: 'CON', slug: 'speaking' },
  'Media / Press': { code: 'PRS', slug: 'press' },
  'Other': { code: 'OTR', slug: 'other' },
}

const fallback: InquiryMeta = { code: 'OTR', slug: 'other' }

export function inquiryMeta(inquiryType: string): InquiryMeta {
  return map[inquiryType] ?? fallback
}

// Lead magnet usa un código fijo independiente del mapping.
export const LEAD_MAGNET_META: InquiryMeta = { code: 'LMG', slug: 'lead_magnet' }

// Club Pequeños Héroes — registro gratis desde /pequenos-heroes/club.
export const CLUB_META: InquiryMeta = { code: 'CLB', slug: 'club_pequenos_heroes' }

// Resend tag value contract: lowercase, [a-z0-9_], <= 256 chars.
// Slug ya cumple esto pero lo normalizamos por seguridad.
export function tagValue(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9_]+/g, '_').slice(0, 256)
}
