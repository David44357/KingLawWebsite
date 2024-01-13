import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

function SwirlyDoodle(props) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 281 40"
      preserveAspectRatio="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M240.172 22.994c-8.007 1.246-15.477 2.23-31.26 4.114-18.506 2.21-26.323 2.977-34.487 3.386-2.971.149-3.727.324-6.566 1.523-15.124 6.388-43.775 9.404-69.425 7.31-26.207-2.14-50.986-7.103-78-15.624C10.912 20.7.988 16.143.734 14.657c-.066-.381.043-.344 1.324.456 10.423 6.506 49.649 16.322 77.8 19.468 23.708 2.65 38.249 2.95 55.821 1.156 9.407-.962 24.451-3.773 25.101-4.692.074-.104.053-.155-.058-.135-1.062.195-13.863-.271-18.848-.687-16.681-1.389-28.722-4.345-38.142-9.364-15.294-8.15-7.298-19.232 14.802-20.514 16.095-.934 32.793 1.517 47.423 6.96 13.524 5.033 17.942 12.326 11.463 18.922l-.859.874.697-.006c2.681-.026 15.304-1.302 29.208-2.953 25.845-3.07 35.659-4.519 54.027-7.978 9.863-1.858 11.021-2.048 13.055-2.145a61.901 61.901 0 0 0 4.506-.417c1.891-.259 2.151-.267 1.543-.047-.402.145-2.33.913-4.285 1.707-4.635 1.882-5.202 2.07-8.736 2.903-3.414.805-19.773 3.797-26.404 4.829Zm40.321-9.93c.1-.066.231-.085.29-.041.059.043-.024.096-.183.119-.177.024-.219-.007-.107-.079ZM172.299 26.22c9.364-6.058 5.161-12.039-12.304-17.51-11.656-3.653-23.145-5.47-35.243-5.576-22.552-.198-33.577 7.462-21.321 14.814 12.012 7.205 32.994 10.557 61.531 9.831 4.563-.116 5.372-.288 7.337-1.559Z"
      />
    </svg>
  );
}

function CheckIcon({
  className,
  ...props
}) {
  return (
    <svg
      aria-hidden="true"
      className={clsx(
        'h-6 w-6 flex-none fill-current stroke-current',
        className,
      )}
      {...props}
    >
      <path
        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
        strokeWidth={0}
      />
      <circle
        cx={12}
        cy={12}
        r={8.25}
        fill="none"
        strokeWidth={1.5}
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
  href,
  features,
  featured = false
}) {
  return (
    <section
      className={clsx(
        'flex flex-col rounded-3xl py-1 sm:px-24',
        featured ? 'order-first bg-blue-600 lg:order-none' : 'lg:py-2',
      )}
    >
      <h3 className="mt-5 font-display text-lg text-white">{name}</h3>
      <p
        className={clsx(
          'mt-2 text-base',
          featured ? 'text-white' : 'text-slate-200',
        )}
      >
        {description}
      </p>
      <p className="order-first font-display text-5xl font-light tracking-tight text-white pt-5">
        {price}
      </p>
      <ul
        role="list"
        className={clsx(
          'order-last mt-10 flex flex-col gap-y-3 text-sm',
          featured ? 'text-white' : 'text-slate-200',
        )}
      >
        {features.map((feature) => (
          <li key={feature} className="flex">
            <CheckIcon className={featured ? 'text-white' : 'text-slate-200'} />
            <span className="ml-4">{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        href={href}
        variant={featured ? 'solid' : 'solid'}
        color="white"
        className="mt-8"
        aria-label={`Get started with the ${name} plan for ${price}`}
      >
        Learn more
      </Button>
    </section>
  )
}

export function Pricing() {
  return (
    <section
      id="pricing"
      aria-label="Pricing"
      className="bg-slate-900 py-20 sm:py-32"
    >
      <Container>
        <div className="md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
         Flat-fee pricing
          </h2>
          <p className="mt-4 text-lg text-slate-200">
            Payment plans are available to qualifying customers.
          </p>
        </div>
        <div className="-mx-4 mt-16 grid max-w-2xl grid-cols-1 gap-y-20 sm:mx-auto lg:-mx-8 lg:max-w-none lg:grid-cols-3 xl:mx-0 xl:gap-x-8">
          <Plan
            name="Self-Service"
            price="$199/mo"
            description="You can think of our self-service apps like using TurboTax, instead of hiring an accountant. Each app walks you through a legal process, creates your documents, and comes with 30 minutes of attorney support."
            href="/prometheus"
            features={[
              'Use the app select and complete the right legal documents.',
              'Follow step-by-step instructions specific to your courthouse',
              'Get up to one free attorney consultation via Zoom each month',
              'Request new apps or addingn support for your courthouse',
            ]}
          />
          <Plan
            featured
            name="The Settler"
            price="$250/mo"
            description="An example approximate cost for hiring attorney King for early litigation and mediation in a case with no children, on a 36-month payment plan. Most cases are settled at mediation."
            href="https://apps.kinglawnc.com/BillingCalculatorWebsite"
            features={[
              'Most divorce-related litigation is settled at mediation',
              'Includes expenses, such as court fees, service of process expenses, and mediator fees',
              'Qualifying for financing is evaluated on a case-by-case basis and requires $1,200 up-front',
              'King @ Law costs 30-50% less than hourly-rate attorneys'
            ]}
          />
          <Plan
            name="Trial"
            price="$55,000"
            description="A rare situation involving numerous claims taken all the way to trial without financing. Trial is rare and should be avoided in most cases."
            href="https://apps.kinglawnc.com/BillingCalculatorWebsite"
            features={[
              'Spouses often say they should \"just\" go to trial, but this number should change your perspective',
              'Trial is rare and should be avoided in most cases, due to the cost, delays, and stress',
              'Hourly-rate attorneys often come out to $75-$100k in similar circumstances',
              'This number should encourage you to focus on the preferred process of settling at mediation',
              'Trial is more common if there are extreme circumstances and a lot of money involved'
            ]}
          />
        </div>
      </Container>
    </section>
  )
}
