import type { Dictionary } from '@/lib/dictionaries'

export function Ecosystem({ dict }: { dict: Dictionary }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.22em] text-accent">
          {dict.ecosystem.title}
        </p>
        <h2 className="mt-4 font-serif text-4xl leading-tight text-foreground md:text-5xl">
          {dict.ecosystem.lead}
        </h2>
      </div>
      <div className="mt-12 grid gap-4 md:grid-cols-4">
        {dict.ecosystem.pillars.map((p) => (
          <div
            key={p.title}
            className="rounded-2xl border border-border bg-background-elev-1 p-6 transition hover:border-accent/60"
          >
            <div className="mb-4 h-1 w-8 rounded-full bg-accent" />
            <h3 className="font-serif text-lg text-foreground">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
