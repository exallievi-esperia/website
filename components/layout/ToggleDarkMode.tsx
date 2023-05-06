import { ThemeContext } from "@/pages/_app"
import React, { useContext, useEffect, useState } from "react"
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2"

const ToggleDarkMode: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      {mounted && (
        <div className='md:ml-5 cursor-pointer' onClick={toggleTheme}>
          {theme === "light" ? (
            <HiOutlineMoon className='w-6 h-6' />
          ) : (
            <HiOutlineSun className='w-6 h-6 text-gray-100' />
          )}
        </div>
      )}
    </>
  )
}

export default ToggleDarkMode
