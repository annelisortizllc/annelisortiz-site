import type { Metadata, Viewport } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { getDictionary } from '@/lib/dictionaries'
import { personJsonLd, websiteJsonLd, jsonLdScript } from '@/lib/jsonld'
import { site } from '@/lib/site'

const sans = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })
const serif = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-serif',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#07070a',
  colorScheme: 'dark',
}

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getDictionary()
  return {
    metadataBase: new URL(site.url),
    title: { default: dict.meta.title, template: '%s — Annelis Ortiz' },
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    alternates: {
      canonical: site.url,
      languages: {
        'es-ES': site.url,
        'en-US': `${site.url}/en`,
      },
    },
    openGraph: {
      type: 'website',
      url: site.url,
      siteName: site.name,
      title: dict.meta.title,
      description: dict.meta.description,
      locale: 'es_ES',
      alternateLocale: 'en_US',
      // Image is auto-wired from app/opengraph-image.tsx
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.meta.title,
      description: dict.meta.description,
      // Image falls back to the opengraph-image automatically.
    },
    robots: { index: true, follow: true },
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${sans.variable} ${serif.variable}`}>
      <body className="min-h-screen bg-background text-foreground font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(personJsonLd())}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(websiteJsonLd())}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
