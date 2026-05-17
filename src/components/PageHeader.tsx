import Link from 'next/link'

type Crumb = { name: string; path: string }

export function PageHeader({
  eyebrow,
  title,
  lead,
  crumbs,
}: {
  eyebrow?: string
  title: string
  lead?: string
  crumbs: Crumb[]
}) {
  return (
    <section className="relative isolate overflow-hidden border-b border-border">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            'radial-gradient(closest-side, var(--accent-glow), transparent 70%)',
        }}
      />
      <div className="surface-grain relative">
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-20 md:pt-24 md:pb-24">
          <nav aria-label="Breadcrumb" className="mb-6 text-xs text-muted">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
              {crumbs.map((c, i) => {
                const isLast = i === crumbs.length - 1
                return (
                  <li key={c.path} className="flex items-center gap-2">
                    {i > 0 && <span aria-hidden>›</span>}
                    {isLast ? (
                      <span className="text-foreground/80">{c.name}</span>
                    ) : (
                      <Link href={c.path} className="hover:text-foreground">
                        {c.name}
                      </Link>
                    )}
                  </li>
                )
              })}
            </ol>
          </nav>
          {eyebrow ? (
            <p className="mb-4 text-xs uppercase tracking-[0.22em] text-accent">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="font-serif text-4xl leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl">
            {title}
          </h1>
          {lead ? (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              {lead}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  )
}
