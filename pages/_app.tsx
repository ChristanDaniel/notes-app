import React from 'react'
import { GlobalStyle } from '../styles/Global'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
}
export default MyApp
