import '@/styles/tailwind.css'
import 'focus-visible'
import "animate.css"
import "aos/dist/aos.css";
import '@/styles/comingsoonstyles.css'
import '@/styles/prometheusstyles.css'
// import { GoogleAnalytics } from '@next/third-parties/google'
// import Script from 'next/script';

export default function App({ Component, pageProps }) {
  // return <Component {...pageProps} />
  return (
    <>
      {/* <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-KFJDNTMF3C"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-KFJDNTMF3C');
        `}
      </Script> */}
      <Component {...pageProps} />
      {/* <GoogleAnalytics gaId="G-KFJDNTMF3C" /> */}
    </>
  )
}
