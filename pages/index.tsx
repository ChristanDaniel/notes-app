import React from 'react'
import Head from 'next/head'
import type { NextPage } from 'next'
import { HomeContainer } from '../src/feature/home/HomeContainer'
import Header from '../src/components/Header/index'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Notepad-App</title>
      </Head>
      <Header />
      <HomeContainer />
    </>
  )
}

export default Home
