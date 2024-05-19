import Image from 'next/image'

import { PromContainer } from '@/components/PromContainer'
// import backgroundImage from '@/images/background-faqs.jpg'
// import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'
const people = [
  {
    name: 'Divorce Decree',
    alt: 'Divorce Decree',
    imageUrl:'/images/webp/broken-heart.webp',
    // imageUrl:'/images/Broken Heart.png',
  },
  {
    name: 'Deed',
    alt: 'Deed',
    imageUrl:'/images/webp/deed.webp',
    // imageUrl:'/images/Deed.png',
  },
  {
    name: 'Prenup or Postnup',
    alt: 'Prenup or Postnup',
    imageUrl:'/images/webp/Prenup.webp',
    // imageUrl:'/images/Prenup.png',
  },
  {
    name: 'Agreement',
    alt: 'Agreement',
    imageUrl:'/images/webp/Agreements.webp',
    // imageUrl:'/images/Agreements.png',
  },
  {
    name: 'Child Support Calculator',
    alt: 'Child Support Calculator',
    imageUrl:'/images/webp/Calculator.webp',
    // imageUrl:'/images/Calculator.png',
  },
  {
    name: 'Property Calculator',
    alt: 'Property Calculator',
    imageUrl:'/images/webp/PropertyCalculator.webp',
    // imageUrl:'/images/PropertyCalculator.png',
  },
  {
    name: 'Respond to a Lawsuit',
    alt: 'Respond to a Lawsuit',
    imageUrl:'/images/webp/respond-to-a-lawsuit.webp',
    // imageUrl:'/images/Respond to a Lawsuit.jpg',
  },
  {
    name: 'File a Lawsuit',
    alt: 'File a Lawsuit',
    imageUrl:'/images/webp/file-a-lawsuit.webp',
    // imageUrl:'/images/File a Lawsuit.png',
  },
  {
    name: 'Service of Process',
    alt: 'Service of Process',
    imageUrl:'/images/webp/service-of-process.webp',
    // imageUrl:'/images/Service of Process.png',
  },
  {
    name: 'Pretrial / Scheduling Order',
    alt: 'Pretrial / Scheduling Order',
    imageUrl:'/images/webp/SchedulingOrder.webp',
    // imageUrl:'/images/SchedulingOrder.jpeg',
  },
  {
    name: 'Get Evidence from Ex',
    alt: 'Get Evidence from Ex',
    imageUrl:'/images/webp/EvidencefromEx.webp',
    // imageUrl:'/images/EvidencefromEx.png',
  },
  {
    name: 'Financial Disclosures',
    alt: 'Financial Disclosures',
    imageUrl:'/images/webp/FinancialDisclosures.webp',
    // imageUrl:'/images/FinancialDisclosures.png',
  },
  {
    name: 'Subpoena Records',
    alt: 'Subpoena Records',
    imageUrl:'/images/webp/Subpoena.webp',
    // imageUrl:'/images/Subpoena.png',
  },
  // {
  //   name: 'Compel Evidence',
  // alt: 'Compel Evidence',
  //   imageUrl:'/images/Compel.jpeg',
  // },
  {
    name: 'Enforce Order',
    alt: 'Enforce Order',
    imageUrl:'/images/webp/Enforce.webp',
    // imageUrl:'/images/Enforce.jpeg',
  },
  {
    name: 'Other Motion',
    alt: 'Other Motion',
    imageUrl:'/images/webp/Motion.webp',
    // imageUrl:'/images/Motion.jpeg',
  },
  {
    name: 'Compel Evidence',
    alt: 'Compel Evidence',
    imageUrl:'/images/webp/Compel.webp',
    // imageUrl:'/images/Compel.jpeg',
  },
  {
    name: 'Trial prep',
    alt: 'Trial prep',
    imageUrl:'/images/webp/trial-prep.webp',
    // imageUrl:'/images/Trial Prep.jpeg',
  },
  {
    name: 'Schedule Hearing',
    alt: 'Schedule Hearing',
    imageUrl:'/images/webp/ScheduleHearing.webp',
    // imageUrl:'/images/ScheduleHearing.jpeg',
  },
  
  // More people...
]


export function PromAppDetails() {
  return (
    <section
      id="appDetails"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 pb-28 pt-20 sm:py-32"
      
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
          <ul role="list" className="grid max-[360px]:grid-cols-1 grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 mb-10 "
            data-aos="fade-up"
            data-aos-duration="1600"
          >
            {people.map((person) => (
              <li
                key={person.name}
                // className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
                className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg text-center"
              >
                <div className="flex flex-1 flex-col p-4">
                {/* <div className="flex flex-1 flex-col p-8"> */}
                  {/* <img className="mx-auto h-32 w-32 flex-shrink-0 rounded-full" src={person.imageUrl} alt="" /> */}
                  <div className='mx-auto relative  h-32 w-32 flex-shrink-0 rounded-full'>
                    <Image
                      src={person.imageUrl}
                      className='mx-auto h-32 w-32 flex-shrink-0 rounded-full'
                      alt={person.alt}
                      fill 
                      // width={500}
                      // height={500}
                      // alt="Picture of the author"
                      // width={500} automatically provided
                      // height={500} automatically provided
                      // blurDataURL="data:..." automatically provided
                      // placeholder="blur" // Optional blur-up while loading
                    />
                  </div>
                  
                  <h3 className="mt-4 text-md font-medium text-gray-900 leading-tight	">{person.name}</h3>
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
