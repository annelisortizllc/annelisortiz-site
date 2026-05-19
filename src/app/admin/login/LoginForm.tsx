'use client'

import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { loginAction, type LoginState } from '@/lib/pr/actions/login'

const initial: LoginState = { ok: false, message: '' }

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-on-accent shadow-[0_10px_40px_-10px_var(--accent-glow)] transition hover:bg-accent-soft disabled:opacity-60"
    >
      {pending ? 'Verificando…' : 'Entrar'}
    </button>
  )
}

export function LoginForm() {
  const [state, formAction] = useActionState(loginAction, initial)
  return (
    <form action={formAction} className="space-y-5">
      <div>
        <label htmlFor="email" className="mb-1.5 block text-xs uppercase tracking-wider text-muted">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="w-full rounded-lg border border-border bg-background-elev-2 px-3 py-2.5 text-sm text-foreground focus:border-accent"
        />
      </div>
      <div>
        <label htmlFor="password" className="mb-1.5 block text-xs uppercase tracking-wider text-muted">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          className="w-full rounded-lg border border-border bg-background-elev-2 px-3 py-2.5 text-sm text-foreground focus:border-accent"
        />
      </div>
      <SubmitButton />
      {state.message ? (
        <p aria-live="polite" className="text-center text-sm text-red-400">
          {state.message}
        </p>
      ) : null}
    </form>
  )
}
