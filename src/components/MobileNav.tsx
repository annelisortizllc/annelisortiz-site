'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'motion/react'
import type { Dictionary } from '@/lib/dictionaries'

export function MobileNav({ dict }: { dict: Dictionary }) {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  // Wait until mount before using portal (avoids SSR mismatch)
  useEffect(() => setMounted(true), [])

  // Close on route change
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const links = [
    { href: '/sobre-mi', label: dict.nav.about },
    { href: '/libros', label: dict.nav.books },
    { href: '/conferencias', label: dict.nav.speaking },
    { href: '/prensa', label: dict.nav.press },
    { href: '/blog', label: dict.nav.blog },
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
            aria-label="Cerrar menú"
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
            <Link
              href="/#contacto"
              className="mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-on-accent shadow-[0_10px_40px_-10px_var(--accent-glow)]"
            >
              {dict.nav.contact} <span aria-hidden>→</span>
            </Link>
          </motion.nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )

  return (
    <>
      <button
        type="button"
        aria-label="Abrir menú"
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
