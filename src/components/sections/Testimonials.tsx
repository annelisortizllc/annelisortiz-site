import type { Dictionary } from '@/lib/dictionaries'
import { googleReviews, googleReviewsAggregate, googleReviewsMeta } from '@/content/reviews'

function Star({ filled }: { filled: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      className={filled ? 'h-4 w-4 fill-accent' : 'h-4 w-4 fill-muted/40'}
    >
      <path d="M10 1.5l2.6 5.3 5.9.85-4.25 4.15 1 5.9L10 14.9l-5.25 2.8 1-5.9L1.5 7.65l5.9-.85L10 1.5z" />
    </svg>
  )
}

function formatDate(iso: string) {
  // "2025-09-01" → "Septiembre 2025"
  const months = [
    'Enero','Febrero','Marzo','Abril','Mayo','Junio',
    'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre',
  ]
  const [y, m] = iso.split('-')
  return `${months[Number(m) - 1]} ${y}`
}

export function Testimonials({ dict }: { dict: Dictionary }) {
  const t = dict.testimonials
  const { ratingValue, reviewCount } = googleReviewsAggregate

  return (
    <section className="border-y border-border bg-background-elev-1/40">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-xs uppercase tracking-[0.22em] text-accent">{t.kicker}</p>
        <h2 className="mt-4 font-serif text-3xl text-foreground md:text-4xl">{t.title}</h2>

        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5" aria-label={`${ratingValue} de 5 estrellas`}>
              {[1, 2, 3, 4, 5].map((n) => (
                <Star key={n} filled={n <= Math.round(ratingValue)} />
              ))}
            </div>
            <span className="font-serif text-lg text-foreground">
              {ratingValue.toFixed(1)}
            </span>
            <span className="text-sm text-muted">
              ({reviewCount} reseñas en Google)
            </span>
          </div>
          <a
            href={googleReviewsMeta.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-accent underline-offset-4 hover:underline"
          >
            {t.viewAllCta} →
          </a>
        </div>

        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">{t.lead}</p>

        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {googleReviews.map((r) => (
            <li
              key={r.id}
              className="group rounded-2xl border border-border bg-background-elev-2/60 p-6 transition hover:border-accent/60"
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5" aria-label={`${r.rating} de 5 estrellas`}>
                  {[1, 2, 3, 4, 5].map((n) => (
                    <Star key={n} filled={n <= r.rating} />
                  ))}
                </div>
                <span className="text-[10px] uppercase tracking-wider text-muted">
                  {t.verifiedBadge}
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground/90">
                “{r.body}”
              </p>
              <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-4">
                <span className="font-serif text-sm text-foreground">{r.displayName}</span>
                <time
                  dateTime={r.datePublished}
                  className="text-xs text-muted"
                >
                  {formatDate(r.datePublished)}
                </time>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
