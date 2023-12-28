import { useState } from 'react'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logomark } from '@/components/Logo'

const plans = [
  {
    name: 'The DIY App User',
    featured: false,
    price: { Monthly: '$199', Total: '$1,200'},
    description:
      'Using our do-it-yourself apps with attorney support for six months before settling at mediation would cost just $199 per-month or about $1,200 total. However, DIY users must pay their own court fees and expenses as well.',
    button: {
      label: 'Get more information',
      href: 'https://www.kinglawnc.com/prometheus',
    },
    features: [
      'Documents: Get the right draft legal documents automatically created for you',
      'Step-by-step: Always know what step you\'re on and what to do next for each legal process',
      'Attorney Support: Get one attorney consultation per app, up to once-per-month',
    ],
    logomarkClassName: 'fill-gray-300',
  },
  {
    name: 'The Settler',
    featured: true,
    price: { Total: '$8,000', Monthly: '$222' },
    description:
      'A client that hires King @ Law for property, alimony, and divorce will typically pay $8,000 using our flat-fee calculator. This fee includes the cost of the mediator, court fees, and other expenses.',
    button: {
      label: 'Get a Quote',
      href: 'https://apps.kinglawnc.com/billingCalculator',
    },
    features: [
  'Expenses: Court fees, mediator fees, service of process costs, and other fees are included',
      'Flat-Fee: No stressing out about time spent with your attorney. No surprise invoices for exorbitant hours',
      'Modern: Sign documents, meet with your attorney, upload evidence, pay fees, and more online at your convenience',   
    ],
    logomarkClassName: 'fill-gray-500',
  },
  {
    name: 'The Trial',
    featured: false,
    price: { Monthly: 'Total: $40,000', Monthly: '$1,111' },
    description:
      'This spouse had numerous claims and had to take all of them all the way to trial. This is rare and to be avoided whenever possible, in no small part due to the cost.',
    button: {
      label: 'Get a Quote',
      href: 'https://apps.kinglawnc.com/billingCalculator',
    },
    features: [
      'Expenses: Court fees, filing fees with the Register of Deeds, and service of process costs are all included',
      'Flat-Fee: No stressing out about time spent with your attorney. No surprise invoices for exorbitant hours',
      'Modern: Sign documents, meet with your attorney, upload evidence, pay fees, and more online at your convenience',    ],
    logomarkClassName: 'fill-cyan-500',
  },
]

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
        fill="currentColor"
      />
      <circle
        cx="12"
        cy="12"
        r="8.25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Plan({
  name,
  price,
  description,
  button,
  features,
  featured = false,
  activePeriod,
  logomarkClassName,
}) {
  return (
    <section
      className={clsx(
        'flex flex-col overflow-hidden rounded-3xl p-6 shadow-lg shadow-gray-900/5 h-full',
        featured ? 'order-first bg-gray-900 lg:order-none' : 'bg-white'
      )}
    >
      <h3
        className={clsx(
          'flex items-center justify-center text-lg font-bold',
          featured ? 'text-white' : 'text-gray-900'
        )}
      >
        {/* <Logomark className={clsx('h-6 w-6 flex-none', logomarkClassName)} /> */}
        <span className="text-center">{name}</span>
      </h3>
      <p
        className={clsx(
          'relative mt-5 flex text-3xl tracking-tight',
          featured ? 'text-white' : 'text-gray-900'
        )}
      >
        {price.Monthly === price.Annually ? (
          price.Monthly
        ) : (
          <>
            <span
              aria-hidden={activePeriod === 'Annually'}
              className={clsx(
                'transition duration-300',
                activePeriod === 'Annually' &&
                  'pointer-events-none translate-x-6 select-none opacity-0'
              )}
            >
              {price.Monthly}
            </span>
            <span
              aria-hidden={activePeriod === 'Monthly'}
              className={clsx(
                'absolute left-0 top-0 transition duration-300',
                activePeriod === 'Monthly' &&
                  'pointer-events-none -translate-x-6 select-none opacity-0'
              )}
            >
              {price.Annually}
            </span>
          </>
        )}
      </p>
      <p
        className={clsx(
          'mt-3 text-sm',
          featured ? 'text-gray-300' : 'text-gray-700'
        )}
      >
        {description}
      </p>
      <div className="order-last mt-6">
        <ul
          role="list"
          className={clsx(
            '-my-2 divide-y text-sm',
            featured
              ? 'divide-gray-800 text-gray-300'
              : 'divide-gray-200 text-gray-700'
          )}
        >
          {features.map((feature) => (
            <li key={feature} className="flex py-2">
              <CheckIcon
                className={clsx(
                  'h-6 w-6 flex-none',
                  featured ? 'text-white' : 'text-cyan-500'
                )}
              />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <Button
        href={button.href}
        color={featured ? 'cyan' : 'gray'}
        className="mt-6"
        aria-label={`Get started with the ${name} plan for ${price}`}
      >
        {button.label}
      </Button>
    </section>
  )
}

export function Pricing() {
  let [activePeriod, setActivePeriod] = useState('Monthly')

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="border-t border-gray-200 bg-gray-100 py-12 lg:py-16"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="pricing-title"
            className="text-3xl text-center font-medium tracking-tight text-gray-900"
          >
            No hourly rates.
          </h2>
          <p className="mt-2 text-center text-lg leading-tight text-gray-600">
            Here are a few examples of our pricing.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-10 sm:mt-20 lg:max-w-none lg:grid-cols-3">
          {plans.map((plan) => (
            <Plan key={plan.name} {...plan} activePeriod={activePeriod} />
          ))}
        </div>
      </Container>
    </section>
  )
}
