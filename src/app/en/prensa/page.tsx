import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/PageHeader'
import { breadcrumbJsonLd, jsonLdScript } from '@/lib/jsonld'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Press',
  description:
    'Annelis Ortiz in the media: interviews, columns, and appearances on financial education, mortgages, and real estate for the Hispanic community.',
  alternates: {
    canonical: `${site.url}/en/prensa`,
    languages: {
      'es-ES': `${site.url}/prensa`,
      'en-US': `${site.url}/en/prensa`,
    },
  },
}

const crumbs = [
  { name: 'Home', path: '/en' },
  { name: 'Press', path: '/en/prensa' },
]

const placeholderMentions = [
  {
    outlet: 'Upcoming outlet',
    headline: 'Upcoming media appearances — placeholder',
    date: 'Pending',
    url: '#',
  },
]

export default function PressPageEN() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(breadcrumbJsonLd(crumbs))}
      />

      <PageHeader
        eyebrow="Press"
        title="Appearances, interviews, and columns."
        lead="My work on financial education, mortgages, and real estate has been recognized in media outlets covering the Hispanic community. This section grows as new mentions are published."
        crumbs={crumbs}
      />

      <div data-theme="cream" className="bg-background text-foreground">
      <section className="mx-auto max-w-4xl px-6 py-20">
        <p className="text-xs uppercase tracking-[0.22em] text-accent">Recent mentions</p>
        <div className="mt-10 space-y-4">
          {placeholderMentions.map((m) => (
            <article
              key={m.headline}
              className="rounded-2xl border border-dashed border-border bg-background-elev-1/40 p-6"
            >
              <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-wider text-muted">
                <span>{m.outlet}</span>
                <span>{m.date}</span>
              </div>
              <h2 className="mt-3 font-serif text-xl text-foreground">{m.headline}</h2>
              <p className="mt-4 text-sm text-muted">
                This section will populate with real articles as they get published.
              </p>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-border bg-background-elev-1 p-8">
          <h2 className="font-serif text-xl text-foreground">Are you a journalist or producer?</h2>
          <p className="mt-3 text-sm text-muted">
            I am available for interviews in English and Spanish on financial education, first
            homes, refinancing, property investment, and wealth-building for Hispanic families.
            I respond in under 24 hours.
          </p>
          <Link
            href="/en/#contacto"
            className="mt-6 inline-flex rounded-full border border-border-strong px-5 py-2 text-sm font-medium text-foreground transition hover:border-accent hover:text-accent"
          >
            Request an interview
          </Link>
        </div>
      </section>
      </div>
    </>
  )
}
