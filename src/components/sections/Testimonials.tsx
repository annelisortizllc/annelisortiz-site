import type { Dictionary } from '@/lib/dictionaries'
import {
  googleReviews,
  googleReviewsAggregate,
  businessProfiles,
  reviewCountsBySource,
} from '@/content/reviews'
import { TestimonialsCarousel } from './TestimonialsCarousel'

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
              ({reviewCount} reseñas en Google · {reviewCountsBySource.nexa} NEXA Lending + {reviewCountsBySource.kw} Keller Williams)
            </span>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <a
              href={businessProfiles.nexa.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline-offset-4 hover:underline"
            >
              Ver en NEXA Lending →
            </a>
            <a
              href={businessProfiles.kw.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline-offset-4 hover:underline"
            >
              Ver en Keller Williams →
            </a>
          </div>
        </div>

        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">{t.lead}</p>

        <TestimonialsCarousel
          reviews={googleReviews}
          businessProfiles={businessProfiles}
          verifiedBadge={t.verifiedBadge}
          prevAriaLabel={t.prevAriaLabel}
          nextAriaLabel={t.nextAriaLabel}
        />
      </div>
    </section>
  )
}
