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
        'flex flex-col rounded-3xl py-1 px-6',
        featured ? 'order-first bg-blue-600 lg:order-none' : 'lg:py-2',
      )}
    >
      <h3 className="mt-2 font-display text-lg text-white">{name}</h3>
      <p
        className={clsx(
          'mt-2 text-base',
          featured ? 'text-white' : 'text-slate-200',
        )}
      >
        {description}
      </p>
      <p className="order-first font-display text-4xl font-light tracking-tight text-white pt-6">
        {price}
      </p>
      <ul
        role="list"
        className={clsx(
          'order-last py-7 flex flex-col gap-y-3 text-sm',
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
        className="mt-5 mx-5"
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
        {/* <div className="md:text-center"> */}
        <div className="text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl sm:text-center">
            Flat-fee pricing
          </h2>
          <p className="mt-0 text-xl text-slate-200 sm:text-center">
            A few examples of our fees
          </p>
        </div>
        <div className="mt-8 px-8 grid max-w-2xl grid-cols-1 gap-y-5 sm:mx-auto lg:max-w-none lg:grid-cols-3 xl:mx-0 xl:gap-x-8">
          <Plan
            name="Self-Service"
            price="$120/mo"
            description="Use King @ Law's Compass platform as a self-service tool"
            href="/Compass"
            features={[
              'Try it risk-free for a 30-day trial and cancel online anytime',
              'Receive completed draft legal documents and step-by-step instructions',
              'Pay just $150 for an online Zoom with an attorney when you need it',
            ]}
          />
          <Plan
            featured
            name="Financial Disputes"
            price="$400/mo"
            description="Our fees for a couple financial claims with no complications"
            href="https://compass.kinglawnc.com/?page=Calculator"
            features={[
              'Most routine expenses like court fees and mediator fees are included',
              'Number of monthly payments is based on number of hearings and months',
              'Frequently comes out to 30% less than hourly-rate attorneys',
            ]}
          />
          <Plan
            name="Complex"
            price="$800/mo"
            description="Our fees for custody and financial disputes with a wealthy business owner"
            href="https://compass.kinglawnc.com/?page=Calculator"
            features={[
              'Most routine expenses like court fees and mediator fees are included',
              'Number of monthly payments is based on number of hearings and months',
              'Frequently comes out to 50% less than hourly-rate attorneys',
            ]}
          />
        </div>
      </Container>
    </section>
  )
}
