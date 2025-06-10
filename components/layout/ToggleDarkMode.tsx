import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi2'

const ToggleDarkMode: React.FC = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      {mounted && (
        <div
          className="md:ml-5 cursor-pointer"
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
          {theme === 'light' ? (
            <HiOutlineMoon className="w-6 h-6" />
          ) : (
            <HiOutlineSun className="w-6 h-6 text-gray-100" />
          )}
        </div>
      )}
    </>
  )
}

export default ToggleDarkMode
