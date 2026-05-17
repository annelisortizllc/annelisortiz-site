import { getDictionary } from '@/lib/dictionaries'
import { Hero } from '@/components/sections/Hero'
import { Stats } from '@/components/sections/Stats'
import { AboutPreview } from '@/components/sections/AboutPreview'
import { Philosophy } from '@/components/sections/Philosophy'
import { Ecosystem } from '@/components/sections/Ecosystem'
import { BookFeature } from '@/components/sections/BookFeature'
import { SocialProof } from '@/components/sections/SocialProof'
import { Contact } from '@/components/sections/Contact'

export default async function HomePage() {
  const dict = await getDictionary()

  return (
    <>
      <Hero dict={dict} />
      <Stats dict={dict} />
      <AboutPreview dict={dict} />
      <Philosophy dict={dict} />
      <Ecosystem dict={dict} />
      <BookFeature dict={dict} />
      <SocialProof dict={dict} />
      <Contact dict={dict} />
    </>
  )
}
