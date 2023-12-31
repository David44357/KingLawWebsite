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
      question: 'What if you don\'t have an app for my situation or courthouse?',
      answer: 'Email David@kinglawnc.com and request we create the app you need.',
    },
    {
      question: 'Can I just use an app that\'s for a different courthouse?',
      answer:
        'No. Each courthouse uses different documents and processes. However, we will typically add support for courts if a paying user requests it.',
    },
  ],
  [
    {
      question: 'Isn\'t this the same as LegalZoom?',
      answer:
        'It is a similar concept. However, our apps cover more complex legal matters, are programmed for specific courthouses, and incorporate attorney assistance as part of the subscription price.',
    },
    {
      question:
        'How much does it cost?',
      answer:
        'Free members get access to the first few steps of each app. Premium members pay $199 per-month for unlimited access and one Zoom consultation per-app, up to once per-month.',
    },
    {
      question:
        'Is there a limit to the number of consultations I can have?',
      answer:
        'Yes. The subscription comes with one attorney consultation per app you use, capped at one consultation per-month.',
    },
  ],
  [
    {
      question: 'Shouldn\'t I just hire a lawyer?',
      answer:
        'It depends on what you can afford, how much money is in dispute, whether you trust lawyers, and how confident you feel with a do-it-yourself approach.',
    },
    {
      question: 'Is it difficult to cancel?',
      answer: 'You can cancel anytime in the app with a single click. You do not need to contact anyone to cancel.',
    },
    {
      question: 'Can my ex and I both use an app together to collaborate on settlement?',
      answer:
        'Yes. That\'s a terrific way to use the apps. However, the Bar Association\'s conflict of interest rules prohibit Mr. King from providing consultations to both parties.',
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
