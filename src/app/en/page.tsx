import type { Metadata } from 'next'
import { getDictionary } from '@/lib/dictionaries'
import { Hero } from '@/components/sections/Hero'
import { Stats } from '@/components/sections/Stats'
import { AboutPreview } from '@/components/sections/AboutPreview'
import { Philosophy } from '@/components/sections/Philosophy'
import { Ecosystem } from '@/components/sections/Ecosystem'
import { BookFeature } from '@/components/sections/BookFeature'
import { SocialProof } from '@/components/sections/SocialProof'
import { Testimonials } from '@/components/sections/Testimonials'
import { Contact } from '@/components/sections/Contact'
import { Reveal } from '@/components/Reveal'
import { site } from '@/lib/site'

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getDictionary('en')
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    alternates: {
      canonical: `${site.url}/en`,
      languages: {
        'es-ES': site.url,
        'en-US': `${site.url}/en`,
      },
    },
    openGraph: {
      type: 'website',
      url: `${site.url}/en`,
      siteName: site.name,
      title: dict.meta.title,
      description: dict.meta.description,
      locale: 'en_US',
      alternateLocale: 'es_ES',
    },
  }
}

export default async function HomePageEN() {
  const dict = await getDictionary('en')

  return (
    <>
      <Hero dict={dict} />
      <div data-theme="cream" className="bg-background text-foreground">
        <Reveal><Stats dict={dict} /></Reveal>
        <Reveal><AboutPreview dict={dict} /></Reveal>
        <Reveal><Philosophy dict={dict} /></Reveal>
        <Reveal><Ecosystem dict={dict} /></Reveal>
      </div>
      <div className="bg-background text-foreground">
        <Reveal><BookFeature dict={dict} /></Reveal>
      </div>
      <div data-theme="cream" className="bg-background text-foreground">
        <Reveal><SocialProof dict={dict} /></Reveal>
        <Reveal><Testimonials dict={dict} /></Reveal>
        <Reveal><Contact dict={dict} /></Reveal>
      </div>
    </>
  )
}
