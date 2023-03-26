import "@/styles/globals.css"
import type { AppProps } from "next/app"
import Head from "next/head"
import { Inter, Open_Sans } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })
const open_sans = Open_Sans({
  subsets: ["latin"],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        p {
          font-family: ${inter.style.fontFamily};
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: ${open_sans.style.fontFamily};
        }
      `}</style>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/logo.svg' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
