'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  detectLocale,
  rememberLocale,
  swapLocale,
  type Locale,
} from '@/lib/locale'

/**
 * Selector de idioma: globo + el código del idioma AL QUE VAS.
 *
 * Muestra el destino, no el estado actual ("EN" estando en español significa
 * "llévame al inglés"). Es la convención de la web y evita el error clásico de
 * mostrar el idioma activo, que hace dudar al visitante si al hacer clic va a
 * cambiar algo o no.
 *
 * Visible SIEMPRE, también en celular — antes estaba `hidden md:inline-flex`
 * y en móvil solo existía enterrado dentro del menú hamburguesa.
 */
export function LocaleToggle({ size = 'sm' }: { size?: 'sm' | 'md' }) {
  const pathname = usePathname()
  const locale: Locale = detectLocale(pathname)
  const other: Locale = locale === 'en' ? 'es' : 'en'
  const href = swapLocale(pathname, other)

  const sizes = {
    sm: 'gap-1.5 px-2.5 py-1 text-xs',
    md: 'gap-2 px-4 py-2 text-sm',
  }
  const icon = size === 'sm' ? 'h-3.5 w-3.5' : 'h-4 w-4'

  return (
    <Link
      href={href}
      onClick={() => rememberLocale(other)}
      // hreflang le dice a los buscadores qué hay del otro lado del enlace.
      hrefLang={other}
      aria-label={
        other === 'en' ? 'Switch to English' : 'Cambiar el sitio a español'
      }
      title={other === 'en' ? 'Switch to English' : 'Cambiar a español'}
      className={`inline-flex items-center rounded-full border border-border font-medium uppercase tracking-wider text-muted transition hover:border-accent hover:text-foreground ${sizes[size]}`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={icon}
        aria-hidden
      >
        <circle cx="12" cy="12" r="9.5" />
        <path d="M2.5 12h19" />
        <path d="M12 2.5a14.5 14.5 0 0 1 3.8 9.5 14.5 14.5 0 0 1-3.8 9.5 14.5 14.5 0 0 1-3.8-9.5A14.5 14.5 0 0 1 12 2.5z" />
      </svg>
      {other.toUpperCase()}
    </Link>
  )
}
