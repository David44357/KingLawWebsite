import '@/styles/tailwind.css'
import 'focus-visible'
import "animate.css"
import "aos/dist/aos.css";
import '@/styles/comingsoonstyles.css'
import '@/styles/prometheusstyles.css'
import { GoogleAnalytics } from '@next/third-parties/google'

export default function App({ Component, pageProps }) {
  // return <Component {...pageProps} />
  return (
    <>
      <Component {...pageProps} />
      <GoogleAnalytics gaId="G-KFJDNTMF3C" />
    </>
  )
}
