import type { Metadata } from 'next'
import { PageHeader } from '@/components/PageHeader'
import { ChecklistContent } from '@/components/sections/ChecklistContent'
import { breadcrumbJsonLd, jsonLdScript } from '@/lib/jsonld'
import { contact, applicationPortal, site } from '@/lib/site'
import { stepsEn } from '@/content/checklist'

export const metadata: Metadata = {
  title: 'Preparation Checklist · 10 steps before the mortgage',
  description:
    'The 10 steps I walk through with every family before they apply for a mortgage. Same framework as the book Antes de Decidir.',
  alternates: {
    canonical: 'https://annelisortiz.com/en/resource/preparation-checklist',
    languages: {
      'es-ES': 'https://annelisortiz.com/recurso/checklist-preparacion',
      'en-US': 'https://annelisortiz.com/en/resource/preparation-checklist',
    },
  },
}

const crumbs = [
  { name: 'Home', path: '/en' },
  { name: 'Resource', path: '/en/resource/preparation-checklist' },
]

function howToJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: '10-step checklist before applying for a mortgage',
    description:
      'Practical financial and credit preparation framework Annelis Ortiz, Mortgage Loan Originator (NMLS #2006182), walks through with every family before they apply for a mortgage.',
    inLanguage: 'en',
    author: { '@id': `${site.url}#person` },
    step: stepsEn.map((s) => ({
      '@type': 'HowToStep',
      position: s.num,
      name: s.title,
      text: s.why,
      itemListElement: s.action.map((a, i) => ({
        '@type': 'HowToDirection',
        position: i + 1,
        text: a,
      })),
    })),
  }
}

export default function PreparationChecklistPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(breadcrumbJsonLd(crumbs))}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(howToJsonLd())}
      />

      <PageHeader
        eyebrow="Resource · Before You Decide"
        title="10-step checklist before applying for a mortgage."
        lead="Read it in order, check off what you already have, and work on what's missing. The same framework I use with every client before they fill out a single application."
        crumbs={crumbs}
      />

      <div data-theme="cream" className="bg-background text-foreground">
        <ChecklistContent
          steps={stepsEn}
          copy={{
            stepLabel: 'Step',
            whyLabel: 'Why it matters',
            actionLabel: 'Concrete action',
            pitfallLabel: 'Common mistake',
            ctaTitle: 'When you are ready',
            ctaLead: "Let's talk about your specific situation.",
            ctaBooking: 'Book a consultation',
            ctaWhatsApp: 'WhatsApp',
            ctaBook: 'Read the book',
            bookingHref: applicationPortal.url,
            whatsAppHref: contact.whatsappUrl,
            bookHref: '/en/libros/antes-de-decidir',
          }}
        />
      </div>
    </>
  )
}
