import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PageHeader } from '@/components/PageHeader'
import { breadcrumbJsonLd, faqJsonLd, jsonLdScript } from '@/lib/jsonld'
import { social, assets, site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Mortgage Loan Originator at NEXA Lending and Real Estate Agent. 5+ years of experience, 197+ families served, author of "Antes de Decidir".',
  alternates: {
    canonical: `${site.url}/en/sobre-mi`,
    languages: {
      'es-ES': `${site.url}/sobre-mi`,
      'en-US': `${site.url}/en/sobre-mi`,
    },
  },
}

const crumbs = [
  { name: 'Home', path: '/en' },
  { name: 'About', path: '/en/sobre-mi' },
]

const highlights = [
  { value: '197+', label: 'Families and clients served' },
  { value: '30K+', label: 'Digital community' },
  { value: '5+', label: 'Years in mortgage and real estate' },
  { value: '3', label: 'Regions: US, Puerto Rico, LATAM' },
]

const faqs = [
  {
    question: 'What kind of mortgage loans do you handle?',
    answer:
      'As a Mortgage Loan Originator at NEXA Lending, I structure conventional, FHA, VA, jumbo, and investment property loans. I work with first-time buyers, refinances, and second-home buyers.',
  },
  {
    question: 'Do you only serve first-time buyers or also investors?',
    answer:
      'Both. I work with families buying their first home and with investors building a rental property portfolio. As a Real Estate Agent I can also help you find the right property.',
  },
  {
    question: 'Do you work with clients who are still preparing their credit?',
    answer:
      'Yes. A big part of my work is credit and financial preparation before purchase. If your credit or reserves are not ready yet, we design a step-by-step plan so you get qualified at the best possible rate.',
  },
  {
    question: 'Do you serve clients in English and Spanish?',
    answer:
      'Yes, I work with clients in both languages. My main focus is the Hispanic community across the US, Puerto Rico, and Latin America, but I also serve buyers who prefer to do the process in English.',
  },
  {
    question: 'How does your coaching for Mortgage Loan Originators work?',
    answer:
      'I coach Spanish-speaking Originators who want to grow their production and build a sustainable career. The coaching combines sales strategy, pipeline organization, personal marketing, and mindset. Reach out if you want to chat.',
  },
]

const trajectory = [
  {
    title: 'University background in accounting',
    body: 'A solid foundation in numbers and finance that I apply to every mortgage and investment strategy I design with my clients.',
  },
  {
    title: 'Mortgage Loan Originator at NEXA Lending',
    body: 'I structure financing for first-time buyers, refinances, and investment properties across the United States.',
  },
  {
    title: 'Real Estate Agent',
    body: 'I guide the full process of buying and selling primary and investment properties, with a long-term vision.',
  },
  {
    title: 'Author of "Antes de Decidir"',
    body: 'A book focused on financial education, credit preparation, and mindset — everything NOBODY taught you before signing your first mortgage.',
  },
  {
    title: 'Wife and mother of four',
    body: 'My family is the inspiration behind my mission: helping other families achieve stability, security, and long-term financial growth.',
  },
]

export default function AboutPageEN() {
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
        eyebrow="About"
        title="Strategy, education, and a human approach in every real estate decision."
        lead="Mortgage Loan Originator at NEXA Lending and Real Estate Agent. My work combines numbers, preparation, and a real commitment to every family that decides to build wealth through property."
        crumbs={crumbs}
      />

      <div data-theme="cream" className="bg-background text-foreground">

      {/* Stats */}
      <section className="border-b border-border bg-background-elev-1/40">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {highlights.map((s) => (
              <div key={s.label}>
                <div className="font-serif text-4xl text-foreground">
                  <span className="bg-gradient-to-b from-[var(--accent-soft)] to-[var(--accent-deep)] bg-clip-text text-transparent">
                    {s.value}
                  </span>
                </div>
                <div className="mt-2 text-sm uppercase tracking-wider text-muted">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portrait + Full bio */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <div className="sticky top-24">
              <div className="relative overflow-hidden rounded-2xl border border-border bg-background-elev-1">
                <Image
                  src={assets.portrait}
                  alt="Professional portrait of Annelis Ortiz"
                  width={1080}
                  height={1440}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              <p className="mt-4 text-[11px] uppercase tracking-[0.22em] text-muted">
                Annelis Ortiz · NMLS #2006182
              </p>
            </div>
          </div>
          <div className="md:col-span-3">
        <p className="text-xs uppercase tracking-[0.22em] text-accent">Biography</p>
        <h2 className="mt-4 font-serif text-3xl leading-tight text-foreground md:text-4xl">
          The story behind the numbers.
        </h2>

        <div className="prose-bio mt-10 space-y-7 text-lg leading-relaxed text-muted">
          <p>
            <strong className="text-foreground">Annelis Ortiz</strong> is a Mortgage Loan
            Originator at <strong className="text-foreground">NEXA Lending</strong> and a Real
            Estate Agent, recognized for combining financial strategy, education, and a human
            approach at every stage of the home buying and investment process.
          </p>
          <p>
            With a university background in <strong className="text-foreground">accounting</strong>{' '}
            and more than <strong className="text-foreground">five years of experience</strong> in
            the US mortgage and real estate industry, she has helped{' '}
            <strong className="text-foreground">197+ families and buyers</strong> prepare
            financially, organize their credit, and make smart decisions to build wealth through
            real estate.
          </p>
          <p>
            Her career is defined by honesty, clarity, and a genuine commitment to every client.
            Beyond offering mortgage financing, Annelis focuses on strategic, personalized guidance,
            adapting every solution to the specific goals and needs of those who trust her. Her
            ability to simplify complex processes and accompany people with transparency and
            closeness has made her a trusted professional within the Hispanic and Latin American
            community.
          </p>
          <p>
            In addition to her professional work, she is the author of{' '}
            <em className="text-foreground">"Antes de Decidir: When No One Taught You How to Prepare"</em>,
            a book focused on financial education and conscious preparation before buying property.
          </p>
          <p>
            As a <strong className="text-foreground">wife and mother of four</strong>, she finds
            in her family the inspiration to keep impacting lives and helping others achieve
            stability, security, and financial growth. For Annelis, every home purchase is far
            more than a transaction: it is the chance to transform a family's future and build a
            lasting legacy.
          </p>
          <p>
            Today, through her personal brand, financial education, and experience in mortgages
            and real estate, she continues guiding buyers and investors with a vision based on{' '}
            <strong className="text-foreground">trust, preparation, and long-term growth</strong>.
            She also serves as a{' '}
            <strong className="text-foreground">Spanish-language Coach to Mortgage Loan Originators</strong>{' '}
            who want to grow their production and career.
          </p>
        </div>
          </div>
        </div>
      </section>

      {/* Trajectory */}
      <section className="border-y border-border bg-background-elev-1/40">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-xs uppercase tracking-[0.22em] text-accent">Career</p>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-foreground md:text-4xl">
            What backs every conversation.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {trajectory.map((t, i) => (
              <article
                key={t.title}
                className="rounded-2xl border border-border bg-background-elev-2/60 p-7 transition hover:border-accent/60"
              >
                <div className="mb-4 font-serif text-2xl text-accent">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-serif text-xl text-foreground">{t.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{t.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-24">
          <p className="text-xs uppercase tracking-[0.22em] text-accent">FAQ</p>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-foreground md:text-4xl">
            The questions I hear most before we start.
          </h2>
          <dl className="mt-12 space-y-8">
            {faqs.map((f) => (
              <div
                key={f.question}
                className="rounded-2xl border border-border bg-background-elev-1/40 p-7"
              >
                <dt className="font-serif text-xl text-foreground">{f.question}</dt>
                <dd className="mt-3 text-base leading-relaxed text-muted">{f.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA + social */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h2 className="font-serif text-3xl leading-tight text-foreground md:text-4xl">
          Ready to prepare your next step?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base text-muted">
          Tell me where you are — whether you are building your first credit history, buying your
          first home, or structuring an investment property.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/en/#contacto"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-on-accent shadow-[0_10px_40px_-10px_var(--accent-glow)] transition hover:bg-accent-soft"
          >
            Book a consultation
          </Link>
          <Link
            href="/en/libros/antes-de-decidir"
            className="rounded-full border border-border-strong px-6 py-3 text-sm font-medium text-foreground transition hover:border-accent hover:text-accent"
          >
            Learn about the book
          </Link>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted">
          <a href={social.instagram} target="_blank" rel="noreferrer" className="hover:text-foreground">Instagram</a>
          <a href={social.facebook} target="_blank" rel="noreferrer" className="hover:text-foreground">Facebook</a>
          <a href={social.tiktok} target="_blank" rel="noreferrer" className="hover:text-foreground">TikTok</a>
          <a href={social.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground">LinkedIn</a>
          <a href={social.youtube} target="_blank" rel="noreferrer" className="hover:text-foreground">YouTube</a>
        </div>
      </section>

      </div>
    </>
  )
}
