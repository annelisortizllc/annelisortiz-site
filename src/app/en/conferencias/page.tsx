import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/PageHeader'
import { breadcrumbJsonLd, faqJsonLd, jsonLdScript } from '@/lib/jsonld'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Speaking',
  description:
    'Annelis Ortiz as a speaker: financial education, smart property purchasing, and wealth-building for Hispanic and Latin American families.',
  alternates: {
    canonical: `${site.url}/en/conferencias`,
    languages: {
      'es-ES': `${site.url}/conferencias`,
      'en-US': `${site.url}/en/conferencias`,
    },
  },
}

const crumbs = [
  { name: 'Home', path: '/en' },
  { name: 'Speaking', path: '/en/conferencias' },
]

const topics = [
  {
    title: 'Antes de Decidir: preparing for your first property',
    body: 'A talk designed for Hispanic audiences who are considering buying their first home. Credit, financial organization, and buyer mindset.',
  },
  {
    title: 'Real estate wealth for Latino families',
    body: 'How the first property becomes the foundation of a generational legacy — with mortgage strategy and a long-term vision.',
  },
  {
    title: 'Property investing for Hispanic professionals',
    body: 'Financing structure, ROI calculation, and how to make the leap from homeowner to investor.',
  },
  {
    title: 'Financial education for communities',
    body: 'Interactive workshops for associations, companies, and community groups. Adaptable from 45 to 90 minutes.',
  },
]

const audiences = [
  'Corporate events and industry conferences',
  'Hispanic professional associations and local chambers',
  'Investment and real estate groups',
  'Faith communities and women\'s groups',
  'Universities and financial education programs',
  'Podcasts and media',
]

const faqs = [
  {
    question: 'In which language do you give your talks?',
    answer:
      'Primarily in Spanish, focused on the Hispanic community in the United States and Latin America. English available upon request.',
  },
  {
    question: 'Where can you present?',
    answer:
      'In the United States (in person), Puerto Rico, and Latin America (in person or virtual). For events outside these regions, contact me to coordinate.',
  },
  {
    question: 'What duration do you offer?',
    answer:
      '30–45 minute talks, 60-minute keynotes, and 90–120 minute workshops. Also panels and podcast appearances.',
  },
  {
    question: 'How do I request your participation?',
    answer:
      'Message me through the contact section with the tentative date, location, audience, and topic of interest. I respond in under 24 hours.',
  },
]

export default function SpeakingPageEN() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(breadcrumbJsonLd(crumbs))}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(faqJsonLd(faqs))}
      />

      <PageHeader
        eyebrow="Speaking"
        title="Financial education that stays with the audience."
        lead="I speak at corporate events, Hispanic communities, and investment groups on financial preparation, smart property purchasing, and building generational wealth."
        crumbs={crumbs}
      />

      <div data-theme="cream" className="bg-background text-foreground">

      {/* Topics */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-xs uppercase tracking-[0.22em] text-accent">Topics</p>
        <h2 className="mt-4 font-serif text-3xl leading-tight text-foreground md:text-4xl">
          The formats most requested.
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {topics.map((t) => (
            <article
              key={t.title}
              className="rounded-2xl border border-border bg-background-elev-1 p-7 transition hover:border-accent/60"
            >
              <div className="mb-4 h-1 w-8 rounded-full bg-accent" />
              <h3 className="font-serif text-xl text-foreground">{t.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{t.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Audiences */}
      <section className="border-y border-border bg-background-elev-1/40">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <p className="text-xs uppercase tracking-[0.22em] text-accent">Audiences</p>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-foreground md:text-4xl">
            Where I have presented.
          </h2>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {audiences.map((a) => (
              <li key={a} className="flex items-start gap-3 text-base text-muted">
                <span aria-hidden className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                {a}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <p className="text-xs uppercase tracking-[0.22em] text-accent">Frequently asked questions</p>
        <h2 className="mt-4 font-serif text-3xl leading-tight text-foreground md:text-4xl">
          What organizers want to know.
        </h2>
        <div className="mt-10 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-border bg-background-elev-1 px-6 py-5 transition hover:border-accent/60"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-serif text-lg text-foreground">
                <span>{faq.question}</span>
                <span aria-hidden className="text-accent transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-base leading-relaxed text-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-background-elev-1/40">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="font-serif text-3xl leading-tight text-foreground md:text-4xl">
            Want to invite me to your event?
          </h2>
          <p className="mt-6 text-base text-muted">
            Send me the date, audience, and topic. I respond with availability and a proposal in
            under 24 hours.
          </p>
          <Link
            href="/en/#contacto"
            className="mt-8 inline-flex rounded-full bg-accent px-6 py-3 text-sm font-medium text-on-accent shadow-[0_10px_40px_-10px_var(--accent-glow)] transition hover:bg-accent-soft"
          >
            Invite me to your event
          </Link>
        </div>
      </section>

      </div>
    </>
  )
}
