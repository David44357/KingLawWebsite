import { Container } from '@/components/Container'
import HeroBanner from '@/components/Hero-Banner'
import Cal, { getCalApi } from '@calcom/embed-react'
import Image from 'next/image'
import { useEffect } from 'react'
import Head from 'next/head'
import {Footer} from '../components/Footer'
import {Header} from '../components/Header'
import CardBanner from '../images/Card-Banner.jpg'
import InternetIcon from '../images/internet.png'
import DecideIcon from '../images/choose.png'
import TargetIcon from '../images/target.png'

export default function MyApp() {
  useEffect(() => {
    ;(async function () {
      const cal = await getCalApi()
      cal('ui', {
        styles: { branding: { brandColor: '#000000' } },
        hideEventTypeDetails: false,
        layout: 'month_view',
      })
    })()
  }, [])

  const ListPoints = [
    {
      Title: 'FOCUS',
      Description: `Ask and answer specific questions. Don't spend time complaining about your ex, unless it's relevant.`,
      Icon: TargetIcon,
    },
    {
      Title: 'DECIDE',
      Description: 'Even if faced with a tough choice, make clear decisions so we know how to proceed.',
      Icon: DecideIcon,
    },
    {
      Title: 'INTERNET',
      Description: 'Make sure you have access to a laptop or computer with a good internet connection.',
      Icon: InternetIcon,
    },
  ]

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
    
    <div>
      <HeroBanner title="MEETING" />

      <div className="bg-gray-100 py-12 lg:py-16">
        <div className="mx-auto max-w-lg cursor-pointer overflow-hidden md:max-w-5xl">
          <div className="flex flex-col items-center justify-center md:flex-row">
            <div className="md:shrink-0">
              <Image
                src={CardBanner}
                alt="Image"
                className="h-full w-full object-contain md:h-96 md:w-96"
              />
            </div>
            <div className="px-5 py-8 md:p-8">
              <div className="max-w-md">
                <h2 className="block text-3xl font-medium uppercase leading-tight text-black">
                ATTORNEY <span className="text-[#ff551d]">MEETING</span>
                </h2>
                <p className="my-3 text-sm font-normal text-gray-500">
                Schedule a Zoom meeting with attorney King anytime using the below scheduling app. Evenings and weekends are ok, but the app does require scheduling at least three hours in advance. To make the most of your meeting:
                </p>
                <ul className="mt-10 list-none">
                  {ListPoints.map((point, index) => (
                    <li
                      key={index}
                      className="group relative mb-6 grid grid-cols-[50px,1fr] items-center gap-5 last:mb-0"
                    >
                      <div className="mr-4 flex h-10 w-full items-center justify-center bg-[#ff551c] group-hover:animate-wiggle md:h-10">
                        <Image
                          src={point?.Icon}
                          width={30}
                          height={30}
                          alt="laptop_icon"
                        />
                      </div>
                      <div className="flex flex-col">
                        <h4 className="text-xl font-medium uppercase leading-tight text-gray-700">
                          {point?.Title}
                        </h4>
                        <p className="mt-1 text-xs font-normal text-gray-500">
                          {point?.Description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-12 lg:py-16">
        <Container>
          <h2 className="text-center text-3xl font-medium uppercase tracking-tight text-gray-900">
            SCHEDULE <span className="text-[#ff551d]">CONSULTATION</span>
          </h2>

          <Cal
            className="mt-5 h-full w-full overflow-auto"
            calLink="kinglawnc/consultation"
            config={{ layout: 'month_view' }}
          />
        </Container>
      </div>
    </div>
    <Footer />
    </>
  )
}
