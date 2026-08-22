import type { Metadata } from 'next'
import { PageHeader } from '@/components/PageHeader'
import { ChecklistContent } from '@/components/sections/ChecklistContent'
import { breadcrumbJsonLd, jsonLdScript } from '@/lib/jsonld'
import { contact, applicationPortal, site } from '@/lib/site'
import { stepsEs } from '@/content/checklist'

export const metadata: Metadata = {
  title: 'Checklist de Preparación · 10 pasos antes de la hipoteca',
  description:
    'Los 10 pasos que reviso con cada familia antes de aplicar para una hipoteca. El mismo marco del libro Antes de Decidir.',
  alternates: {
    canonical: 'https://annelisortiz.com/recurso/checklist-preparacion',
    languages: {
      'es-ES': 'https://annelisortiz.com/recurso/checklist-preparacion',
      'en-US': 'https://annelisortiz.com/en/resource/preparation-checklist',
    },
  },
}

const crumbs = [
  { name: 'Inicio', path: '/' },
  { name: 'Recurso', path: '/recurso/checklist-preparacion' },
]

function howToJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Checklist de 10 pasos antes de aplicar a una hipoteca',
    description:
      'Marco práctico de preparación financiera y crediticia que Annelis Ortiz, Prestamista (NMLS #2006182), aplica con cada familia antes de aplicar a una hipoteca.',
    inLanguage: 'es',
    author: { '@id': `${site.url}#person` },
    step: stepsEs.map((s) => ({
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

export default function ChecklistPreparacionPage() {
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
        eyebrow="Recurso · Antes de Decidir"
        title="Checklist de 10 pasos antes de aplicar a una hipoteca."
        lead="Léelo en orden, marca lo que ya tienes resuelto y trabaja lo que falta. Este es el mismo marco que uso con cada cliente antes de que llene una sola aplicación."
        crumbs={crumbs}
      />

      <div data-theme="cream" className="bg-background text-foreground">
        <ChecklistContent
          steps={stepsEs}
          copy={{
            stepLabel: 'Paso',
            whyLabel: 'Por qué importa',
            actionLabel: 'Acción concreta',
            pitfallLabel: 'Error común',
            ctaTitle: 'Cuando estés listo',
            ctaLead: 'Hablemos de tu caso específico.',
            ctaBooking: 'Agendar consulta',
            ctaWhatsApp: 'WhatsApp',
            ctaBook: 'Leer el libro',
            bookingHref: applicationPortal.url,
            whatsAppHref: contact.whatsappUrl,
            bookHref: '/libros/antes-de-decidir',
          }}
        />
      </div>
    </>
  )
}
