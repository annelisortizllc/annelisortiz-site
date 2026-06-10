import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PageHeader } from '@/components/PageHeader'
import { breadcrumbJsonLd, bookJsonLd, faqJsonLd, jsonLdScript } from '@/lib/jsonld'
import { books, assets, site } from '@/lib/site'

const SLUG = 'antes-de-decidir'

export const metadata: Metadata = {
  title: 'Antes de Decidir — the book',
  description:
    'Financial education, credit preparation, and the right mindset before buying property. Annelis Ortiz\'s book for smart real estate decisions.',
  alternates: {
    canonical: `${site.url}/en/libros/${SLUG}`,
    languages: {
      'es-ES': `${site.url}/libros/${SLUG}`,
      'en-US': `${site.url}/en/libros/${SLUG}`,
    },
  },
}

const crumbs = [
  { name: 'Home', path: '/en' },
  { name: 'Books', path: '/en/libros' },
  { name: 'Antes de Decidir', path: `/en/libros/${SLUG}` },
]

const faqs = [
  {
    question: 'Who is this book for?',
    answer:
      'For people and families considering buying property in the United States for the first time, refinancing, or entering real estate investing — and who want to understand the process BEFORE signing.',
  },
  {
    question: 'Do I need credit or savings to start reading it?',
    answer:
      'No. The book is designed to start from zero: how to organize your credit, how to prepare your finances, and what to do in the months before house hunting — even if you do not qualify today.',
  },
  {
    question: 'Is it in Spanish?',
    answer:
      'Yes. The book is written in Spanish, focused on the reality of the Hispanic community in the United States and Latin America. An English edition is being considered.',
  },
  {
    question: 'Where can I get it?',
    answer:
      'Available on Amazon in Kindle and paperback. Click "Buy on Amazon" above, or search for "Antes de Decidir" by Annelis Ortiz on amazon.com.',
  },
]

export default function BookPageEN() {
  const book = books.find((b) => b.slug === SLUG)
  if (!book) notFound()

  const bookSchema = bookJsonLd(SLUG)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(breadcrumbJsonLd(crumbs))}
      />
      {bookSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(bookSchema)}
        />
      ) : null}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(faqJsonLd(faqs))}
      />

      <PageHeader
        eyebrow="The book"
        title="Antes de Decidir."
        lead='"When No One Taught You How to Prepare" — the honest guide on financial education, credit preparation, and the right mindset before buying property.'
        crumbs={crumbs}
      />

      <div data-theme="cream" className="bg-background text-foreground">

      {/* Cover + pitch */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-start gap-12 md:grid-cols-2">
          <div className="relative mx-auto w-full max-w-sm">
            <div
              aria-hidden
              className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-2xl bg-accent/20 blur-2xl"
            />
            <div className="aspect-[2/3] overflow-hidden rounded-2xl border border-border bg-background-elev-2 shadow-2xl">
              <Image
                src={assets.bookCover}
                alt='Cover of "Antes de Decidir: When No One Taught You How to Prepare" by Annelis Ortiz'
                width={640}
                height={960}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>

          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-accent">
              <span aria-hidden>●</span>
              Available on Amazon · Kindle + Paperback
            </p>
            <h2 className="mt-5 font-serif text-3xl leading-tight text-foreground md:text-4xl">
              The book that would have saved you years of mistakes.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              By <strong className="text-foreground">Annelis Ortiz</strong> — Mortgage Loan Originator at NEXA Lending (NMLS #2006182) and financial guide to <strong className="text-foreground">197+ Hispanic families</strong> through the US home-buying process.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              There is an uncomfortable moment almost all of us face: signing something important
              without fully understanding what it means. When it comes to a mortgage or a
              property, that moment can cost you decades.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              This book grew out of the conversations I have every day with families who arrive
              too late — and from those who arrive on time and change everything. If no one
              taught you how to prepare, this is what you needed to read first.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href={(books.find((b) => b.slug === SLUG) as { amazonUrl?: string }).amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-on-accent shadow-[0_10px_40px_-10px_var(--accent-glow)] transition hover:bg-accent-soft"
              >
                Buy on Amazon
                <span aria-hidden>↗</span>
              </a>
              <Link
                href="/en/sobre-mi"
                className="rounded-full border border-border-strong px-6 py-3 text-sm font-medium text-foreground transition hover:border-accent hover:text-accent"
              >
                About the author
              </Link>
            </div>
            <p className="mt-4 text-xs text-muted">
              Spanish edition · Kindle and paperback · Prime shipping available
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <p className="text-xs uppercase tracking-[0.22em] text-accent">Frequently asked questions</p>
        <h2 className="mt-4 font-serif text-3xl leading-tight text-foreground md:text-4xl">
          What people ask most.
        </h2>
        <div className="mt-10 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-border bg-background-elev-1 px-6 py-5 transition hover:border-accent/60"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-serif text-lg text-foreground">
                <span>{faq.question}</span>
                <span
                  aria-hidden
                  className="text-accent transition group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 text-base leading-relaxed text-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      </div>
    </>
  )
}
