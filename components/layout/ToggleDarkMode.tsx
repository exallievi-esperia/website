import React from "react"
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2"

interface ToggleDarkModeProps {
  theme: string
  toggle: () => void
}

const ToggleDarkMode: React.FC<ToggleDarkModeProps> = ({ theme, toggle }) => {
  return (
    <button className='ml-5' onClick={toggle}>
      {theme === "light" ? (
        <HiOutlineSun className='w-6 h-6' />
      ) : (
        <HiOutlineMoon className='w-6 h-6' />
      )}
    </button>
  )
}

export default ToggleDarkMode
