import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/PageHeader'
import { breadcrumbJsonLd, jsonLdScript } from '@/lib/jsonld'
import { contact, applicationPortal, site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Mortgage loans (conventional, FHA, VA, jumbo, NonQM: Bank Statement, DSCR, P&L, Foreign National), real estate buy & sell, coaching, financial education, and speaking.',
  alternates: {
    canonical: `${site.url}/en/servicios`,
    languages: {
      'es-ES': `${site.url}/servicios`,
      'en-US': `${site.url}/en/servicios`,
    },
  },
}

const crumbs = [
  { name: 'Home', path: '/en' },
  { name: 'Services', path: '/en/servicios' },
]

const services = [
  {
    id: 'mortgages',
    eyebrow: 'NMLS #2006182',
    title: 'Mortgage Loans',
    lead: 'I structure financing for first-time buyers, refinances, second homes, investment properties, and non-traditional profiles. Every loan starts with credit preparation when needed.',
    groups: [
      {
        label: 'Traditional programs',
        items: [
          'Conventional (Fannie Mae / Freddie Mac)',
          'FHA — low down payment, ideal for first-time buyers',
          'VA — veterans and active service (zero down)',
          'USDA — qualifying rural properties',
          'Jumbo — amounts above the conforming limit',
          'Investment property (1-4 units)',
        ],
      },
      {
        label: 'NonQM (non-traditional profiles)',
        items: [
          'Bank Statement Loans — for self-employed without W-2',
          'DSCR — investment properties qualified by rental income',
          'Profit & Loss (P&L) — qualify with a P&L statement, no tax returns',
          'Foreign National loans — no SSN or US credit history required',
        ],
      },
    ],
    cta: {
      label: 'Apply at aortizloans.com',
      href: applicationPortal.url,
      external: true,
    },
    secondary: {
      label: 'Message me on WhatsApp',
      href: contact.whatsappUrl,
      external: true,
    },
  },
  {
    id: 'real-estate',
    eyebrow: 'Keller Williams Advantage III Realty',
    title: 'Buy & Sell Real Estate',
    lead: 'As a Real Estate Agent I guide the full process: first home, second home, investment properties, and resale. My approach combines the mortgage conversation with finding the right property for your long-term goal.',
    groups: [
      {
        label: 'How I work with you',
        items: [
          'First home — from search to closing',
          'Investment properties — cash-flow and ROI analysis',
          'Second home or vacation property',
          'Sale of your current property with strategy',
          'Comparative Market Analysis (CMA)',
        ],
      },
    ],
    cta: {
      label: 'Book a conversation',
      href: '/en/#contacto',
      external: false,
    },
  },
  {
    id: 'coaching',
    eyebrow: 'Professional mentoring',
    title: 'Coaching',
    lead: 'A Spanish-language program for Originators who want to grow their production and build a sustainable career. Combines sales strategy, pipeline organization, personal brand, and mindset.',
    groups: [
      {
        label: 'What the coaching covers',
        items: [
          'Pipeline structure and follow-up',
          'Personal brand and Spanish-language content',
          'Referral strategy with realtors and partners',
          'Mindset and handling rejection in origination',
          'Personalized growth roadmap',
        ],
      },
    ],
    cta: {
      label: 'Apply to the coaching',
      href: '/en/#contacto',
      external: false,
    },
  },
  {
    id: 'financial-education',
    eyebrow: 'Community + book + content',
    title: 'Financial Education',
    lead: 'Practical education on preparation before buying property, building credit, and financial mindset for Hispanic families. Available through the book, blog, and digital community of 30K+ followers.',
    groups: [
      {
        label: 'Available resources',
        items: [
          'Book "Antes de Decidir" — financial preparation and mindset',
          'Blog with practical Spanish-language articles',
          'Digital community: Instagram, TikTok, YouTube, LinkedIn',
          'Workshops and talks for organizations (see Speaking)',
        ],
      },
    ],
    cta: {
      label: 'Learn about the book',
      href: '/en/libros/antes-de-decidir',
      external: false,
    },
  },
  {
    id: 'speaking',
    eyebrow: 'Speaking',
    title: 'Speaking & Conferences',
    lead: 'Keynotes, workshops and appearances for corporate events, Hispanic associations, investment groups, and communities. Topics: financial preparation, smart property buying, and generational wealth.',
    groups: [
      {
        label: 'Available formats',
        items: [
          '60-minute keynote',
          '30-45 minute talk',
          '90-120 minute workshop',
          'Panel or podcast interview',
          'In-person across the US and virtual to Latin America',
        ],
      },
    ],
    cta: {
      label: 'See speaking detail',
      href: '/en/conferencias',
      external: false,
    },
  },
]

const servicesItemList = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: services.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Service',
      name: s.title,
      description: s.lead,
      url: `${site.url}/en/servicios#${s.id}`,
      provider: { '@id': `${site.url}#person` },
      areaServed: [
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'Puerto Rico' },
        { '@type': 'Place', name: 'Latin America' },
      ],
    },
  })),
}

export default function ServicesPageEN() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(breadcrumbJsonLd(crumbs))}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(servicesItemList)}
      />

      <PageHeader
        eyebrow="Services"
        title="Five ways I work with you."
        lead="Mortgage loans, real estate buy & sell, coaching, financial education, and speaking. All from the same perspective: strategy, preparation, and a human approach."
        crumbs={crumbs}
      />

      <div data-theme="cream" className="bg-background text-foreground">
        {services.map((s, i) => (
          <section
            key={s.id}
            id={s.id}
            className={
              i % 2 === 0
                ? 'border-b border-border'
                : 'border-b border-border bg-background-elev-1/40'
            }
          >
            <div className="mx-auto max-w-5xl px-6 py-20">
              <div className="grid gap-12 md:grid-cols-5">
                <div className="md:col-span-2">
                  <p className="text-xs uppercase tracking-[0.22em] text-accent">
                    {s.eyebrow}
                  </p>
                  <h2 className="mt-4 font-serif text-3xl leading-tight text-foreground md:text-4xl">
                    {s.title}
                  </h2>
                  <p className="mt-6 text-base leading-relaxed text-muted">{s.lead}</p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      href={s.cta.href}
                      target={s.cta.external ? '_blank' : undefined}
                      rel={s.cta.external ? 'noreferrer' : undefined}
                      className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-on-accent shadow-[0_10px_40px_-10px_var(--accent-glow)] transition hover:bg-accent-soft"
                    >
                      {s.cta.label}
                    </Link>
                    {s.secondary ? (
                      <Link
                        href={s.secondary.href}
                        target={s.secondary.external ? '_blank' : undefined}
                        rel={s.secondary.external ? 'noreferrer' : undefined}
                        className="rounded-full border border-border-strong px-6 py-3 text-sm font-medium text-foreground transition hover:border-accent hover:text-accent"
                      >
                        {s.secondary.label}
                      </Link>
                    ) : null}
                  </div>
                </div>
                <div className="md:col-span-3 space-y-8">
                  {s.groups.map((g) => (
                    <div key={g.label}>
                      <p className="text-[11px] uppercase tracking-[0.22em] text-muted">
                        {g.label}
                      </p>
                      <ul className="mt-4 space-y-2.5">
                        {g.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-base text-foreground"
                          >
                            <span
                              aria-hidden
                              className="mt-2 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Final CTA */}
        <section className="bg-background-elev-1/40">
          <div className="mx-auto max-w-3xl px-6 py-20 text-center">
            <h2 className="font-serif text-3xl leading-tight text-foreground md:text-4xl">
              Not sure where to start?
            </h2>
            <p className="mt-6 text-base text-muted">
              Tell me where you are. I respond in under 24 hours with the concrete next step —
              whether a loan, a property, coaching, or a resource recommendation.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/en/#contacto"
                className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-on-accent shadow-[0_10px_40px_-10px_var(--accent-glow)] transition hover:bg-accent-soft"
              >
                Book a consultation
              </Link>
              <a
                href={contact.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border-strong px-6 py-3 text-sm font-medium text-foreground transition hover:border-accent hover:text-accent"
              >
                Message me on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
