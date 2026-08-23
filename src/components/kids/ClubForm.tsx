'use client'

import { useActionState, useEffect } from 'react'
import { useFormStatus } from 'react-dom'
import { track } from '@vercel/analytics'
import { joinClub, type ClubState } from '@/lib/actions/club'

const initial: ClubState = { ok: false, message: '' }

const inputClass =
  'w-full rounded-2xl border-2 border-black/10 bg-white px-4 py-3.5 text-base text-foreground shadow-sm outline-none transition placeholder:text-foreground/35 focus:border-[var(--kids-sky)] focus:ring-4 focus:ring-[var(--kids-sky)]/25'

const labelClass =
  'mb-2 block text-sm font-semibold text-foreground/80'

function SubmitBtn() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--kids-coral)] px-8 py-4 text-lg text-white shadow-lg transition hover:scale-[1.02] hover:brightness-105 disabled:scale-100 disabled:opacity-60"
      style={{ fontFamily: 'var(--font-kids-title)', fontWeight: 600 }}
    >
      {pending ? 'Registrando…' : '¡Quiero entrar al Club! 🎉'}
    </button>
  )
}

export function ClubForm({ locale = 'es' }: { locale?: 'es' | 'en' }) {
  const [state, formAction] = useActionState(joinClub, initial)

  useEffect(() => {
    if (state.ok && state.message) track('club_signup', { locale })
  }, [state.ok, state.message, locale])

  // Estado de éxito: reemplaza el formulario completo.
  if (state.ok) {
    return (
      <div
        aria-live="polite"
        className="rounded-[28px] border-4 border-[var(--kids-mint)] bg-white p-10 text-center shadow-lg"
      >
        <span aria-hidden className="text-6xl">
          🎉
        </span>
        <h3
          className="mt-4 text-3xl text-foreground"
          style={{ fontFamily: 'var(--font-kids-title)', fontWeight: 700 }}
        >
          ¡Ya estás dentro!
        </h3>
        <p className="mx-auto mt-3 max-w-sm text-base leading-relaxed text-foreground/70">
          Te mandamos un correo de bienvenida. Si no lo ves en unos minutos,
          revisa la carpeta de spam y marca el correo como &laquo;no es
          spam&raquo; para que no se pierdan las actividades.
        </p>
      </div>
    )
  }

  return (
    <form
      action={formAction}
      className="rounded-[28px] border-4 border-[var(--kids-yellow)] bg-white p-8 shadow-lg md:p-10"
    >
      <input type="hidden" name="locale" value={locale} />
      {/* Honeypot — invisible para personas, irresistible para bots. */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />

      <h3
        className="text-2xl text-foreground md:text-3xl"
        style={{ fontFamily: 'var(--font-kids-title)', fontWeight: 700 }}
      >
        Regístrate gratis
      </h3>
      <p className="mt-2 text-base text-foreground/65">
        Sin costo, sin tarjeta. Cancela cuando quieras con un clic.
      </p>

      <div className="mt-7 space-y-5">
        <div>
          <label htmlFor="club-name" className={labelClass}>
            Tu nombre
          </label>
          <input
            id="club-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="María González"
            className={inputClass}
          />
          {state.fieldErrors?.name ? (
            <p className="mt-1.5 text-sm font-medium text-[#d64545]">
              {state.fieldErrors.name[0]}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="club-email" className={labelClass}>
            Tu correo
          </label>
          <input
            id="club-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="maria@ejemplo.com"
            className={inputClass}
          />
          {state.fieldErrors?.email ? (
            <p className="mt-1.5 text-sm font-medium text-[#d64545]">
              {state.fieldErrors.email[0]}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="club-age" className={labelClass}>
            Edad de tu hijo/a{' '}
            <span className="font-normal text-foreground/45">(opcional)</span>
          </label>
          <select id="club-age" name="childAge" className={inputClass} defaultValue="">
            <option value="">Prefiero no decir</option>
            <option value="3-4">3 a 4 años</option>
            <option value="5-6">5 a 6 años</option>
            <option value="7-8">7 a 8 años</option>
            <option value="9-10">9 a 10 años</option>
            <option value="11+">11 años o más</option>
            <option value="varios">Tengo varios de distintas edades</option>
          </select>
          <p className="mt-1.5 text-sm text-foreground/50">
            Así te mando actividades del nivel correcto.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <SubmitBtn />
      </div>

      {state.message ? (
        <p
          aria-live="polite"
          className="mt-4 text-center text-sm font-medium text-[#d64545]"
        >
          {state.message}
        </p>
      ) : null}

      <p className="mt-5 text-center text-xs leading-relaxed text-foreground/45">
        Usamos tu correo solo para mandarte el material del Club. Nada de spam,
        y puedes salirte cuando quieras.
      </p>
    </form>
  )
}
