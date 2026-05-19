import type { BlogSection } from '@/content/blog/types'

export function PostBody({ sections }: { sections: BlogSection[] }) {
  return (
    <div className="space-y-7">
      {sections.map((s, i) => {
        switch (s.type) {
          case 'heading': {
            const id = s.id ?? slugify(s.text)
            if (s.level === 3) {
              return (
                <h3
                  key={i}
                  id={id}
                  className="mt-10 font-serif text-2xl leading-tight text-foreground"
                >
                  {s.text}
                </h3>
              )
            }
            return (
              <h2
                key={i}
                id={id}
                className="mt-12 font-serif text-3xl leading-tight text-foreground md:text-4xl"
              >
                {s.text}
              </h2>
            )
          }
          case 'paragraph':
            return (
              <p key={i} className="text-base leading-relaxed text-muted md:text-lg">
                {s.text}
              </p>
            )
          case 'list':
            return s.ordered ? (
              <ol key={i} className="ml-6 list-decimal space-y-2 text-base leading-relaxed text-muted md:text-lg">
                {s.items.map((it, k) => (
                  <li key={k} className="pl-1">{it}</li>
                ))}
              </ol>
            ) : (
              <ul key={i} className="space-y-2 text-base leading-relaxed text-muted md:text-lg">
                {s.items.map((it, k) => (
                  <li key={k} className="flex gap-3">
                    <span aria-hidden className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            )
          case 'callout': {
            const tone = s.tone ?? 'info'
            const colors =
              tone === 'warning'
                ? 'border-red-400/40 bg-red-400/5'
                : tone === 'highlight'
                  ? 'border-accent/40 bg-accent/5'
                  : 'border-border bg-background-elev-2/40'
            return (
              <aside key={i} className={`rounded-2xl border ${colors} px-6 py-5`}>
                {s.title ? (
                  <p className="mb-1 text-xs uppercase tracking-[0.18em] text-accent">{s.title}</p>
                ) : null}
                <p className="text-base leading-relaxed text-foreground/90">{s.text}</p>
              </aside>
            )
          }
          case 'quote':
            return (
              <blockquote key={i} className="border-l-2 border-accent pl-6 italic text-foreground">
                <p className="text-lg leading-relaxed">{s.text}</p>
                {s.cite ? <footer className="mt-2 text-xs not-italic text-muted">— {s.cite}</footer> : null}
              </blockquote>
            )
          default:
            return null
        }
      })}
    </div>
  )
}

function slugify(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}
