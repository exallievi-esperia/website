import Layout from "@/components/layout/Layout"
import Head from "next/head"
import FileList from "@/components/FileList"
import Heading from "@/components/Heading"
import { Fragment, useState } from "react"

const list = [
  {
    id: 0,
    year: 2021,
    file: [
      {
        name: "Bilancio.pdf",
        href: "https://drive.google.com/file/d/1pPxqKu4ml3NfKczj-xlu_BGtyxVnnKw-/view?usp=sharing",
      },
    ],
    style: "bg-gray-100 dark:bg-gray-700",
  },
  {
    id: 1,
    year: 2017,
    file: [
      {
        name: "Bilancio.pdf",
        href: "https://drive.google.com/file/d/12PM7JeOW3yvcvwzKgmmxOybeH77fdUSb/view?usp=sharing",
      },
    ],
    style: "",
  },
  {
    id: 2,
    year: 2011,
    file: [
      {
        name: "Bilancio.pdf",
        href: "https://drive.google.com/file/d/1J4NKYVQLN0LOqhtCLUH6ztMLhYezhN56/view?usp=sharing",
      },
    ],
    style: "bg-gray-100 dark:bg-gray-700",
  },
  {
    id: 3,
    year: 2010,
    file: [
      {
        name: "Bilancio.pdf",
        href: "https://drive.google.com/file/d/1SdUnvlQN112V2OGkIiQXdsGz01925siZ/view?usp=sharing",
      },
    ],
    style: "",
  },
  {
    id: 4,
    year: 2009,
    file: [
      {
        name: "Bilancio.pdf",
        href: "https://drive.google.com/file/d/1PpSc7mk80tbO7-DtmWd-s2u3cNeQw9Hu/view?usp=sharing",
      },
    ],
    style: "bg-gray-100 dark:bg-gray-700",
  },
  {
    id: 5,
    year: 2008,
    file: [
      {
        name: "Bilancio.pdf",
        href: "https://drive.google.com/file/d/1PpSc7mk80tbO7-DtmWd-s2u3cNeQw9Hu/view?usp=sharing",
      },
    ],
    style: "",
  },
  {
    id: 6,
    year: 2007,
    file: [
      {
        name: "Bilancio.pdf",
        href: "https://drive.google.com/file/d/1BPjn0D97he0TSn7LmfRo-pqN59CJYAWv/view?usp=sharing",
      },
    ],
    style: "bg-gray-100 dark:bg-gray-700",
  },
]

const BilanciPage = () => {
  const [maxYear, setMaxyear] = useState(2022)
  const [minYear, setMinYear] = useState(2009)
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
        <title>Bilanci - Ex Allievi Esperia</title>
      </Head>

      <Heading
        title={"Bilanci"}
        description={"Consulta i bilanci dell'associazione suddivisi per anno"}
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
              onClick={() => filterList(2022, 2009, 1)}
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
              onClick={() => filterList(2008, 2007, 2)}
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

export default BilanciPage
