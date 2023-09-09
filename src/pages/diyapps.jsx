import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/About'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Reviews'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Container } from '@/components/Container'

export default function DiyApps() {
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
                <Container>
                    <div className="flex flex-row justify-center items-center relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6 text-center h-[65vh]">
                        <h1 className="text-4xl font-medium tracking-tight text-gray-900">
                            Coming Soon.
                        </h1>
                        {/* <p className="mt-6 text-lg text-gray-600">
              {`King @ Law routinely costs half that of competing law firms, while
              providing better, faster, more convenient service. That's because we use modern business practices
              like virtual offices, custom automation software, and online tools to
              do more for less.
              Still can't afford us? we have an app for that.`}
            </p> */}
                    </div>
                </Container>
            </main>
            <Footer />
        </>
    )
}
