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
        'Generally not. Each courthouse uses their own forms, rules, and processes that are unique to that courthouse.',
    },
  ],
  [
    {
      question: 'Isn\'t this the same as LegalZoom?',
      answer:
        'Our apps handle more complex legal matters, are programmed for specific courthouses, and have a different approach to attorney assistance.',
    },
    {
      question:
        'How much does it cost?',
      answer:
        'Currently, a subscription is just $49 a month, while the app is in beta. We plan to charge $199, once the app is fully developed.',
    },
    {
      question:
        'Shouldn\'t I just hire a lawyer?',
      answer:
        'This is a personal question. It depends on what you can afford, how much money is in dispute, and whether you trust lawyers to give you objective advice.',
    },
  ],
  [
    {
      question: 'Does King @ Law have access to information I upload?',
      answer:
        'Yes, the app uses the same tools we use for our firm to automatically generate legal documents. However, we never have access to your credit card information or password.',
    },
    {
      question: 'Is it difficult to cancel?',
      answer: 'You can cancel anytime in the app without having to talk to a person or contact support.',
    },
    {
      question: 'Can my ex and I both use the app together to collaborate on settlement?',
      answer:
        'Yes, but in some cases this may limit the legal services we\'re able to provide under the Bar Association\'s Conflict of Interest rules.',
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
