import { ButtonHTMLAttributes } from 'react'
import React from 'react'

import { Buttons } from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

// Component Button foi criado para ser usado mais de uma vez no app, para isso
// utilizei a typagem acima para ter todo acesso a todas propriedades do botão quando fosse chamado.
// por exemplo: onClick, onKeyPress etc...

const Button = ({ ...props }: ButtonProps): JSX.Element => {
  return <Buttons {...props} />
}

export default Button
