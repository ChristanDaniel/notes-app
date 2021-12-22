import { ButtonHTMLAttributes } from 'react'
import React from 'react'

import { Buttons } from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ ...props }: ButtonProps): JSX.Element => {
  return <Buttons {...props} />
}
export default Button
