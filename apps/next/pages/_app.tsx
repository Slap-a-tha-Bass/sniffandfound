import { Provider } from 'app/provider'
import Head from 'next/head'
import React from 'react'
import type { SolitoAppProps } from 'solito'
import 'raf/polyfill'
import { FooterNav } from 'app/components/footbar'
import '../styles.css'
const Logo_black =
  'https://res.cloudinary.com/slapathabass/image/upload/c_crop,h_147,w_500/v1648131479/sniff_and_found/Logo_black_xhu2bb.png'

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
        <img src={Logo_black} height={50} width={150} />
        <Component {...pageProps} />
        <FooterNav />
      </Provider>
    </>
  )
}

export default MyApp
