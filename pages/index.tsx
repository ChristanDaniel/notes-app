import React from 'react'
import Head from 'next/head'
import type { NextPage } from 'next'
// import Header from '../src/components/Header/index'
import dynamic from 'next/dynamic'

const Header = dynamic(() => import('../src/components/Header'), {
  ssr: false
})

const HomeContainer = dynamic(() => import('../src/feature/home/HomeContainer'), {
  ssr: false
})

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
