import Layout from "@/components/layout/Layout"
import Head from "next/head"
import Heading from "@/components/Heading"
import Bookshelf from "@/components/Bookshelf"
import { useState } from "react"
import Pagination from "@/components/Pagination"
import NavButton from "@/components/NavButton"

const riviste = [
  {
    id: 0,
    year: 2023,
    link: "https://drive.google.com/file/d/1RL2X4MQM5oLfo5tuJkW3tPuKspnSnQw-/view?usp=sharing",
    imgAlt: "Anteprima rivista 2023",
    imgSrc: "/img/copertine/Copertina2023.jpg",
  },
  {
    id: 1,
    year: 2022,
    link: "https://drive.google.com/file/d/1Z9rdZl8w6R5QeycQoZGsr-5hMqwNiaDA/view?usp=sharing",
    imgAlt: "Anteprima rivista 2022",
    imgSrc: "/img/copertine/Copertina2022.jpg",
  },
  {
    id: 2,
    year: 2019,
    link: "https://drive.google.com/file/d/1VNA2eEEeGocQ57ZL8EUEkpzbrwpGAsXn/view?usp=sharing",
    imgAlt: "Anteprima rivista 2019",
    imgSrc: "/img/copertine/Copertina2019.jpg",
  },
  {
    id: 3,
    year: 2018,
    link: "https://drive.google.com/file/d/1oGYyXmk4B_UR0hrMLFwLPIRsE_lOvd1I/view?usp=sharing",
    imgAlt: "Anteprima rivista 2018",
    imgSrc: "/img/copertine/Copertina2018.jpg",
  },
  {
    id: 4,
    year: 2017,
    link: "https://drive.google.com/file/d/1XcNrfMv1g9HYKlmlfxfBHrMgTVI9vfxb/view?usp=sharing",
    imgAlt: "Anteprima rivista 2017",
    imgSrc: "/img/copertine/Copertina2017.jpg",
  },
  {
    id: 5,
    year: 2016,
    link: "https://drive.google.com/file/d/1NldOFLFx8znGfcUsFpRa75p3afJ-P87o/view?usp=sharing",
    imgAlt: "Anteprima rivista 2016",
    imgSrc: "/img/copertine/Copertina2016.jpg",
  },
  {
    id: 6,
    year: 2015,
    link: "https://drive.google.com/file/d/1YjTz6ImJt1u_kuccY0GJHsUa-HnUHcXJ/view?usp=sharing",
    imgAlt: "Anteprima rivista 2015",
    imgSrc: "/img/copertine/Copertina2015.jpg",
  },
  {
    id: 7,
    year: 2014,
    link: "https://drive.google.com/file/d/1tB3SBLGqBfxIO_TjREZ_QKuzx9s6wXOe/view?usp=sharing",
    imgAlt: "Anteprima rivista 2014",
    imgSrc: "/img/copertine/Copertina2014.jpg",
  },
  {
    id: 8,
    year: 2013,
    link: "https://drive.google.com/file/d/1HNIX2VM5PLv3ypMueKGEby51XgXQJDNF/view?usp=sharing",
    imgAlt: "Anteprima rivista 2013",
    imgSrc: "/img/copertine/Copertina2013.jpg",
  },
  {
    id: 9,
    year: 2012,
    link: "https://drive.google.com/file/d/1x7aqzCABo-eKVyS4lIh7liEO30ZzSoj2/view?usp=sharing",
    imgAlt: "Anteprima rivista 2012",
    imgSrc: "/img/copertine/Copertina2012.jpg",
  },
  {
    id: 10,
    year: 2010,
    link: "https://drive.google.com/file/d/17Yz44xjIknMYe6W7me8RB1BacMC2RMEe/view?usp=sharing",
    imgAlt: "Anteprima rivista 2010",
    imgSrc: "/img/copertine/Copertina2010.jpg",
  },
  {
    id: 11,
    year: 2009,
    link: "https://drive.google.com/file/d/1scA-T-n11hWarxwwRW5BG1rgDKyPevd5/view?usp=sharing",
    imgAlt: "Anteprima rivista 2009",
    imgSrc: "/img/copertine/Copertina2009.jpg",
  },
  {
    id: 12,
    year: 2008,
    link: "https://drive.google.com/file/d/1ksEC0jNjNgdXovq7b4PraMqk-RVxfAf5/view?usp=sharing",
    imgAlt: "Anteprima rivista 2008",
    imgSrc: "/img/copertine/Copertina2008.jpg",
  },
  {
    id: 13,
    year: 2007,
    link: "https://drive.google.com/file/d/196BntM195JNZhUwM0sDrAaxzT3oe3hOh/view?usp=sharing",
    imgAlt: "Anteprima rivista 2007",
    imgSrc: "/img/copertine/Copertina2007.jpg",
  },
  {
    id: 14,
    year: 2006,
    link: "https://drive.google.com/file/d/1sxv1IgnxnDLX04zMaNuV24-AoUaNS2Vw/view?usp=sharing",
    imgAlt: "Anteprima rivista 2006",
    imgSrc: "/img/copertine/Copertina2006.jpg",
  },
]

const RivistaPage = () => {
  const [currentItems, setCurrentItems] = useState(15)

  return (
    <Layout>
      <Head>
        <title>Rivista - Ex Allievi Esperia</title>
      </Head>

      <Heading
        title={"Rivista"}
        description={"La rivista ufficiale degli Ex Allievi"}
      />

      <main className='mx-auto max-w-7xl p-6 lg:px-8 my-20'>
        {/* Bookshelf */}
        <div className='grid grid-col-1 sm:grid-cols-2 md:grid-cols-4 gap-x-4'>
          {riviste
            .filter((item) => item.id + 1 <= currentItems)
            .map((rivista, index) => (
              <Bookshelf
                rivista={rivista}
                index={index}
                totalItems={riviste.length}
                key={index}
              />
            ))}
        </div>

        {currentItems <= riviste[riviste.length - 1].id && (
          <Pagination>
            <NavButton onClick={() => setCurrentItems(currentItems + 12)} />
          </Pagination>
        )}
      </main>
    </Layout>
  )
}

export default RivistaPage
