import Layout from "@/components/layout/Layout"
import Head from "next/head"
import FileList from "@/components/FileList"
import Heading from "@/components/Heading"
import { Fragment, useState } from "react"
import Pagination from "@/components/Pagination"
import NavButton from "@/components/NavButton"

const list = [
  {
    id: 0,
    year: 2015,
    file: [
      {
        name: "Contributo 5x1000",
        href: "https://drive.google.com/file/d/1bLTJ0eyYBPb9koJwvQzW7gPl2ppLw7nm/view?usp=sharing",
      },
      {
        name: "Dichiarazione 5x1000",
        href: "https://drive.google.com/file/d/1lqWFLXZnv37jDjiQPgqQeJMRkzhiq7gK/view?usp=sharing",
      },
    ],
    style: "bg-gray-100 dark:bg-gray-700",
  },
  {
    id: 1,
    year: 2016,
    file: [
      {
        name: "Contributo 5x1000",
        href: "https://drive.google.com/file/d/12yb1HZb9PBZ-atiDG4cs-leIx5TnUyph/view?usp=sharing",
      },
    ],
    style: "",
  },
  {
    id: 2,
    year: 2017,
    file: [
      {
        name: "Contributo 5x1000",
        href: "https://drive.google.com/file/d/1QCFexIWpevX_JYdpRZDvjk4OvYaVyNeB/view?usp=sharing",
      },
    ],
    style: "bg-gray-100 dark:bg-gray-700",
  },
  {
    id: 3,
    year: 2018,
    file: [
      {
        name: "Contributo 5x1000",
        href: "https://drive.google.com/file/d/1XzOAq5m73CATPVYxR3vkEexUo6DCdHJy/view?usp=sharing",
      },
    ],
    style: "",
  },
  {
    id: 4,
    year: 2019,
    file: [
      {
        name: "Contributo 5x1000",
        href: "https://drive.google.com/file/d/1XzOAq5m73CATPVYxR3vkEexUo6DCdHJy/view?usp=sharing",
      },
    ],
    style: "bg-gray-100 dark:bg-gray-700",
  },
  {
    id: 5,
    year: 2020,
    file: [
      {
        name: "Contributo 5x1000",
        href: "https://drive.google.com/file/d/1-8zh41IjWHOi576P6xRGvPEno3pEJw4T/view?usp=sharing",
      },
      {
        name: "Dettaglio operazioni 5x1000",
        href: "https://drive.google.com/file/d/13U6FPrRxmDZxQkjgJcs1Vq1sQyR88WTa/view?usp=sharing",
      },
    ],
    style: "",
  },
  {
    id: 6,
    year: 2021,
    file: [
      {
        name: "Dichiarazione scuola 5x1000",
        href: "https://drive.google.com/file/d/1UWDG3RpNgs6vJi4uh3tiDGwyvuP7PrHf/view?usp=sharing",
      },
      {
        name: "Dichiarazione 5x1000",
        href: "https://drive.google.com/file/d/1IMvdhhzZHHHRWY1ANwR0LWj1Rqe7QFU9/view?usp=sharing",
      },
      {
        name: "Rendiconto 5x1000",
        href: "https://drive.google.com/file/d/1crfSOlqMsRxsBqmDfUkrkR7UvlByWEaL/view?usp=sharing",
      },
    ],
    style: "bg-gray-100 dark:bg-gray-700",
  },
]

const TrasparenzaPage = () => {
  const [currentItems, setCurrentItems] = useState(7)

  return (
    <Layout>
      <Head>
        <title>Trasparenza - Ex Allievi Esperia</title>
      </Head>

      <Heading
        title={"Trasparenza"}
        description={
          "Consulta i contributi pubblici dell'associazione suddivisi per anno"
        }
        backgroundImage='/img/esterno_2.jpg'
        position='object-[center_70%]'
      />

      <main className='mx-auto max-w-7xl p-6 lg:px-8 my-20'>
        {/* Elenco file */}
        <div className='flex flex-col gap-x-10'>
          {list
            .filter((item) => list.length - item.id <= currentItems)
            .reverse()
            .map((file) => (
              <Fragment key={file.id}>
                {file.id === list.length - 1 ? <></> : <hr />}
                <FileList
                  year={file.year}
                  files={file.file}
                  style={file.style}
                />
              </Fragment>
            ))}
        </div>

        {currentItems <= list[list.length - 1].id && (
          <Pagination>
            <NavButton onClick={() => setCurrentItems(currentItems + 5)} />
          </Pagination>
        )}
      </main>
    </Layout>
  )
}

export default TrasparenzaPage
