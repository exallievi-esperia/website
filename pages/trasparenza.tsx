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
    year: 2021,
    file: [
      {
        name: "Contrbuto 5x1000",
        href: "https://drive.google.com/file/d/1UWDG3RpNgs6vJi4uh3tiDGwyvuP7PrHf/view?usp=sharing",
      },
      {
        name: "Dichiarazione 5x1000",
        href: "https://drive.google.com/file/d/1IMvdhhzZHHHRWY1ANwR0LWj1Rqe7QFU9/view?usp=sharing",
      },
    ],
    style: "bg-gray-100 dark:bg-gray-700",
  },
  {
    id: 1,
    year: 2020,
    file: [
      {
        name: "Contributo 5x1000",
        href: "https://drive.google.com/file/d/1-8zh41IjWHOi576P6xRGvPEno3pEJw4T/view?usp=sharing",
      },
    ],
    style: "",
  },
  {
    id: 2,
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
    id: 5,
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
    id: 6,
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
]

const TrasparenzaPage = () => {
  const [maxYear, setMaxyear] = useState(2021)
  const [minYear, setMinYear] = useState(2017)
  const [currentPage, setCurrentPage] = useState(1)

  const filterList = (maxYear: number, minYear: number, id: number) => {
    setMaxyear(maxYear)
    setMinYear(minYear)
    setCurrentPage(id)
    scrollToTop()
  }

  const isBrowser = () => typeof window !== "undefined"

  const scrollToTop = () => {
    if (!isBrowser) return
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

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
      />

      <main className='mx-auto max-w-7xl p-6 lg:px-8 my-20'>
        {/* Elenco file */}
        <div className='flex flex-col gap-x-10'>
          {list
            .filter((item) => item.year <= maxYear && item.year >= minYear)
            .map((file, index) => (
              <Fragment key={file.id}>
                <FileList
                  year={file.year}
                  files={file.file}
                  style={file.style}
                />
                {index === 4 || file.id === list.length - 1 ? <></> : <hr />}
              </Fragment>
            ))}
        </div>

        <Pagination>
          <NavButton
            onClick={() => filterList(2021, 2017, 1)}
            isCurrent={currentPage === 1}
            idPage={1}
            position='left'
          />
          <NavButton
            onClick={() => filterList(2016, 2015, 2)}
            isCurrent={currentPage === 2}
            idPage={2}
            position='right'
          />
        </Pagination>
      </main>
    </Layout>
  )
}

export default TrasparenzaPage
