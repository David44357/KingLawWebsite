import Image from 'next/image'

import { PromContainer } from '@/components/PromContainer'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'Can I just hire King @ Law to represent me?',
      answer:
        'Yes. For more information about hiring attorney David King, please schedule a consultation at kinglawnc.com/meeting.',
    },
    {
      question: 'What if the app doesn\'t cover my situation or courthouse?',
      answer: 'Please email David@kinglawnc.com and let him know. He may create the app at your request.',
    },
    {
      question: 'Can I just use an app that\'s for a different courthouse?',
      answer:
        'Some apps cover multiple courthouses or are statewide. However, you should not use an app for a courthouse it is not designed for. Each courthouse has its own forms, rules, and processes.',
    },
  ],
  [
    {
      question: 'Isn\'t this the same as LegalZoom?',
      answer:
        'We use a similar TurboTax-style format. However, our apps cover more complex legal matters, are programmed for specific courthouses, and incorporate attorney assistance as part of the subscription price.',
    },
    {
      question:
        'How much does it cost?',
      answer:
        '$199 per-month gives you unlimited access to the apps and one consultation for each app you use.',
    },
    {
      question:
        'Shouldn\'t I just hire a lawyer?',
      answer:
        'It depends on what you can afford, how much money is in dispute, whether you trust lawyers, and how confident you feel with a DIY approach.',
    },
  ],
  [
    {
      question: 'Is there a limit to the number of consultations I can have?',
      answer:
        'Yes. The subscription comes with one attorney consultation per app you use, capped at one consultation per-month.',
    },
    {
      question: 'Is it difficult to cancel?',
      answer: 'You can cancel anytime in the app with a click of a button, without having to talk to a person or contact support.',
    },
    {
      question: 'Can my ex and I both use an app together to collaborate on settlement?',
      answer:
        'Yes. That\'s a terrific way to use the apps. However, in some cases attorney King may be prohibited from providing consultations if both parties are using the apps.',
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
