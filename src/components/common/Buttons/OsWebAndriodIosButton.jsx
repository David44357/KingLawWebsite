import React, { useId, useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import { motion, useInView, useMotionValue } from 'framer-motion'

import { AppScreen } from '@/components/AppScreen'
import { AppStoreLink } from '@/components/AppStoreLink'
import { Button } from '@/components/Button'
import { Cal } from '@/components/Cal'
import { Container } from '@/components/Container'
import myImage from '@/images/Suit.png'
import backgroundImage from '@/images/background-call-to-action.jpg'
import { sendGAEvent } from '@next/third-parties/google'
import { useRouter } from 'next/router'
import { GoogleAnalytics } from '@next/third-parties/google'

const OsWebAndriodIosButton = (props) => {
  const {webBtnClassess, andriodBtnClassess} = props;
  const [userOS, setUserOS] = useState('');
  const [OS, setOS] = useState('');
  const router = useRouter()
  useEffect(() => {
    const platform = window.navigator.userAgent.toLowerCase();
    //WHEN YOUR READY CHANGE 
    if (platform.includes('android')) {
      setUserOS('https://play.google.com/store/apps/details?id=com.KingLaw.kinglawfinal'); // CHANGE HERE FOR ANDROID
      setOS('android')
    } else {
      setUserOS('https://apps.kinglawnc.com'); // CHANGE HERE FOR OTHER
      setOS('other')
    }
  }, []);
  const btnOnClickGetStarted = () => {
    sendGAEvent({ event: 'get_started_home_page_btn_click', value: 'get_started_home_page_btn_click' })
    console.log("props.userOS")
    console.log("props.userOS")
    console.log(props.userOS)
    // router.push(props.userOS);
    // alert('btnOnClickGetStarted')
  }
  const ButtonLink = (props) => {
    if (props.OS != 'other') {
      return <AppStoreLink andriodBtnClassess={props.andriodBtnClassess} />;
    } else {
      return (
        <>
          {/* <Button href={props.userOS} variant="outline" className="m-3 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Get Started</Button> */}
          {/* <Button href={props.userOS} variant="outline" className={`m-3 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 ${webBtnClassess}`}>Get Started</Button> */}
          <Button 
            href={props.userOS} 
            // type="button"
            variant="outline" className={`${webBtnClassess}`}
            onClick={() => {
              btnOnClickGetStarted();
            }}
          >Get Started</Button>
        </>
      )
    }
  }
  
  // return <Button href={props.userOS} variant="outline" className="m-3 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Get Started</Button>
  return (
    <>
      <ButtonLink OS={OS} userOS={userOS} andriodBtnClassess={andriodBtnClassess} ></ButtonLink>
      <GoogleAnalytics gaId="G-KFJDNTMF3C" />
    </>
  )
}

export default OsWebAndriodIosButton;