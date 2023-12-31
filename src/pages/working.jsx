import { Container } from '@/components/Container'
import HeroBanner from '@/components/Hero-Banner'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import CardBanner from '../images/Card-Banner.jpg'
import InternetIcon from '../images/internet.png'
import DecideIcon from '../images/choose.png'
import TargetIcon from '../images/target.png'
import { CalInline } from '@/components/CalInline'
import { redirect } from 'next/dist/server/api-utils'





export default function MyApp() {
  const [selectedOption, setSelectedOption] = useState('Select a value');




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

  const handleDropdownChange = (e) => {
    console.log(e.target.value)
    const elements = document.getElementsByName('cal-embed=');
            
    // Check if an element with the specified name exists
    if (elements.length > 0) {
        // Update the "value" attribute of the first element
        elements[0].setAttribute('src', "https://app.cal.com/"+e.target.value+"/embed?embed=&layout=month_view&embedType=inline");
    }
    setSelectedOption(e.target.value);
  };

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


        <div className="bg-white py-12 lg:py-16">
          <Container>
            <h4 className="text-center text-3xl font-medium uppercase tracking-tight text-gray-900">
              Select an option <span className="text-[#ff551d]"></span>
            </h4>
            <label className="text-center block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
            <select id="countries" onChange={handleDropdownChange} className="text-center p-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value="Select a value">Please choose an option</option>
              <option value="kinglawnc/consultation">I want a consultation</option>
              <option value="kinglawnc/meeting">I am a current client</option>
              <option value="kinglawnc/ocmeeting">I am an opposing counsel</option>
              <option value="kinglawnc/prose">I am the opposing spouse</option>
            </select>
            


            <CalInline selectedOption={selectedOption}></CalInline>
          </Container>
        </div>
      </div>
      <Footer />
    </>
  )
}
