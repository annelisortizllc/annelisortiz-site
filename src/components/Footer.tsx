'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { social } from '@/lib/site'
import { NmlsDisclosure } from '@/components/NmlsDisclosure'

const labels = {
  es: {
    home: 'Inicio',
    about: 'Sobre mí',
    services: 'Servicios',
    books: 'Libro',
    speaking: 'Conferencias',
    blog: 'Blog',
    followMe: 'Sígueme',
    rights: 'Todos los derechos reservados.',
    tagline: 'Construyendo patrimonio, una familia a la vez.',
  },
  en: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    books: 'Book',
    speaking: 'Speaking',
    blog: 'Blog',
    followMe: 'Follow me',
    rights: 'All rights reserved.',
    tagline: 'Building wealth, one family at a time.',
  },
} as const

type Locale = keyof typeof labels

function detectLocale(pathname: string | null): Locale {
  return pathname?.startsWith('/en') ? 'en' : 'es'
}

export function Footer() {
  const pathname = usePathname()
  // /pequenos-heroes uses its own kids-brand footer — hide the global one
  // to keep the kids section visually isolated.
  if (pathname.startsWith('/pequenos-heroes')) return null
  const locale = detectLocale(pathname)
  const prefix = locale === 'en' ? '/en' : ''
  const t = labels[locale]
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background-elev-1/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 font-serif text-lg">
            <span className="inline-block h-2 w-2 rounded-full bg-accent" />
            Annelis Ortiz
          </div>
          <p className="mt-3 max-w-xs text-sm text-muted">{t.tagline}</p>
        </div>

        <nav className="flex flex-col gap-2 text-sm text-muted">
          <span className="mb-1 text-xs uppercase tracking-widest text-foreground/60">
            {t.home}
          </span>
          <Link href={`${prefix}/sobre-mi`} className="hover:text-foreground">{t.about}</Link>
          <Link href={`${prefix}/servicios`} className="hover:text-foreground">{t.services}</Link>
          <Link href={`${prefix}/libros`} className="hover:text-foreground">{t.books}</Link>
          <Link href={`${prefix}/conferencias`} className="hover:text-foreground">{t.speaking}</Link>
          <Link href={`${prefix}/blog`} className="hover:text-foreground">{t.blog}</Link>
        </nav>

        <div className="flex flex-col gap-2 text-sm text-muted">
          <span className="mb-1 text-xs uppercase tracking-widest text-foreground/60">{t.followMe}</span>
          <a href={social.instagram} target="_blank" rel="noreferrer" className="hover:text-foreground">Instagram</a>
          <a href={social.facebook} target="_blank" rel="noreferrer" className="hover:text-foreground">Facebook</a>
          <a href={social.tiktok} target="_blank" rel="noreferrer" className="hover:text-foreground">TikTok</a>
          <a href={social.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground">LinkedIn</a>
          <a href={social.youtube} target="_blank" rel="noreferrer" className="hover:text-foreground">YouTube</a>
        </div>
      </div>
      <NmlsDisclosure />
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-muted sm:flex-row">
          <span>© {year} Annelis Ortiz. {t.rights}</span>
          <span>annelisortiz.com</span>
        </div>
      </div>
    </footer>
  )
}
