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

      <Heading backgroundImage='/img/eventi/elettronica_23032023.jpg' isHome>
        {/* Hero */}
        <div className='relative isolate px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl '>
            <div className='mb-8 sm:flex sm:justify-center'>
              <div className='relative px-3 py-1 text-base font-medium text-gray-700 dark:text-gray-200 leading-6 transition duration-300'>
                
              </div>
            </div>
            <div className='text-center'>
              <h1 className='text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl'>
                Ex Allievi Esperia
              </h1>
              <p className='mt-6 text-lg leading-8 text-gray-600 dark:text-gray-200'>
                Associazione ex-Allievi dell’I.T.I.S. P. Paleocapa di Bergamo,
                fondata nel 1920, senza fini di lucro e parte integrante
                dell’Istituto Paleocapa.
              </p>
              <div className='mt-10 flex flex-col sm:flex-row items-center justify-center gap-x-6'>
                <Button
                  text={"Scopri chi siamo"}
                  link={"#chi-siamo"}
                  style={"w-full sm:w-3/12"}
                  padding='px-1'
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
          imgSrc='/img/eventi/elettronica_23032023.jpg'
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

          {/* <Gallery withDownloadButton>
            <div className='mt-8 grid gap-3 grid-cols-[15rem_10rem_10rem] grid-rows-[7rem_7rem]'>
              <Item
                original='/img/eventi/centenario_28052022.jpg'
                thumbnail='/img/eventi/centenario_28052022.jpg'
                width='1600'
                height='1600'
                alt='Photo of seashore by Folkert Gorter'
              >
                {({ ref, open }) => (
                  <Image
                    className='cursor-pointer rounded-sm'
                    src='/img/eventi/centenario_28052022.jpg'
                    ref={ref as React.MutableRefObject<HTMLImageElement>}
                    onClick={open}
                    width='1600'
                    height='1600'
                    alt='Photo of seashore by Folkert Gorter'
                  />
                )}
              </Item>
              <Item
                original='https://farm6.staticflickr.com/5591/15008867125_b61960af01_h.jpg'
                thumbnail='https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg'
                width='1600'
                height='1068'
                alt='Photo of mountain lake by Samuel Rohl'
              >
                {({ ref, open }) => (
                  <Image
                    className='cursor-pointer object-cover w-full h-full rounded-sm'
                    src='https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg'
                    ref={ref as React.MutableRefObject<HTMLImageElement>}
                    onClick={open}
                    width='1600'
                    height='1068'
                    alt='Photo of mountain lake by Samuel Rohl'
                  />
                )}
              </Item>
              <Item
                original='https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg'
                thumbnail='https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg'
                width='1600'
                height='1066'
                alt='Photo of fog in the village by Ales Krivec'
              >
                {({ ref, open }) => (
                  <Image
                    className='cursor-pointer object-cover w-full h-full rounded-sm'
                    src='https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg'
                    ref={ref as React.MutableRefObject<HTMLImageElement>}
                    onClick={open}
                    width='1600'
                    height='1066'
                    alt='Photo of fog in the village by Ales Krivec'
                  />
                )}
              </Item>
              <Item
                original='https://farm6.staticflickr.com/5584/14985868676_b51baa4071_h.jpg'
                thumbnail='https://farm6.staticflickr.com/5584/14985868676_4b802b932a_m.jpg'
                width='1600'
                height='1066'
                alt='Photo of river sunset by Michael Hull'
              >
                {({ ref, open }) => (
                  <Image
                    src='https://farm6.staticflickr.com/5584/14985868676_4b802b932a_m.jpg'
                    ref={ref as React.MutableRefObject<HTMLImageElement>}
                    onClick={open}
                    width='1600'
                    height='1066'
                    alt='Photo of river sunset by Michael Hull'
                    className='cursor-pointer object-cover w-full h-full col-start-2 rounded-sm'
                  />
                )}
              </Item>
              <Item
                original='https://farm4.staticflickr.com/3920/15008465772_d50c8f0531_h.jpg'
                thumbnail='https://farm4.staticflickr.com/3920/15008465772_383e697089_m.jpg'
                width='1600'
                height='1066'
                alt='Photo of bear by Thomas Lefebvre'
              >
                {({ ref, open }) => (
                  <Image
                    className='cursor-pointer object-cover w-full h-full rounded-sm'
                    src='https://farm4.staticflickr.com/3920/15008465772_383e697089_m.jpg'
                    ref={ref as React.MutableRefObject<HTMLImageElement>}
                    onClick={open}
                    width='1600'
                    height='1066'
                    alt='Photo of bear by Thomas Lefebvre'
                  />
                )}
              </Item>
            </div>
          </Gallery> */}
        </div>

        {/* <p className='mt-20'>News (dal blog, successivo)</p>  */}

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
