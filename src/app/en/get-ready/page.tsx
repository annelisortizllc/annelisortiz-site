import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PageHeader } from '@/components/PageHeader'
import { LeadMagnetForm } from '@/components/sections/LeadMagnetForm'
import { breadcrumbJsonLd, jsonLdScript } from '@/lib/jsonld'
import { assets } from '@/lib/site'
import { stepsEn } from '@/content/checklist'

export const metadata: Metadata = {
  title: 'Free checklist · Before You Decide',
  description:
    "The 10-step preparation checklist I walk through with every family before they apply for a mortgage. Free, in your inbox in 60 seconds.",
  alternates: {
    canonical: 'https://annelisortiz.com/en/get-ready',
    languages: {
      'es-ES': 'https://annelisortiz.com/preparate',
      'en-US': 'https://annelisortiz.com/en/get-ready',
    },
  },
}

const crumbs = [
  { name: 'Home', path: '/en' },
  { name: 'Free checklist', path: '/en/get-ready' },
]

const valueBullets = [
  'The 10 exact steps I walk through with every family before applying',
  'Mistakes that kill approvals — and how to avoid them',
  'FHA, conventional, VA: which one fits your profile',
  'How to document income if you are self-employed or have a side hustle',
  'Full PITI: the real number to target',
]

export default function GetReadyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(breadcrumbJsonLd(crumbs))}
      />

      <PageHeader
        eyebrow="Free resource"
        title="The 10-step checklist before applying for a mortgage."
        lead="The same framework I walk through with every client before they fill out a single application. Leave your name and email — it lands in your inbox in 60 seconds."
        crumbs={crumbs}
      />

      <div data-theme="cream" className="bg-background text-foreground">
        <section className="mx-auto max-w-5xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-5">
            <div className="md:col-span-3">
              <p className="text-xs uppercase tracking-[0.22em] text-accent">
                What you will receive
              </p>
              <h2 className="mt-4 font-serif text-3xl leading-tight text-foreground md:text-4xl">
                Not theory — the same framework as the book <em>Antes de Decidir</em>.
              </h2>

              <ul className="mt-8 space-y-4 text-base text-muted">
                {valueBullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-1 text-accent" aria-hidden>
                      ✓
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 rounded-2xl border border-border bg-background-elev-1/60 p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-accent">
                  Send me the checklist
                </p>
                <p className="mt-2 mb-6 text-sm text-muted">
                  No spam. One-time send, straight to your inbox.
                </p>
                <LeadMagnetForm
                  locale="en"
                  copy={{
                    nameLabel: 'Name',
                    emailLabel: 'Email',
                    submit: 'Send me the checklist',
                    submitting: 'Sending…',
                  }}
                />
              </div>
            </div>

            <aside className="md:col-span-2">
              <div className="sticky top-24">
                <div className="relative overflow-hidden rounded-2xl border border-border bg-background-elev-1">
                  <Image
                    src={assets.bookCover}
                    alt="Antes de Decidir book cover"
                    width={800}
                    height={1200}
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="mt-4 text-xs uppercase tracking-[0.22em] text-muted">
                  From the author of <em>Antes de Decidir</em>
                </p>
                <p className="mt-2 text-sm text-muted">
                  Annelis Ortiz · NMLS #2006182<br />
                  Mortgage Loan Originator at NEXA Lending<br />
                  Real Estate Agent
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section className="border-t border-border">
          <div className="mx-auto max-w-5xl px-6 py-16">
            <p className="text-xs uppercase tracking-[0.22em] text-accent">
              First 3 steps (preview)
            </p>
            <h3 className="mt-4 font-serif text-2xl leading-tight text-foreground md:text-3xl">
              Preview of the content.
            </h3>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {stepsEn.slice(0, 3).map((s) => (
                <article
                  key={s.num}
                  className="rounded-2xl border border-border bg-background-elev-1/40 p-6"
                >
                  <div className="text-xs uppercase tracking-[0.22em] text-accent">
                    Step {s.num}
                  </div>
                  <h4 className="mt-3 font-serif text-xl leading-snug text-foreground">
                    {s.title}
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {s.why.slice(0, 160)}…
                  </p>
                </article>
              ))}
            </div>
            <p className="mt-10 text-sm text-muted">
              The remaining 7 steps land in your email. Prefer to talk first?{' '}
              <Link href="/en#contact" className="text-accent hover:underline">
                Reach out directly
              </Link>
              .
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
