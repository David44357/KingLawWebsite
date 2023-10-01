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


        <div className="bg-white py-12 lg:py-16">
          <Container>
            <div className="flex flex-row justify-center">
            <h2 class="p-2 text-lg font-normal lg:text-xl">I am    </h2>
            <select id="countries" onChange={handleDropdownChange} className="max-w-fit text-left p-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value="Select a value">Choose an option.</option>
              <option value="kinglawnc/consultation">seeking a consultation. </option>
              <option value="kinglawnc/meeting">a current client</option>
              <option value="kinglawnc/ocmeeting">an opposing counsel</option>
              <option value="kinglawnc/prose">the opposing spouse</option>
            </select>
            </div>


            <CalInline selectedOption={selectedOption}></CalInline>
          </Container>
        </div>
      </div>
      <Footer />
    </>
  )
}
