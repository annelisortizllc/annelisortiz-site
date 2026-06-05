import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/PageHeader'
import { breadcrumbJsonLd, jsonLdScript } from '@/lib/jsonld'
import { contact, applicationPortal, site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Servicios',
  description:
    'Préstamos hipotecarios (convencional, FHA, VA, jumbo, NonQM: Bank Statement, DSCR, P&L, préstamos para extranjeros), compraventa de propiedades, coaching, educación financiera y conferencias. Annelis Ortiz — NEXA Lending + Keller Williams.',
  alternates: {
    canonical: `${site.url}/servicios`,
    languages: {
      'es-ES': `${site.url}/servicios`,
      'en-US': `${site.url}/en/servicios`,
    },
  },
}

const crumbs = [
  { name: 'Inicio', path: '/' },
  { name: 'Servicios', path: '/servicios' },
]

const services = [
  {
    id: 'hipotecas',
    eyebrow: 'NEXA Lending · NMLS #2006182',
    title: 'Préstamos Hipotecarios',
    lead: 'Estructuro financiamiento para compradores de primera vivienda, refinanciamientos, segunda casa, propiedades de inversión y perfiles no tradicionales. Trabajo cada préstamo con preparación crediticia previa cuando hace falta.',
    groups: [
      {
        label: 'Programas tradicionales',
        items: [
          'Convencional (Fannie Mae / Freddie Mac)',
          'FHA — bajo down payment, ideal para primer comprador',
          'VA — veteranos y servicio activo (cero down)',
          'USDA — propiedades rurales calificadas',
          'Jumbo — montos sobre el límite conforme',
          'Investment property (1-4 unidades)',
        ],
      },
      {
        label: 'NonQM (perfiles no tradicionales)',
        items: [
          'Bank Statement Loans — para autoempleados sin W-2',
          'DSCR — propiedades de inversión calificadas por la renta del inmueble',
          'Profit & Loss (P&L) — solo con estado financiero, sin tax returns',
          'Préstamos para Extranjeros (Foreign National) — sin SSN ni historial USA',
        ],
      },
    ],
    cta: {
      label: 'Aplicar en aortizloans.com',
      href: applicationPortal.url,
      external: true,
    },
    secondary: {
      label: 'Conversemos por WhatsApp',
      href: contact.whatsappUrl,
      external: true,
    },
  },
  {
    id: 'bienes-raices',
    eyebrow: 'Keller Williams Advantage III Realty',
    title: 'Compra y Venta de Propiedades',
    lead: 'Como Agente de Bienes Raíces acompaño el proceso completo: primera vivienda, segunda casa, propiedades de inversión y reventa. Mi enfoque combina la conversación hipotecaria con la búsqueda de la propiedad correcta para tu meta a largo plazo.',
    groups: [
      {
        label: 'En qué te acompaño',
        items: [
          'Primera vivienda — desde la búsqueda hasta el cierre',
          'Propiedades de inversión — análisis de cash-flow y ROI',
          'Segunda casa o vacacional',
          'Venta de tu propiedad actual con estrategia',
          'Análisis de mercado comparativo (CMA)',
        ],
      },
    ],
    cta: {
      label: 'Agendar conversación',
      href: '/#contacto',
      external: false,
    },
  },
  {
    id: 'coaching',
    eyebrow: 'Mentoría profesional',
    title: 'Coaching',
    lead: 'Programa en español para Originadores que quieren crecer su producción y construir una carrera sostenible. Combina estrategia comercial, organización del pipeline, marca personal y mentalidad.',
    groups: [
      {
        label: 'Qué cubre el coaching',
        items: [
          'Estructura de pipeline y seguimiento',
          'Marca personal y contenido en español',
          'Estrategia de referidos con realtors y partners',
          'Mentalidad y manejo del rechazo en originación',
          'Roadmap personalizado de crecimiento',
        ],
      },
    ],
    cta: {
      label: 'Aplicar al coaching',
      href: '/#contacto',
      external: false,
    },
  },
  {
    id: 'educacion-financiera',
    eyebrow: 'Comunidad + libro + contenido',
    title: 'Educación Financiera',
    lead: 'Educación práctica sobre preparación antes de comprar propiedad, construcción de crédito y mentalidad financiera para familias hispanas. Disponible a través del libro, blog y comunidad digital de 30K+ seguidores.',
    groups: [
      {
        label: 'Recursos disponibles',
        items: [
          'Libro "Antes de Decidir" — preparación financiera y mentalidad',
          'Blog con artículos prácticos en español',
          'Comunidad digital: Instagram, TikTok, YouTube, LinkedIn',
          'Workshops y charlas para organizaciones (ver Conferencias)',
        ],
      },
    ],
    cta: {
      label: 'Conoce el libro',
      href: '/libros/antes-de-decidir',
      external: false,
    },
  },
  {
    id: 'conferencias',
    eyebrow: 'Speaking',
    title: 'Conferencias y Speaking',
    lead: 'Keynotes, workshops y participaciones para eventos corporativos, asociaciones hispanas, grupos de inversión y comunidades. Temas: preparación financiera, compra inteligente de propiedades y patrimonio generacional.',
    groups: [
      {
        label: 'Formatos disponibles',
        items: [
          'Keynote de 60 minutos',
          'Charla 30-45 minutos',
          'Workshop 90-120 minutos',
          'Panel o entrevista en podcast',
          'Presencial en EE.UU. y virtual a Latinoamérica',
        ],
      },
    ],
    cta: {
      label: 'Ver detalle de conferencias',
      href: '/conferencias',
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
      url: `${site.url}/servicios#${s.id}`,
      provider: { '@id': `${site.url}#person` },
      areaServed: [
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'Puerto Rico' },
        { '@type': 'Place', name: 'Latin America' },
      ],
    },
  })),
}

export default function ServiciosPage() {
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
        eyebrow="Servicios"
        title="Cinco formas en que trabajo contigo."
        lead="Préstamos hipotecarios, compraventa de propiedades, coaching, educación financiera y conferencias. Todo desde la misma perspectiva: estrategia, preparación y un enfoque humano."
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

        {/* CTA final */}
        <section className="bg-background-elev-1/40">
          <div className="mx-auto max-w-3xl px-6 py-20 text-center">
            <h2 className="font-serif text-3xl leading-tight text-foreground md:text-4xl">
              ¿No estás seguro por dónde empezar?
            </h2>
            <p className="mt-6 text-base text-muted">
              Cuéntame en qué etapa estás. Te respondo en menos de 24 horas con el siguiente paso
              concreto — sea un préstamo, una propiedad, coaching o una recomendación de recursos.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/#contacto"
                className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-on-accent shadow-[0_10px_40px_-10px_var(--accent-glow)] transition hover:bg-accent-soft"
              >
                Agendar consulta
              </Link>
              <a
                href={contact.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border-strong px-6 py-3 text-sm font-medium text-foreground transition hover:border-accent hover:text-accent"
              >
                Escríbeme por WhatsApp
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
