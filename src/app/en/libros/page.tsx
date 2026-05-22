import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/PageHeader'
import { breadcrumbJsonLd, jsonLdScript } from '@/lib/jsonld'
import { books, site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Books',
  description:
    'Books by Annelis Ortiz on financial education, credit preparation, and smart property purchasing.',
  alternates: {
    canonical: `${site.url}/en/libros`,
    languages: {
      'es-ES': `${site.url}/libros`,
      'en-US': `${site.url}/en/libros`,
    },
  },
}

const crumbs = [
  { name: 'Home', path: '/en' },
  { name: 'Books', path: '/en/libros' },
]

export default function BooksPageEN() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(breadcrumbJsonLd(crumbs))}
      />

      <PageHeader
        eyebrow="Books"
        title="What NOBODY taught you before signing."
        lead="My publications on wealth-building, financial preparation, and the right mindset to make smart real estate decisions."
        crumbs={crumbs}
      />

      <div data-theme="cream" className="bg-background text-foreground">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          {books.map((book) => (
            <Link
              key={book.slug}
              href={`/en/libros/${book.slug}`}
              className="group relative flex gap-6 rounded-2xl border border-border bg-background-elev-1 p-6 transition hover:border-accent/60"
            >
              <div className="relative aspect-[2/3] w-32 shrink-0 overflow-hidden rounded-xl border border-border bg-gradient-to-br from-background-elev-2 via-background-elev-1 to-background">
                <div className="flex h-full flex-col items-center justify-center p-3 text-center">
                  <p className="text-[8px] uppercase tracking-[0.3em] text-accent">
                    Annelis Ortiz
                  </p>
                  <h3 className="mt-2 font-serif text-base leading-tight text-foreground">
                    Antes de Decidir
                  </h3>
                  <div className="mt-2 h-px w-8 bg-accent" />
                  <p className="mt-2 font-serif text-[10px] italic text-muted">
                    When No One Taught You How to Prepare
                  </p>
                </div>
              </div>
              <div className="flex-1">
                <h2 className="font-serif text-2xl leading-tight text-foreground group-hover:text-accent">
                  {book.title.split(':')[0]}
                </h2>
                <p className="mt-1 font-serif text-sm italic text-muted">
                  When No One Taught You How to Prepare
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  The honest guide on financial education, credit preparation, and the right
                  mindset before buying property. The book that would have saved you years of
                  mistakes.
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-xs font-medium text-accent">
                  Learn more <span aria-hidden>→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      </div>
    </>
  )
}
