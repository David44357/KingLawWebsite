// import { AppStoreLink } from '@/components/AppStoreLink'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import { Button } from './Button'



export function CallToAction() {
  return (
    <section
      id="get-free-shares-today"
      className="relative overflow-hidden bg-gray-900 py-20 sm:py-28"
    >
      <div className="absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-3xl font-medium text-center tracking-tight text-white sm:text-4xl">
            Get a Quote
          </h2>
          <p className="mt-4 text-lg text-center text-gray-300">
            Use our online calculator to determine your legal fees for any given situation. Most expenses are included.
          </p>
          <div className="mt-8 flex justify-center">
            {/* <AppStoreLink color="white" /> */}
            <Button
              href={'https://apps.kinglawnc.com/billingCalculatorWebsite'}
              color={true ? '#000' : 'gray'}
              className="mt-6 text-black text-[1.10rem] bg-gray-50 px-8 py-4 rounded-md"
              aria-label={`Get started with the Quote Tool`}
            >
              Quote Tool
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
