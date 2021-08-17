import React from 'react'
import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR'

import Image from 'next/image'
import profilePic from '../../../public/headerLogo.svg'

const Header = () => {
  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBR
  })
  return (
    <>
      <header>
        <Image src={profilePic} alt="logo" width={50} height={50} />
        <h1>Notepad-App</h1>
        <h3>{currentDate}</h3>
      </header>
    </>
  )
}
export default Header
