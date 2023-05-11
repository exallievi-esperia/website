import Layout from "@/components/layout/Layout"
import Head from "next/head"
import FileList from "@/components/FileList"
import Heading from "@/components/Heading"
import { Fragment, useState } from "react"

const list = [
  {
    id: 0,
    year: 2022,
    file: [
      {
        name: "Contributo 5x1000.pdf",
        href: "/trasparenza",
      },
    ],
    style: "bg-gray-100 dark:bg-gray-700",
  },
  {
    id: 1,
    year: 2021,
    file: [
      {
        name: "Contrbuto 5x1000.pdf",
        href: "https://drive.google.com/file/d/1UWDG3RpNgs6vJi4uh3tiDGwyvuP7PrHf/view?usp=sharing",
      },
      {
        name: "Dichiarazione 5x1000.pdf",
        href: "https://drive.google.com/file/d/1IMvdhhzZHHHRWY1ANwR0LWj1Rqe7QFU9/view?usp=sharing",
      },
    ],
    style: "",
  },
  {
    id: 2,
    year: 2020,
    file: [
      {
        name: "Contributo 5x1000.pdf",
        href: "https://drive.google.com/file/d/1-8zh41IjWHOi576P6xRGvPEno3pEJw4T/view?usp=sharing",
      },
    ],
    style: "bg-gray-100 dark:bg-gray-700",
  },
  {
    id: 3,
    year: 2019,
    file: [
      {
        name: "Contributo 5x1000.pdf",
        href: "https://drive.google.com/file/d/1XzOAq5m73CATPVYxR3vkEexUo6DCdHJy/view?usp=sharing",
      },
    ],
    style: "",
  },
  {
    id: 4,
    year: 2018,
    file: [
      {
        name: "Contributo 5x1000.pdf",
        href: "https://drive.google.com/file/d/1XzOAq5m73CATPVYxR3vkEexUo6DCdHJy/view?usp=sharing",
      },
    ],
    style: "bg-gray-100 dark:bg-gray-700",
  },
  {
    id: 5,
    year: 2017,
    file: [
      {
        name: "Contributo 5x1000.pdf",
        href: "https://drive.google.com/file/d/1QCFexIWpevX_JYdpRZDvjk4OvYaVyNeB/view?usp=sharing",
      },
    ],
    style: "",
  },
  {
    id: 6,
    year: 2016,
    file: [
      {
        name: "Contributo 5x1000.pdf",
        href: "https://drive.google.com/file/d/12yb1HZb9PBZ-atiDG4cs-leIx5TnUyph/view?usp=sharing",
      },
    ],
    style: "bg-gray-100 dark:bg-gray-700",
  },
  {
    id: 7,
    year: 2015,
    file: [
      {
        name: "Contributo 5x1000.pdf",
        href: "https://drive.google.com/file/d/1bLTJ0eyYBPb9koJwvQzW7gPl2ppLw7nm/view?usp=sharing",
      },
      {
        name: "Dichiarazione 5x1000.pdf",
        href: "https://drive.google.com/file/d/1lqWFLXZnv37jDjiQPgqQeJMRkzhiq7gK/view?usp=sharing",
      },
    ],
    style: "",
  },
]

const TrasparenzaPage = () => {
  const [maxYear, setMaxyear] = useState(2022)
  const [minYear, setMinYear] = useState(2018)
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
            .map((file) => (
              <Fragment key={file.id}>
                <FileList
                  year={file.year}
                  files={file.file}
                  style={file.style}
                />
                {file.id == list.length - 1 ? <></> : <hr />}
              </Fragment>
            ))}
        </div>

        <div className='flex justify-center mt-8'>
          <nav
            className='isolate inline-flex -space-x-px rounded-md shadow-sm'
            aria-label='Pagination'
          >
            {/* <Link
              href='#'
              className='relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-200 ring-1 ring-inset ring-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:z-20 focus:outline-offset-0'
            >
              <span className='sr-only'>Previous</span>
              <FaChevronLeft className='h-5 w-5' aria-hidden='true' />
            </Link> */}
            {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
            <button
              onClick={() => filterList(2022, 2018, 1)}
              aria-current='page'
              className={`rounded-l-md relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 dark:text-gray-50 ring-1 ring-inset ring-gray-300 ${
                currentPage === 1
                  ? "bg-[#f25116] text-white"
                  : "hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              1
            </button>
            <button
              onClick={() => filterList(2017, 2015, 2)}
              className={`rounded-r-md relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 dark:text-gray-50 ring-1 ring-inset ring-gray-300 ${
                currentPage === 2
                  ? "bg-[#f25116] text-white"
                  : "hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              2
            </button>

            {/* <span className='relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 dark:text-gray-200 ring-1 ring-inset ring-gray-300 focus:outline-offset-0'>
              ...
            </span> */}

            {/* <a
              href='#'
              className='relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-200 ring-1 ring-inset ring-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:z-20 focus:outline-offset-0'
            >
              <span className='sr-only'>Next</span>
              <FaChevronRight className='h-5 w-5' aria-hidden='true' />
            </a> */}
          </nav>
        </div>
      </main>
    </Layout>
  )
}

export default TrasparenzaPage
