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
                <h1 className="p-2 text-4xl font-medium tracking-tight text-gray-900">Terms of Use and Privacy Policy</h1>

<p className="pt-1 mt-6 text-md text-gray-600 my-3">King @ Law will never sell any information you provide to third-party spammers or advertisers. Your information is primarily used to provide features and services to you. However, we may use your information for our own marketing to you, such as follow-up emails. We also use various third-parties that may store, share, and process your information, such as Google Drive, the Firebase database, and custom software developers.
We cannot provide a clear policy on how long we will keep your information or records. The North Carolina Bar Association requires we keep records for as long as is reasonable under the circumstances. For example, we may need to keep records of a consultation for years to make sure we don’t accidentally provide legal services to your ex, which may create a conflict of interest.
Nothing on this website constitutes legal advice for your particular circumstances. </p>
<p className="pt-1 mt-6 text-md text-gray-600 my-3">The King @ Law app stores all information and files you provide to it, either in a database with Firebase, or in Google Drive. This may include your login information, financial records, addresses, contacts, progress in the apps, and information about your divorce. The app only contains information you provide to it. If you would like us to delete all or some of the information and records the app has stored about you for security purposes, please contact David@kinglawnc.com from the email address associated with your account.
</p>
                </Container>
            </main>
            <Footer />
        </>
    )
}
