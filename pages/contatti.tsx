import Heading from "@/components/Heading"
import Layout from "@/components/layout/Layout"
import Head from "next/head"
import Link from "next/link"
import { MdMail, MdPhone, MdLocationPin } from "react-icons/md"
import { Map, Marker, ZoomControl } from "pigeon-maps"

const ContattiPage = () => {
  return (
    <Layout>
      <Head>
        <title>Contatti - Ex Allievi Esperia</title>
      </Head>

      <Heading
        title={"Contatti"}
        description={
          "Tutte le informazioni utili per contattare o incontrare l'Associazione"
        }
        backgroundImage='/img/esterno.jpg'
        position='object-bottom'
      />

      <main className='mx-auto max-w-7xl p-6 lg:px-8 my-20'>
        <div className='flex flex-col-reverse lg:flex-row justify-around items-center'>
          {/* Map */}
          <div className='w-full lg:w-3/5'>
            <Map
              height={450}
              defaultCenter={[45.68985, 9.68142]}
              defaultZoom={16}
            >
              <ZoomControl />
              <Marker
                width={50}
                color={"red"}
                style={{ filter: "none" }}
                anchor={[45.68985, 9.68142]}
              />
            </Map>
          </div>

          {/* Info */}
          <div className='flex flex-col sm:flex-row lg:flex-col sm:gap-x-20 lg:gap-x-0 mb-10 gap-y-10 lg:my-auto h-full justify-around'>
            <Link
              href='mailto:exallievi@itispaleocapa.it'
              className='group flex flex-col sm:items-center lg:items-start'
            >
              <MdMail className='w-8 h-8 group-hover:rotate-12 group-hover:scale-110 transition duration-300 text-[#f25116]' />
              <p className='font-bold text-xl dark:text-white'>Email</p>
              <p className='text-gray-600 dark:text-gray-200'>
                exallievi@itispaleocapa.it
              </p>
            </Link>
            <Link
              href='tel:035319388'
              className='group flex flex-col sm:items-center lg:items-start'
            >
              <MdPhone className='w-8 h-8 group-hover:rotate-12 group-hover:scale-110 transition duration-300 text-[#f25116]' />
              <p className='font-bold text-xl dark:text-white'>Telefono</p>
              <p className='text-gray-600 dark:text-gray-200'> 035 319388</p>
            </Link>
            <Link
              href='https://goo.gl/maps/JjHGPvEaM1fiAFwk7'
              rel='noopener noreferrer'
              target='_blank'
              className='group flex flex-col sm:items-center lg:items-start'
            >
              <MdLocationPin className='w-8 h-8 group-hover:rotate-12 group-hover:scale-110 transition duration-300 text-[#f25116]' />
              <p className='font-bold text-xl dark:text-white'>Indirizzo</p>
              <p className='text-gray-600 dark:text-gray-200'>
                Via Mauro Gavazzeni, 29, 24125 Bergamo
              </p>
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default ContattiPage
