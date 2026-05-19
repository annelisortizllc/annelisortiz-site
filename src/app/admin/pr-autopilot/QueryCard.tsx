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

function scoreColor(score: number | null): string {
  if (score === null) return 'text-muted'
  if (score >= 70) return 'text-accent'
  if (score >= 40) return 'text-foreground'
  return 'text-muted/60'
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
      className={`inline-flex items-center justify-center rounded-full px-5 py-2 text-xs font-medium transition disabled:opacity-50 ${styles}`}
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
        className="grid w-full grid-cols-[60px_1fr_auto] items-center gap-4 px-5 py-4 text-left"
      >
        <span className={`font-serif text-2xl ${scoreColor(query.score)}`}>
          {query.score ?? '—'}
        </span>
        <span className="min-w-0">
          <span className="line-clamp-1 text-sm text-foreground">
            {query.query_subject || '(sin asunto)'}
          </span>
          <span className="mt-0.5 line-clamp-1 text-xs text-muted">
            {query.outlet ? `${query.outlet} · ` : ''}
            {query.journalist_name || query.journalist_email || query.source.toUpperCase()}
            {' · '}
            {formatted}
          </span>
        </span>
        <span className="text-xs text-muted">{open ? '▴' : '▾'}</span>
      </button>

      {open ? (
        <div className="border-t border-border px-5 py-5">
          {query.score_rationale ? (
            <p className="mb-4 rounded-lg bg-background-elev-2/60 px-4 py-3 text-xs italic text-muted">
              <strong className="text-accent">IA:</strong> {query.score_rationale}
            </p>
          ) : null}

          <div className="mb-5">
            <p className="mb-2 text-[10px] uppercase tracking-wider text-muted">Query del periodista</p>
            <pre className="max-h-72 overflow-auto whitespace-pre-wrap rounded-lg bg-background-elev-2/40 p-4 font-sans text-sm text-foreground/80">
              {query.query_body}
            </pre>
          </div>

          <div className="mb-5">
            <label className="mb-2 block text-[10px] uppercase tracking-wider text-muted">
              Draft de respuesta (editable)
            </label>
            <textarea
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              rows={12}
              className="w-full rounded-lg border border-border bg-background-elev-2 px-3 py-3 font-sans text-sm text-foreground focus:border-accent"
              placeholder="Sin draft generado. Escribe tu respuesta aquí."
            />
          </div>

          <div className="flex flex-wrap items-center gap-3">
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
                className={`text-xs ${result.ok ? 'text-accent' : 'text-red-400'}`}
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
