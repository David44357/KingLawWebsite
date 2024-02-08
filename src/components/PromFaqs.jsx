import Image from 'next/image'

import { PromContainer } from '@/components/PromContainer'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'Can I just hire King @ Law to represent me?',
      answer:
        'Yes. For more information about hiring attorney David King, schedule an initial consultation at kinglawnc.com/meeting.',
    },
    {
      question: 'What if you don\'t have an app for my situation or courthouse?',
      answer: 'Pay $189 for the Assisted tier to gain access to support features, including the ability to request new features or courthouses we don\'t support yet.',
    },
    {
      question: 'Can I just use an app that\'s for a different courthouse?',
      answer:
        'We don\'t recommend it. Some apps may work some of the time, but each courthouse has their own forms.',
    },
  ],
  [
    {
      question: 'Isn\'t this the same as LegalZoom?',
      answer:
        'It is similar. However, our apps cover more complex legal matters, are programmed for specific courthouses, and incorporate attorney assistance as part of the service.',
    },
    {
      question:
        'How much does it cost?',
      answer:
        'You can create an account for free to explore the app. This is called the Explore tier. You can use the self-service tools for $89/mo. We recommend the Assisted tier, which costs $189/mo and comes with support features. However, the lower-cost tiers are a good way to see if you like our service before making a bigger investment.',
    },
  ],
  [
    {
      question: 'Shouldn\'t I just hire a lawyer?',
      answer:
        'It depends on what you can afford, how much money is in dispute, whether you trust lawyers, and how confident you feel with a self-service approach.',
    },
    {
      question: 'Is it difficult to cancel?',
      answer: 'You can cancel your subscription instantly in the app with a single click and without talking to a person. It will immediately stop any future charges, unless you restart the service.',
    },
    {
      question: 'Can my ex and I both use an app together to collaborate on settlement?',
      answer:
        'Yes. However, if both parties are using the app, Mr. King will not provide any attorney support or consultation to either party.',
    },
  ],
]

export function PromFaqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <PromContainer className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Still have questions? Contact attorney David King at David@kinglawnc.com or schedule a consultation at kinglawnc.com/meeting.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </PromContainer>
    </section>
  )
}
