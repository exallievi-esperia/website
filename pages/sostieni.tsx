import Layout from "@/components/layout/Layout";
import Head from "next/head";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link";
import Heading from "@/components/Heading";
import Step from "@/components/Step";

const settings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  speed: 5000,
  autoplaySpeed: 0,
  cssEase: "linear",
  arrows: false,
};

const SostieniPage = () => {
  return (
    <Layout>
      <Head>
        <title>Sostieni - Ex Allievi Esperia</title>
      </Head>

      <Heading
        title='Sostieni'
        description="Scopri come sostenere economicamente l'Associazione"
        backgroundImage='/img/stretta_di_mano.jpg'
        position='object-[center_80%]'
      />

      <main className='mx-auto max-w-7xl p-6 lg:px-8 my-20'>
        {/* 5x1000 */}
        <div>
          <h2 className='font-bold text-3xl dark:text-white'>5x1000</h2>

          <div className='flex md:gap-x-10 gap-y-10 md:gap-y-0 flex-col md:flex-row pt-5 mx-auto text-gray-600'>
            <div className='w-full md:w-1/2'>
              <div className=' pb-12'>
                <p className='dark:text-gray-200'>
                  Per rendere concreto un patto tra generazioni puoi aiutare,
                  attraverso un piccolo gesto, l'associazione e la scuola
                  donando il tuo 5x1000.
                  <br /> E' <span className='underline'>semplice</span> e{" "}
                  <span className='underline'>non ti costa nulla</span>.
                </p>
                <p className='dark:text-gray-200 mt-4'>
                  Nella dichiarazione dei redditi firma l'apposito modulo e
                  riporta il codice fiscale dell'associazione Ex Allievi
                  dell'Esperia{" "}
                  <span className='font-bold tracking-wider'>03052000167</span>.
                </p>
              </div>

              <Step
                order={1}
                title='Primo Passo'
                paragraph="Cerca nel modello la sezione 'Scelta per la destinazione del 5x1000'."
              />
              <Step
                order={2}
                title='Secondo Passo'
                paragraph="Firma nel riquadro 'Sostegno degli enti del terzo settore iscritti nel RUNTS'."
              />
              <Step
                order={3}
                title='Fine'
                paragraph="Riporta il codice fiscale dell'associazione Ex Allievi
                    dell'Esperia 03052000167 e consegna il documento alla fine della compilazione al CAF, commercialista o direttamente all'Agenzia delle Entrate."
                isLast
              />
            </div>

            <Image
              src='/img/5x1000.jpeg'
              alt='Immagine come donare il 5x1000'
              width={533}
              height={753}
              className='w-full md:w-1/2 object-contain aspect-auto sm:aspect-square'
              priority
            />
          </div>
        </div>

        {/* Erogazioni libere */}
        <div className='mt-20'>
          <h2 className='font-bold text-3xl dark:text-white'>
            Erogazioni libere
          </h2>

          <div className='flex flex-col sm:flex-row sm:gap-x-20 gap-y-10 sm:gap-y-0 items-center mt-5 justify-between'>
            <div className=' text-gray-600 dark:text-gray-200'>
              <p className='text-left sm:max-w-md md:max-w-3xl'>
                Per effettuare una erogazione libera puoi utilizzare Paypal,
                clicca sul pulsante accanto. <br />
                In alternativa puoi anche fare un bonifico bancario a IBAN
                IT84T0538711116000042430482 (BPER Banca).
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
          <h2 className='font-bold text-3xl dark:text-white'>
            Erogazioni da aziende
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10 md:gap-y-0 leading-7 mt-5 text-gray-600 dark:text-gray-200'>
            <p>
              Per quanto riguarda le erogazioni effettuate da enti e società,
              per esse è prevista la sola possibilità di deduzione dal reddito
              imponibile, nel medesimo limite del 10% del reddito complessivo
              dichiarato. Qualora la deduzione sia di ammontare superiore al
              reddito complessivo dichiarato, diminuito di tutte le deduzioni,
              l’eccedenza può essere computata negli anni successivi ma non
              oltre il quarto, fino a concorrenza del suo ammontare.
            </p>
            <p>
              Le erogazioni liberali effettuate a favore degli Enti del Terzo
              Settore sono detraibili o deducibili dalle imposte sui redditi,
              con modalità diverse a seconda del soggetto erogatore e dell’ente
              percipiente. La detraibilità interviene sull’imposta lorda. La
              deducibilità interviene invece sul reddito imponibile diminuendo
              la base imponibile fiscale.
            </p>
          </div>

          <Slider {...settings} className='mt-16 flex items-center'>
            <div className='h-28 mx-4 relative'>
              <Image
                src='/img/loghi-aziende/gewiss.svg'
                alt='Logo azienda Gewiss'
                width={100}
                height={100}
                className='object-contain h-12 w-full absolute top-0 bottom-0 right-0 left-0 m-auto'
              />
            </div>

            <div className='h-28 mx-4 relative'>
              <Image
                src='/img/loghi-aziende/persico.svg'
                alt='Logo azienda Persico'
                width={100}
                height={100}
                className='object-contain h-12 w-full absolute top-0 bottom-0 right-0 left-0 m-auto'
              />
            </div>

            <div className='h-28 mx-4 relative'>
              <Image
                src='/img/loghi-aziende/persico_marine.svg'
                alt='Logo azienda Persico Marine'
                width={100}
                height={100}
                className='object-contain h-12 w-full absolute top-0 bottom-0 right-0 left-0 m-auto'
              />
            </div>

            <div className='h-28 mx-4 relative'>
              <Image
                src='/img/loghi-aziende/brembo.svg'
                alt='Logo azienda Brembo'
                width={100}
                height={100}
                className='object-contain h-14 w-full absolute top-0 bottom-0 right-0 left-0 m-auto'
              />
            </div>

            <div className='h-28 mx-4 relative'>
              <Image
                src='/img/loghi-aziende/ime.png'
                alt='Logo azienda IME Group'
                width={100}
                height={100}
                className='object-contain h-14 w-full absolute top-0 bottom-0 right-0 left-0 m-auto'
              />
            </div>

            <div className='h-28 mx-4 relative'>
              <Image
                src='/img/loghi-aziende/mair.jpg'
                alt='Logo azienda Mair'
                width={100}
                height={100}
                className='object-contain h-14 w-full absolute top-0 bottom-0 right-0 left-0 m-auto'
              />
            </div>

            <div className='h-28 mx-4 relative'>
              <Image
                src='/img/loghi-aziende/habilita.svg'
                alt='Logo azienda Habilita'
                width={100}
                height={100}
                className='object-contain h-14 w-full absolute top-0 bottom-0 right-0 left-0 m-auto'
              />
            </div>

            <div className='h-28 mx-4 relative'>
              <Image
                src='/img/loghi-aziende/aprolis.svg'
                alt='Logo azienda Aprolis'
                width={100}
                height={100}
                className='object-contain h-14 w-full absolute top-0 bottom-0 right-0 left-0 m-auto'
              />
            </div>

            <div className='h-28 mx-4 relative'>
              <Image
                src='/img/loghi-aziende/alba_elettr.svg'
                alt='Logo azienda Alba Elettronic'
                width={100}
                height={100}
                className='object-contain h-14 w-full absolute top-0 bottom-0 right-0 left-0 m-auto'
              />
            </div>

            <div className='h-28 mx-4 relative'>
              <Image
                src='/img/loghi-aziende/siad.svg'
                alt='Logo azienda SIAD'
                width={100}
                height={100}
                className='object-contain h-10 w-full absolute top-0 bottom-0 right-0 left-0 m-auto'
              />
            </div>

            <div className='h-28 mx-4 relative'>
              <Image
                src='/img/loghi-aziende/lovato.png'
                alt='Logo azienda Lovato'
                width={100}
                height={100}
                className='object-contain h-16 w-full absolute top-0 bottom-0 right-0 left-0 m-auto'
              />
            </div>

            <div className='h-28 mx-4 relative'>
              <Image
                src='/img/loghi-aziende/sce.png'
                alt='Logo azienda SCE'
                width={100}
                height={100}
                className='object-contain h-16 w-full absolute top-0 bottom-0 right-0 left-0 m-auto'
              />
            </div>

            <div className='h-28 mx-4 relative'>
              <Image
                src='/img/loghi-aziende/tea.png'
                alt='Logo azienda TEA'
                width={100}
                height={100}
                className='object-contain h-16 w-full absolute top-0 bottom-0 right-0 left-0 m-auto'
              />
            </div>

            <div className='h-28 mx-4 relative'>
              <Image
                src='/img/loghi-aziende/cosberg.svg'
                alt='Logo azienda Cosberg'
                width={100}
                height={100}
                className='object-contain h-16 w-full absolute top-0 bottom-0 right-0 left-0 m-auto'
              />
            </div>

            <div className='h-28 mx-4 relative'>
              <Image
                src='/img/loghi-aziende/zotup.png'
                alt='Logo azienda Zotup'
                width={100}
                height={100}
                className='object-contain h-24 w-full absolute top-0 bottom-0 right-0 left-0 m-auto'
              />
            </div>

            <div className='h-28 mx-4 relative'>
              <Image
                src='/img/loghi-aziende/losma.png'
                alt='Logo azienda Losma'
                width={100}
                height={100}
                className='object-contain h-14 w-full absolute top-0 bottom-0 right-0 left-0 m-auto'
              />
            </div>

            <div className='h-28 mx-4 relative'>
              <Image
                src='/img/loghi-aziende/plastik.svg'
                alt='Logo azienda Plastik'
                width={100}
                height={100}
                className='object-contain h-10 w-full absolute top-0 bottom-0 right-0 left-0 m-auto'
              />
            </div>

            <div className='h-28 mx-4'>
              <Image
                src='/img/loghi-aziende/minifaber.svg'
                alt='Logo azienda Minifaber'
                width={100}
                height={100}
                className='object-contain h-24 w-full'
              />
            </div>

            <div className='h-28 mx-4 relative'>
              <Image
                src='/img/loghi-aziende/albini.svg'
                alt='Logo azienda Albini'
                width={100}
                height={100}
                className='object-contain h-20 w-full absolute top-0 bottom-0 right-0 left-0 m-auto'
              />
            </div>

            <div className='h-28 mx-4 relative'>
              <Image
                src='/img/loghi-aziende/martinelli.png'
                alt='Logo azienda Martinelli'
                width={100}
                height={100}
                className='object-contain h-20 w-full absolute top-0 bottom-0 right-0 left-0 m-auto'
              />
            </div>

            <div className='h-28 mx-4 relative'>
              <Image
                src='/img/loghi-aziende/zlab.png'
                alt='Logo azienda Z-Lab'
                width={100}
                height={100}
                className='object-contain h-16 w-full absolute top-0 bottom-0 right-0 left-0 m-auto'
              />
            </div>

            <div className='h-28 mx-4 relative'>
              <Image
                src='/img/loghi-aziende/goal.png'
                alt='Logo azienda Goal'
                width={100}
                height={100}
                className='object-contain h-14 w-full absolute top-0 bottom-0 right-0 left-0 m-auto'
              />
            </div>
          </Slider>
        </div>
      </main>
    </Layout>
  );
};

export default SostieniPage;
