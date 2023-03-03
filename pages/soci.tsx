import Layout from "@/components/layout/Layout";
import Head from "next/head";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { HiCheck } from "react-icons/hi2";
import Testimonial from "@/components/Testimonial";
import Feature from "@/components/Feature";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const SociPage = () => {
  return (
    <Layout
      title="Soci"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
    >
      <Head>
        <title>Soci - Ex Allievi Esperia</title>
      </Head>

      <main className="mx-auto max-w-7xl p-6 lg:px-8 my-20">
        {/* Iscriviti | Rinnova */}
        <div className="flex flex-col md:flex-row md:justify-around gap-10">
          {/* Iscriviti */}
          <div className="w-full md:w-1/2 flex flex-col">
            <h2 className="font-bold text-3xl md:text-center">Iscriviti</h2>
            <p className="mt-5 mb-2 leading-7">
              Se non sei socio dell’Associazione Ex Allievi dell’I.T.I.S. P.
              Paleocapa di Bergamo (Esperia) – APS ma vorresti diventarlo, segui
              queste semplici istruzioni:
            </p>

            <ol className="leading-7 mb-8">
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
                    href="mailto:exallievi@itispaleocapa.it"
                    className="text-red-400 hover:text-red-600 transition-colors duration-200"
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

            <a className="mt-auto bg-red-400 text-white border-2 border-red-400 p-3 rounded-md w-full md:w-1/3 font-bold text-center self-center hover:bg-white hover:text-red-400 transition-colors duration-300">
              ISCRIVITI
            </a>
          </div>

          {/* Rinnova */}
          <div className="w-full md:w-1/2 flex flex-col">
            <h2 className="font-bold text-3xl md:text-center">
              Rinnova la quota
            </h2>
            <p className="mt-5 leading-7 mb-8">
              Se sei già socio dell’Associazione e vuoi rinnovare la tua quota
              annuale, pari a 30€, premi sul pulsante “<strong>RINNOVA</strong>”
              per pagare con Carte di Credito/Debito o PayPal. <br />
              Puoi anche fare un bonifico bancario a: <br />
              IBAN IT12N0538711110000042430482 (BPER Banca) <br />
              L’importo da versare è pari a €30,00 ma sei libero di donare
              quanto preferisci.
            </p>
            <a
              className="mt-auto bg-red-400 text-white border-2 border-red-400 p-3 rounded-md w-full md:w-1/3 font-bold text-center self-center hover:bg-white hover:text-red-400 transition-colors duration-300"
              href="https://www.paypal.com/donate?hosted_button_id=23BL2KLNJ6MF8"
              rel="noopener noreferrer"
              target="_blank"
            >
              RINNOVA
            </a>
          </div>
        </div>

        {/* Perché diventare soci */}
        <div className="mt-28">
          <h2 className="font-bold text-3xl">Perché diventare soci?</h2>
          <Slider
            {...settings}
            className="flex justify-center bg-gray-100 mt-5"
          >
            {/* Paolo */}
            <Testimonial
              name="Paolo Zanotti"
              label="Diplomato 2019/2020, socio dal 2022"
              description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              image="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
            />

            {/* Simone */}
            <Testimonial
              name="Simone Spreafico"
              label="Diplomato 2019/2020, socio dal 2022"
              description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              image="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
            />

            {/* Marco */}
            <Testimonial
              name="Marco Mosca"
              label="Diplomato 2019/2020, socio dal 2022"
              description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              image="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
            />
          </Slider>
        </div>

        {/* Vantaggi */}
        <div className="mt-28">
          <h2 className="font-bold text-3xl">Quali vantaggi ottengo?</h2>
          <p className="mt-4">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
            Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
            In mi viverra elit nunc.
          </p>

          <div className="grid mx-auto mt-12 md:mt-16 max-w-2xl grid-cols-1 gap-y-10 gap-x-8 md:max-w-4xl md:grid-cols-2 md:gap-y-16">
            <Feature
              title="Sostieni la scuola"
              description="  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit."
            />

            <Feature
              title="Partecipa alle cerimonie"
              description="  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit."
            />

            <Feature
              title="Amplia le tue conoscenze"
              description="  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit."
            />

            <Feature
              title="Rivista annuale Esperia"
              description="  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit."
            />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default SociPage;
