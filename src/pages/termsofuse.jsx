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
                <h1 className="text-4xl font-medium tracking-tight text-gray-900">Terms of Use and Privacy Policy</h1>

<p className="mt-6 text-lg text-gray-600 my-3">King @ Law will never sell any information you provide to third-party spammers or advertisers. Your information is primarily used to provide features and services to you. However, we may use your information for our own marketing to you, such as follow-up emails. We also use various third-parties that may store, share, and process your information, such as Google Drive, the Firebase database, and custom software developers.
We cannot provide a clear policy on how long we will keep your information or records. The North Carolina Bar Association requires we keep records for as long as is reasonable under the circumstances. For example, we may need to keep records of a consultation for years to make sure we don’t accidentally end up in a conflict of interest situation.
Nothing on this website constitutes legal advice for your particular circumstances. </p>


                </Container>
            </main>
            <div className="fixed bottom-0 w-screen"><Footer /></div>
        </>
    )
}
