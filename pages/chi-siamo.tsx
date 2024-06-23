import Layout from "@/components/layout/Layout"
import Head from "next/head"
import Image from "next/image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { HiComputerDesktop } from "react-icons/hi2"
import Team from "@/components/Team"
import Heading from "@/components/Heading"
import { MdEmail } from "react-icons/md"

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        dots: false,
      },
    },
  ],
}

const ChiSiamoPage = () => {
  return (
    <Layout>
      <Head>
        <title>Chi siamo - Ex Allievi Esperia</title>
      </Head>
      <Heading
        title='Chi siamo'
        description='Scopri la nostra Associazione'
        backgroundImage='/img/museo_centenario.jpg'
        position='object-[center_62%]'
      />
      <main className='mx-auto max-w-7xl p-6 lg:px-8 my-20 dark:bg-gray-600'>
        {/* La nostra storia */}
        <div>
          <h2 className='font-bold text-3xl mb-5 dark:text-white'>
            La nostra storia
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10 md:gap-y-0 dark:text-gray-200 leading-7'>
            <p>
              L’Associazione ex-Allievi dell’ITIS P. Paleocapa di Bergamo,
              fondata nel 1920, non ha fini di lucro ed è parte integrante
              dell’Istituto Paleocapa. Il suo scopo è quello di promuovere
              numerose iniziative a favore dell’Istituto, degli allievi e degli
              insegnanti. Le risorse necessarie allo svolgimento delle attività
              sono garantite dai Soci e da Aziende che condividono lo scopo
              dell’Associazione. L’iniziativa di fondare un’Associazione di
              ex-Allievi della sezione industriale dell’allora Istituto Tecnico
              Governativo di Bergamo, nata molto tempo prima, che per mancanza
              di dati precisi si può determinare con approssimazione tra
              l’autunno del 1896 e la primavera del 1897, va attribuita a pochi
              studenti, quasi tutti bergamaschi, che diedero vita ad un comitato
              provvisorio. Il problema iniziale del Comitato fu quello di
              raccogliere adesioni, specie fra gli studenti disseminati un po’
              ovunque in Italia ma anche all'estero, con i quali si era perso
              ogni contatto. L'impegnativo lavoro procedette in modo positivo,
              tanto che su 59 studenti diplomati dalla scuola tecnica, 40 di
              essi aderirono all'associazione, così verso la fine di maggio
              dell'anno 1897
            </p>
            <p>
              fu possibile pubblicare una circolare che sanciva la creazione
              dell'Associazione e uno schema di statuto, seguita da un invito di
              partecipazione all'assemblea costituente che si svolse il 19
              settembre 1897, data da ricordare perché in quel giorno furono
              gettate le basi della prima "Società degli ex-Allievi della Scuola
              Industriale di Bergamo", che venne sciolta nel 1904. Nel settembre
              del 1919 da un piccolo gruppo di studenti della Scuola Industriale
              partì l’iniziativa di istituire una nuova associazione di
              ex-Allievi che, riprendendo le tradizioni di quella
              precedentemente fondata, ne promuovesse gli interessi morali e
              materiali. Grazie alla collaborazione tra il direttivo scolastico
              e la segreteria della scuola, l'Associazione ricevette da subito e
              gratuitamente una struttura organica e amministrativa e una sede
              che, sostanzialmente, non cambiò mai ed è tuttora la stessa, prima
              presso la sede delle Scuole Industriali di Via Masone e poi presso
              l’Istituto Tecnico lndustriale di Stato di Via Mauro Gavazzeni a
              Bergamo.
              <br />
              <span className='text-[#f25116] hover:text-[#d53c04] transition-colors hover:cursor-pointer hover:underline'>
                <a
                  rel='noopener noreferrer'
                  target='_blank'
                  href='https://drive.google.com/file/d/1X138HZbgn2xLOnhJEft3QumWyYHJb0tL/view?usp=sharing'
                >
                  » Leggi la storia completa dell'associazione
                </a>
              </span>
            </p>
          </div>

          <Image
            src='/img/Chi-Siamo.jpg'
            alt='Chi siamo'
            width={1280}
            height={350}
            className='mt-10 w-full h-56 sm:h-80 md:h-96 lg:h-[30rem] object-cover object-[center_7%]'
          />

          <div className='grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10 md:gap-y-0 mt-10 items-center'>
            <div>
              <div className='leading-7 dark:text-gray-200'>
                <p>
                  L’Associazione Ex Allievi dell’ITIS P. Paleocapa di Bergamo si
                  è sviluppata facendo riferimento a tre valori:
                </p>
                <ul className='list-decimal list-inside'>
                  <li>
                    Creare un reale incontro fra la realtà scolastica e il
                    tessuto industriale. Scuola e Industria devono cooperare
                    affinché gli allievi acquisiscano le conoscenze e le
                    competenze che il mercato richiede e che sono in continua
                    evoluzione.
                  </li>
                  <li>
                    Promuovere un percorso scolastico in cui le conoscenze
                    tecniche teoriche siano affiancate da momenti di realtà
                    pratica. Acquisire conoscenze e vedere concretamente come,
                    dove e con quali metodologie sono applicate è il primo passo
                    del passaggio dallo status di studente a quello di
                    lavoratore.
                  </li>
                  <li>
                    Promuovere e facilitare l’inserimento degli allievi
                    nell’area Bergamasca. I costi sociali della formazione
                    diventano un investimento per la collettività soprattutto se
                    gli allievi possono mettere a frutto il loro talento nel
                    territorio di origine.
                  </li>
                </ul>
              </div>
              {/*               
              <p className='font-bold leading-7 dark:text-gray-200 mt-4'>
                Ascolta l'inno dell'Esperia:
              </p>

              <audio
                controls
                className='mt-4 object-contain mx-auto md:mx-0 max-w-full max-h-full'
              >
                <source src='/audio/inno-esperia.mp3' type='audio/mpeg' />
                Il tuo browser non supporta l'elemento audio.
              </audio> */}
            </div>

            <div>
              <Image
                src='/img/Chi-Siamo2.jpg'
                alt='Ex allievi medaglia centenario'
                width={1200}
                height={675}
              />
              <p className='text-center'>
                Bozzetto per medaglia centenario realizzato dall’artista{" "}
                <a
                  rel='noopener noreferrer'
                  target='_blank'
                  href='https://instagram.com/persico_valentina'
                  className='text-[#f25116] hover:text-[#d53c04] transition-colors hover:cursor-pointer hover:underline'
                >
                  Valentina Persico
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className='mt-20'>
          <h2 className='font-bold text-3xl mb-5 dark:text-white'>
            Gli Ex Allievi oggi
          </h2>
          <Image
            src='/img/foto_tutti_oggi.jpg'
            alt='Gli Ex Allievi oggi'
            width={1280}
            height={350}
            className='w-full h-56 sm:h-80 md:h-96 lg:h-[32rem] object-cover'
          />

          <div className='bg-[#f25116] text-white mt-8 md:mt-16 font-semibold flex flex-col md:flex-row justify-around items-center text-2xl p-8 gap-y-20 shadow-lg rounded-md'>
            <div className='flex flex-col justify-center items-center'>
              <div className='text-5xl mb-4'>+470</div>
              <div>Soci iscritti</div>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <div className='text-5xl mb-4'>103</div>
              <div>Anni di attività</div>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <div className='text-5xl mb-4'>+130</div>
              <div>Borse di studio</div>
            </div>
          </div>
        </div>

        {/* Direttivo */}
        <div className='mt-20'>
          <h2 className='font-bold text-3xl mb-5 dark:text-white'>
            Scopri il direttivo 2023-2025
          </h2>
          <Slider {...settings}>
            <Team
              name='Alessandro Gigli'
              role='Presidente'
              contacts={[
                { icon: MdEmail, link: "mailto:alessandro.gigli@alpedone.net" },
              ]}
            />

            <Team
              name='Giancarlo Viti'
              role='Vice Presidente'
              contacts={[
                { icon: MdEmail, link: "mailto:exallievi@itispaleocapa.it" },
              ]}
            />

            <Team
              name='Daniela Beccaluva'
              role='Segretaria e Tesoriera'
              contacts={[
                { icon: MdEmail, link: "mailto:exallievi@itispaleocapa.it" },
              ]}
            />

            <Team
              name='Paolo Zanotti'
              role='Consigliere'
              contacts={[
                { icon: MdEmail, link: "mailto:hello@paolozanotti.dev" },
                {
                  icon: HiComputerDesktop,
                  link: "https://paolozanotti.dev",
                },
              ]}
            />

            <Team
              name='Roberto Filippini Fantoni'
              role='Consigliere'
              contacts={[
                { icon: MdEmail, link: "mailto:exallievi@itispaleocapa.it" },
              ]}
            />

            <Team
              name='Alfredo Longhi'
              role='Consigliere'
              contacts={[
                { icon: MdEmail, link: "mailto:exallievi@itispaleocapa.it" },
              ]}
            />

            <Team
              name='Marco Morè'
              role='Consigliere'
              contacts={[
                { icon: MdEmail, link: "mailto:exallievi@itispaleocapa.it" },
              ]}
            />

            <Team
              name='Battista Azzola'
              role='Consigliere'
              contacts={[
                { icon: MdEmail, link: "mailto:exallievi@itispaleocapa.it" },
              ]}
            />

            <Team
              name='Alessandro Rocchi'
              role='Revisore dei conti'
              contacts={[
                { icon: MdEmail, link: "mailto:exallievi@itispaleocapa.it" },
              ]}
            />

            <Team
              name='Giampietro Guerinoni'
              role='Revisore dei conti'
              contacts={[
                { icon: MdEmail, link: "mailto:exallievi@itispaleocapa.it" },
              ]}
            />

            <Team
              name='Steven Poma'
              role='Revisore dei conti'
              contacts={[
                { icon: MdEmail, link: "mailto:exallievi@itispaleocapa.it" },
              ]}
            />

            <Team
              name='Romano Bonadei'
              role='Probiviro'
              contacts={[
                { icon: MdEmail, link: "mailto:exallievi@itispaleocapa.it" },
              ]}
            />

            <Team
              name='Franco Ferrarti'
              role='Probiviro'
              contacts={[
                { icon: MdEmail, link: "mailto:exallievi@itispaleocapa.it" },
              ]}
            />

            <Team
              name='Mario Guizzetti'
              role='Probiviro'
              contacts={[
                { icon: MdEmail, link: "mailto:exallievi@itispaleocapa.it" },
              ]}
            />
          </Slider>
        </div>
      </main>
    </Layout>
  )
}

export default ChiSiamoPage
