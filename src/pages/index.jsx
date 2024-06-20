import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { About } from '@/components/About'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
// import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Reviews'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'

export default function Home() {
  
  return (
    <>
      <Head>
        <title>King @ Law - Legal Services for Everyone.</title>
        <meta
          name="description"
          content="Legal Services for Everyone"
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <SecondaryFeatures />
        <CallToAction />
        <Reviews />
        <Pricing />
        <About />
      </main>
      <Footer />
    </>
  )
}
