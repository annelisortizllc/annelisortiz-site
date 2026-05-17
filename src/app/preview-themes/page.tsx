import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Preview · Temas',
  description: 'Comparador interno de acentos cromáticos del sitio.',
  robots: { index: false, follow: false }, // no indexar — página de diseño interno
}

type Theme = {
  id: 'default' | 'finance' | 'coach'
  name: string
  vibe: string
  accent: string
  use: string
}

const themes: Theme[] = [
  {
    id: 'default',
    name: 'Champagne',
    vibe: 'Lujo · Real estate premium',
    accent: '#d4b06a',
    use: 'Activo hoy. Encaja con financiamiento + bienes raíces de alto valor. Vibe Apple/Architectural Digest.',
  },
  {
    id: 'finance',
    name: 'Azul confianza',
    vibe: 'Financiero · Banca moderna',
    accent: '#4f8cff',
    use: 'Comunica seguridad y expertise técnico. Vibe Stripe/Chase Private. Encaja con tu lado loan officer + contabilidad.',
  },
  {
    id: 'coach',
    name: 'Coral cálido',
    vibe: 'Coach · Autora · Mentora',
    accent: '#f08a6c',
    use: 'Más humano y cercano. Vibe author/podcast moderna. Encaja con tu lado de coach + autora + madre.',
  },
]

function ThemePreview({ theme }: { theme: Theme }) {
  return (
    <div
      data-theme={theme.id === 'default' ? undefined : theme.id}
      className="relative overflow-hidden rounded-3xl border border-border bg-background"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 left-1/2 h-[280px] w-[420px] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
        style={{
          background: `radial-gradient(closest-side, ${theme.accent}55, transparent 70%)`,
        }}
      />
      <div className="relative px-7 pt-8 pb-7">
        {/* Brand mark */}
        <div className="mb-8 flex items-center gap-2 font-serif text-base">
          <span
            className="inline-block h-2 w-2 rounded-full"
            style={{
              background: 'var(--accent)',
              boxShadow: '0 0 12px var(--accent-glow)',
            }}
          />
          <span className="text-foreground">Annelis Ortiz</span>
        </div>

        {/* Pico de headline */}
        <p className="text-[10px] uppercase tracking-[0.22em] text-muted">
          Originadora de Préstamos · NEXA Lending LLC
        </p>
        <h2 className="mt-3 font-serif text-2xl leading-[1.05] tracking-tight text-foreground">
          Construyendo patrimonio,
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                'linear-gradient(90deg, var(--accent-soft), var(--accent), var(--accent-deep))',
            }}
          >
            una familia a la vez.
          </span>
        </h2>

        {/* Stat */}
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div>
            <div className="font-serif text-3xl">
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    'linear-gradient(180deg, var(--accent-soft), var(--accent-deep))',
                }}
              >
                197+
              </span>
            </div>
            <div className="mt-1 text-[10px] uppercase tracking-wider text-muted">
              Familias atendidas
            </div>
          </div>
          <div>
            <div className="font-serif text-3xl">
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    'linear-gradient(180deg, var(--accent-soft), var(--accent-deep))',
                }}
              >
                30K+
              </span>
            </div>
            <div className="mt-1 text-[10px] uppercase tracking-wider text-muted">
              Comunidad
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-7 flex flex-wrap items-center gap-2">
          <span
            className="rounded-full px-4 py-2 text-xs font-medium"
            style={{
              background: 'var(--accent)',
              color: 'var(--on-accent)',
              boxShadow: '0 8px 30px -8px var(--accent-glow)',
            }}
          >
            Agendar consulta
          </span>
          <span className="rounded-full border border-border-strong px-4 py-2 text-xs font-medium text-foreground">
            Conoce mi historia
          </span>
        </div>
      </div>

      <div className="border-t border-border bg-background-elev-1/40 px-7 py-5">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="font-serif text-lg text-foreground">{theme.name}</p>
            <p className="text-xs text-muted">{theme.vibe}</p>
          </div>
          <span
            className="inline-block h-6 w-6 rounded-full border border-border-strong"
            style={{ background: theme.accent }}
            aria-hidden
          />
        </div>
        <p className="mt-3 text-xs leading-relaxed text-muted">{theme.use}</p>
      </div>
    </div>
  )
}

export default function PreviewThemesPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-12 max-w-2xl">
        <p className="text-xs uppercase tracking-[0.22em] text-accent">Preview interno</p>
        <h1 className="mt-4 font-serif text-4xl leading-tight text-foreground md:text-5xl">
          Elige el acento del sitio.
        </h1>
        <p className="mt-4 text-base text-muted">
          Comparador de los tres acentos posibles. Cada tarjeta aplica su tema localmente con el
          mismo CSS variables que rige el sitio completo. Cuando elijas uno, lo dejo activo por
          default en <code className="rounded bg-background-elev-1 px-1.5 py-0.5 text-[12px]">globals.css</code>.
        </p>
        <p className="mt-3 text-xs text-muted/70">
          Esta página está marcada como <code className="rounded bg-background-elev-1 px-1.5 py-0.5 text-[10px]">noindex</code> — no aparece en Google.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {themes.map((t) => (
          <ThemePreview key={t.id} theme={t} />
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-border bg-background-elev-1 p-7">
        <p className="text-xs uppercase tracking-[0.22em] text-accent">Cómo decidir</p>
        <ul className="mt-4 space-y-2 text-sm text-muted">
          <li>
            • <strong className="text-foreground">Champagne</strong> si quieres comunicar lujo y
            real estate premium. Es el más diferenciador en la industria hispana.
          </li>
          <li>
            • <strong className="text-foreground">Azul confianza</strong> si lo más importante es
            que el cliente sienta seguridad financiera al primer vistazo.
          </li>
          <li>
            • <strong className="text-foreground">Coral cálido</strong> si tu marca pivota más
            hacia coach/autora y la audiencia es más emocional.
          </li>
        </ul>
        <p className="mt-4 text-xs text-muted/70">
          Tip: revisa cómo te ves en las redes que tu audiencia ya usa. Si tu Instagram tiene
          tonos cálidos, el coral integra; si es más editorial, el champagne; si es más profesional
          corporativo, el azul.
        </p>
      </div>
    </section>
  )
}
