import Layout from "@/components/layout/Layout"
import Head from "next/head"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import Testimonial from "@/components/Testimonial"
import Feature from "@/components/Feature"
import Heading from "@/components/Heading"
import Button from "@/components/Button"

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const SociPage = () => {
  return (
    <Layout>
      <Head>
        <title>Soci - Ex Allievi Esperia</title>
      </Head>

      <Heading
        title='Soci'
        description='Iscriviti o rinnova la tua quota'
        backgroundImage='/img/assemblea_annuale.jpeg'
        position='object-[center_62%]'
      />

      <main className='mx-auto max-w-7xl p-6 lg:px-8 my-20'>
        {/* Iscriviti | Rinnova */}
        <div className='flex flex-col md:flex-row md:justify-around gap-10'>
          {/* Iscriviti */}
          <div className='w-full md:w-1/2 flex flex-col'>
            <h2 className='font-bold text-3xl md:text-center dark:text-white'>
              Iscriviti
            </h2>
            <p className='mt-5 mb-2 leading-7 dark:text-gray-200'>
              Se non sei socio dell’Associazione Ex Allievi dell’I.T.I.S. P.
              Paleocapa di Bergamo (Esperia) – APS ma vorresti diventarlo, segui
              queste semplici istruzioni:
            </p>

            <ol className='leading-7 mb-8 dark:text-gray-200'>
              <li>
                <p>
                  1. Premi sul pulsante “<strong>ISCRIVITI</strong>”
                </p>
              </li>

              <li>
                <p>
                  2. Compila il modulo che apparirà ed invialo via email
                  all’indirizzo “
                  <a
                    href='mailto:exallievi@itispaleocapa.it'
                    className='text-[#f25116] hover:text-[#bf3617] transition-colors duration-200'
                  >
                    exallievi@itispaleocapa.it
                  </a>
                  ”
                </p>
              </li>

              <li>
                <p>
                  3. Attendi la conferma (ti arriverà via email nel giro di
                  qualche giorno)
                </p>
              </li>
            </ol>

            <Button
              text={"Iscriviti"}
              link={
                "https://drive.google.com/file/d/1UR587Y8BqzLIfIin6qEL4ZDckypt5W60/view?usp=sharing"
              }
              isBlank
              style='mt-auto w-full md:w-1/3 text-center self-center'
              uppercase
            />
          </div>

          {/* Rinnova */}
          <div className='w-full md:w-1/2 flex flex-col'>
            <h2 className='font-bold text-3xl md:text-center dark:text-white'>
              Rinnova la quota
            </h2>
            <p className='mt-5 leading-7 mb-8 dark:text-gray-200 break-words'>
              Se sei già socio dell’Associazione e vuoi rinnovare la tua quota
              annuale, pari a 30€, premi sul pulsante “<strong>RINNOVA</strong>”
              per pagare con Carte di Credito/Debito o PayPal. <br />
              Puoi anche fare un bonifico bancario a: <br />
              IBAN IT12N0538711110000042430482 (BPER Banca) <br />
              L’importo da versare è pari a €30,00 ma sei libero di donare
              quanto preferisci.
            </p>

            <Button
              text={"Rinnova"}
              link={
                "https://www.paypal.com/donate?hosted_button_id=23BL2KLNJ6MF8"
              }
              isBlank
              style='mt-auto w-full md:w-1/3 text-center self-center'
              uppercase
            />
          </div>
        </div>

        {/* Perché diventare soci */}
        <div className='mt-28'>
          <h2 className='font-bold text-3xl dark:text-white'>
            Perché diventare soci?
          </h2>
          <Slider
            {...settings}
            className='flex justify-center bg-gray-100 dark:bg-gray-700 mt-5 rounded-md'
          >
            {/* Paolo Zanotti */}
            <Testimonial
              name='Paolo Zanotti'
              label='Diplomato 2019/2020, socio dal 2022'
              description="Sono diventato socio degli Ex Allievi dell'Esperia per poter dare un aiuto concreto alla scuola e a tutti i suoi ragazzi e ragazze, proprio come quello che ho ricevuto io da studente durante il mio percorso. Ho messo quindi a disposizione dell'associazione le mie competenze e conoscenze."
              image='/img/soci/zanotti_paolo.jpg'
              position='object-top'
            />

            {/* Simone Spreafico */}
            <Testimonial
              name='Simone Spreafico'
              label='Diplomato 2019/2020, socio dal 2022'
              description="Da giovane ex studente, ho deciso di diventare socio dell'associazione perchè
volevo supportare la scuola e al tempo stesso confrontarmi con altri ex allievi,
ampliando la mia conoscenza delle realtà industriali del territorio bergamasco 
sopratutto nel settore informatico."
              image='/img/soci/spreafico_simone.JPG'
            />

            {/* Marco Mosca */}
            <Testimonial
              name='Marco Mosca'
              label='Diplomato 2019/2020, socio dal 2022'
              description='Con l’apporto creativo che ho sempre dato all’istituto da studente, ho voluto proseguire questo sodalizio anche post diploma. 
Grazie all’associazione mi è stato possibile realizzare ciò dandomi, inoltre, la possibilità di conoscere nuove realtà industriali presenti nel nostro territorio. '
              image='/img/soci/mosca_marco.JPG'
            />
          </Slider>
        </div>

        {/* Vantaggi */}
        <div className='mt-28'>
          <h2 className='font-bold text-3xl dark:text-white'>
            Quali vantaggi ottengo?
          </h2>

          <div className='grid mx-auto mt-12 md:mt-16 max-w-2xl grid-cols-1 gap-y-10 gap-x-8 md:max-w-4xl md:grid-cols-2 md:gap-y-16'>
            <Feature
              title='Sostieni la scuola'
              description='In quanto socio con la tua quota di iscrizione sosterrai economicamente la scuola'
            />

            <Feature
              title='Proponi nuove idee'
              description='In quanto socio potrai partecipare attivamente alle riunioni di consiglio e proporre nuove idee per migliorare la scuola'
            />

            <Feature
              title='Amplia le tue conoscenze'
              description='In quanto socio potrai conoscere le realtà industriali del territorio bergamasco'
            />

            <Feature
              title='Rivista annuale Esperia'
              description='In quanto socio riceverai a casa la rivista degli Ex Allievi'
            />
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default SociPage
