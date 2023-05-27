import Layout from "@/components/layout/Layout"
import EventiCard from "@/components/EventiCard"
import Head from "next/head"
import Heading from "@/components/Heading"
import Pagination from "@/components/Pagination"
import NavButton from "@/components/NavButton"
import { useState } from "react"

const eventiList = [
  {
    id: 0,
    name: "Borse di studio: Area Elettronica",
    description:
      "Consegna delle borse di studio agli studenti meritevoli dell'area Elettronica.",
    date: {
      day: 23,
      month: "Ottobre",
      year: 2021,
    },
    href: "https://drive.google.com/drive/folders/1HM-3XwJ24I4T426U_8ZZkJ87Rzlukp_A?usp=sharing",
    image: "/img/eventi/elettronica_23102021.jpg",
  },
  {
    id: 1,
    name: "Borse di studio: Area Meccanica",
    description:
      "Consegna delle borse di studio agli studenti meritevoli dell'area Meccanica.",
    date: {
      day: 11,
      month: "Dicembre",
      year: 2021,
    },
    href: "https://drive.google.com/drive/folders/1H335bWpSWLH_PUkEY34gdFWERqlZdlvg?usp=sharing",
    image: "/img/eventi/meccanica_11122021.jpg",
  },
  {
    id: 2,
    name: "Borse di studio: Area Tessile",
    description:
      "Consegna delle borse di studio agli studenti meritevoli dell'area Tessile.",
    date: {
      day: 26,
      month: "Marzo",
      year: 2022,
    },
    href: "https://drive.google.com/drive/folders/1AbL8p59OtB7HxItbcXIIAghUXRUo2FNc?usp=sharing",
    image: "/img/eventi/tessile_26032022.jpg",
  },
  {
    id: 3,
    name: "Borse di studio: Area Informatica",
    description:
      "Consegna delle borse di studio agli studenti meritevoli dell'area Informatica.",
    date: {
      day: 2,
      month: "Aprile",
      year: 2022,
    },
    href: "https://drive.google.com/drive/folders/19CZITOdPUCzW7yiwBZvs8t9pFPO6DnVP?usp=sharing",
    image: "",
  },
  {
    id: 4,
    name: "Centenario dell'associazione Ex Allievi",
    description:
      "Festa organizzata per il centenario dell'Associazione (1920-2020).",
    date: {
      day: 28,
      month: "Maggio",
      year: 2022,
    },
    href: "https://drive.google.com/drive/folders/1LNLUp-muasW45qB5ivUPUzrkiBe2jJc-?usp=sharing",
    image: "/img/eventi/centenario_28052022.jpg",
  },
  {
    id: 5,
    name: "Borse di studio: Area Tessile",
    description:
      "Consegna delle borse di studio agli studenti meritevoli dell'area Tessile.",
    date: {
      day: 7,
      month: "Ottobre",
      year: 2022,
    },
    href: "https://drive.google.com/drive/folders/1J6GrFYBsktXniYPWKUXrSDdWL8lQ86Kv?usp=sharing",
    image: "/img/eventi/tessile_07102022.jpg",
  },
  {
    id: 6,
    name: "Borse di studio: Area Informatica",
    description:
      "Consegna delle borse di studio agli studenti meritevoli dell'area Informatica.",
    date: {
      day: 19,
      month: "Novembre",
      year: 2022,
    },
    href: "https://drive.google.com/drive/folders/1bouFlkUcG8UuzcsLNVgi6ggWFsu81XWF?usp=sharing",
    image: "/img/eventi/informatica_19112022.jpg",
  },
  {
    id: 7,
    name: "Borse di studio: Area Meccanica",
    description:
      "Consegna delle borse di studio agli studenti meritevoli dell'area Meccanica.",
    date: {
      day: 4,
      month: "Marzo",
      year: 2023,
    },
    href: "https://drive.google.com/drive/folders/1-tzJ_CM8DAzIGN4QTIR1wOPPod8GKA7R?usp=sharing",
    image: "/img/eventi/meccanica_04032023.jpg",
  },
  {
    id: 8,
    name: "Borse di studio: Area Elettronica",
    description:
      "Consegna delle borse di studio agli studenti meritevoli dell'area Elettronica.",
    date: {
      day: 23,
      month: "Marzo",
      year: 2023,
    },
    href: "https://drive.google.com/drive/folders/1nsDvYxw_-9MJ7x_A7gyzwE9unULT8Gzy?usp=sharing",
    image: "/img/eventi/elettronica_23032023.jpg",
  },
  {
    id: 9,
    name: "Festa Ex Allievi 2023",
    description:
      "Festa degli ex allievi del 2023, con la partecipazione di UniBg, Albini Group, Brembo e la prof.ssa Luzzana.",
    date: {
      day: 27,
      month: "Maggio",
      year: 2023,
    },
    href: "https://drive.google.com/drive/folders/19ZN4v3kJ1rugMfqs46-FFuEEMwZVSsc8?usp=sharing",
    image: "/img/eventi/festa_museo_27052023.jpg",
  },
]

const EventiPage = () => {
  const [currentItems, setCurrentItems] = useState(10)

  return (
    <Layout>
      <Head>
        <title>Eventi - Ex Allievi Esperia</title>
      </Head>

      <Heading
        title={"Eventi"}
        description={
          "Scopri tutti gli eventi a cui prende parte l'Associazione"
        }
        backgroundImage='/img/rinfresco.JPG'
        position='object-[center_60%]'
      />

      <main className='mx-auto max-w-7xl p-6 lg:px-8 my-20'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {eventiList
            .filter((item) => eventiList.length - item.id <= currentItems)
            .reverse()
            .map((evento, index) => (
              <EventiCard
                key={index}
                name={evento.name}
                description={evento.description}
                date={evento.date}
                href={evento.href}
                image={evento.image}
              />
            ))}
        </div>

        {currentItems <= eventiList[eventiList.length - 1].id && (
          <Pagination>
            <NavButton onClick={() => setCurrentItems(currentItems + 9)} />
          </Pagination>
        )}
      </main>
    </Layout>
  )
}

export default EventiPage
