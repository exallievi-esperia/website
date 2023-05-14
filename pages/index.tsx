import Cta from "@/components/Cta"
import SectionImage from "@/components/SectionImage"
import Layout from "@/components/layout/Layout"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"

const HomePage = () => {
  return (
    <Layout>
      <Head>
        <title>Ex Allievi Esperia - Home</title>
      </Head>
      <main className='mx-auto max-w-7xl p-6 lg:px-8 my-12'>
        {/* Hero */}
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
        </div>

        {/* Chi siamo */}
        <SectionImage
          title='Chi siamo'
          paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
          buttonText='SCOPRI DI PIÙ'
          link='/chi-siamo'
          imgSrc='http://via.placeholder.com/1280x500'
          imgAlt=''
        />

        {/* Cosa facciamo */}
        <SectionImage
          title='Cosa facciamo'
          paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
          buttonText='SCOPRI DI PIÙ'
          link='/cosa-facciamo'
          imgSrc='/img/progetti/Museo_Time_Dopo.jpg'
          imgAlt='Museo TIME'
          reversed
        />

        <Cta
          link='/soci'
          title='Soci'
          subTitle='lorem ipsum'
          buttonText='Diventa socio!'
        />

        <div className='mt-20'>
          <h2 className='text-3xl font-bold sm:text-4xl dark:text-white'>
            Galleria
          </h2>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-5'>
            <img
              src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80'
              alt='image'
              className='object-cover h-full w-full sm:col-span-2'
            />
            <img
              src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80'
              alt='image'
              className='object-cover w-full h-full sm:row-span-2'
            />
            <img
              src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80'
              alt='image'
              className='object-cover h-full w-full'
            />
            <img
              src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80'
              alt='image'
              className='object-cover w-full h-full'
            />
            <img
              src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80'
              alt='image'
              className='object-cover h-full w-full'
            />
            <img
              src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80'
              alt='image'
              className='object-cover h-full w-full sm:col-span-2'
            />
            <img
              src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80'
              alt='image'
              className='object-cover w-full h-full'
            />
            <img
              src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80'
              alt='image'
              className='object-cover h-full w-full'
            />
          </div>
        </div>

        <p className='mt-20'>News (dal blog, successivo)</p>

        <Cta
          link='/sostieni'
          title='Sostieni'
          subTitle='lorem ipsum'
          buttonText='Dona ora!'
        />
      </main>
    </Layout>
  )
}

export default HomePage
