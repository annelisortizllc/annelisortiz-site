import 'server-only'
import { db } from '@/lib/pr/db'
import type { BusinessLine, Stage } from './pipeline'

export interface Lead {
  id: string
  created_at: string
  name: string
  email: string
  whatsapp: string | null
  inquiry_type: string
  message: string
  locale: string | null
  business_line: BusinessLine
  stage: Stage
  stage_updated_at: string | null
  notes: string | null
  crm_status: string
}

const COLUMNS =
  'id, created_at, name, email, whatsapp, inquiry_type, message, locale, business_line, stage, stage_updated_at, notes, crm_status'

export interface LeadsView {
  leads: Lead[]
  countsByLine: Record<string, number>
  /** Emails que aparecen en el Club Y en hipoteca/bienes raíces. El cruce que Annelis busca. */
  crossoverEmails: Set<string>
}

export async function loadLeads(line: BusinessLine | 'all'): Promise<LeadsView> {
  const supabase = db()

  let query = supabase
    .from('leads')
    .select(COLUMNS)
    .order('created_at', { ascending: false })
    .limit(300)
  if (line !== 'all') query = query.eq('business_line', line)

  const [listRes, allLinesRes] = await Promise.all([
    query,
    supabase.from('leads').select('email, business_line').limit(5000),
  ])

  const leads = (listRes.data as Lead[] | null) ?? []
  const allRows = (allLinesRes.data as { email: string; business_line: string }[] | null) ?? []

  const countsByLine: Record<string, number> = { all: allRows.length }
  const linesByEmail = new Map<string, Set<string>>()
  for (const row of allRows) {
    countsByLine[row.business_line] = (countsByLine[row.business_line] ?? 0) + 1
    const key = row.email.toLowerCase()
    const set = linesByEmail.get(key) ?? new Set<string>()
    set.add(row.business_line)
    linesByEmail.set(key, set)
  }

  const crossoverEmails = new Set<string>()
  for (const [email, lines] of linesByEmail) {
    if (lines.has('kids') && (lines.has('mortgage') || lines.has('real_estate'))) {
      crossoverEmails.add(email)
    }
  }

  return { leads, countsByLine, crossoverEmails }
}
