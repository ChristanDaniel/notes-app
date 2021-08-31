import React from 'react'
import { Footer } from './styles'

import { FaGithub, FaLinkedin } from 'react-icons/fa'

export function Footers(): JSX.Element {
  return (
    <>
      <Footer>
        <div>
          <a href="https://github.com/ChristanDaniel" target="_blank" rel="noreferrer noopener">
            <FaGithub /> Github
          </a>
          <span> | </span>
          <a href="https://www.linkedin.com/in/christian-daniel-841921210/" target="_blank" rel="noreferrer noopener">
            <FaLinkedin /> Linkedin
          </a>
        </div>
        <p>
          <span>© {new Date().getFullYear()} Notepad-App</span>
          {' · '}
          <span>Construido por Christian Daniel .</span>
        </p>
      </Footer>
    </>
  )
}
