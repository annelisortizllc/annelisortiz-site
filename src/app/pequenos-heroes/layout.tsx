import type { Metadata } from 'next'
import { Fredoka, Quicksand } from 'next/font/google'
import { KidsHeader } from '@/components/kids/KidsHeader'
import { KidsFooter } from '@/components/kids/KidsFooter'
import { site } from '@/lib/site'

// Kids-brand fonts loaded ONLY for /pequenos-heroes/* — keeps the global
// payload light. Fredoka for titles/buttons, Quicksand for body/subtitles.
const kidsTitle = Fredoka({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-kids-title',
  display: 'swap',
})

const kidsBody = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-kids-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Pequeños Héroes del Dinero — educación financiera para niños',
    template: '%s — Pequeños Héroes del Dinero',
  },
  description:
    'Pequeños Héroes del Dinero: cuentos, juegos y actividades para que tus hijos aprendan a ahorrar, decidir y soñar en grande. Con Coco, Lucy, Centavito, Doña Moneda y Gastón.',
  alternates: {
    canonical: `${site.url}/pequenos-heroes`,
  },
  openGraph: {
    type: 'book',
    siteName: 'Pequeños Héroes del Dinero',
    title: 'Pequeños Héroes del Dinero — aprende jugando, construye un gran futuro',
    description:
      'Cuentos, juegos y más de 100 actividades para que los niños descubran el valor del dinero, las metas y los hábitos que construyen un futuro con propósito.',
    locale: 'es_ES',
  },
}

export default function PequenosHeroesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div
      data-theme="kids"
      className={`${kidsTitle.variable} ${kidsBody.variable} min-h-screen bg-background text-foreground antialiased`}
      style={{ fontFamily: 'var(--font-kids-body)' }}
    >
      <KidsHeader />
      <main>{children}</main>
      <KidsFooter />
    </div>
  )
}
