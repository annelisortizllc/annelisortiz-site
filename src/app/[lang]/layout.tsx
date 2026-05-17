import type { Metadata, Viewport } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import { notFound } from 'next/navigation'
import '../globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { getDictionary, hasLocale, locales } from '@/lib/dictionaries'
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

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export async function generateMetadata(props: LayoutProps<'/[lang]'>): Promise<Metadata> {
  const { lang } = await props.params
  if (!hasLocale(lang)) return {}
  const dict = await getDictionary(lang)
  const url = `${site.url}/${lang}`
  return {
    metadataBase: new URL(site.url),
    title: { default: dict.meta.title, template: '%s — Annelis Ortiz' },
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    alternates: {
      canonical: url,
      languages: {
        es: `${site.url}/es`,
        en: `${site.url}/en`,
        'x-default': `${site.url}/es`,
      },
    },
    openGraph: {
      type: 'website',
      url,
      siteName: site.name,
      title: dict.meta.title,
      description: dict.meta.description,
      locale: lang === 'es' ? 'es_ES' : 'en_US',
      images: [{ url: site.ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.meta.title,
      description: dict.meta.description,
      images: [site.ogImage],
    },
    robots: { index: true, follow: true },
  }
}

export default async function LangLayout(props: LayoutProps<'/[lang]'>) {
  const { lang } = await props.params
  if (!hasLocale(lang)) notFound()
  const dict = await getDictionary(lang)

  return (
    <html lang={lang} className={`${sans.variable} ${serif.variable}`}>
      <body className="min-h-screen bg-background text-foreground font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(personJsonLd(lang))}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(websiteJsonLd(lang))}
        />
        <Header dict={dict} locale={lang} />
        <main className="flex-1">{props.children}</main>
        <Footer dict={dict} locale={lang} />
      </body>
    </html>
  )
}
