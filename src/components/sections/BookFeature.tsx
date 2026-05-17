import Link from 'next/link'
import type { Dictionary } from '@/lib/dictionaries'

export function BookFeature({ dict }: { dict: Dictionary }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid items-center gap-12 md:grid-cols-2">
        {/* Cover placeholder — replace with real cover JPG */}
        <div className="relative mx-auto w-full max-w-sm">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-2xl bg-accent/20 blur-2xl"
          />
          <div className="aspect-[2/3] overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-background-elev-2 via-background-elev-1 to-background shadow-2xl">
            <div className="flex h-full flex-col items-center justify-center p-10 text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-accent">
                Annelis Ortiz
              </p>
              <h3 className="mt-6 font-serif text-3xl leading-tight text-foreground">
                Antes de Decidir
              </h3>
              <div className="mt-4 h-px w-16 bg-accent" />
              <p className="mt-4 font-serif text-base italic text-muted">
                Cuando Nadie Te Enseñó a Prepararte
              </p>
              <p className="mt-auto text-[10px] uppercase tracking-widest text-muted/60">
                TODO: subir portada real
              </p>
            </div>
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-accent">{dict.books.title}</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-foreground md:text-5xl">
            {dict.books.bookTitle}:{' '}
            <span className="text-muted">{dict.books.bookSubtitle}</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">{dict.books.bookPitch}</p>
          <p className="mt-4 text-base leading-relaxed text-muted">{dict.books.lead}</p>
          <Link
            href="/libros/antes-de-decidir"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 text-sm font-medium text-foreground transition hover:border-accent hover:text-accent"
          >
            {dict.books.cta} <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
