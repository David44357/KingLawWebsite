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
      answer: 'Pay $189 for the a premium Assisted account to gain access to support features, including the ability to request new features or courthouses we don\'t support yet.',
    },
    {
      question: 'Can I just use an app that\'s for a different courthouse?',
      answer:
        'We don\'t recommend it. Some apps may work some of the time, but each courthouse has their own documents and processes. Apps that are not courthouse-specific are indicated as such.',
    },
  ],
  [
    {
      question: 'Isn\'t this the same as LegalZoom?',
      answer:
        'Our apps cover more complex legal matters, are programmed for specific courthouses, and incorporate attorney assistance differently. However, it is a similar concept of using an online DIY tool.',
    },
    {
      question:
        'How much does it cost?',
      answer:
        'Using the app during the open beta is free. However, you can purchase a 30-minute Zoom with an attorney for $150 or upgrade to a premium account for $189 per-month on a six-month subscription.',
    },
        {
      question:
        'What does a subscription come with?',
      answer:
        'The subscription comes with one 30-minute attorney consultation each month, chat support with our paralegal if you need help with the app, and the ability to request we add support for your specific courthouse. It mostly makes sense if your courthouse isn\'t supported yet and you would like attorney help anyway.',
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
      answer: 'Your subscription is purchased in 6-month increments and does not auto-renew. You never have to cancel, because each subscription is a six-month commitment and it cancels automatically after six months. You have to re-purchase it for another six months if you need it for longer.',
    },
    {
      question: 'Can my ex and I both use an app together to collaborate on settlement?',
      answer:
        'Yes. However, if both parties are using the app, Mr. King will not provide a consultation to either party to avoid a potential conflicts of interest. Lawyers are not allowed to provide legal advice to both spouses.',
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
          className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
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
