'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'motion/react'

const labels = {
  es: {
    about: 'Sobre mí',
    books: 'Libro',
    speaking: 'Conferencias',
    press: 'Prensa',
    blog: 'Blog',
    contact: 'Contacto',
    closeAria: 'Cerrar menú',
    openAria: 'Abrir menú',
    langLabel: 'EN',
    langAria: 'Switch to English',
  },
  en: {
    about: 'About',
    books: 'Book',
    speaking: 'Speaking',
    press: 'Press',
    blog: 'Blog',
    contact: 'Contact',
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

  const links = [
    { href: `${prefix}/sobre-mi`, label: t.about },
    { href: `${prefix}/libros`, label: t.books },
    { href: `${prefix}/conferencias`, label: t.speaking },
    { href: `${prefix}/prensa`, label: t.press },
    { href: `${prefix}/blog`, label: t.blog },
  ]

  const homeHref = locale === 'en' ? '/en' : '/'

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
              <Link
                href={`${homeHref === '/' ? '' : homeHref}/#contacto`}
                className="inline-flex w-fit items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-on-accent shadow-[0_10px_40px_-10px_var(--accent-glow)]"
              >
                {t.contact} <span aria-hidden>→</span>
              </Link>
              <Link
                href={otherHref}
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
