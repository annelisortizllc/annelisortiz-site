'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'motion/react'
import { LocaleToggle } from '@/components/LocaleToggle'
import { detectLocale } from '@/lib/locale'
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
    apply: 'Solicitar hipoteca',
    closeAria: 'Cerrar menú',
    openAria: 'Abrir menú',
  },
  en: {
    about: 'About',
    services: 'Services',
    books: 'Book',
    speaking: 'Speaking',
    blog: 'Blog',
    contact: 'Contact',
    book: 'Book a consultation',
    apply: 'Apply for a mortgage',
    closeAria: 'Close menu',
    openAria: 'Open menu',
  },
} as const

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const locale = detectLocale(pathname)
  const prefix = locale === 'en' ? '/en' : ''
  const t = labels[locale]

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
          className="fixed inset-0 z-50 lg:hidden"
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
            <div className="mt-10 flex flex-col gap-4">
              <a
                href={contact.applyUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-on-accent shadow-[0_10px_40px_-10px_var(--accent-glow)]"
              >
                {t.apply} <span aria-hidden>→</span>
              </a>
              <div className="flex items-center gap-4">
                <a
                  href={contact.bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-fit items-center gap-2 rounded-full border border-accent px-5 py-2.5 text-sm font-medium text-accent"
                >
                  {t.book}
                </a>
                <LocaleToggle size="md" />
              </div>
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
        className="relative z-40 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background-elev-1/60 text-foreground lg:hidden"
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
