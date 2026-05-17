import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/PageHeader'
import { breadcrumbJsonLd, faqJsonLd, jsonLdScript } from '@/lib/jsonld'

export const metadata: Metadata = {
  title: 'Conferencias',
  description:
    'Annelis Ortiz como conferencista: educación financiera, compra inteligente de propiedades y construcción de patrimonio para familias hispanas y latinoamericanas.',
  alternates: { canonical: 'https://annelisortiz.com/conferencias' },
}

const crumbs = [
  { name: 'Inicio', path: '/' },
  { name: 'Conferencias', path: '/conferencias' },
]

const topics = [
  {
    title: 'Antes de Decidir: prepararte para tu primera propiedad',
    body: 'Una charla diseñada para audiencias hispanas que están considerando comprar su primera casa. Crédito, organización financiera y mentalidad de comprador.',
  },
  {
    title: 'Patrimonio en bienes raíces para familias latinas',
    body: 'Cómo la primera propiedad se convierte en la base de un legado generacional — con estrategia hipotecaria y visión a largo plazo.',
  },
  {
    title: 'Inversión en propiedades para profesionales hispanos',
    body: 'Estructura de financiamiento, cálculo de ROI, y cómo dar el salto de propietario a inversionista.',
  },
  {
    title: 'Educación financiera para comunidades',
    body: 'Workshops interactivos para asociaciones, empresas y grupos comunitarios. Adaptable a 45-90 minutos.',
  },
]

const audiences = [
  'Eventos corporativos y conferencias de la industria',
  'Asociaciones profesionales hispanas (NAHREP, cámaras locales)',
  'Grupos de inversión y bienes raíces',
  'Comunidades religiosas y de mujeres',
  'Universidades y programas de educación financiera',
  'Podcasts y medios',
]

const faqs = [
  {
    question: '¿En qué idioma das tus conferencias?',
    answer:
      'Principalmente en español, enfocado en la comunidad hispana en Estados Unidos y Latinoamérica. Inglés disponible bajo solicitud.',
  },
  {
    question: '¿Dónde puedes presentarte?',
    answer:
      'En Estados Unidos (presencial), Puerto Rico y Latinoamérica (presencial o virtual). Para eventos fuera de estas regiones, contáctame para coordinar.',
  },
  {
    question: '¿Qué duración manejas?',
    answer:
      'Charlas de 30-45 minutos, keynotes de 60 minutos y workshops de 90-120 minutos. También paneles y participaciones en podcasts.',
  },
  {
    question: '¿Cómo solicito tu participación?',
    answer:
      'Escríbeme desde la sección de contacto con la fecha tentativa, ubicación, audiencia y tema de interés. Respondo en menos de 24 horas.',
  },
]

export default function ConferenciasPage() {
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
        eyebrow="Conferencias"
        title="Educación financiera que se queda con la audiencia."
        lead="Comparto en eventos corporativos, comunidades hispanas y grupos de inversión sobre preparación financiera, compra inteligente de propiedades y construcción de patrimonio generacional."
        crumbs={crumbs}
      />

      {/* Temas */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-xs uppercase tracking-[0.22em] text-accent">Temas</p>
        <h2 className="mt-4 font-serif text-3xl leading-tight text-foreground md:text-4xl">
          Los formatos que más solicitan.
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

      {/* Audiencias */}
      <section className="border-y border-border bg-background-elev-1/40">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <p className="text-xs uppercase tracking-[0.22em] text-accent">Audiencias</p>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-foreground md:text-4xl">
            Dónde he presentado.
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
        <p className="text-xs uppercase tracking-[0.22em] text-accent">Preguntas frecuentes</p>
        <h2 className="mt-4 font-serif text-3xl leading-tight text-foreground md:text-4xl">
          Lo que los organizadores quieren saber.
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
            ¿Quieres invitarme a tu evento?
          </h2>
          <p className="mt-6 text-base text-muted">
            Escríbeme con la fecha, audiencia y tema. Te respondo con disponibilidad y propuesta
            en menos de 24 horas.
          </p>
          <Link
            href="/#contacto"
            className="mt-8 inline-flex rounded-full bg-accent px-6 py-3 text-sm font-medium text-on-accent shadow-[0_10px_40px_-10px_var(--accent-glow)] transition hover:bg-accent-soft"
          >
            Invitar a mi evento
          </Link>
        </div>
      </section>
    </>
  )
}
