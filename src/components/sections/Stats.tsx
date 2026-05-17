import type { Dictionary } from '@/lib/dictionaries'

export function Stats({ dict }: { dict: Dictionary }) {
  return (
    <section className="border-y border-border bg-background-elev-1/40">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="sr-only">{dict.stats.title}</h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {dict.stats.items.map((item) => (
            <div key={item.label} className="text-center md:text-left">
              <div className="font-serif text-4xl font-medium text-foreground md:text-5xl">
                <span className="bg-gradient-to-b from-[var(--accent-soft)] to-[var(--accent-deep)] bg-clip-text text-transparent">
                  {item.value}
                </span>
              </div>
              <div className="mt-2 text-sm uppercase tracking-wider text-muted">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
