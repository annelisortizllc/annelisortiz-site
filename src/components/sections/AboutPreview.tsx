import Link from 'next/link'
import type { Dictionary } from '@/lib/dictionaries'

export function AboutPreview({ dict }: { dict: Dictionary }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-12 md:grid-cols-5">
        <div className="md:col-span-2">
          <p className="text-xs uppercase tracking-[0.22em] text-accent">
            {dict.about.title}
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-foreground md:text-5xl">
            {dict.about.lead}
          </h2>
        </div>
        <div className="md:col-span-3">
          <p className="text-lg leading-relaxed text-muted">{dict.about.body}</p>
          <Link
            href="/sobre-mi"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-soft"
          >
            {dict.about.cta} <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
