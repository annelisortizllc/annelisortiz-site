'use client'

import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { submitContact, type ContactState } from '@/lib/actions/contact'
import type { Dictionary } from '@/lib/dictionaries'

const initialState: ContactState = { ok: false, message: '' }

function SubmitButton({ pendingLabel, label }: { pendingLabel: string; label: string }) {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-on-accent shadow-[0_10px_40px_-10px_var(--accent-glow)] transition hover:bg-accent-soft disabled:opacity-60"
    >
      {pending ? pendingLabel : label}
    </button>
  )
}

export function ContactForm({ dict }: { dict: Dictionary }) {
  const [state, formAction] = useActionState(submitContact, initialState)
  const f = dict.contact.fields

  return (
    <form action={formAction} className="space-y-5">
      {/* Honeypot */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field name="name" label={f.name} required errors={state.fieldErrors?.name} />
        <Field name="email" label={f.email} type="email" required errors={state.fieldErrors?.email} />
        <Field name="whatsapp" label={f.whatsapp} errors={state.fieldErrors?.whatsapp} />
        <Field name="company" label={f.company} errors={state.fieldErrors?.company} />
      </div>

      <div>
        <label className="mb-1.5 block text-xs uppercase tracking-wider text-muted">
          {f.type}
        </label>
        <select
          name="type"
          required
          defaultValue=""
          className="w-full rounded-lg border border-border bg-background-elev-1 px-3 py-2.5 text-sm text-foreground focus:border-accent"
        >
          <option value="" disabled>—</option>
          {dict.contact.types.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
        {state.fieldErrors?.type ? (
          <p className="mt-1.5 text-xs text-red-400">{state.fieldErrors.type[0]}</p>
        ) : null}
      </div>

      <div>
        <label className="mb-1.5 block text-xs uppercase tracking-wider text-muted">
          {f.message}
        </label>
        <textarea
          name="message"
          required
          rows={5}
          className="w-full rounded-lg border border-border bg-background-elev-1 px-3 py-2.5 text-sm text-foreground focus:border-accent"
        />
        {state.fieldErrors?.message ? (
          <p className="mt-1.5 text-xs text-red-400">{state.fieldErrors.message[0]}</p>
        ) : null}
      </div>

      <div className="flex items-center gap-4">
        <SubmitButton label={dict.contact.submit} pendingLabel={dict.contact.submitPending} />
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

function Field({
  name,
  label,
  type = 'text',
  required = false,
  errors,
}: {
  name: string
  label: string
  type?: string
  required?: boolean
  errors?: string[]
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-xs uppercase tracking-wider text-muted">
        {label}{required ? ' *' : ''}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-lg border border-border bg-background-elev-1 px-3 py-2.5 text-sm text-foreground focus:border-accent"
      />
      {errors ? <p className="mt-1.5 text-xs text-red-400">{errors[0]}</p> : null}
    </div>
  )
}
