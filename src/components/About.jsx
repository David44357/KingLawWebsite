// import Link from 'next/link'
import clsx from 'clsx'
// import { Container } from '@/components/Container'
import Image from 'next/image';
import MyTeamImage from '../images/team-1.webp';



export function About() {
  const featured = false;


  return (
    <section className={clsx(
      'flex flex-col overflow-hidden rounded-3xl shadow-lg shadow-gray-900/5 text-gray-300 py-12 lg:py-16',
      featured ? 'order-first bg-gray-900 lg:order-none' : 'bg-gray-100'
    )}
      id='about'
    >
      <div className="max-w-lg mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-5xl cursor-pointer">
        <div className="flex flex-col md:flex-row">
          <div className="md:shrink-0">
            <Image src={MyTeamImage} alt="Image" className="h-96 w-full object-cover md:h-full md:w-96" />
          </div>
          <div className="py-8 px-6 md:p-8">
            <div className="uppercase block mt-1 mb-6 text-3xl leading-tight font-medium text-black">About <span className='text-[#ff551d]'>Our</span> Firm</div>
            <p className="text-gray-600 mt-1 mb-5 text-[1.11rem] sm:text-[1rem] lg:text-[1.11rem] ">
              King @ Law is run by a husband/wife team: Attorney David King and Paralegal Maryann Voisinet (we kept our last names).
            </p>
            <p className="text-gray-600 mt-1 mb-5 text-[1.11rem] sm:text-[1rem] lg:text-[1.11rem] ">
              We run King @ Law the way most modern businesses are run. We operate out of a virtual office. We use software to streamline paperwork.
            </p>

            <p className="text-gray-600 mt-1 mb-5 text-[1.11rem] sm:text-[1rem] lg:text-[1.11rem] ">
              We charge a flat-fee based on the services provided. We’ve abandoned the traditional law firm model of charging exorbitant hourly rates that motivate inefficient, dated practices.
            </p>
          </div>
        </div>
      </div>

    </section>

  )
}