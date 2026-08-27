'use client'

import { useActionState } from 'react'
import { updateStageAction, updateNotesAction, type LeadActionState } from '@/lib/crm/actions'
import { LINE_STAGES, STAGE_LABELS, LINE_LABELS } from '@/lib/crm/pipeline'
import type { Lead } from '@/lib/crm/leads'

const initial: LeadActionState = { ok: false, message: '' }

function fmtDate(iso: string) {
  return new Date(iso).toLocaleDateString('es-PR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}

export function LeadCard({ lead, crossover }: { lead: Lead; crossover: boolean }) {
  const [stageState, stageAction, stagePending] = useActionState(updateStageAction, initial)
  const [notesState, notesAction, notesPending] = useActionState(updateNotesAction, initial)

  const stages = LINE_STAGES[lead.business_line]

  return (
    <article className="rounded-2xl border border-border bg-background-elev-1 px-6 py-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-serif text-xl text-foreground">{lead.name}</h3>
            <span className="rounded-full border border-border-strong px-2.5 py-0.5 text-[10px] uppercase tracking-[0.14em] text-muted">
              {LINE_LABELS[lead.business_line].es}
            </span>
            {crossover ? (
              <span className="rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-on-accent">
                Club → hipoteca
              </span>
            ) : null}
          </div>
          <p className="mt-1.5 text-sm text-muted">
            <a href={`mailto:${lead.email}`} className="hover:text-accent">
              {lead.email}
            </a>
            {lead.whatsapp ? <> · {lead.whatsapp}</> : null}
          </p>
        </div>
        <p className="shrink-0 text-xs text-muted">{fmtDate(lead.created_at)}</p>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-muted">{lead.message}</p>

      <form action={stageAction} className="mt-5 flex flex-wrap items-center gap-2">
        <input type="hidden" name="lead_id" value={lead.id} />
        <input type="hidden" name="business_line" value={lead.business_line} />
        {stages.map((s) => {
          const active = s === lead.stage
          return (
            <button
              key={s}
              type="submit"
              name="stage"
              value={s}
              disabled={stagePending || active}
              className={
                active
                  ? 'rounded-full bg-accent px-4 py-1.5 text-xs font-medium text-on-accent'
                  : 'rounded-full border border-border-strong px-4 py-1.5 text-xs text-muted transition hover:border-accent hover:text-accent disabled:opacity-50'
              }
            >
              {STAGE_LABELS[s].es}
            </button>
          )
        })}
        {stageState.message ? (
          <span className={`text-xs ${stageState.ok ? 'text-accent' : 'text-red-400'}`}>
            {stageState.message}
          </span>
        ) : null}
      </form>

      <form action={notesAction} className="mt-4">
        <input type="hidden" name="lead_id" value={lead.id} />
        <textarea
          name="notes"
          rows={2}
          defaultValue={lead.notes ?? ''}
          placeholder="Nota privada — nunca se envía al contacto"
          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
        />
        <div className="mt-2 flex items-center gap-3">
          <button
            type="submit"
            disabled={notesPending}
            className="rounded-full border border-border-strong px-4 py-1.5 text-xs text-muted transition hover:border-accent hover:text-accent disabled:opacity-50"
          >
            {notesPending ? 'Guardando…' : 'Guardar nota'}
          </button>
          {notesState.message ? (
            <span className={`text-xs ${notesState.ok ? 'text-accent' : 'text-red-400'}`}>
              {notesState.message}
            </span>
          ) : null}
        </div>
      </form>
    </article>
  )
}
