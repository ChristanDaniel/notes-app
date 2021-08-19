import React from 'react'
import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR'

import { Headers } from './styles'

import Image from 'next/image'
import profilePic from '../../../public/headerLogo.svg'

const Header = (): JSX.Element => {
  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBR
  })
  return (
    <>
      <Headers>
        <Image src={profilePic} alt="logo" width={50} height={50} />
        <h1>
          Ig<span>.</span>Notes
        </h1>
        <h3>{currentDate}</h3>
      </Headers>
    </>
  )
}
export default Header
