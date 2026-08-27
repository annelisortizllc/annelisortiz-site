'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MobileNav } from '@/components/MobileNav'
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
  },
} as const

export function Header() {
  const pathname = usePathname()
  // The /pequenos-heroes section has its own kids-brand header rendered via
  // its layout. Hide the global header entirely so the kids brand stays
  // visually isolated from the adult mortgage/real-estate site.
  if (pathname.startsWith('/pequenos-heroes')) return null
  const locale = detectLocale(pathname)
  const prefix = locale === 'en' ? '/en' : ''
  const t = labels[locale]
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

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href={homeHref} className="group flex items-center gap-2 font-serif text-lg tracking-tight">
          <span className="inline-block h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_var(--accent-glow)]" />
          <span className="font-medium text-foreground">Annelis Ortiz</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-muted lg:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="transition hover:text-foreground">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LocaleToggle />
          <a
            href={contact.applyUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden whitespace-nowrap rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-on-accent transition hover:bg-accent-soft lg:inline-block"
          >
            {t.apply}
          </a>
          <a
            href={contact.bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden whitespace-nowrap rounded-full border border-accent px-4 py-1.5 text-sm font-medium text-accent transition hover:bg-accent hover:text-on-accent lg:inline-block"
          >
            {t.book}
          </a>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
