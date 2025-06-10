import React from 'react'
import Link from 'next/link'

interface ButtonProps {
  text: string
  link?: string
  uppercase?: boolean
  outline?: boolean
  style?: string
  padding?: string
  isBlank?: boolean
  scroll?: boolean
}

const Button: React.FC<ButtonProps> = ({
  text,
  link = '',
  uppercase = false,
  outline,
  style,
  padding = 'px-12',
  isBlank = false,
  scroll = true,
}) => {
  return (
    <Link
      href={link}
      className={`inline-block ${
        uppercase ? 'uppercase' : ''
      } rounded-sm ${padding} py-3 text-sm font-medium ${
        !outline
          ? 'text-white bg-[#f25116] hover:bg-[#d53c04]'
          : 'text-[#f25116] bg-white hover:bg-gray-200'
      } transition focus:outline-none focus:ring focus:ring-[#a0c3d9] ${style}`}
      target={`${isBlank ? '_blank' : '_self'}`}
      rel="noopener noreferrer"
      scroll={scroll}
    >
      {text}
    </Link>
  )
}

export default Button
