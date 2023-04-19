import Layout from "@/components/layout/Layout"
import EventiCard from "@/components/EventiCard"
import Head from "next/head"
import Heading from "@/components/Heading"

const eventiList = [
  {
    name: "Borse di studio: Area Elettronica",
    description:
      "Clicca su questo collegamento per accedere alle foto dell'evento di consegna delle borse di studio agli studenti meritevoli.",
    date: "23 Ottobre 2021",
    href: "https://drive.google.com/drive/folders/1HM-3XwJ24I4T426U_8ZZkJ87Rzlukp_A?usp=sharing",
  },
  {
    name: "Borse di studio: Area Elettronica",
    description:
      "Clicca su questo collegamento per accedere alle foto dell'evento di consegna delle borse di studio agli studenti meritevoli.",
    date: "25 Marzo 2023",
    href: "https://drive.google.com/drive/folders/1nsDvYxw_-9MJ7x_A7gyzwE9unULT8Gzy?usp=sharing",
  },
  {
    name: "Borse di studio: Area Informatica",
    description:
      "Clicca su questo collegamento per accedere alle foto dell'evento di consegna delle borse di studio agli studenti meritevoli.",
    date: "2 Aprile 2022",
    href: "https://drive.google.com/drive/folders/19CZITOdPUCzW7yiwBZvs8t9pFPO6DnVP?usp=sharing",
  },
  {
    name: "Borse di studio: Area Informatica",
    description:
      "Clicca su questo collegamento per accedere alle foto dell'evento di consegna delle borse di studio agli studenti meritevoli.",
    date: "19 Novembre 2022",
    href: "https://drive.google.com/drive/folders/1bouFlkUcG8UuzcsLNVgi6ggWFsu81XWF?usp=sharing",
  },
  {
    name: "Borse di studio: Area Meccanica",
    description:
      "Clicca su questo collegamento per accedere alle foto dell'evento di consegna delle borse di studio agli studenti meritevoli.",
    date: "11 Dicembre 2021",
    href: "https://drive.google.com/drive/folders/1H335bWpSWLH_PUkEY34gdFWERqlZdlvg?usp=sharing",
  },
  {
    name: "Borse di studio: Area Meccanica",
    description:
      "Clicca su questo collegamento per accedere alle foto dell'evento di consegna delle borse di studio agli studenti meritevoli.",
    date: "4 Marzo 2023",
    href: "https://drive.google.com/drive/folders/1-tzJ_CM8DAzIGN4QTIR1wOPPod8GKA7R?usp=sharing",
  },
  {
    name: "Borse di studio: Area Tessile",
    description:
      "Clicca su questo collegamento per accedere alle foto dell'evento di consegna delle borse di studio agli studenti meritevoli.",
    date: "26 Marzo 2022",
    href: "https://drive.google.com/drive/folders/1AbL8p59OtB7HxItbcXIIAghUXRUo2FNc?usp=sharing",
  },
  {
    name: "Borse di studio: Area Tessile",
    description:
      "Clicca su questo collegamento per accedere alle foto dell'evento di consegna delle borse di studio agli studenti meritevoli.",
    date: "7 Ottobre 2022",
    href: "https://drive.google.com/drive/folders/1J6GrFYBsktXniYPWKUXrSDdWL8lQ86Kv?usp=sharing",
  },
  {
    name: "Centenario dell'associazione Ex Allievi",
    description:
      "Clicca su questo collegamento per accedere alle foto della festa organizzata per il centenario dell'Associazione (1920-2020).",
    date: "28 Maggio 2022",
    href: "https://drive.google.com/drive/folders/1LNLUp-muasW45qB5ivUPUzrkiBe2jJc-?usp=sharing",
  },
]

const EventiPage = () => {
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
      />

      <main className='mx-auto max-w-7xl p-6 lg:px-8 my-20'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {eventiList.map((evento) => (
            <EventiCard
              key={evento.name}
              name={evento.name}
              description={evento.description}
              date={evento.date}
              href={evento.href}
            />
          ))}
        </div>
      </main>
    </Layout>
  )
}

export default EventiPage
