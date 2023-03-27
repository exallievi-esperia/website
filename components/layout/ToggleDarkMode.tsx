import { ThemeContext } from "@/pages/_document"
import React, { useContext } from "react"
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2"

const ToggleDarkMode: React.FC = () => {
  const theme = useContext(ThemeContext)
  return (
    <div className='md:ml-5 cursor-pointer' onClick={() => {}}>
      {theme === "light" ? (
        <HiOutlineSun className='w-6 h-6' />
      ) : (
        <HiOutlineMoon className='w-6 h-6 text-gray-100' />
      )}
    </div>
  )
}

export default ToggleDarkMode
