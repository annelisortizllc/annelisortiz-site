'use client'

import { useActionState, useEffect } from 'react'
import { useFormStatus } from 'react-dom'
import { track } from '@vercel/analytics'
import { pedirGuia, type GuiaState } from '@/lib/actions/guia'

const initial: GuiaState = { ok: false, message: '' }

function SubmitBtn() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex w-full items-center justify-center rounded-full bg-accent px-7 py-4 text-base font-medium text-on-accent shadow-[0_10px_40px_-10px_var(--accent-glow)] transition hover:bg-accent-soft disabled:opacity-60 sm:w-auto"
    >
      {pending ? 'Enviando…' : 'Enviarme la guía'}
    </button>
  )
}

export function GuiaForm({
  locale = 'es',
  bookingUrl,
}: {
  locale?: 'es' | 'en'
  bookingUrl: string
}) {
  const [state, formAction] = useActionState(pedirGuia, initial)

  useEffect(() => {
    if (state.ok && state.pdfUrl) track('guia_submit', { locale })
  }, [state.ok, state.pdfUrl, locale])

  // ── Estado de gracias ──────────────────────────────────────────────
  // La guía se entrega AQUÍ MISMO, no sólo por correo. Si el correo se
  // atrasa o cae en spam, la persona ya la tiene. Es la diferencia entre
  // una promesa cumplida y una promesa en camino.
  if (state.ok && state.pdfUrl) {
    return (
      <div className="rounded-2xl border border-border bg-background-elev-1 p-6 sm:p-8">
        <p className="text-lg font-medium text-foreground">
          Listo. Tu guía está aquí abajo.
        </p>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          También te la mandé al correo. Si no la ves en unos minutos, revisa la
          carpeta de promociones o spam.
        </p>

        <a
          href={state.pdfUrl}
          download
          onClick={() => track('guia_download', { locale })}
          className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-accent px-7 py-4 text-base font-medium text-on-accent shadow-[0_10px_40px_-10px_var(--accent-glow)] transition hover:bg-accent-soft sm:w-auto"
        >
          Descargar la guía (PDF) ↓
        </a>

        <hr className="my-7 border-border" />

        <p className="text-base font-medium text-foreground">
          ¿Prefieres que lo veamos juntos?
        </p>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          En 30 minutos te digo en qué punto estás de verdad — y qué te falta
          exactamente para calificar.
        </p>
        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track('guia_book_click', { locale })}
          className="mt-5 inline-flex items-center justify-center rounded-full border border-accent px-6 py-3 text-sm font-medium text-accent transition hover:bg-accent hover:text-on-accent"
        >
          Agendar mi cita →
        </a>
      </div>
    )
  }

  // ── Formulario ─────────────────────────────────────────────────────
  return (
    <form
      action={formAction}
      className="rounded-2xl border border-border bg-background-elev-1 p-6 sm:p-8"
    >
      <input type="hidden" name="locale" value={locale} />
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />

      <label
        htmlFor="guia-email"
        className="mb-2 block text-xs uppercase tracking-wider text-muted"
      >
        Tu correo
      </label>
      <input
        id="guia-email"
        name="email"
        type="email"
        required
        autoComplete="email"
        placeholder="tucorreo@ejemplo.com"
        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-base text-foreground focus:border-accent focus:outline-none"
      />
      {state.fieldErrors?.email ? (
        <p className="mt-2 text-xs text-red-400">{state.fieldErrors.email[0]}</p>
      ) : null}

      <div className="mt-5">
        <SubmitBtn />
      </div>

      <p className="mt-4 text-xs leading-relaxed text-muted">
        Te llega al correo en menos de un minuto — y también la puedes descargar
        aquí mismo. Nada de tarjetas.
      </p>

      {state.message && !state.ok ? (
        <p aria-live="polite" className="mt-3 text-sm text-red-400">
          {state.message}
        </p>
      ) : null}
    </form>
  )
}
