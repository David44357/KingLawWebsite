
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { PromContainer } from '@/components/PromContainer'
import screenshotDownload from '/public/images/screenshots/DownloadApp.png'
import screenshotSignup from '/public/images/screenshots/SignUp.png'
import screenshotProvideInfo from '/public/images/screenshots/ProvideInfo.png'
import screenshotApps from '/public/images/screenshots/Apps.png'
import screenshotCalendar from '@/images/Calendar.png'


const features = [
  {
    title: 'Setup',
    description:
      "Provide information about your divorce to setup your account. The apps will use this information to create your legal documents and provide the right instructions.",
    image: screenshotProvideInfo,
  },
  {
    title: 'Apps',
    description:
      "Select the app for the legal process you need. Our apps include things like trial prep, motions, separation agreements, and uncontested divorce decrees.,
    image: screenshotApps,
  },
  {
    title: 'Steps',
    description:
      "Each app is a step-by-step walkthrough that creates your legal documents for you and provides instructions. You can think of it like the TurboTax of divorce law.",
    image: screenshotApps,
  },
  {
    title: 'Support',
    description:
      "Get convenient online help from an attorney when and if you want it. You can purchase individual Zoom consultations for $150 or pay $189/mo for more comprehensive support.",    
      image: screenshotApps,
  },
]

export function PromPrimaryFeatures() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 200px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (

    // <div>"DIV"</div>
    <section
      id="features"
      aria-label="Features of our apps"
      className="relative overflow-hidden bg-blue-600 pb-28 pt-20 sm:py-32"
    >

      <PromContainer className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-medium leading leading-tight font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            4 Steps to the TurboTax of Divorce Law
          </h2>

        </div>
        <Tab.Group
          as="div"
          className="mx-auto mt-10 grid grid-cols-1 items-center gap-y-2 sm:gap-y-6 md:mt-20 lg:grid-cols-10 lg:pt-0"
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
            <>
              <div className="-mx-4 overflow-x-auto sm:mx-auto sm:overflow-visible sm:pb-0 lg:col-span-5 items-center">
                <Tab.List className="relative z-10 flex whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      className={clsx(
                        'group relative rounded-full px-3 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6',
                        selectedIndex === featureIndex
                          ? 'bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10'
                          : 'hover:bg-white/10 lg:hover:bg-white/5',
                      )}
                    >
                      <h3 class="outline-none text-lg !important">
                        <Tab
                          className={clsx(
                            'font-display font-semibold outline-none',
                            selectedIndex === featureIndex
                              ? 'text-blue-600 lg:text-white'
                              : 'text-white hover:text-white lg:text-white',
                          )}
                        >
                          <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                         <span class="text-lg"> {feature.title}</span>
                        </Tab>
                      </h3>
                      <p
                        className={clsx(
                          'mt-2 hidden text-base lg:block',
                          selectedIndex === featureIndex
                            ? 'text-white'
                            : 'text-white group-hover:text-white',
                        )}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </Tab.List>
              </div>
              <Tab.Panels className="lg:col-span-5">
                {features.map((feature) => (
                  <Tab.Panel key={feature.title} unmount={false}>
                    <div className="relative lg:hidden flex justify-center">
                      <div className="mt-6 h-20 absolute bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-xl flex items-center" />
                      <p className="w-screen mt-3 max-w-2xl relative mx-3 max-w-2xl text-lg text-white sm:text-center text-lg">  
                        {feature.description}
                      </p>
                    </div>
                    <div className="mt-10 sm:w-[15rem] md:w-[25rem] lg:w-[30rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 lg:mt-0 lg:w-[20rem] max-w-300px sm:mx-auto lg:mx-0">
                      <Image
                        className="w-full max-w-300px"
                        src={feature.image}
                        alt=""
                        priority
                        sizes="(min-width: 200px) 35rem, (min-width: 200px) 60vw, 15rem"
                      />
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </>
          )}
        </Tab.Group>
      </PromContainer>
    </section>
  )
}
