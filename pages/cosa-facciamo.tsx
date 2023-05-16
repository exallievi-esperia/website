import Layout from "@/components/layout/Layout"
import Head from "next/head"
import Image from "next/image"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import Heading from "@/components/Heading"

const settings = {
  dots: true,
  arrows: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const CosaFacciamoPage = () => {
  return (
    <Layout>
      <Head>
        <title>Cosa facciamo - Ex Allievi Esperia</title>
      </Head>

      <Heading
        title={"Cosa facciamo"}
        description={"Scopri i progetti dell'Associazione"}
        backgroundImage='/img/eventi/elettronica_23032023.jpg'
      />

      <main className='mx-auto max-w-7xl p-6 lg:px-8 my-20'>
        {/* Progetti realizzati */}
        <section className='flex flex-col gap-12 lg:gap-20'>
          {/* Museo TIME */}
          <div className='flex flex-col-reverse lg:flex-row gap-8 lg:gap-16'>
            {/* Img */}
            <div className='w-full lg:w-1/2 mt-8'>
              <Slider {...settings} className='self-center'>
                <div>
                  <Image
                    alt='Museo TIME prima'
                    width={1000}
                    height={1000}
                    src='/img/progetti/Museo_Time_Prima.jpg'
                    className='h-full w-full object-cover'
                    priority
                  />
                  <p className='text-center w-full mt-3 dark:text-gray-200'>
                    Prima
                  </p>
                </div>

                <div>
                  <Image
                    alt='Museo TIME dopo'
                    width={1000}
                    height={1000}
                    src='/img/progetti/Museo_Time_Dopo.jpg'
                    className='h-full w-full object-cover'
                    priority
                  />
                  <p className='text-center w-full mt-3 dark:text-gray-200'>
                    Dopo
                  </p>
                </div>
              </Slider>
            </div>

            {/* Text */}
            <div className='self-center'>
              <div className='max-w-3xl mb-8'>
                <h2 className='text-2xl font-bold sm:text-2xl dark:text-white'>
                  Museo TIME
                </h2>
                <span className='flex items-center text-gray-500 dark:text-gray-300 text-base mt-2'>
                  <span className='block h-0.5 w-4 bg-[#f25116] mr-2 rounded-full'></span>
                  Gennaio 2016
                </span>
              </div>

              <div className='space-y-4 text-gray-600 dark:text-gray-200'>
                <p>
                  Uno spazio dedicato all’industria bergamasca in un luogo
                  simbolo per generazioni di studenti. Una scuola che ha formato
                  migliaia di professionisti dell’industria: quale posto
                  migliore per il museo dell’industria bergamasca che l’istituto
                  'Pietro Paleocapa' di Bergamo. Per tutti l’Esperia.
                </p>

                <p>
                  Il museo TIME è uno spazio polivalente in cui si possano
                  contemporaneamente vedere reperti di macchine che hanno fatto
                  la storia dell’industria bergamasca, tenere conferenze,
                  riunioni e incontri a tema, uno spazio a disposizione delle
                  imprese bergamasche e per ultimo, ma forse l’aspetto più
                  importante, permettere agli studenti di sperimentare, di
                  capire, di esplorare e progettare le macchine del futuro
                  partendo da ciò che è stato ed è.
                </p>
              </div>
            </div>
          </div>

          <hr />

          {/* Lab */}
          <div className='flex flex-col lg:flex-row gap-8 lg:gap-16'>
            {/* Text */}
            <div className='self-center'>
              <div className='max-w-3xl mb-8'>
                <h2 className='text-2xl font-bold sm:text-2xl dark:text-white'>
                  Sala Immersiva
                </h2>
                <span className='flex items-center text-gray-500 dark:text-gray-300 text-base mt-2'>
                  <span className='block h-0.5 w-4 bg-[#f25116] mr-2 rounded-full'></span>
                  Novembre 2021
                </span>
              </div>

              <div className='space-y-4 text-gray-600 dark:text-gray-200'>
                <p>
                  La sala immersiva è una stanza in cui è possibile riprodurre
                  spazi tridimensionali ed interagire con essi. Sarà possibile
                  rivivere un momento di storia, immergendosi in un campo di
                  battaglia, piuttosto che camminare in un ambiente aperto. Ma
                  soprattutto, per ciò che interessa l’indirizzo tecnico,
                  frequentare laboratori di tipo virtuale in cui anche
                  macchinari non disponibili o apparecchiature potenzialmente
                  complesse, saranno a disposizione degli studenti, che potranno
                  interagire con esse.
                </p>

                <p>
                  Si tratta di uno spazio di riqualificazione degli sheed in
                  prossimità del Museo Time, è una superficie di circa 100 mq,
                  una stanza completamente isolata dall’ambiente esterno. La
                  sala immersiva è un ambiente in cui un video viene proiettato
                  su più pareti e, nei casi più evoluti, anche sul pavimento ed
                  il soffitto, integrato da un sistema di diffusione audio,
                  generando una sensazione di coinvolgimento completo nello
                  spettatore, che si trova “immerso” nel progetto.
                </p>
              </div>
            </div>

            {/* Img */}
            <div className='w-full lg:w-1/2 mt-8'>
              <Slider {...settings} className='self-center'>
                <div>
                  <Image
                    alt='Sala immersiva prima'
                    width={1000}
                    height={1000}
                    src='/img/progetti/Sala_Immersiva_Prima.jpg'
                    className='h-full w-full object-cover'
                    priority
                  />
                  <p className='text-center w-full mt-3 dark:text-gray-200'>
                    Prima
                  </p>
                </div>

                <div>
                  <Image
                    alt='Sala immersiva dopo'
                    width={1000}
                    height={1000}
                    src='/img/progetti/Sala_Immersiva_Dopo.jpg'
                    className='h-full w-full object-cover'
                    priority
                  />
                  <p className='text-center w-full mt-3 dark:text-gray-200'>
                    Dopo
                  </p>
                </div>
              </Slider>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default CosaFacciamoPage
