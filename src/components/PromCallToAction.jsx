import Image from 'next/image'
import React, { useEffect,useState } from 'react'
import { Button } from '@/components/Button'
import { PromContainer } from '@/components/PromContainer'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function PromCallToAction() {
  const [userOS, setUserOS] = useState('');
  // INSERT FILES WITHIN THE PUBLIC
  // AFTER CHANGING THE LINKS IN THE BELOW FUNCTION YOU'LL NEED TO CHANGE
  // TWO LINKS WITHIN THE RETURN STATEMENT
  useEffect(() => {
    const platform = window.navigator.userAgent.toLowerCase();
    //WHEN YOUR READY CHANGE 
    if (platform.includes('win')) {
      setUserOS('https://apps.kinglawnc.com'); //CHANGE HERE FOR WINDOWS
    } else if (platform.includes('mac')) {
      setUserOS('https://apps.kinglawnc.com'); // CHANGE HERE FOR MAC
    } else if (platform.includes('linux')) {
      setUserOS('https://apps.kinglawnc.com'); // CHANGE HERE FOR LINUX
    } else if (platform.includes('android')) {
      setUserOS('https://play.google.com/store/apps/details?id=com.KingLaw.kinglawfinal'); // CHANGE HERE FOR ANDROID
    } else if (platform.includes('iphone') || platform.includes('ipad') || platform.includes('ipod')) {
      setUserOS('https://apps.apple.com/app/prometheus-nc-divorce-law/id6475014498'); // CHANGE HERE FOR IOS
    } else {
      setUserOS('https://apps.kinglawnc.com'); // CHANGE HERE FOR OTHER
    }
  }, []);

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
            The first few steps of each app are free.
          </p>
          <Button href={userOS} color="white" className="mt-10">
            Download the app
          </Button>
        </div>
      </PromContainer>
    </section>
  )
}
