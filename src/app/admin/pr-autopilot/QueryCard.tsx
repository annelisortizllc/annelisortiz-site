'use client'

import { useActionState, useState } from 'react'
import { useFormStatus } from 'react-dom'
import {
  approveAndSendAction,
  rejectAction,
  type ActionState,
} from '@/lib/pr/actions/approve'
import type { PrQuery } from '@/lib/pr/db'

const initial: ActionState = { ok: false, message: '' }

function scoreBadgeColor(score: number | null): string {
  if (score === null) return 'border-border text-muted'
  if (score >= 70) return 'border-accent/60 bg-accent/10 text-accent'
  if (score >= 40) return 'border-border-strong text-foreground'
  return 'border-border text-muted/60'
}

function PendingButton({ label, pendingLabel, variant = 'primary' }: { label: string; pendingLabel: string; variant?: 'primary' | 'secondary' }) {
  const { pending } = useFormStatus()
  const styles =
    variant === 'primary'
      ? 'bg-accent text-on-accent shadow-[0_8px_30px_-10px_var(--accent-glow)] hover:bg-accent-soft'
      : 'border border-border-strong text-foreground hover:border-accent hover:text-accent'
  return (
    <button
      type="submit"
      disabled={pending}
      className={`inline-flex items-center justify-center rounded-full px-6 py-2.5 text-xs font-medium transition disabled:opacity-50 ${styles}`}
    >
      {pending ? pendingLabel : label}
    </button>
  )
}

export function QueryCard({ query }: { query: PrQuery }) {
  const [open, setOpen] = useState(false)
  const [draft, setDraft] = useState(query.draft_response ?? '')
  const [approveState, approveFormAction] = useActionState(approveAndSendAction, initial)
  const [rejectState, rejectFormAction] = useActionState(rejectAction, initial)
  const result = approveState.message ? approveState : rejectState

  const formatted = new Date(query.received_at).toLocaleString('es', {
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  })

  return (
    <article className="rounded-2xl border border-border bg-background-elev-1 transition hover:border-accent/40">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="grid w-full grid-cols-[auto_1fr_auto] items-center gap-5 px-7 py-6 text-left"
      >
        <span
          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full border font-serif text-xl ${scoreBadgeColor(query.score)}`}
        >
          {query.score ?? '—'}
        </span>
        <span className="min-w-0">
          <span className="block truncate font-serif text-base text-foreground">
            {query.query_subject || '(sin asunto)'}
          </span>
          <span className="mt-1.5 flex flex-wrap items-center gap-x-2 text-xs text-muted">
            {query.outlet ? (
              <>
                <span className="font-medium uppercase tracking-wider text-foreground/80">{query.outlet}</span>
                <span aria-hidden>·</span>
              </>
            ) : null}
            <span>{query.journalist_name || query.journalist_email || query.source.toUpperCase()}</span>
            <span aria-hidden>·</span>
            <span>{formatted}</span>
          </span>
        </span>
        <span className="text-base text-muted">{open ? '▴' : '▾'}</span>
      </button>

      {open ? (
        <div className="border-t border-border px-7 pb-8 pt-7">
          {query.score_rationale ? (
            <p className="mb-7 rounded-xl bg-background-elev-2/60 px-5 py-4 text-sm italic leading-relaxed text-muted">
              <strong className="not-italic text-accent">Análisis de la IA:</strong> {query.score_rationale}
            </p>
          ) : null}

          <div className="mb-7">
            <p className="mb-3 text-[10px] uppercase tracking-[0.18em] text-muted">Query original del periodista</p>
            <pre className="max-h-80 overflow-auto whitespace-pre-wrap rounded-xl bg-background-elev-2/40 p-5 font-sans text-sm leading-relaxed text-foreground/85">
              {query.query_body}
            </pre>
          </div>

          <div className="mb-7">
            <label className="mb-3 block text-[10px] uppercase tracking-[0.18em] text-muted">
              Draft de respuesta · editable
            </label>
            <textarea
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              rows={14}
              className="w-full rounded-xl border border-border bg-background-elev-2 px-5 py-4 font-sans text-sm leading-relaxed text-foreground focus:border-accent"
              placeholder="Sin draft generado. Escribe tu respuesta aquí."
            />
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <form action={approveFormAction}>
              <input type="hidden" name="query_id" value={query.id} />
              <input type="hidden" name="draft_response" value={draft} />
              <PendingButton label="Aprobar y enviar" pendingLabel="Enviando…" />
            </form>
            <form action={rejectFormAction}>
              <input type="hidden" name="query_id" value={query.id} />
              <PendingButton label="Rechazar" pendingLabel="Rechazando…" variant="secondary" />
            </form>
            {result.message ? (
              <span
                aria-live="polite"
                className={`text-sm ${result.ok ? 'text-accent' : 'text-red-400'}`}
              >
                {result.message}
              </span>
            ) : null}
          </div>
        </div>
      ) : null}
    </article>
  )
}
