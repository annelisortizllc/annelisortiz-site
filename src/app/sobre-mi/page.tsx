import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PageHeader } from '@/components/PageHeader'
import { breadcrumbJsonLd, jsonLdScript } from '@/lib/jsonld'
import { social, assets } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Sobre mí',
  description:
    'Originadora de Préstamos Hipotecarios en NEXA Lending y Agente de Bienes Raíces. 5+ años de experiencia, 197+ familias atendidas, autora de "Antes de Decidir".',
  alternates: {
    canonical: 'https://annelisortiz.com/sobre-mi',
    languages: {
      'es-ES': 'https://annelisortiz.com/sobre-mi',
      'en-US': 'https://annelisortiz.com/en/sobre-mi',
    },
  },
}

const crumbs = [
  { name: 'Inicio', path: '/' },
  { name: 'Sobre mí', path: '/sobre-mi' },
]

const highlights = [
  { value: '197+', label: 'Familias y clientes atendidos' },
  { value: '30K+', label: 'Comunidad digital' },
  { value: '5+', label: 'Años en hipotecas y bienes raíces' },
  { value: '3', label: 'Regiones: EE.UU., Puerto Rico, LATAM' },
]

const trayectoria = [
  {
    title: 'Formación universitaria en contabilidad',
    body: 'Una base sólida en números y finanzas que aplico a cada estrategia hipotecaria y de inversión que diseño con mis clientes.',
  },
  {
    title: 'Originadora de Préstamos Hipotecarios en NEXA Lending',
    body: 'Estructuro financiamientos para compradores de primera vivienda, refinanciamientos y propiedades de inversión en Estados Unidos.',
  },
  {
    title: 'Agente de Bienes Raíces',
    body: 'Acompaño el proceso completo de compra y venta de propiedades principales y de inversión, con visión a largo plazo.',
  },
  {
    title: 'Autora de "Antes de Decidir"',
    body: 'Un libro enfocado en educación financiera, preparación crediticia y mentalidad — todo lo que NADIE te enseñó antes de firmar tu primera hipoteca.',
  },
  {
    title: 'Esposa y madre de cuatro hijos',
    body: 'Mi familia es la inspiración detrás de mi misión: ayudar a otras familias a alcanzar estabilidad, seguridad y crecimiento financiero a largo plazo.',
  },
]

export default function SobreMiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(breadcrumbJsonLd(crumbs))}
      />

      <PageHeader
        eyebrow="Sobre mí"
        title="Estrategia, educación y un enfoque humano en cada decisión de bienes raíces."
        lead="Originadora de Préstamos Hipotecarios en NEXA Lending y Agente de Bienes Raíces. Mi trabajo combina números, preparación y un compromiso real con cada familia que decide construir patrimonio a través de la propiedad."
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

      {/* Retrato + Bio completa */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <div className="sticky top-24">
              <div className="relative overflow-hidden rounded-2xl border border-border bg-background-elev-1">
                <Image
                  src={assets.portrait}
                  alt="Retrato profesional de Annelis Ortiz"
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
        <p className="text-xs uppercase tracking-[0.22em] text-accent">Biografía</p>
        <h2 className="mt-4 font-serif text-3xl leading-tight text-foreground md:text-4xl">
          La historia detrás de las cifras.
        </h2>

        <div className="prose-bio mt-10 space-y-7 text-lg leading-relaxed text-muted">
          <p>
            <strong className="text-foreground">Annelis Ortiz</strong> es Originadora de
            Préstamos Hipotecarios en <strong className="text-foreground">NEXA Lending</strong>{' '}
            y Agente de Bienes Raíces, reconocida por combinar estrategia financiera, educación
            y un enfoque humano en cada etapa del proceso de compra e inversión inmobiliaria.
          </p>
          <p>
            Con formación universitaria en <strong className="text-foreground">contabilidad</strong>{' '}
            y más de <strong className="text-foreground">cinco años de experiencia</strong> en la
            industria hipotecaria y de bienes raíces en Estados Unidos, ha ayudado a{' '}
            <strong className="text-foreground">197+ familias y compradores</strong> a prepararse
            financieramente, organizar su crédito y tomar decisiones inteligentes para construir
            patrimonio a través de bienes raíces.
          </p>
          <p>
            Su trayectoria se ha distinguido por la honestidad, la claridad y el compromiso
            genuino con cada cliente. Más allá de ofrecer financiamiento hipotecario, Annelis se
            enfoca en brindar orientación estratégica y personalizada, adaptando cada solución a
            las metas y necesidades específicas de quienes confían en ella. Su capacidad para
            simplificar procesos complejos y acompañar a las personas con transparencia y cercanía
            la ha convertido en una profesional de confianza dentro de la comunidad hispana y
            latinoamericana.
          </p>
          <p>
            Además de su labor profesional, es autora del libro{' '}
            <em className="text-foreground">"Antes de Decidir: Cuando Nadie Te Enseñó a Prepararte"</em>,
            una obra enfocada en educación financiera y preparación consciente antes de comprar una
            propiedad.
          </p>
          <p>
            Como <strong className="text-foreground">esposa y madre de cuatro hijos</strong>,
            encuentra en su familia la inspiración para seguir impactando vidas y ayudar a otras
            personas a alcanzar estabilidad, seguridad y crecimiento financiero. Para Annelis,
            cada compra de vivienda representa mucho más que una transacción: representa la
            oportunidad de transformar el futuro de una familia y crear un legado duradero.
          </p>
          <p>
            Hoy, a través de su marca personal, educación financiera y experiencia en hipotecas
            y bienes raíces, continúa guiando a compradores e inversionistas con una visión basada
            en <strong className="text-foreground">confianza, preparación y crecimiento a largo plazo</strong>.
            También acompaña como <strong className="text-foreground">Coach en español a Originadores de Préstamos</strong> que buscan crecer su producción y carrera.
          </p>
        </div>
          </div>
        </div>
      </section>

      {/* Trayectoria */}
      <section className="border-y border-border bg-background-elev-1/40">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-xs uppercase tracking-[0.22em] text-accent">Trayectoria</p>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-foreground md:text-4xl">
            Lo que respalda cada conversación.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {trayectoria.map((t, i) => (
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

      {/* CTA + redes */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h2 className="font-serif text-3xl leading-tight text-foreground md:text-4xl">
          ¿Listos para preparar el siguiente paso?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base text-muted">
          Cuéntame en qué etapa estás — ya sea construyendo tu primer crédito, comprando tu primera
          casa o estructurando una propiedad de inversión.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/#contacto"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-on-accent shadow-[0_10px_40px_-10px_var(--accent-glow)] transition hover:bg-accent-soft"
          >
            Agendar consulta
          </Link>
          <Link
            href="/libros/antes-de-decidir"
            className="rounded-full border border-border-strong px-6 py-3 text-sm font-medium text-foreground transition hover:border-accent hover:text-accent"
          >
            Conoce el libro
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
