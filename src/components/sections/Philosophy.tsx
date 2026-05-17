import type { Dictionary } from '@/lib/dictionaries'

export function Philosophy({ dict }: { dict: Dictionary }) {
  return (
    <section className="border-y border-border bg-background-elev-1/40">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-xs uppercase tracking-[0.22em] text-accent">
          {dict.philosophy.title}
        </p>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {dict.philosophy.items.map((item, i) => (
            <article
              key={item.title}
              className="group relative rounded-2xl border border-border bg-background-elev-2/60 p-7 transition hover:border-accent/60"
            >
              <div className="mb-5 font-serif text-2xl text-accent">{String(i + 1).padStart(2, '0')}</div>
              <h3 className="font-serif text-xl text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
