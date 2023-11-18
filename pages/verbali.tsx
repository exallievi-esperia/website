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
    year: 2019,
    file: [
      {
        name: "26 Gennaio",
        href: "https://drive.google.com/file/d/1fkwihmzGa8Xnuq0_r93DUZyqOHRv1V7r/view?usp=sharing",
      },
      {
        name: "18 Maggio",
        href: "https://drive.google.com/file/d/1NNd6I4WLqEs3Q3Pg_GaCFNPuKQf4a1Bw/view?usp=sharing",
      },
    ],
    style: "bg-gray-100 dark:bg-gray-700",
  },
  {
    id: 1,
    year: 2020,
    file: [
      {
        name: "1 Febbraio",
        href: "https://drive.google.com/file/d/1cqW_Ms9XXcETULoWuSi5TUEMWVNfvXpo/view?usp=sharing",
      },
      {
        name: "24 Ottobre",
        href: "https://drive.google.com/file/d/1P5KLjYvDyG38IkbI5Hg_OdSPQ0PITmJC/view?usp=sharing",
      },
    ],
    style: "",
  },
  {
    id: 2,
    year: 2021,
    file: [
      {
        name: "19 Giugno",
        href: "https://drive.google.com/file/d/1kaeXAQ_8q-JbITubSgVUiz00ZLKaC3WP/view?usp=sharing",
      },
    ],
    style: "bg-gray-100 dark:bg-gray-700",
  },
  {
    id: 3,
    year: 2022,
    file: [
      {
        name: "22 Ottobre",
        href: "https://drive.google.com/file/d/1z1dTHwQJE0uxNtz201CQUN_7h8XrpA8c/view?usp=sharing",
      },
      {
        name: "10 Dicembre",
        href: "https://drive.google.com/file/d/1TK1zTKQNlKs02EHJEEYH-gf0pm1RF_uw/view?usp=sharing",
      },
    ],
    style: "",
  },
  {
    id: 4,
    year: 2023,
    file: [
      {
        name: "4 Febbraio",
        href: "https://drive.google.com/file/d/1wAlG6N9kC8W8hTC1YJFAyBch3tlomDq8/view?usp=sharing",
      },
      {
        name: "6 Maggio",
        href: "https://drive.google.com/file/d/1mJZ9U6K-Y_9H07mWHX8o80LZ6ahnEJza/view?usp=sharing",
      },
      {
        name: "20 Maggio",
        href: "https://drive.google.com/file/d/1o7EXdQkwIfbUtpNLUp1PusdmmghjKlU-/view?usp=sharing",
      },
      {
        name: "28 Ottobre",
        href: "https://drive.google.com/file/d/1bTrGYTfCJEuY6QGBWzbEVNepxtTgz_l9/view?usp=sharing",
      },
    ],
    style: "bg-gray-100 dark:bg-gray-700",
  },
]

const VerbaliPage = () => {
  const [currentItems, setCurrentItems] = useState(5)

  return (
    <Layout>
      <Head>
        <title>Verbali - Ex Allievi Esperia</title>
      </Head>

      <Heading
        title={"Verbali"}
        description={
          "Consulta i verbali delle assemblee ordinarie suddivisi per anno"
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

export default VerbaliPage
