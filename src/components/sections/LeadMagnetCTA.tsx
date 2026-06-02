import Link from 'next/link'

export function LeadMagnetCTA({ locale = 'es' }: { locale?: 'es' | 'en' }) {
  const isEn = locale === 'en'
  const eyebrow = isEn ? 'Free resource' : 'Recurso gratis'
  const title = isEn
    ? 'Not ready to talk? Start with the checklist.'
    : 'Si todavía no estás listo para hablar, empieza con el checklist.'
  const lead = isEn
    ? 'The 10 exact steps I walk through with every family before they apply for a mortgage. The same framework as the book Antes de Decidir, free, in your inbox in 60 seconds.'
    : 'Los 10 pasos exactos que reviso con cada familia antes de aplicar para una hipoteca. El mismo marco del libro Antes de Decidir, gratis, en tu inbox en 60 segundos.'
  const cta = isEn ? 'Get the checklist →' : 'Quiero mi checklist →'
  const note = isEn
    ? 'No spam. One-time send.'
    : 'Sin spam. Te lo mando una sola vez.'
  const href = isEn ? '/en/get-ready' : '/preparate'

  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-5">
          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.22em] text-accent">
              {eyebrow}
            </p>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-foreground md:text-4xl">
              {title}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
              {lead}
            </p>
          </div>
          <div className="md:col-span-2">
            <div className="rounded-2xl border border-border bg-background-elev-1/40 p-6 md:p-7">
              <Link
                href={href}
                className="inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-3.5 text-base font-medium text-on-accent shadow-[0_10px_40px_-10px_var(--accent-glow)] transition hover:bg-accent-soft"
              >
                {cta}
              </Link>
              <p className="mt-3 text-center text-xs text-muted">{note}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
