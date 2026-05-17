import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from '@/lib/dictionaries'
import { Hero } from '@/components/sections/Hero'
import { Stats } from '@/components/sections/Stats'
import { AboutPreview } from '@/components/sections/AboutPreview'
import { Philosophy } from '@/components/sections/Philosophy'
import { Ecosystem } from '@/components/sections/Ecosystem'
import { SocialProof } from '@/components/sections/SocialProof'
import { Contact } from '@/components/sections/Contact'

export default async function HomePage(props: PageProps<'/[lang]'>) {
  const { lang } = await props.params
  if (!hasLocale(lang)) notFound()
  const dict = await getDictionary(lang)

  return (
    <>
      <Hero dict={dict} locale={lang} />
      <Stats dict={dict} />
      <AboutPreview dict={dict} locale={lang} />
      <Philosophy dict={dict} />
      <Ecosystem dict={dict} />
      <SocialProof dict={dict} />
      <Contact dict={dict} />
    </>
  )
}
