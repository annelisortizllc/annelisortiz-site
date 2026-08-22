'use client'

import Link from 'next/link'

// Kids-brand header — playful, rounded, separate visual identity from the
// adult mortgage site header. Sticky on scroll with crema background.
export function KidsHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--kids-cream)]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/pequenos-heroes"
          className="flex items-center gap-3 transition hover:opacity-80"
          aria-label="Pequeños Héroes del Dinero — inicio"
        >
          <span
            aria-hidden
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-kids-yellow text-2xl shadow-md"
          >
            🌟
          </span>
          <span
            className="hidden text-lg font-semibold text-foreground sm:block"
            style={{ fontFamily: 'var(--font-kids-title)' }}
          >
            Pequeños Héroes del Dinero
          </span>
          <span
            className="text-base font-semibold text-foreground sm:hidden"
            style={{ fontFamily: 'var(--font-kids-title)' }}
          >
            Pequeños Héroes
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-semibold text-foreground md:flex">
          <Link href="/pequenos-heroes#heroes" className="transition hover:text-[var(--kids-coral)]">
            Los héroes
          </Link>
          <Link href="/pequenos-heroes#actividades" className="transition hover:text-[var(--kids-sky)]">
            Actividades
          </Link>
          <Link href="/pequenos-heroes#padres" className="transition hover:text-[var(--kids-mint)]">
            Para padres
          </Link>
          <Link href="/pequenos-heroes/club" className="transition hover:text-[var(--kids-lavender)]">
            Club
          </Link>
        </nav>

        <Link
          href="/pequenos-heroes#comprar"
          className="rounded-full bg-kids-yellow px-5 py-2.5 text-sm font-semibold text-foreground shadow-md transition hover:bg-kids-mango hover:text-white"
          style={{ fontFamily: 'var(--font-kids-title)' }}
        >
          🛒 Comprar
        </Link>
      </div>
    </header>
  )
}
