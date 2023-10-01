import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { About } from '@/components/About'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { PromHero } from '@/components/PromHero'
import { Pricing } from '@/components/Pricing'
// import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Reviews'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'

export default function Home() {
  return (
    <>
      <Head>
        <title>King @ Law - A modern approach to law.</title>
        <meta
          name="description"
          content="A modern law firm in North Carolina."
        />
      </Head>
      <Header />
      <main>
        <PromHero />
        <SecondaryFeatures />
        <Reviews />
        <CallToAction />
        <Pricing />
        <About />
      </main>
      <Footer />
    </>
  )
}
