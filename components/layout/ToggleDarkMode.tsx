import React from "react"
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2"

interface ToggleDarkModeProps {
  theme: string
  toggle: () => void
}

const ToggleDarkMode: React.FC<ToggleDarkModeProps> = ({ theme, toggle }) => {
  return (
    <div className='md:ml-5 cursor-pointer' onClick={toggle}>
      {theme === "light" ? (
        <HiOutlineSun className='w-6 h-6' />
      ) : (
        <HiOutlineMoon className='w-6 h-6' />
      )}
    </div>
  )
}

export default ToggleDarkMode
