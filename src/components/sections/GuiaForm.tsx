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

/** Un campo con su etiqueta y su error. Cuatro campos idénticos repetidos a
 *  mano son cuatro sitios donde se olvida el `autoComplete` o el error. */
function Field({
  id,
  name,
  label,
  type,
  autoComplete,
  placeholder,
  error,
  defaultValue,
}: {
  id: string
  name: string
  label: string
  type: 'text' | 'email' | 'tel'
  autoComplete: string
  placeholder?: string
  error?: string
  defaultValue?: string
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-xs uppercase tracking-wider text-muted"
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required
        autoComplete={autoComplete}
        placeholder={placeholder}
        defaultValue={defaultValue}
        aria-invalid={error ? true : undefined}
        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-base text-foreground focus:border-accent focus:outline-none"
      />
      {error ? <p className="mt-2 text-xs text-red-400">{error}</p> : null}
    </div>
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

      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          id="guia-firstName"
          name="firstName"
          label="Nombre"
          type="text"
          autoComplete="given-name"
          error={state.fieldErrors?.firstName?.[0]}
          defaultValue={state.values?.firstName}
        />
        <Field
          id="guia-lastName"
          name="lastName"
          label="Apellido"
          type="text"
          autoComplete="family-name"
          error={state.fieldErrors?.lastName?.[0]}
          defaultValue={state.values?.lastName}
        />
        <Field
          id="guia-email"
          name="email"
          label="Correo"
          type="email"
          autoComplete="email"
          placeholder="tucorreo@ejemplo.com"
          error={state.fieldErrors?.email?.[0]}
          defaultValue={state.values?.email}
        />
        <Field
          id="guia-phone"
          name="phone"
          label="Teléfono"
          type="tel"
          autoComplete="tel"
          placeholder="(407) 555-0123"
          error={state.fieldErrors?.phone?.[0]}
          defaultValue={state.values?.phone}
        />
      </div>

      {/* ── Permiso de texto/llamada ───────────────────────────────────
          Sin marcar y OPCIONAL a propósito. La guía se entrega igual si
          no lo marca; lo único que cambia es la etiqueta en el CRM. */}
      <label
        htmlFor="guia-smsConsent"
        className="mt-5 flex cursor-pointer gap-3 rounded-lg border border-border bg-background p-4"
      >
        <input
          id="guia-smsConsent"
          name="smsConsent"
          type="checkbox"
          defaultChecked={state.values?.smsConsent}
          className="mt-0.5 size-4 shrink-0 accent-[var(--accent)]"
        />
        <span className="text-xs leading-relaxed text-muted">
          Sí, Annelis me puede escribir por texto o llamarme sobre mi compra de
          casa. Responde <strong className="text-foreground">STOP</strong> para
          dejar de recibir mensajes; pueden aplicar tarifas de tu plan.{' '}
          <span className="text-foreground">
            No es requisito para recibir la guía.
          </span>
        </span>
      </label>

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
