import Layout from '@/components/layout/Layout'
import EventiCard, { EventiCardProps } from '@/components/EventiCard'
import Head from 'next/head'
import Heading from '@/components/Heading'
import Pagination from '@/components/Pagination'
import NavButton from '@/components/NavButton'
import { useState } from 'react'

export type EventType = 'borsa-di-studio' | 'festa-exallievi' | 'tutti'

const eventiList: EventiCardProps[] = [
  {
    id: 0,
    name: 'Borse di studio: Area Elettronica',
    description:
      "Consegna delle borse di studio agli studenti meritevoli dell'area Elettronica.",
    date: {
      day: 23,
      month: 'Ottobre',
      year: 2021,
    },
    href: 'https://drive.google.com/drive/folders/1HM-3XwJ24I4T426U_8ZZkJ87Rzlukp_A?usp=sharing',
    image: '/img/eventi/elettronica_23102021.jpg',
    type: 'borsa-di-studio',
  },
  {
    id: 1,
    name: 'Borse di studio: Area Meccanica',
    description:
      "Consegna delle borse di studio agli studenti meritevoli dell'area Meccanica.",
    date: {
      day: 11,
      month: 'Dicembre',
      year: 2021,
    },
    href: 'https://drive.google.com/drive/folders/1H335bWpSWLH_PUkEY34gdFWERqlZdlvg?usp=sharing',
    image: '/img/eventi/meccanica_11122021.jpg',
    type: 'borsa-di-studio',
  },
  {
    id: 2,
    name: 'Borse di studio: Area Tessile',
    description:
      "Consegna delle borse di studio agli studenti meritevoli dell'area Tessile.",
    date: {
      day: 26,
      month: 'Marzo',
      year: 2022,
    },
    href: 'https://drive.google.com/drive/folders/1AbL8p59OtB7HxItbcXIIAghUXRUo2FNc?usp=sharing',
    image: '/img/eventi/tessile_26032022.jpg',
    type: 'borsa-di-studio',
  },
  {
    id: 3,
    name: 'Borse di studio: Area Informatica',
    description:
      "Consegna delle borse di studio agli studenti meritevoli dell'area Informatica.",
    date: {
      day: 2,
      month: 'Aprile',
      year: 2022,
    },
    href: 'https://drive.google.com/drive/folders/19CZITOdPUCzW7yiwBZvs8t9pFPO6DnVP?usp=sharing',
    image: '',
    type: 'borsa-di-studio',
  },
  {
    id: 4,
    name: "Centenario dell'associazione Ex Allievi",
    description:
      "Festa organizzata per il centenario dell'Associazione (1920-2020).",
    date: {
      day: 28,
      month: 'Maggio',
      year: 2022,
    },
    href: 'https://drive.google.com/drive/folders/1LNLUp-muasW45qB5ivUPUzrkiBe2jJc-?usp=sharing',
    image: '/img/eventi/centenario_28052022.jpg',
    type: 'festa-exallievi',
  },
  {
    id: 5,
    name: 'Borse di studio: Area Tessile',
    description:
      "Consegna delle borse di studio agli studenti meritevoli dell'area Tessile.",
    date: {
      day: 7,
      month: 'Ottobre',
      year: 2022,
    },
    href: 'https://drive.google.com/drive/folders/1J6GrFYBsktXniYPWKUXrSDdWL8lQ86Kv?usp=sharing',
    image: '/img/eventi/tessile_07102022.jpg',
    type: 'borsa-di-studio',
  },
  {
    id: 6,
    name: 'Borse di studio: Area Informatica',
    description:
      "Consegna delle borse di studio agli studenti meritevoli dell'area Informatica.",
    date: {
      day: 19,
      month: 'Novembre',
      year: 2022,
    },
    href: 'https://drive.google.com/drive/folders/1bouFlkUcG8UuzcsLNVgi6ggWFsu81XWF?usp=sharing',
    image: '/img/eventi/informatica_19112022.jpeg',
    type: 'borsa-di-studio',
  },
  {
    id: 7,
    name: 'Borse di studio: Area Meccanica',
    description:
      "Consegna delle borse di studio agli studenti meritevoli dell'area Meccanica.",
    date: {
      day: 4,
      month: 'Marzo',
      year: 2023,
    },
    href: 'https://drive.google.com/drive/folders/1-tzJ_CM8DAzIGN4QTIR1wOPPod8GKA7R?usp=sharing',
    image: '/img/eventi/meccanica_04032023.jpg',
    type: 'borsa-di-studio',
  },
  {
    id: 8,
    name: 'Borse di studio: Area Elettronica',
    description:
      "Consegna delle borse di studio agli studenti meritevoli dell'area Elettronica.",
    date: {
      day: 23,
      month: 'Marzo',
      year: 2023,
    },
    href: 'https://drive.google.com/drive/folders/1nsDvYxw_-9MJ7x_A7gyzwE9unULT8Gzy?usp=sharing',
    image: '/img/eventi/elettronica_23032023.jpg',
    type: 'borsa-di-studio',
  },
  {
    id: 9,
    name: 'Festa Ex Allievi 2023',
    description:
      'Festa degli ex allievi del 2023, con la partecipazione di UniBg, Albini Group, Brembo e la prof.ssa Luzzana.',
    date: {
      day: 27,
      month: 'Maggio',
      year: 2023,
    },
    href: 'https://drive.google.com/drive/folders/19ZN4v3kJ1rugMfqs46-FFuEEMwZVSsc8?usp=sharing',
    image: '/img/eventi/festa_museo_27052023.jpg',
    type: 'festa-exallievi',
  },
  {
    id: 10,
    name: 'Borse di studio: Area Informatica',
    description:
      'Prospettiva sull’Intelligenza Artificiale: Consegna delle borse di studio agli studenti ed interventi delle aziende.',
    date: {
      day: 28,
      month: 'Novembre',
      year: 2023,
    },
    href: 'https://drive.google.com/drive/folders/1P7UoMSG3b_sqvCl3RL4i8O0Cbp-bZiv6?usp=sharing',
    image: '/img/eventi/informatica_28112023.jpeg',
    type: 'borsa-di-studio',
  },
  {
    id: 11,
    name: 'Borse di studio: Area Meccanica',
    description:
      "Consegna delle borse di studio agli studenti meritevoli dell'area Meccanica.",
    date: {
      day: 20,
      month: 'Febbraio',
      year: 2024,
    },
    href: 'https://drive.google.com/drive/folders/1Ly1x-Qs_LHQPrykxLA48A_Q7_HHh1xLF?usp=sharing',
    image: '/img/eventi/meccanica_20022024.jpeg',
    type: 'borsa-di-studio',
  },
  {
    id: 12,
    name: 'Borse di studio: Area Elettronica',
    description:
      "Consegna delle borse di studio agli studenti dell'area Elettronica. Intervengono Aesys, Lovato e FAE.",
    date: {
      day: 2,
      month: 'Marzo',
      year: 2024,
    },
    href: 'https://drive.google.com/drive/folders/1gBhm9Mx8qUChQU7vjox0nPspqmGMpeUt?usp=sharing',
    image: '/img/eventi/elettronica_02032024.jpg',
    type: 'borsa-di-studio',
  },
]

const EventiPage = () => {
  const [currentItems, setCurrentItems] = useState(12)
  const [filterSearch, setFilterSearch] = useState('tutti')

  const filteredEvent = eventiList.filter(
    (item) => item.type === filterSearch || filterSearch === 'tutti'
  )

  return (
    <Layout>
      <Head>
        <title>Eventi - Ex Allievi Esperia</title>
      </Head>

      <Heading
        title={'Eventi'}
        description={
          "Scopri tutti gli eventi a cui prende parte l'Associazione"
        }
        backgroundImage="/img/rinfresco.JPG"
        position="object-[center_60%]"
      />

      <main className="mx-auto max-w-7xl p-6 lg:px-8 my-20">
        <label
          htmlFor="filterEventi"
          className="block font-medium text-gray-900"
        >
          Filtra per eventi
        </label>

        <select
          name="filterEventi"
          id="filterEventi"
          className="mt-1.5 mb-8 px-2 py-2 w-auto sm:w-1/4 rounded-lg outline outline-1 outline-[#f25116] text-gray-700 dark:text-gray-300 dark:bg-slate-800 border-r-[16px] border-r-transparent"
          onChange={(e) => setFilterSearch(e.target.value)}
        >
          <option value="tutti">Tutti</option>
          <option value="festa-exallievi">Festa Ex Allievi</option>
          <option value="borsa-di-studio">Borse di studio</option>
        </select>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredEvent
            .filter((item) => filteredEvent.indexOf(item) + 1 <= currentItems)
            .reverse()
            .map((evento, index) => (
              <EventiCard
                key={index}
                id={evento.id}
                name={evento.name}
                description={evento.description}
                date={evento.date}
                href={evento.href}
                image={evento.image}
                type={evento.type}
              />
            ))}
        </div>
        {currentItems <= filteredEvent.length && (
          <Pagination>
            <NavButton onClick={() => setCurrentItems(currentItems + 9)} />
          </Pagination>
        )}
      </main>
    </Layout>
  )
}

export default EventiPage
