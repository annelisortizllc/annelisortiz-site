'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'motion/react'
import { contact } from '@/lib/site'

const labels = {
  es: {
    about: 'Sobre mí',
    services: 'Servicios',
    books: 'Libro',
    speaking: 'Conferencias',
    blog: 'Blog',
    contact: 'Contacto',
    book: 'Agendar consulta',
    closeAria: 'Cerrar menú',
    openAria: 'Abrir menú',
    langLabel: 'EN',
    langAria: 'Switch to English',
  },
  en: {
    about: 'About',
    services: 'Services',
    books: 'Book',
    speaking: 'Speaking',
    blog: 'Blog',
    contact: 'Contact',
    book: 'Book a consultation',
    closeAria: 'Close menu',
    openAria: 'Open menu',
    langLabel: 'ES',
    langAria: 'Cambiar a español',
  },
} as const

type Locale = keyof typeof labels

function detectLocale(pathname: string | null): Locale {
  return pathname?.startsWith('/en') ? 'en' : 'es'
}

/**
 * Persist the user's manual locale choice in a cookie so the proxy honors it
 * and won't auto-redirect them away from their pick.
 */
function rememberLocale(locale: Locale) {
  if (typeof document === 'undefined') return
  document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000; samesite=lax`
}

function swapLocale(pathname: string | null, target: Locale): string {
  const p = pathname ?? '/'
  if (target === 'en') {
    if (p === '/' || p === '') return '/en'
    if (p.startsWith('/en')) return p
    return `/en${p}`
  }
  if (p === '/en' || p === '/en/') return '/'
  if (p.startsWith('/en/')) return p.slice(3)
  return p
}

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const locale = detectLocale(pathname)
  const prefix = locale === 'en' ? '/en' : ''
  const t = labels[locale]
  const otherLocale: Locale = locale === 'en' ? 'es' : 'en'
  const otherHref = swapLocale(pathname, otherLocale)

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const homeHref = locale === 'en' ? '/en' : '/'
  const contactHref = `${homeHref === '/' ? '' : homeHref}/#contacto`

  const links = [
    { href: `${prefix}/sobre-mi`, label: t.about },
    { href: `${prefix}/servicios`, label: t.services },
    { href: `${prefix}/libros`, label: t.books },
    { href: `${prefix}/conferencias`, label: t.speaking },
    { href: `${prefix}/blog`, label: t.blog },
    { href: contactHref, label: t.contact },
  ]

  const overlay = (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 md:hidden"
          style={{ background: 'var(--background)' }}
        >
          <button
            type="button"
            aria-label={t.closeAria}
            onClick={() => setOpen(false)}
            className="absolute right-5 top-5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background-elev-1/60 text-foreground"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
            </svg>
          </button>
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="flex h-full flex-col px-6 pt-24 pb-12"
          >
            <ul className="space-y-1">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: 0.05 + i * 0.04 }}
                >
                  <Link
                    href={l.href}
                    className="block border-b border-border py-4 font-serif text-2xl text-foreground transition hover:text-accent"
                  >
                    {l.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="mt-10 flex items-center gap-4">
              <a
                href={contact.bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-on-accent shadow-[0_10px_40px_-10px_var(--accent-glow)]"
              >
                {t.book} <span aria-hidden>→</span>
              </a>
              <Link
                href={otherHref}
                onClick={() => rememberLocale(otherLocale)}
                aria-label={t.langAria}
                className="inline-flex rounded-full border border-border px-4 py-2 text-xs uppercase tracking-wider text-muted hover:border-accent hover:text-foreground"
              >
                {t.langLabel}
              </Link>
            </div>
          </motion.nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )

  return (
    <>
      <button
        type="button"
        aria-label={t.openAria}
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="relative z-40 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background-elev-1/60 text-foreground md:hidden"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" d="M4 7h16" />
          <path strokeLinecap="round" d="M4 12h16" />
          <path strokeLinecap="round" d="M4 17h16" />
        </svg>
      </button>
      {mounted ? createPortal(overlay, document.body) : null}
    </>
  )
}
