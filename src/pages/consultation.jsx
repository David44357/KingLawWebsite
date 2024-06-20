import { Container } from '@/components/Container'
import HeroBanner from '@/components/Hero-Banner'
import Cal, { getCalApi } from '@calcom/embed-react'
import Image from 'next/image'
import { useEffect } from 'react'
import Head from 'next/head'
import {Footer} from '../components/Footer'
import {Header} from '../components/Header'
import CardBanner from '../images/Card-Banner.jpg'
import LaptopIcon from '../images/laptop.png'
import InfoIcon from '../images/question.png'
import PdfIcon from '../images/pdf-file.png'
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
      Title: 'Internet',
      Description: 'Use a laptop or computer with a good internet connection.',
      Icon: LaptopIcon,
    },
    {
      Title: 'QUESTIONS',
      Description:
        'Come prepared with a list of questions, even if they are broad.',
      Icon: InfoIcon,
    },
    {
      Title: 'PDF',
      Description:
        "Have digital copies of any legal documents you'd like to discuss.",
      Icon: PdfIcon,
    },
    {
      Title: 'FOCUS',
      Description:
        "Directly answer the attorney's questions, even if they seem irrelevant.",
      Icon: TargetIcon,
    },
  ]

  return (
    <>
       <Head>
        <title>King @ Law</title>
        <meta
          name="description"
          content="Legal Services for Everyone"
        />
      </Head>
      <Header />
    <div>
      <HeroBanner title="Consult" />

      <div className="bg-gray-100 py-12 lg:py-16">
        <div className="mx-auto max-w-lg cursor-pointer overflow-hidden md:max-w-5xl">
          <div className="flex flex-col justify-center items-center md:flex-row">
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
                  INITIAL <span className="text-[#ff551d]">CONSULTATION</span>
                </h2>
                <p className="my-3 text-sm font-normal text-gray-500">
                  New prospective clients can get a 30-minute initial Zoom
                  consultation for just $50, using the scheduling app below. To
                  make the most of your consultation:
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
