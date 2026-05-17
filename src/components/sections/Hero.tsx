import Link from 'next/link'
import type { Dictionary, Locale } from '@/lib/dictionaries'

export function Hero({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[700px] w-[1100px] -translate-x-1/2 rounded-full opacity-50 blur-3xl"
        style={{
          background:
            'radial-gradient(closest-side, var(--accent-glow), transparent 70%)',
        }}
      />
      <div className="surface-grain relative">
        <div className="mx-auto max-w-6xl px-6 pt-24 pb-28 md:pt-32 md:pb-36">
          <p className="mb-6 text-xs uppercase tracking-[0.22em] text-muted">
            {dict.hero.eyebrow}
          </p>
          <h1 className="font-serif text-5xl leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl">
            {dict.hero.title}
            <br />
            <span className="bg-gradient-to-r from-[var(--accent-soft)] via-[var(--accent)] to-[var(--accent-deep)] bg-clip-text text-transparent">
              {dict.hero.titleAccent}
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">
            {dict.hero.tagline}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              href={`/${locale}#contacto`}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-on-accent shadow-[0_10px_40px_-10px_var(--accent-glow)] transition hover:bg-accent-soft"
            >
              {dict.hero.ctaPrimary}
              <span aria-hidden>→</span>
            </Link>
            <Link
              href={`/${locale}/sobre-mi`}
              className="inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 text-sm font-medium text-foreground transition hover:border-accent hover:text-accent"
            >
              {dict.hero.ctaSecondary}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
