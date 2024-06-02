import Head from 'next/head'

import { PromCallToAction } from '@/components/PromCallToAction'
import { About } from '@/components/About'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { PromHero } from '@/components/PromHero'
import { Pricing } from '@/components/Pricing'
// import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Reviews'
import { PromPrimaryFeatures } from '@/components/PromPrimaryFeatures'
import { PromSecondaryFeatures } from '@/components/PromSecondaryFeatures'
import { PromFaqs } from '@/components/PromFaqs'

import { Testimonials } from '@/components/Testimonials'
import { AppStoreLink } from '@/components/AppStoreLink'
import { PromAppDetails } from '@/components/PromAppDetails'
import { useEffect } from 'react';
import Aos from 'aos'

export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);
  return (
    <>
      <Head>
        <title>Apps | King @ Law - A modern approach to law.</title>
        <meta
          name="description"
          content="A modern law firm in North Carolina."
        />
      </Head>
      <Header />
      <main>
        <PromHero />
        <PromAppDetails />
        <PromPrimaryFeatures />
        <PromSecondaryFeatures />
        {/* <Testimonials /> */}
        <PromCallToAction />
        <PromFaqs />
      </main>
      <Footer />
    </>
  )
}
