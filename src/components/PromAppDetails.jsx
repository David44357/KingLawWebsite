import Image from 'next/image'

import { PromContainer } from '@/components/PromContainer'
import backgroundImage from '@/images/background-faqs.jpg'
// import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'
const people = [
  {
    name: 'Divorce Decree',
    imageUrl:'/images/Broken Heart.png',
  },
  {
    name: 'Deed',
    imageUrl:'/images/Deed.png',
  },
  {
    name: 'Prenup or Postnup',
    imageUrl:'/images/Prenup.png',
  },
  {
    name: 'Agreement',
    imageUrl:'/images/Agreements.png',
  },
  {
    name: 'Child Support Calculator',
    imageUrl:'/images/Calculator.png',
  },
  {
    name: 'Property Calculator',
    imageUrl:'/images/PropertyCalculator.png',
  },
  {
    name: 'Respond to a Lawsuit',
    imageUrl:'/images/Respond to a Lawsuit.jpg',
  },
  {
    name: 'File a Lawsuit',
    imageUrl:'/images/File a Lawsuit.png',
  },
  {
    name: 'Service of Process',
    imageUrl:'/images/Service of Process.png',
  },
  {
    name: 'Pretrial / Scheduling Order',
    imageUrl:'/images/SchedulingOrder.jpeg',
  },
  {
    name: 'Get Evidence from Ex',
    imageUrl:'/images/EvidencefromEx.png',
  },
  {
    name: 'Financial Disclosures',
    imageUrl:'/images/FinancialDisclosures.png',
  },
  {
    name: 'Subpoena Records',
    imageUrl:'/images/Subpoena.png',
  },
  {
    name: 'Compel Evidence',
    imageUrl:'/images/Compel.jpeg',
  },
  {
    name: 'Enforce Order',
    imageUrl:'/images/Enforce.jpeg',
  },
  {
    name: 'Other Motion',
    imageUrl:'/images/Motion.jpeg',
  },
  {
    name: 'Compel Evidence',
    imageUrl:'/images/Compel.jpeg',
  },
  {
    name: 'Trial prep',
    imageUrl:'/images/Trial Prep.jpeg',
  },
  {
    name: 'Schedule Hearing',
    imageUrl:'/images/ScheduleHearing.jpeg',
  },
  
  // More people...
]


export function PromAppDetails() {
  return (
    <section
      id="appDetails"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 "
      
      // className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <PromContainer className="relative ">
        <div
          // data-aos="fade-right"
          // data-aos-duration="900"
        >
          <div className="mx-auto max-w-2xl text-center mb-10 "
            data-aos="fade-down"
            data-aos-duration="1600"
          >
            <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
              The Apps
            </h2>
            <p className="mt-4 text-lg tracking-tight text-slate-700">
              Whether simple or contested, we have an app for that
            </p>
          </div>
          <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 mb-10 "
            data-aos="fade-up"
            data-aos-duration="1600"
          >
            {people.map((person) => (
              <li
                key={person.name}
                className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
              >
                <div className="flex flex-1 flex-col p-4">
                {/* <div className="flex flex-1 flex-col p-8"> */}
                  <img className="mx-auto h-20 w-20 flex-shrink-0 rounded-full" src={person.imageUrl} alt="" />
                  {/* <img className="mx-auto h-32 w-32 flex-shrink-0 rounded-full" src={person.imageUrl} alt="" /> */}
                  <h3 className="mt-4 text-sm font-medium text-gray-900">{person.name}</h3>
                  {/* <dl className="mt-1 flex flex-grow flex-col justify-between">
                    <dt className="sr-only">Title</dt>
                    <dd className="text-sm text-gray-500">{person.title}</dd>
                    <dt className="sr-only">Role</dt>
                    <dd className="mt-3">
                      <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                        {person.role}
                      </span>
                    </dd>
                  </dl> */}
                </div>
                {/* <div>
                  <div className="-mt-px flex divide-x divide-gray-200">
                    <div className="flex w-0 flex-1">
                      <a
                        href={`mailto:${person.email}`}
                        className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                      >
                        <EnvelopeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        Email
                      </a>
                    </div>
                    <div className="-ml-px flex w-0 flex-1">
                      <a
                        href={`tel:${person.telephone}`}
                        className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                      >
                        <PhoneIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        Call
                      </a>
                    </div>
                  </div>
                </div> */}
              </li>
            ))}
          </ul>

        </div>
      </PromContainer>

      
    </section>
  )
}
