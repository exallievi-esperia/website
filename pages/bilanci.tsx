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
        name: "Bilancio",
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
        name: "Bilancio",
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
        name: "Bilancio",
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
        name: "Bilancio",
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
        name: "Bilancio",
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
        name: "Bilancio",
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
        name: "Bilancio",
        href: "https://drive.google.com/file/d/1BPjn0D97he0TSn7LmfRo-pqN59CJYAWv/view?usp=sharing",
      },
    ],
    style: "bg-gray-100 dark:bg-gray-700",
  },
]

const BilanciPage = () => {
  const [currentItems, setCurrentItems] = useState(7)

  return (
    <Layout>
      <Head>
        <title>Bilanci - Ex Allievi Esperia</title>
      </Head>

      <Heading
        title={"Bilanci"}
        description={"Consulta i bilanci dell'associazione suddivisi per anno"}
        backgroundImage='/img/eventi/elettronica_23032023.jpg'
      />

      <main className='mx-auto max-w-7xl p-6 lg:px-8 my-20'>
        {/* Elenco file */}
        <div className='flex flex-col gap-x-10'>
          {list
            .filter((item) => item.id + 1 <= currentItems)
            .map((file, index) => (
              <Fragment key={file.id}>
                {file.id === 0 ? <></> : <hr />}
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

export default BilanciPage
