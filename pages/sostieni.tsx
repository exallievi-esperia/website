import Layout from "@/components/layout/Layout"
import Head from "next/head"
import Image from "next/image"
import { RiNumber1, RiNumber2, RiNumber3 } from "react-icons/ri"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import Link from "next/link"
import Heading from "@/components/Heading"

const settings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  speed: 10000,
  autoplaySpeed: 0,
  cssEase: "linear",
  arrows: false,
}

const SostieniPage = () => {
  return (
    <Layout>
      <Head>
        <title>Sostieni - Ex Allievi Esperia</title>
      </Head>

      <Heading
        title='Sostieni'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
      />

      <main className='mx-auto max-w-7xl p-6 lg:px-8 my-20'>
        {/* 5x1000 */}
        <div>
          <h2 className='font-bold text-3xl dark:text-white'>5x1000</h2>

          <div className='flex md:gap-x-10 gap-y-10 md:gap-y-0 flex-col md:flex-row pt-5 md:pt-12 mx-auto text-gray-600'>
            <div className='w-full md:w-1/2'>
              <div className='flex relative pb-12'>
                <p className="dark:text-gray-200">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>

              {/* Primo step */}
              <div className='flex relative pb-12'>
                <div className='h-full w-10 absolute inset-0 flex items-center justify-center'>
                  <div className='h-full w-1 bg-gray-200 pointer-events-none'></div>
                </div>
                <div className='flex-shrink-0 w-10 h-10 rounded-full bg-[#f25116] inline-flex items-center justify-center text-white relative z-10'>
                  <RiNumber1 className='w-5 h-5' />
                </div>
                <div className='flex-grow pl-4'>
                  <h2 className='font-medium title-font text-sm text-gray-900 dark:text-gray-100 mb-1 tracking-wider'>
                    STEP 1
                  </h2>
                  <p className='leading-relaxed dark:text-gray-200'>
                    VHS cornhole pop-up, try-hard 8-bit iceland helvetica.
                    Kinfolk bespoke try-hard cliche palo santo offal.
                  </p>
                </div>
              </div>

              {/* Secondo step */}
              <div className='flex relative pb-12'>
                <div className='h-full w-10 absolute inset-0 flex items-center justify-center'>
                  <div className='h-full w-1 bg-gray-200 pointer-events-none'></div>
                </div>
                <div className='flex-shrink-0 w-10 h-10 rounded-full bg-[#f25116] inline-flex items-center justify-center text-white relative z-10'>
                  <RiNumber2 className='w-5 h-5' />
                </div>
                <div className='flex-grow pl-4'>
                  <h2 className='font-medium title-font text-sm text-gray-900 dark:text-gray-100 mb-1 tracking-wider'>
                    STEP 2
                  </h2>
                  <p className='leading-relaxed dark:text-gray-200'>
                    Coloring book nar whal glossier master cleanse umami. Salvia
                    +1 master cleanse blog taiyaki.
                  </p>
                </div>
              </div>

              {/* Ultimo step */}
              <div className='flex relative'>
                <div className='flex-shrink-0 w-10 h-10 rounded-full bg-[#f25116] inline-flex items-center justify-center text-white relative z-10'>
                  <RiNumber3 className='w-5 h-5' />
                </div>
                <div className='flex-grow pl-4'>
                  <h2 className='font-medium title-font text-sm text-gray-900 dark:text-gray-100 mb-1 tracking-wider'>
                    FINISH
                  </h2>
                  <p className='leading-relaxed dark:text-gray-200'>
                    Pitchfork ugh tattooed scenester echo park gastropub
                    whatever cold-pressed retro.
                  </p>
                </div>
              </div>
            </div>

            <Image
              src='/img/5x1000.png'
              alt='Immagine come donare il 5x1000'
              width={533}
              height={753}
              className='w-full md:w-1/2 object-contain aspect-auto sm:aspect-square'
            />
          </div>
        </div>

        {/* Donazioni libere */}
        <div className='mt-20'>
          <h2 className='font-bold text-3xl dark:text-white'>Donazioni libere</h2>

          <div className='flex flex-col sm:flex-row sm:gap-x-20 gap-y-10 sm:gap-y-0 items-center mt-5 justify-between'>
            <div className=' text-gray-600 dark:text-gray-200'>
              <p className='text-left sm:max-w-md md:max-w-3xl'>
                Per effettuare una donazione libera puoi utilizzare Paypal,
                clicca sul pulsante accanto. Puoi anche fare un bonifico
                bancario a IBAN IT12N0538711110000042430482 (BPER Banca).
              </p>
            </div>

            <Link
              href='https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=92VVU7TEAH774'
              rel='noreferrer'
              target='_blank'
              className='md:mr-16'
            >
              <Image
                src='/img/dona_ora_paypal_button.png'
                alt='Donazione Paypal'
                width={193}
                height={106}
                className='object-contain'
              />
            </Link>
          </div>
        </div>

        {/* Erogazioni da aziende */}
        <div className='mt-20'>
          <h2 className='font-bold text-3xl dark:text-white'>Erogazioni da aziende</h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10 md:gap-y-0 leading-7 mt-5 text-gray-600 dark:text-gray-200'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <Slider {...settings} className='mt-16 flex items-center'>
            <Image
              src='/img/loghi-aziende/brembo.jpg'
              alt='Logo azienda Brembo'
              width={100}
              height={100}
              className='object-contain h-14'
            />

            <Image
              src='/img/loghi-aziende/brembo.jpg'
              alt='Logo azienda Brembo'
              width={100}
              height={100}
              className='object-contain h-14'
            />

            <Image
              src='/img/loghi-aziende/brembo.jpg'
              alt='Logo azienda Brembo'
              width={100}
              height={100}
              className='object-contain h-14'
            />

            <Image
              src='/img/loghi-aziende/brembo.jpg'
              alt='Logo azienda Brembo'
              width={100}
              height={100}
              className='object-contain h-14'
            />
          </Slider>
        </div>
      </main>
    </Layout>
  )
}

export default SostieniPage
