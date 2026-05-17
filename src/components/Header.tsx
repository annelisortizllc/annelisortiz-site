import Link from 'next/link'
import type { Dictionary } from '@/lib/dictionaries'
import { MobileNav } from '@/components/MobileNav'

export function Header({ dict }: { dict: Dictionary }) {
  const links = [
    { href: '/sobre-mi', label: dict.nav.about },
    { href: '/libros', label: dict.nav.books },
    { href: '/conferencias', label: dict.nav.speaking },
    { href: '/prensa', label: dict.nav.press },
    { href: '/blog', label: dict.nav.blog },
  ]

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="group flex items-center gap-2 font-serif text-lg tracking-tight">
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
            href="/#contacto"
            className="hidden rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-on-accent transition hover:bg-accent-soft md:inline-block"
          >
            {dict.nav.contact}
          </Link>
          <MobileNav dict={dict} />
        </div>
      </div>
    </header>
  )
}
