'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import type { GoogleReview } from '@/content/reviews'

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
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',
  ]
  const [y, m] = iso.split('-')
  return `${months[Number(m) - 1]} ${y}`
}

type Props = {
  reviews: readonly GoogleReview[]
  businessProfiles: {
    nexa: { label: string }
    kw: { label: string }
  }
  verifiedBadge: string
  prevAriaLabel: string
  nextAriaLabel: string
}

export function TestimonialsCarousel({
  reviews,
  businessProfiles,
  verifiedBadge,
  prevAriaLabel,
  nextAriaLabel,
}: Props) {
  const scrollRef = useRef<HTMLUListElement>(null)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(true)

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    // 8px tolerance to avoid edge flickering on sub-pixel rounding
    setCanScrollPrev(el.scrollLeft > 8)
    setCanScrollNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 8)
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    updateScrollState()
    el.addEventListener('scroll', updateScrollState, { passive: true })
    window.addEventListener('resize', updateScrollState)
    return () => {
      el.removeEventListener('scroll', updateScrollState)
      window.removeEventListener('resize', updateScrollState)
    }
  }, [updateScrollState])

  const scrollBy = (direction: 'prev' | 'next') => {
    const el = scrollRef.current
    if (!el) return
    // Scroll one full viewport-page so the user advances to the next group of cards.
    const distance = el.clientWidth
    el.scrollBy({
      left: direction === 'prev' ? -distance : distance,
      behavior: 'smooth',
    })
  }

  return (
    <div className="relative mt-12">
      <ul
        ref={scrollRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {reviews.map((r) => (
          <li
            key={r.id}
            className="group snap-start shrink-0 basis-full rounded-2xl border border-border bg-background-elev-2/60 p-6 transition hover:border-accent/60 md:basis-[calc(50%-12px)] lg:basis-[calc(33.333%-16px)]"
          >
            <div className="flex items-center justify-between">
              <div className="flex gap-0.5" aria-label={`${r.rating} de 5 estrellas`}>
                {[1, 2, 3, 4, 5].map((n) => (
                  <Star key={n} filled={n <= r.rating} />
                ))}
              </div>
              <span className="text-[10px] uppercase tracking-wider text-muted">
                {verifiedBadge}
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
            <p className="mt-2 text-[10px] uppercase tracking-wider text-muted/80">
              Reseña en {businessProfiles[r.source].label}
            </p>
          </li>
        ))}
      </ul>

      {/* Arrows: positioned outside the cards on lg, overlaid on small screens */}
      <button
        type="button"
        onClick={() => scrollBy('prev')}
        disabled={!canScrollPrev}
        aria-label={prevAriaLabel}
        className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border-strong bg-background/85 text-foreground shadow-lg backdrop-blur-sm transition hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-border-strong disabled:hover:text-foreground lg:-left-5"
      >
        <svg viewBox="0 0 20 20" aria-hidden="true" className="h-5 w-5 fill-current">
          <path d="M12.78 4.22a.75.75 0 010 1.06L8.06 10l4.72 4.72a.75.75 0 11-1.06 1.06l-5.25-5.25a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => scrollBy('next')}
        disabled={!canScrollNext}
        aria-label={nextAriaLabel}
        className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border-strong bg-background/85 text-foreground shadow-lg backdrop-blur-sm transition hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-border-strong disabled:hover:text-foreground lg:-right-5"
      >
        <svg viewBox="0 0 20 20" aria-hidden="true" className="h-5 w-5 fill-current">
          <path d="M7.22 4.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L11.94 10 7.22 5.28a.75.75 0 010-1.06z" />
        </svg>
      </button>
    </div>
  )
}
