import { getDictionary } from '@/lib/dictionaries'
import { Hero } from '@/components/sections/Hero'
import { Stats } from '@/components/sections/Stats'
import { AboutPreview } from '@/components/sections/AboutPreview'
import { MapaVIP } from '@/components/sections/MapaVIP'
import { Philosophy } from '@/components/sections/Philosophy'
import { Ecosystem } from '@/components/sections/Ecosystem'
import { BookFeature } from '@/components/sections/BookFeature'
import { LeadMagnetCTA } from '@/components/sections/LeadMagnetCTA'
import { Testimonials } from '@/components/sections/Testimonials'
import { Contact } from '@/components/sections/Contact'
import { Reveal } from '@/components/Reveal'

export default async function HomePage() {
  const dict = await getDictionary()

  return (
    <>
      <Hero dict={dict} />
      <div data-theme="cream" className="bg-background text-foreground">
        <Reveal><Stats dict={dict} /></Reveal>
        <Reveal><MapaVIP /></Reveal>
        <Reveal><AboutPreview dict={dict} /></Reveal>
        <Reveal><Philosophy dict={dict} /></Reveal>
        <Reveal><Ecosystem dict={dict} /></Reveal>
      </div>
      <div className="bg-background text-foreground">
        <Reveal><BookFeature dict={dict} /></Reveal>
        <Reveal><LeadMagnetCTA locale="es" /></Reveal>
      </div>
      <div data-theme="cream" className="bg-background text-foreground">
        <Reveal><Testimonials dict={dict} /></Reveal>
        <Reveal><Contact dict={dict} /></Reveal>
      </div>
    </>
  )
}
