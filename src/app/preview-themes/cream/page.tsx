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

export const metadata: Metadata = {
  title: 'Preview · Cream theme',
  description: 'Vista previa de la homepage en tema claro cream.',
  robots: { index: false, follow: false },
}

export default async function PreviewCreamPage() {
  const dict = await getDictionary()
  return (
    <div data-theme="cream" className="bg-background text-foreground">
      <div className="border-b border-border bg-background-elev-1/60">
        <div className="mx-auto max-w-6xl px-6 py-3 text-xs uppercase tracking-[0.22em] text-accent">
          Preview · Cream theme (interno, no indexable)
        </div>
      </div>
      <Hero dict={dict} />
      <Reveal><Stats dict={dict} /></Reveal>
      <Reveal><AboutPreview dict={dict} /></Reveal>
      <Reveal><Philosophy dict={dict} /></Reveal>
      <Reveal><Ecosystem dict={dict} /></Reveal>
      <Reveal><BookFeature dict={dict} /></Reveal>
      <Reveal><SocialProof dict={dict} /></Reveal>
      <Reveal><Testimonials dict={dict} /></Reveal>
      <Reveal><Contact dict={dict} /></Reveal>
    </div>
  )
}
