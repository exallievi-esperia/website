import Cta from "@/components/Cta"
import Heading from "@/components/Heading"
import SectionImage from "@/components/SectionImage"
import Layout from "@/components/layout/Layout"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import "photoswipe/dist/photoswipe.css"
import { Gallery, Item } from "react-photoswipe-gallery"
import Button from "@/components/Button"

const HomePage = () => {
  return (
    <Layout>
      <Head>
        <title>Ex Allievi Esperia - Home</title>
      </Head>

      <Heading backgroundImage='/img/museo_time_ampia.jpg' isHome>
        {/* Hero */}
        <div className='relative isolate px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl '>
            <div className='mb-8 sm:flex sm:justify-center'>
              <div className='w-fit m-auto hover:-translate-y-1.5 hover:cursor-pointer rounded-full text-[#f25116] bg-[#f2511640] dark:bg-[#f2511640] px-3 py-1 text-base font-medium transition duration-300'>
                <Link
                  href='/blog/festa-exallievi-2023'
                  className='min-[339px]:hidden'
                >
                  Festa del 27/05
                </Link>
                <Link
                  href='/blog/festa-exallievi-2023'
                  className='max-[338px]:hidden min-[499px]:hidden'
                >
                  Festa del 27 Maggio 2023
                </Link>
                <Link
                  href='/blog/festa-exallievi-2023'
                  className='max-[500px]:hidden'
                >
                  Partecipa alla festa del 27 Maggio
                </Link>
              </div>
            </div>
            <div className='text-center'>
              <h1 className='text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl'>
                Ex Allievi Esperia
              </h1>
              <p className='mt-6 text-lg leading-8 text-gray-800 dark:text-gray-200'>
                Associazione ex-allievi dell’I.T.I.S. P. Paleocapa di Bergamo,
                fondata nel 1920, senza fini di lucro e parte integrante
                dell’Istituto Paleocapa.
              </p>
              <div className='mt-10 flex flex-col sm:flex-row items-center justify-center gap-x-6'>
                <Button
                  text={"Scopri chi siamo"}
                  link={"#chi-siamo"}
                  style={"w-full sm:w-3/12"}
                  padding='px-1'
                  scroll={false}
                />
                <Button
                  text={"Sezione soci"}
                  link={"/soci"}
                  style={"w-full sm:w-3/12 mt-6 sm:mt-0"}
                  outline
                  padding='px-1'
                />
              </div>
            </div>
          </div>
        </div>
      </Heading>

      <main className='mx-auto max-w-7xl p-6 lg:px-8 mb-12'>
        {/* Chi siamo */}
        <SectionImage
          title='Chi siamo'
          id='chi-siamo'
          paragraph='L’Associazione Ex Allievi dell’ITIS P. Paleocapa di Bergamo, fondata nel 1920, non ha fini di lucro ed è parte integrante dell’Istituto Paleocapa. Il suo scopo è quello di promuovere numerose iniziative a favore dell’Istituto, degli allievi e degli insegnanti. Le risorse necessarie allo svolgimento delle attività sono garantite dai Soci e da Aziende che condividono lo scopo dell’Associazione. '
          buttonText='SCOPRI DI PIÙ'
          link='/chi-siamo'
          imgSrc='/img/assemblea_2012.jpg'
          imgAlt='I soci'
          reversed
        />

        {/* Cosa facciamo */}
        <SectionImage
          title='Cosa facciamo'
          paragraph="Tra le opere più importanti realizzate dall'associazione a favore della scuola possiamo trovare il Museo TIME e la più recente sala immersiva. Inoltre vengono regolarmente emesse delle borse di studio a sostegno degli studenti."
          buttonText='SCOPRI DI PIÙ'
          link='/cosa-facciamo'
          imgSrc='/img/progetti/Museo_Time_Dopo.jpg'
          imgAlt='Museo TIME'
        />

        <Cta
          link='/soci'
          title='Soci Ex Allievi'
          subTitle="Entrando a far parte dell'associazione avrai la possibilità di sostenere direttamente la scuola e di ampliare le tue conoscenze."
          buttonText='Diventa socio'
        />

        <div className='mt-20'>
          <h2 className='text-3xl font-bold sm:text-4xl dark:text-white'>
            Galleria
          </h2>

          <Gallery withDownloadButton>
            <div className='mt-8 grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
              <Item
                original='/img/gallery/diploma_gigli.jpg'
                thumbnail='/img/gallery/diploma_gigli.jpg'
                width='1600'
                height='1068'
                alt='Diploma Gigli festa del centenario 2022'
              >
                {({ ref, open }) => (
                  <Image
                    className='cursor-pointer rounded-sm object-cover h-full'
                    src='/img/gallery/diploma_gigli.jpg'
                    ref={ref as React.MutableRefObject<HTMLImageElement>}
                    onClick={open}
                    width='1600'
                    height='1600'
                    alt='Diploma Gigli festa del centenario 2022'
                  />
                )}
              </Item>

              <Item
                original='/img/gallery/festa_2008.jpeg'
                thumbnail='/img/gallery/festa_2008.jpeg'
                width='1600'
                height='1068'
                alt='Festa ex allievi del 2008 in Città Alta'
              >
                {({ ref, open }) => (
                  <Image
                    className='cursor-pointer rounded-sm lg:row-span-2 h-full w-full object-cover'
                    src='/img/gallery/festa_2008.jpeg'
                    ref={ref as React.MutableRefObject<HTMLImageElement>}
                    onClick={open}
                    width='1600'
                    height='1600'
                    alt='Festa ex allievi del 2008 in Città Alta'
                  />
                )}
              </Item>

              <Item
                original='/img/gallery/sala_centro.jpg'
                thumbnail='/img/gallery/sala_centro.jpg'
                width='1600'
                height='1068'
                alt='Festa ex allievi del 2011 al Centro congressi'
              >
                {({ ref, open }) => (
                  <Image
                    className='cursor-pointer rounded-sm object-cover h-full'
                    src='/img/gallery/sala_centro.jpg'
                    ref={ref as React.MutableRefObject<HTMLImageElement>}
                    onClick={open}
                    width='1600'
                    height='1600'
                    alt='Festa ex allievi del 2011 al Centro congressi'
                  />
                )}
              </Item>

              <Item
                original='/img/gallery/bosatelli.JPG'
                thumbnail='/img/gallery/bosatelli.JPG'
                width='1600'
                height='1068'
                alt='Festa degli ex allievi con la partecipazione del cav. Bosatelli'
              >
                {({ ref, open }) => (
                  <div
                    className='relative lg:row-span-2 w-full h-full object-cover'
                    ref={ref as React.MutableRefObject<HTMLImageElement>}
                    onClick={open}
                  >
                    <Image
                      className='cursor-pointer rounded-sm lg:row-span-2 w-full h-full object-cover'
                      src='/img/gallery/bosatelli.JPG'
                      ref={ref as React.MutableRefObject<HTMLImageElement>}
                      onClick={open}
                      width='1600'
                      height='1600'
                      alt='Festa degli ex allievi con la partecipazione del cav. Bosatelli'
                    />
                    <div className='hidden lg:flex absolute  items-center justify-center rounded-sm shadow w-full h-full inset-0 bg-white/90 cursor-pointer hover:bg-white/80 dark:bg-gray-900/[0.80] dark:hover:bg-gray-900/70 transition duration-300 dark:text-white'>
                      <p className='text-center text-3xl md:text-2xl font-semibold'>
                        +4 foto
                      </p>
                    </div>
                  </div>
                )}
              </Item>

              <Item
                original='/img/gallery/barcella.jpg'
                thumbnail='/img/gallery/barcella.jpg'
                width='1600'
                height='1068'
                alt='Festa degli ex allievi con la partecipazione di Barcella'
              >
                {({ ref, open }) => (
                  <Image
                    className='cursor-pointer rounded-sm object-cover h-full'
                    src='/img/gallery/barcella.jpg'
                    ref={ref as React.MutableRefObject<HTMLImageElement>}
                    onClick={open}
                    width='1600'
                    height='1600'
                    alt='Festa degli ex allievi con la partecipazione di Barcella'
                  />
                )}
              </Item>

              <Item
                original='/img/gallery/bombassei.jpg'
                thumbnail='/img/gallery/bombassei.jpg'
                width='1600'
                height='1068'
                alt='Festa degli ex allievi del 2010 con la partecipazione di Bombassei'
              >
                {({ ref, open }) => (
                  <div
                    className='relative'
                    ref={ref as React.MutableRefObject<HTMLImageElement>}
                    onClick={open}
                  >
                    <Image
                      className='cursor-pointer rounded-sm object-cover h-full'
                      src='/img/gallery/bombassei.jpg'
                      ref={ref as React.MutableRefObject<HTMLImageElement>}
                      onClick={open}
                      width='1600'
                      height='1600'
                      alt='Festa degli ex allievi del 2010 con la partecipazione di Bombassei'
                    />
                    <div className='lg:hidden absolute flex items-center justify-center rounded-sm shadow w-full h-full cursor-pointer inset-0 bg-white/90 hover:bg-white/80 dark:bg-gray-900/[0.80] dark:hover:bg-gray-900/70 transition duration-300 dark:text-white'>
                      <p className='text-center text-3xl md:text-2xl font-semibold'>
                        +4 foto
                      </p>
                    </div>
                  </div>
                )}
              </Item>

              {/* hidden */}
              <Item
                original='/img/gallery/sala_immersiva2.jpg'
                thumbnail='/img/gallery/sala_immersiva2.jpg'
                width='1600'
                height='1068'
                alt='Sala immersiva alla festa del centenario 2022'
              >
                {({ ref, open }) => (
                  <Image
                    className='hidden cursor-pointer rounded-sm object-cover h-full'
                    src='/img/gallery/sala_immersiva2.jpg'
                    ref={ref as React.MutableRefObject<HTMLImageElement>}
                    onClick={open}
                    width='1600'
                    height='1600'
                    alt='Sala immersiva alla festa del centenario 2022'
                  />
                )}
              </Item>

              <Item
                original='/img/gallery/ingresso_museo.jpg'
                thumbnail='/img/gallery/ingresso_museo.jpg'
                width='1600'
                height='1068'
                alt='Foto ingresso Museo TIME'
              >
                {({ ref, open }) => (
                  <Image
                    className='hidden cursor-pointer rounded-sm object-cover h-full'
                    src='/img/gallery/ingresso_museo.jpg'
                    ref={ref as React.MutableRefObject<HTMLImageElement>}
                    onClick={open}
                    width='1600'
                    height='1600'
                    alt='Foto ingresso Museo TIME'
                  />
                )}
              </Item>

              <Item
                original='/img/gallery/elettronica.jpg'
                thumbnail='/img/gallery/elettronica.jpg'
                width='1600'
                height='1068'
                alt='Borse di studio Elettronica'
              >
                {({ ref, open }) => (
                  <Image
                    className='hidden cursor-pointer rounded-sm object-cover h-full'
                    src='/img/gallery/elettronica.jpg'
                    ref={ref as React.MutableRefObject<HTMLImageElement>}
                    onClick={open}
                    width='1600'
                    height='1600'
                    alt='Borse di studio Elettronica'
                  />
                )}
              </Item>

              <Item
                original='/img/gallery/valentina.jpg'
                thumbnail='/img/gallery/valentina.jpg'
                width='1600'
                height='1068'
                alt='Festa degli ex allievi del 2018 con Valentina Persico'
              >
                {({ ref, open }) => (
                  <Image
                    className='hidden cursor-pointer rounded-sm object-cover h-full'
                    src='/img/gallery/valentina.jpg'
                    ref={ref as React.MutableRefObject<HTMLImageElement>}
                    onClick={open}
                    width='1600'
                    height='1600'
                    alt='Festa degli ex allievi del 2018 con Valentina Persico'
                  />
                )}
              </Item>
            </div>
          </Gallery>
        </div>

        <Cta
          link='/sostieni'
          title="Sostieni l'associazione"
          subTitle="Puoi sostenere economicamente l'associazione donando il tuo 5x1000 oppure tramite delle erogazioni liberali."
          buttonText='Dona ora'
        />
      </main>
    </Layout>
  )
}

export default HomePage
