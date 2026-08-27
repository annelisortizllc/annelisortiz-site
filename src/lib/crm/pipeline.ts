// Fuente de verdad del CRM interno: qué líneas existen y qué etapas ofrece cada una.
// El CHECK de la base de datos acepta la unión de todas las etapas; la restricción real
// de "esta etapa no aplica a esta línea" vive aquí.

export const BUSINESS_LINES = ['mortgage', 'real_estate', 'kids', 'other'] as const
export type BusinessLine = (typeof BUSINESS_LINES)[number]

export const STAGES = [
  'nuevo',
  'contactado',
  'bienvenida',
  'activo',
  'precalificado',
  'aplico',
  'compro_libro',
  'cerrado',
  'perdido',
  'inactivo',
] as const
export type Stage = (typeof STAGES)[number]

export const LINE_LABELS: Record<BusinessLine, { es: string; en: string }> = {
  mortgage: { es: 'Hipotecas', en: 'Mortgage' },
  real_estate: { es: 'Bienes raíces', en: 'Real estate' },
  kids: { es: 'Pequeños Héroes', en: 'Little Money Heroes' },
  other: { es: 'Otros', en: 'Other' },
}

export const STAGE_LABELS: Record<Stage, { es: string; en: string }> = {
  nuevo: { es: 'Nuevo', en: 'New' },
  contactado: { es: 'Contactado', en: 'Contacted' },
  bienvenida: { es: 'Bienvenida', en: 'Welcomed' },
  activo: { es: 'Activo', en: 'Active' },
  precalificado: { es: 'Precalificado', en: 'Pre-qualified' },
  aplico: { es: 'Aplicó', en: 'Applied' },
  compro_libro: { es: 'Compró libro', en: 'Bought book' },
  cerrado: { es: 'Cerrado', en: 'Closed' },
  perdido: { es: 'Perdido', en: 'Lost' },
  inactivo: { es: 'Inactivo', en: 'Inactive' },
}

// El orden importa: es el orden en que se muestran los botones de etapa en /admin/leads.
export const LINE_STAGES: Record<BusinessLine, readonly Stage[]> = {
  kids: ['nuevo', 'bienvenida', 'activo', 'compro_libro', 'inactivo'],
  mortgage: ['nuevo', 'contactado', 'precalificado', 'aplico', 'cerrado', 'perdido'],
  real_estate: ['nuevo', 'contactado', 'activo', 'cerrado', 'perdido'],
  other: ['nuevo', 'contactado', 'cerrado', 'perdido'],
}

export function isStageAllowed(line: BusinessLine, stage: Stage): boolean {
  return LINE_STAGES[line].includes(stage)
}

const MORTGAGE_INQUIRIES = new Set([
  'Préstamo hipotecario',
  'Mortgage loan',
  'Preparación financiera / crédito',
  'Financial preparation / credit',
])

const REAL_ESTATE_INQUIRIES = new Set([
  'Compra de propiedad',
  'Property purchase',
  'Inversión en bienes raíces',
  'Real estate investment',
])

// Debe coincidir con el backfill de supabase/migrations/20260827_leads_crm_pipeline.sql.
export function classifyLine(inquiryType: string): BusinessLine {
  const t = inquiryType.toLowerCase()
  if (t.includes('club')) return 'kids'
  if (MORTGAGE_INQUIRIES.has(inquiryType) || t.startsWith('lead magnet')) return 'mortgage'
  if (REAL_ESTATE_INQUIRIES.has(inquiryType)) return 'real_estate'
  return 'other'
}
