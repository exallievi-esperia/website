import Layout from "@/components/layout/Layout";
import Head from "next/head";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SociPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Layout
      title={"Soci"}
      description={
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
      }
    >
      <Head>
        <title>Soci - Ex Allievi Esperia</title>
      </Head>

      <main className="mx-auto max-w-7xl p-6 lg:px-8 my-20">
        {/* Iscriviti | Rinnova */}
        <div className="flex flex-col md:flex-row md:justify-around gap-10">
          {/* Iscriviti */}
          <div className="w-full md:w-1/2 flex flex-col">
            <h2 className="font-bold text-3xl text-center">Iscriviti</h2>
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
            <h2 className="font-bold text-3xl text-center">Rinnova</h2>
            <p className="mt-5 leading-7 mb-8">
              Se sei già socio dell’Associazione e vuoi rinnovare la tua quota
              annuale, pari a 30€, premi sul pulsante “
              <strong>RINNOVA LA QUOTA</strong>” per pagare con Carte di
              Credito/Debito o PayPal. <br />
              Puoi anche fare un bonifico bancario a: <br />
              IBAN IT56B0311111110000000061421 (UBI BANCA) <br />
              L’importo da versare è pari a €30,00 ma sei libero di donare
              quanto preferisci.
            </p>
            <a
              className="mt-auto bg-red-400 text-white border-2 border-red-400 p-3 rounded-md w-full md:w-1/3 font-bold text-center self-center hover:bg-white hover:text-red-400 transition-colors duration-300"
              href="https://www.paypal.com/donate?hosted_button_id=23BL2KLNJ6MF8"
              rel="noopener noreferrer"
              target="_blank"
            >
              RINNOVA LA QUOTA
            </a>
          </div>
        </div>

        {/* Perché diventare soci */}
        <div className="mt-28">
          <h2 className="font-bold text-3xl">Perché diventare soci?</h2>
          <Slider {...settings} className="self-center">
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <div>
                <p>Paolo Zanotti</p>
                <p>Diplomato 2019/2020, socio dal 2022</p>
              </div>
            </div>

            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <div>
                <p>Simone Spreafico</p>
                <p>Diplomato 2019/2020, socio dal 2022</p>
              </div>
            </div>

            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <div>
                <p>Marco Mosca</p>
                <p>Diplomato 2019/2020, socio dal 2021</p>
              </div>
            </div>
          </Slider>
        </div>

        {/* Cosa ricevo */}
        <div className="mt-28">
          <h2 className="font-bold text-3xl">Cosa ricevo?</h2>
        </div>
      </main>
    </Layout>
  );
};

export default SociPage;
