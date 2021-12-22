import React from 'react'
import type { AppProps } from 'next/app'

import { GlobalStyle } from '../styles/Global'

import { NotesContainerProvider } from '../src/NotesContext'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <NotesContainerProvider>
        <Component {...pageProps} />
      </NotesContainerProvider>
    </>
  )
}
export default MyApp
