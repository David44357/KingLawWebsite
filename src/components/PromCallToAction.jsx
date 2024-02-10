import Image from 'next/image'
import React, { useEffect,useState } from 'react'
import { Button } from '@/components/Button'
import { PromContainer } from '@/components/PromContainer'
import backgroundImage from '@/images/background-call-to-action.jpg'
import { AppStoreLink } from './AppStoreLink'

export function PromCallToAction() {
  const [userOS, setUserOS] = useState('');
  const [OS, setOS] = useState('')
  // INSERT FILES WITHIN THE PUBLIC
  // AFTER CHANGING THE LINKS IN THE BELOW FUNCTION YOU'LL NEED TO CHANGE
  // TWO LINKS WITHIN THE RETURN STATEMENT
  useEffect(() => {
    const platform = window.navigator.userAgent.toLowerCase();
    //WHEN YOUR READY CHANGE 
    if (platform.includes('android')) {
      setUserOS('https://play.google.com/store/apps/details?id=com.KingLaw.kinglawfinal'); // CHANGE HERE FOR ANDROID
      setOS('android')
    } else if (platform.includes('iphone') || platform.includes('ipad') || platform.includes('ipod')) {
      setUserOS('https://apps.apple.com/app/prometheus-nc-divorce-law/id6475014498'); // CHANGE HERE FOR IOS
      setOS('apple')
    } else {
      setUserOS('https://apps.kinglawnc.com'); // CHANGE HERE FOR OTHER
      setOS('other')
    }
  }, []);

  function ButtonLink(props) {
    if (props.OS != 'other') {
      return <AppStoreLink />;
    } else {
      return   <Button href={props.userOS} variant="outline" className="m-3 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Web Portal</Button>
    }
  }

  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-blue-600 py-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <PromContainer className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Get started for free
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            Get an Explore account to check out the app for free
          </p>
          <div className="m-3 flex items-center justify-center">
          < ButtonLink OS = {OS} ></ButtonLink>
          </div>
          
          
        </div>
      </PromContainer>
    </section>
  )
}
