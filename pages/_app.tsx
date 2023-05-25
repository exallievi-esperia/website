import "@/styles/globals.css"
import type { AppProps } from "next/app"
import Head from "next/head"
import { Inter, Open_Sans } from "next/font/google"
import { createContext, useEffect, useState } from "react"

const inter = Inter({ subsets: ["latin"] })
const open_sans = Open_Sans({
  subsets: ["latin"],
})

const currentTheme =
  typeof window === "undefined" ? "" : localStorage.getItem("theme")

export const ThemeContext = createContext({
  theme: currentTheme,
  toggleTheme: () => {},
})

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(currentTheme || "light")

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
  }

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark")
      document.body.classList.add("light")
    } else {
      document.body.classList.remove("light")
      document.body.classList.add("dark")
    }
  }, [theme])

  const schemaorg = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    name: "Ex Allievi Esperia",
    url: "exallievi.itispaleocapa.it",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://exallievi.itispaleocapa.it{search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }

  return (
    <div className='dark:bg-gray-600'>
      <style jsx global>{`
        p {
          font-family: ${inter.style.fontFamily};
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        span,
        button {
          font-family: ${open_sans.style.fontFamily};
        }
      `}</style>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <link rel='icon' href='/logo.svg' />
        <meta name='author' content='Ex Allievi Esperia' />
        <meta
          name='keywords'
          content='Ex Allievi, Esperia, Paleocapa, Scuola, Associazione, RUNTS, APS, Bergamo'
        />
        <meta
          name='description'
          content='Associazione ex-allievi dell’I.T.I.S. P. Paleocapa di Bergamo, fondata nel 1920, senza fini di lucro e parte integrante dell’Istituto Paleocapa.'
        />
        <meta property='og:title' content='Ex Allievi Esperia' />
        <meta property='og:site_name' content='Ex Allievi Esperia' />
        <meta property='og:url' content='exallievi.itispaleocapa.it' />
        <meta
          property='og:description'
          content='Associazione ex-allievi dell’I.T.I.S. P. Paleocapa di Bergamo, fondata nel 1920, senza fini di lucro e parte integrante dell’Istituto Paleocapa.'
        />
        <meta property='og:type' content='website' />
        <meta property='og:image' content='' />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaorg) }}
        />
      </Head>
      <ThemeContext.Provider value={{ theme: theme, toggleTheme: toggleTheme }}>
        <Component {...pageProps} />
      </ThemeContext.Provider>
    </div>
  )
}
