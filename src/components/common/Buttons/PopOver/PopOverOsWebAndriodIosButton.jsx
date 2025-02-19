import React, { useId, useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import { motion, useInView, useMotionValue } from 'framer-motion'

import { AppScreen } from '@/components/AppScreen'
// import { AppStoreLink } from '@/components/AppStoreLink'
import { Button } from '@/components/Button'
import { Cal } from '@/components/Cal'
import { Container } from '@/components/Container'
import myImage from '@/images/Suit.png'
import backgroundImage from '@/images/background-call-to-action.jpg'
import { PopOverAppStoreLink } from './PopOverAppStoreLink'


const PopOverOsWebAndriodIosButton = (props) => {
  const { webBtnClassess, andriodBtnClassess, btnOnClickOpenPopopJoinBetaModal } = props;
  const [userOS, setUserOS] = useState('');
  const [OS, setOS] = useState('');
  useEffect(() => {
    const platform = window.navigator.userAgent.toLowerCase();
    //WHEN YOUR READY CHANGE 
    if (platform.includes('android')) {
      setUserOS('https://play.google.com/store/apps/details?id=com.KingLaw.kinglawfinal'); // CHANGE HERE FOR ANDROID
      setOS('android')
    } else {
      setUserOS('https://compass.kinglawnc.com'); // CHANGE HERE FOR OTHER
      setOS('other')
    }
  }, []);

  const ButtonLink = (props) => {
    if (props.OS != 'other') {
      return <PopOverAppStoreLink andriodBtnClassess={props.andriodBtnClassess} btnOnClickOpenPopopJoinBetaModal={btnOnClickOpenPopopJoinBetaModal} />;
    } else {
      return (
        <>
          {/* <Button href={props.userOS} variant="outline" className="m-3 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Compass</Button> */}
          {/* <Button href={props.userOS} variant="outline" className={`m-3 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 ${webBtnClassess}`}>Compass</Button> */}
          <Button href={props.userOS} variant="outline" className={`${webBtnClassess}`}>Compass</Button>
        </>
      )
    }
  }

  // return <Button href={props.userOS} variant="outline" className="m-3 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Compass</Button>
  return (
    <>
      <ButtonLink OS={OS} userOS={userOS} andriodBtnClassess={andriodBtnClassess} ></ButtonLink>
    </>
  )
}

export default PopOverOsWebAndriodIosButton;
