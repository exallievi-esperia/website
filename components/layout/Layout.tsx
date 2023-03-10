import React, { useState } from "react"
import Footer from "./Footer"
import Header from "./Header"

interface LayoutProps {
  children: React.ReactNode
  title?: string
  description?: string
}

const currentTheme =
  typeof window === "undefined" ? "" : localStorage.getItem("theme")

const Layout: React.FC<LayoutProps> = ({ children, title, description }) => {
  const [theme, setTheme] = useState(currentTheme || "light")

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
  }

  return (
    <div className={`${theme === "light" ? "light" : "dark"}`}>
      <Header
        title={title}
        description={description}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
