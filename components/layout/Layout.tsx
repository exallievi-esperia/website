import React, { useContext } from "react"
import Footer from "./Footer"
import Header from "./Header"

interface LayoutProps {
  children: React.ReactNode
  title?: string
  description?: string
}

const Layout: React.FC<LayoutProps> = ({ children, title, description }) => {
  return (
    <div>
      <Header title={title} description={description} />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
