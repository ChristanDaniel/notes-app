import React from 'react'
import type { AppProps } from 'next/app'

import { GlobalStyle } from '../styles/Global'

import { NotesContainerProvider } from '../src/NotesContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NotesContainerProvider>
        <Component {...pageProps} />
        <GlobalStyle />
      </NotesContainerProvider>
    </>
  )
}
export default MyApp
