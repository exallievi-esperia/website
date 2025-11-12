import Cta from '@/components/Cta'
import Heading from '@/components/Heading'
import SectionImage from '@/components/SectionImage'
import Layout from '@/components/layout/Layout'
import Head from 'next/head'
import Link from 'next/link'
import Button from '@/components/Button'
import PhotoAlbum from 'react-photo-album'
import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import NextJsImage from '@/components/NextJsImage'

// Number of photos to hide in Gallery section
const photosToHide: number = 1

const HomePage = () => {
  let photos = [
    {
      src: '/img/gallery/diploma_gigli.jpg',
      width: 1080,
      height: 800,
      alt: 'Festa centenario 2022',
    },
    {
      src: '/img/gallery/festa_2008.jpeg',
      width: 1080,
      height: 800,
      alt: 'Festa ex allievi del 2008 in Città Alta',
    },
    {
      src: '/img/gallery/sala_centro.jpg',
      width: 1080,
      height: 800,
      alt: 'Festa ex allievi al Centro Congressi',
    },
    {
      src: '/img/gallery/bosatelli.JPG',
      width: 1080,
      height: 800,
      alt: 'Festa ex allievi con la partecipazione del cav. Bosatelli',
    },
    {
      src: '/img/gallery/barcella.jpg',
      width: 1080,
      height: 800,
      alt: 'Festa ex allievi con la partecipazione di Barcella',
    },
    {
      src: '/img/gallery/bombassei.jpg',
      width: 1080,
      height: 800,
      alt: "Festa ex allievi con la partecipazione dell'imprenditore Bombassei",
    },
    {
      src: '/img/gallery/sala_immersiva2.jpg',
      width: 1080,
      height: 800,
      alt: 'Sala immersiva',
    },
    {
      src: '/img/gallery/ingresso_museo.jpg',
      width: 1080,
      height: 800,
      alt: 'Foto ingresso Museo TIME',
    },
    {
      src: '/img/gallery/elettronica.jpg',
      width: 1080,
      height: 800,
      alt: 'Consegna borse di studio area elettronica',
    },
    {
      src: '/img/gallery/valentina.jpg',
      width: 1080,
      height: 800,
      alt: 'Foto con Valentina Persico',
    },
  ]

  photos = photos.map((photo, index) => {
    if (photos.length - index - 1 === photosToHide) {
      return {
        ...photo,
        blurDataURL: photo.src,
      }
    } else {
      return {
        ...photo,
      }
    }
  })

  const [index, setIndex] = useState(-1)

  return (
    <Layout>
      <Head>
        <title>Ex Allievi Esperia - Home</title>
      </Head>

      <Heading backgroundImage="/img/museo_time_ampia.jpg" isHome>
        {/* Hero */}
        <div className="relative isolate px-6 lg:px-8">
          <div className="mx-auto max-w-2xl ">
            <div className="mb-8 sm:flex sm:justify-center">
              <div className="w-fit m-auto hover:-translate-y-1.5 hover:cursor-pointer rounded-full text-[#f25116] bg-[#f2511640] dark:bg-[#f2511640] px-3 py-1 text-base font-medium transition duration-300">
                <Link
                  href="https://drive.google.com/drive/folders/1mVj7hp6fLD3_I28pN93HBAvjhgYtZRFH?usp=sharing/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="min-[339px]:hidden">Festa ExAllievi 2025 🎉</div>
                  <div className="max-[338px]:hidden min-[499px]:hidden">
                    Festa ExAllievi 2025 🎉
                  </div>
                  <div className="max-[500px]:hidden">Festa ExAllievi 2025 🎉</div>
                </Link>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                Ex Allievi Esperia
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-800 dark:text-gray-200">
                Associazione ex-allievi dell’I.T.I.S. P. Paleocapa di Bergamo, fondata nel 1920,
                senza fini di lucro e parte integrante dell’Istituto Paleocapa.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-x-6">
                <Button
                  text={'Scopri chi siamo'}
                  link={'#chi-siamo'}
                  style={'w-full sm:w-3/12'}
                  padding="px-1"
                  scroll={false}
                />
                <Button
                  text={'Sezione soci'}
                  link={'/soci'}
                  style={'w-full sm:w-3/12 mt-6 sm:mt-0'}
                  outline
                  padding="px-1"
                />
              </div>
            </div>
          </div>
        </div>
      </Heading>

      <main className="mx-auto max-w-7xl p-6 lg:px-8 mb-12">
        {/* Chi siamo */}
        <SectionImage
          title="Chi siamo"
          id="chi-siamo"
          paragraph="L’Associazione Ex Allievi dell’ITIS P. Paleocapa di Bergamo, fondata nel 1920, non ha fini di lucro ed è parte integrante dell’Istituto Paleocapa. Il suo scopo è quello di promuovere numerose iniziative a favore dell’Istituto, degli allievi e degli insegnanti. Le risorse necessarie allo svolgimento delle attività sono garantite dai Soci e da Aziende che condividono lo scopo dell’Associazione. "
          buttonText="SCOPRI DI PIÙ"
          link="/chi-siamo"
          src="/img/foto_tutti_oggi.jpg"
          alt="Video BergamoTV festa ex allievi 2015"
          reversed
          assetsClassName="scale-125"
        />

        {/* Cosa facciamo */}
        <SectionImage
          title="Cosa facciamo"
          paragraph="Tra le opere più importanti realizzate dall'associazione a favore della scuola possiamo trovare il Museo TIME e la più recente sala immersiva. Inoltre vengono regolarmente emesse delle borse di studio a sostegno degli studenti."
          buttonText="SCOPRI DI PIÙ"
          link="/cosa-facciamo"
          src="/img/progetti/Museo_Time_Dopo.jpg"
          alt="Museo TIME"
        />

        <Cta
          link="/soci"
          title="Soci Ex Allievi"
          subTitle={
            <>
              Entrando a far parte dell'associazione avrai la possibilità di sostenere direttamente
              la scuola e di ampliare le tue conoscenze. Per i neo-diplomati la prima quota è{' '}
              <span className="underline">gratuita!</span>
            </>
          }
          buttonText="Diventa socio"
        />

        {/* La scuola ospita */}
        <SectionImage
          title="La scuola ospita..."
          paragraph="Enigma, a cura di Color Coloris con il contributo degli ExAllievi."
          link="https://drive.google.com/drive/folders/19sbc4p3mfBUbpZ2lg32NVyGjlwzXzQKL?usp=sharing"
          src="/img/eventi/mostra_enigma.webp"
          alt="La scuola ospita"
          buttonText="Guarda le foto"
          reversed
          isBlank
          containerClassName="mt-10"
        />

        <div className="mt-20">
          <h2 className="text-3xl font-bold sm:text-4xl dark:text-white mb-4">Galleria</h2>

          <PhotoAlbum
            layout="columns"
            columns={containerWidth => {
              if (containerWidth < 400) return 2
              if (containerWidth < 800) return 3
              return 4
            }}
            photos={photos.slice(0, -photosToHide)}
            onClick={({ index }) => setIndex(index)}
            renderPhoto={NextJsImage}
            defaultContainerWidth={1200}
            sizes={{ size: 'calc(100vw - 240px)' }}
          />

          <Lightbox
            slides={photos}
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
            plugins={[Fullscreen, Zoom]}
          />
        </div>

        <Cta
          link="/sostieni"
          title="Sostieni l'associazione"
          subTitle="Puoi sostenere economicamente l'associazione donando il tuo 5x1000 oppure tramite delle erogazioni liberali."
          buttonText="Dona ora"
        />
      </main>
    </Layout>
  )
}

export default HomePage
