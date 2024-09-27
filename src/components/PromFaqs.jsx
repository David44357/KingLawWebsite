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
      question: 'What if Compass doesn\'t cover my situation or courthouse?',
      answer: 'Contact David@kinglawn.com and ask him to add support for your courthouse or situation. Often, we can update Compass within a week.',
    },
  ],
  [
    {
      question: 'Isn\'t this the same as LegalZoom and others?',
      answer:
        'Compass uses logic to get you the right documents and instructions, instead of just copy/pasting information you provide into a generic form. Help from an attorney is offered to help you, rather than pushing you to hire an expensive law firm.',
    },
    {
      question:
        'How much does it cost?',
      answer:
        'Compass is free during the beta and you only pay for consultations with an attorney. We haven\'t decided what the fees will be.',
    },
  ],
  [
    {
      question: 'Shouldn\'t I just hire a lawyer?',
      answer:
        'It depends on what you can afford, how much money is in dispute, whether you trust lawyers, and how confident you feel with a self-service approach.',
    },
    {
      question: 'Can my ex and I both use an app together to collaborate on settlement?',
      answer:
        'Yes. However, if both parties are using Compass, Mr. King will not provide a consultation to either party to avoid a potential conflicts of interest. Lawyers are not allowed to provide legal advice to both spouses.',
    },
  ],
]

export function PromFaqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
      // data-aos="fade-right"
      // data-aos-duration="1600"
    >

      <PromContainer className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0"
          data-aos="fade-down"
          data-aos-duration="1600"
        >
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
          className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
          data-aos="fade-up"
          data-aos-duration="1600"
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
