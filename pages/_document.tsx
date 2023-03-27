import { Html, Head, Main, NextScript } from "next/document"
import { createContext, useState } from "react"

const currentTheme =
  typeof window === "undefined" ? "" : localStorage.getItem("theme")

export const ThemeContext = createContext(currentTheme, void () => ())

export default function Document() {
  const [theme, setTheme] = useState(currentTheme || "light")

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Html lang='it'>
        <Head />
        <body className={`${theme === "light" ? "light" : "dark"}`}>
          <Main />
          <NextScript />
        </body>
      </Html>
    </ThemeContext.Provider>
  )
}
