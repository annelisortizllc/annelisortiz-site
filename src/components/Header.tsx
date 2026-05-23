'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MobileNav } from '@/components/MobileNav'

const labels = {
  es: {
    about: 'Sobre mí',
    services: 'Servicios',
    books: 'Libro',
    speaking: 'Conferencias',
    blog: 'Blog',
    contact: 'Contacto',
  },
  en: {
    about: 'About',
    services: 'Services',
    books: 'Book',
    speaking: 'Speaking',
    blog: 'Blog',
    contact: 'Contact',
  },
} as const

type Locale = keyof typeof labels

/** Detect locale from URL ("/en/..." → en, otherwise → es). */
function detectLocale(pathname: string | null): Locale {
  return pathname?.startsWith('/en') ? 'en' : 'es'
}

/**
 * Persist the user's manual locale choice in a cookie so the proxy honors it
 * on subsequent visits and won't auto-redirect them away from their pick.
 */
function rememberLocale(locale: Locale) {
  if (typeof document === 'undefined') return
  // 1 year, root path, lax samesite — Vercel preview + prod both work.
  document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000; samesite=lax`
}

/** Return the path for the opposite locale, preserving the rest of the URL. */
function swapLocale(pathname: string | null, target: Locale): string {
  const p = pathname ?? '/'
  if (target === 'en') {
    // ES root or any path → prefix with /en
    if (p === '/' || p === '') return '/en'
    if (p.startsWith('/en')) return p
    return `/en${p}`
  }
  // target === 'es' — strip /en prefix
  if (p === '/en' || p === '/en/') return '/'
  if (p.startsWith('/en/')) return p.slice(3) // drop "/en"
  return p
}

export function Header() {
  const pathname = usePathname()
  const locale = detectLocale(pathname)
  const prefix = locale === 'en' ? '/en' : ''
  const t = labels[locale]
  const homeHref = locale === 'en' ? '/en' : '/'
  const otherLocale: Locale = locale === 'en' ? 'es' : 'en'
  const otherHref = swapLocale(pathname, otherLocale)

  const links = [
    { href: `${prefix}/sobre-mi`, label: t.about },
    { href: `${prefix}/servicios`, label: t.services },
    { href: `${prefix}/libros`, label: t.books },
    { href: `${prefix}/conferencias`, label: t.speaking },
    { href: `${prefix}/blog`, label: t.blog },
  ]

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href={homeHref} className="group flex items-center gap-2 font-serif text-lg tracking-tight">
          <span className="inline-block h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_var(--accent-glow)]" />
          <span className="font-medium text-foreground">Annelis Ortiz</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-muted md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="transition hover:text-foreground">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href={otherHref}
            onClick={() => rememberLocale(otherLocale)}
            aria-label={otherLocale === 'en' ? 'Switch to English' : 'Cambiar a español'}
            className="hidden rounded-full border border-border px-3 py-1 text-xs uppercase tracking-wider text-muted transition hover:border-accent hover:text-foreground md:inline-flex"
          >
            {otherLocale.toUpperCase()}
          </Link>
          <Link
            href={`${homeHref === '/' ? '' : homeHref}/#contacto`}
            className="hidden rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-on-accent transition hover:bg-accent-soft md:inline-block"
          >
            {t.contact}
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
