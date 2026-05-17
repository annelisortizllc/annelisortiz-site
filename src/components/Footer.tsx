import Link from 'next/link'
import type { Dictionary, Locale } from '@/lib/dictionaries'
import { social } from '@/lib/site'

export function Footer({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-border bg-background-elev-1/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 font-serif text-lg">
            <span className="inline-block h-2 w-2 rounded-full bg-accent" />
            Annelis Ortiz
          </div>
          <p className="mt-3 max-w-xs text-sm text-muted">{dict.footer.tagline}</p>
        </div>

        <nav className="flex flex-col gap-2 text-sm text-muted">
          <span className="mb-1 text-xs uppercase tracking-widest text-foreground/60">
            {dict.nav.home}
          </span>
          <Link href={`/${locale}/sobre-mi`} className="hover:text-foreground">{dict.nav.about}</Link>
          <Link href={`/${locale}/libros`} className="hover:text-foreground">{dict.nav.books}</Link>
          <Link href={`/${locale}/conferencias`} className="hover:text-foreground">{dict.nav.speaking}</Link>
          <Link href={`/${locale}/prensa`} className="hover:text-foreground">{dict.nav.press}</Link>
          <Link href={`/${locale}/blog`} className="hover:text-foreground">{dict.nav.blog}</Link>
        </nav>

        <div className="flex flex-col gap-2 text-sm text-muted">
          <span className="mb-1 text-xs uppercase tracking-widest text-foreground/60">Social</span>
          <a href={social.instagram} target="_blank" rel="noreferrer" className="hover:text-foreground">Instagram</a>
          <a href={social.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground">LinkedIn</a>
          <a href={social.youtube} target="_blank" rel="noreferrer" className="hover:text-foreground">YouTube</a>
          <a href={social.tiktok} target="_blank" rel="noreferrer" className="hover:text-foreground">TikTok</a>
          <a href={social.facebook} target="_blank" rel="noreferrer" className="hover:text-foreground">Facebook</a>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-muted sm:flex-row">
          <span>© {year} Annelis Ortiz. {dict.footer.rights}</span>
          <span>annelisortiz.com</span>
        </div>
      </div>
    </footer>
  )
}
