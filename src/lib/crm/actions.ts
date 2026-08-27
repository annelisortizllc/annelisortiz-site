'use server'

import { revalidatePath } from 'next/cache'
import { requireRole } from '@/lib/pr/auth'
import { db } from '@/lib/pr/db'
import {
  BUSINESS_LINES,
  STAGES,
  isStageAllowed,
  type BusinessLine,
  type Stage,
} from './pipeline'

export interface LeadActionState {
  ok: boolean
  message: string
}

export async function updateStageAction(
  _prev: LeadActionState,
  formData: FormData,
): Promise<LeadActionState> {
  await requireRole('owner', 'editor')

  const id = String(formData.get('lead_id') ?? '')
  const stage = String(formData.get('stage') ?? '') as Stage
  const line = String(formData.get('business_line') ?? '') as BusinessLine

  if (!id) return { ok: false, message: 'Falta el lead' }
  if (!STAGES.includes(stage)) return { ok: false, message: 'Etapa inválida' }
  if (!BUSINESS_LINES.includes(line)) return { ok: false, message: 'Línea inválida' }
  if (!isStageAllowed(line, stage)) {
    return { ok: false, message: 'Esa etapa no aplica a esta línea' }
  }

  const { error } = await db()
    .from('leads')
    .update({ stage, stage_updated_at: new Date().toISOString() })
    .eq('id', id)
  if (error) return { ok: false, message: 'No se pudo guardar' }

  revalidatePath('/admin/leads')
  return { ok: true, message: 'Etapa actualizada' }
}

export async function updateNotesAction(
  _prev: LeadActionState,
  formData: FormData,
): Promise<LeadActionState> {
  await requireRole('owner', 'editor')

  const id = String(formData.get('lead_id') ?? '')
  const notes = String(formData.get('notes') ?? '').slice(0, 4000)
  if (!id) return { ok: false, message: 'Falta el lead' }

  const { error } = await db().from('leads').update({ notes: notes || null }).eq('id', id)
  if (error) return { ok: false, message: 'No se pudo guardar' }

  revalidatePath('/admin/leads')
  return { ok: true, message: 'Nota guardada' }
}
