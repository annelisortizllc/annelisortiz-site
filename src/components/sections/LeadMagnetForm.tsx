'use client'

import { useActionState, useEffect } from 'react'
import { useFormStatus } from 'react-dom'
import { track } from '@vercel/analytics'
import {
  submitLeadMagnet,
  type LeadMagnetState,
} from '@/lib/actions/lead-magnet'

const initial: LeadMagnetState = { ok: false, message: '' }

type Copy = {
  nameLabel: string
  emailLabel: string
  submit: string
  submitting: string
}

function SubmitBtn({ copy }: { copy: Copy }) {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-3.5 text-base font-medium text-on-accent shadow-[0_10px_40px_-10px_var(--accent-glow)] transition hover:bg-accent-soft disabled:opacity-60 sm:w-auto"
    >
      {pending ? copy.submitting : copy.submit}
    </button>
  )
}

export function LeadMagnetForm({
  locale,
  copy,
}: {
  locale: 'es' | 'en'
  copy: Copy
}) {
  const [state, formAction] = useActionState(submitLeadMagnet, initial)

  useEffect(() => {
    if (state.ok && state.message) track('lead_magnet_submit', { locale })
  }, [state.ok, state.message, locale])

  return (
    <form action={formAction} className="space-y-4">
      <input type="hidden" name="locale" value={locale} />
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="lm-name"
            className="mb-1.5 block text-xs uppercase tracking-wider text-muted"
          >
            {copy.nameLabel}
          </label>
          <input
            id="lm-name"
            name="name"
            type="text"
            required
            className="w-full rounded-lg border border-border bg-background-elev-1 px-3 py-2.5 text-sm text-foreground focus:border-accent"
          />
          {state.fieldErrors?.name ? (
            <p className="mt-1.5 text-xs text-red-400">
              {state.fieldErrors.name[0]}
            </p>
          ) : null}
        </div>
        <div>
          <label
            htmlFor="lm-email"
            className="mb-1.5 block text-xs uppercase tracking-wider text-muted"
          >
            {copy.emailLabel}
          </label>
          <input
            id="lm-email"
            name="email"
            type="email"
            required
            className="w-full rounded-lg border border-border bg-background-elev-1 px-3 py-2.5 text-sm text-foreground focus:border-accent"
          />
          {state.fieldErrors?.email ? (
            <p className="mt-1.5 text-xs text-red-400">
              {state.fieldErrors.email[0]}
            </p>
          ) : null}
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <SubmitBtn copy={copy} />
        {state.message ? (
          <p
            aria-live="polite"
            className={`text-sm ${state.ok ? 'text-accent' : 'text-red-400'}`}
          >
            {state.message}
          </p>
        ) : null}
      </div>
    </form>
  )
}
