import React from 'react'
import type { AppProps } from 'next/app'

import { GlobalStyle } from '../styles/Global'

import { QuestionsContainerProvider } from '../src/NotesContext'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <QuestionsContainerProvider>
        <Component {...pageProps} />
      </QuestionsContainerProvider>
    </>
  )
}
export default MyApp
