import { Provider } from 'app/provider'
import Head from 'next/head'
import React from 'react'
import type { SolitoAppProps } from 'solito'
import 'raf/polyfill'
import { Footer } from '../components/footerNav'

function MyApp({ Component, pageProps }: SolitoAppProps) {
  return (
    <>
      <Head>
        <title>Sniff & Found</title>
        <meta
          name="description"
          content="A social network for pets and finding lost pets."
        />
        <link rel="icon" href="/Transparency_Blue.png" />
      </Head>
      <Provider>
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </>
  )
}

export default MyApp
