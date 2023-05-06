import Cta from "@/components/Cta"
import SectionImage from "@/components/SectionImage"
import Layout from "@/components/layout/Layout"
import Head from "next/head"
import Link from "next/link"

const HomePage = () => {
  return (
    <Layout>
      <Head>
        <title>Ex Allievi Esperia - Home</title>
      </Head>
      <main className='mx-auto max-w-7xl p-6 lg:px-8 my-12'>
        {/* Hero */}
        <p>Hero</p>
        <div className='relative isolate px-6 pt-14 lg:px-8'>
          <div className='mx-auto max-w-2xl py-16 sm:py-16 lg:py-16'>
            <div className='hidden sm:mb-8 sm:flex sm:justify-center'>
              <div className='relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 dark:text-gray-200 ring-1 ring-gray-900/10 hover:ring-gray-900/20'>
                Announcing our next round of funding.{" "}
                <a href='#' className='font-semibold text-[#a0c3d9]'>
                  <span className='absolute inset-0' aria-hidden='true' />
                  Read more <span aria-hidden='true'>&rarr;</span>
                </a>
              </div>
            </div>
            <div className='text-center'>
              <h1 className='text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl'>
                Ex Allievi Esperia
              </h1>
              <p className='mt-6 text-lg leading-8 text-gray-600 dark:text-gray-200'>
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
              <div className='mt-10 flex items-center justify-center gap-x-6'>
                <a
                  href='#chi-siamo'
                  className='rounded-md bg-[#a0c3d9] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                >
                  Scopri chi siamo
                </a>
                <Link
                  href='/soci'
                  className='text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200'
                >
                  Diventa socio <span aria-hidden='true'>→</span>
                </Link>
              </div>
            </div>
          </div>
          <div
            className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
            aria-hidden='true'
          >
            <div
              className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>

        {/* Chi siamo */}
        <p id='chi-siamo'>Chi siamo</p>
        <SectionImage
          title='Chi siamo'
          paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
          buttonText='SCOPRI DI PIÙ'
          link='/chi-siamo'
        />

        {/* Cosa facciamo */}
        <p>Cosa facciamo</p>
        <SectionImage
          title='Cosa facciamo'
          paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
          buttonText='SCOPRI DI PIÙ'
          link='/cosa-facciamo'
          reversed
        />

        <p>Soci (CTA)</p>
        <Cta
          link='/soci'
          title='Lorem Ipsum'
          subTitle='lorem ipsum'
          buttonText='Diventa socio!'
        />

        <p>Foto</p>

        <p>News (dal blog, successivo)</p>

        <p>Dona (CTA)</p>
        <Cta
          link='/sostieni'
          title='Lorem Ipsum'
          subTitle='lorem ipsum'
          buttonText='Dona ora!'
        />
      </main>
    </Layout>
  )
}

export default HomePage
