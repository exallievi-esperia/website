import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import { IoMdArrowRoundUp } from "react-icons/io"

interface LayoutProps {
  children: React.ReactNode
}

const isBrowser = () => typeof window !== "undefined"

const scrollToTop = () => {
  if (!isBrowser) return
  window.scrollTo({ top: 0, behavior: "smooth" })
}

const Layout: React.FC<LayoutProps> = ({ children}) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <button
        className='fixed bottom-5 right-5 p-3 rounded-full bg-[#f25116] z-10'
        onClick={scrollToTop}
      >
        <IoMdArrowRoundUp className='w-6 h-6 text-gray-100' />
      </button>
    </>
  )
}

export default Layout
