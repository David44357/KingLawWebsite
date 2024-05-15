import { Head, Html, Main, NextScript } from 'next/document'
import AOS from "aos";

export default function Document() {
 
  
  return (
    <Html className="h-full bg-gray-50 antialiased" lang="en">
      <Head />
      <body className="flex h-full flex-col">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
