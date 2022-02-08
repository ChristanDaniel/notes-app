import React from 'react'
import { FooterContainer } from './styles'

import { FaGithub, FaLinkedin } from 'react-icons/fa'

export function Footer(): JSX.Element {
  return (
    <>
      <FooterContainer>
        <div>
          <a href="https://github.com/ChristanDaniel" target="_blank" rel="noreferrer noopener">
            <FaGithub /> Github
          </a>
          <span> | </span>
          <a href="https://www.linkedin.com/in/christian-daniel-dev" target="_blank" rel="noreferrer noopener">
            <FaLinkedin /> Linkedin
          </a>
        </div>
        <p>
          <span>© {new Date().getFullYear()} Notepad-App</span>
          {' · '}
          <span>Construido por Christian Daniel .</span>
        </p>
      </FooterContainer>
    </>
  )
}
