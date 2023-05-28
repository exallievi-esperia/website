import Cta from "@/components/Cta"
import Heading from "@/components/Heading"
import SectionImage from "@/components/SectionImage"
import Layout from "@/components/layout/Layout"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import Button from "@/components/Button"
import Gallery from "react-photo-gallery"

const HomePage = () => {
  const photos = [
    {
      src: "/img/gallery/diploma_gigli.jpg",
      width: 4,
      height: 3,
    },
    {
      src: "/img/gallery/festa_2008.jpeg",
      width: 1,
      height: 1,
    },
    {
      src: "/img/gallery/sala_centro.jpg",
      width: 1,
      height: 1,
    },
    {
      src: "/img/gallery/bosatelli.JPG",
      width: 1,
      height: 1,
    },
    {
      src: "/img/gallery/barcella.jpg",
      width: 1,
      height: 1,
    },
    {
      src: "/img/gallery/bombassei.jpg",
      width: 1,
      height: 1,
    },
    {
      src: "/img/gallery/sala_immersiva2.jpg",
      width: 1,
      height: 1,
    },
    {
      src: "/img/gallery/ingresso_museo.jpg",
      width: 1,
      height: 1,
    },
    {
      src: "/img/gallery/elettronica.jpg",
      width: 1,
      height: 1,
    },
    {
      src: "/img/gallery/valentina.jpg",
      width: 1,
      height: 1,
    },
  ]

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
          src='/video/bgtv2015.mp4'
          alt='Video BergamoTV festa ex allievi 2015'
          reversed
          isVideo
        />

        {/* Cosa facciamo */}
        <SectionImage
          title='Cosa facciamo'
          paragraph="Tra le opere più importanti realizzate dall'associazione a favore della scuola possiamo trovare il Museo TIME e la più recente sala immersiva. Inoltre vengono regolarmente emesse delle borse di studio a sostegno degli studenti."
          buttonText='SCOPRI DI PIÙ'
          link='/cosa-facciamo'
          src='/img/progetti/Museo_Time_Dopo.jpg'
          alt='Museo TIME'
        />

        <Cta
          link='/soci'
          title='Soci Ex Allievi'
          subTitle={
            <>
              Entrando a far parte dell'associazione avrai la possibilità di
              sostenere direttamente la scuola e di ampliare le tue conoscenze.
              Per i neo-diplomati la prima quota è{" "}
              <span className='underline'>gratuita!</span>
            </>
          }
          buttonText='Diventa socio'
        />

        <div className='mt-20'>
          <h2 className='text-3xl font-bold sm:text-4xl dark:text-white mb-4'>
            Galleria
          </h2>
          <Gallery photos={photos} />
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
