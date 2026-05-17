import Link from 'next/link'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import type { Dictionary, Locale } from '@/lib/dictionaries'

export function Header({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const base = `/${locale}`
  const links = [
    { href: `${base}/sobre-mi`, label: dict.nav.about },
    { href: `${base}/libros`, label: dict.nav.books },
    { href: `${base}/conferencias`, label: dict.nav.speaking },
    { href: `${base}/prensa`, label: dict.nav.press },
    { href: `${base}/blog`, label: dict.nav.blog },
  ]

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href={base} className="group flex items-center gap-2 font-serif text-lg tracking-tight">
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
          <LanguageSwitcher current={locale} />
          <Link
            href={`${base}#contacto`}
            className="hidden rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-on-accent transition hover:bg-accent-soft sm:inline-block"
          >
            {dict.nav.contact}
          </Link>
        </div>
      </div>
    </header>
  )
}
