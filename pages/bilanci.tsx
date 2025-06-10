import Layout from '@/components/layout/Layout'
import Head from 'next/head'
import FileList from '@/components/FileList'
import Heading from '@/components/Heading'
import { Fragment, useState } from 'react'
import Pagination from '@/components/Pagination'
import NavButton from '@/components/NavButton'

const list = [
  {
    id: 0,
    year: 2007,
    file: [
      {
        name: 'Bilancio',
        href: 'https://drive.google.com/file/d/1BPjn0D97he0TSn7LmfRo-pqN59CJYAWv/view?usp=sharing',
      },
    ],
  },
  {
    id: 1,
    year: 2008,
    file: [
      {
        name: 'Bilancio',
        href: 'https://drive.google.com/file/d/1PpSc7mk80tbO7-DtmWd-s2u3cNeQw9Hu/view?usp=sharing',
      },
    ],
  },
  {
    id: 2,
    year: 2009,
    file: [
      {
        name: 'Bilancio',
        href: 'https://drive.google.com/file/d/1PpSc7mk80tbO7-DtmWd-s2u3cNeQw9Hu/view?usp=sharing',
      },
    ],
  },
  {
    id: 3,
    year: 2010,
    file: [
      {
        name: 'Bilancio',
        href: 'https://drive.google.com/file/d/1SdUnvlQN112V2OGkIiQXdsGz01925siZ/view?usp=sharing',
      },
    ],
  },
  {
    id: 4,
    year: 2011,
    file: [
      {
        name: 'Bilancio',
        href: 'https://drive.google.com/file/d/1J4NKYVQLN0LOqhtCLUH6ztMLhYezhN56/view?usp=sharing',
      },
    ],
  },
  {
    id: 5,
    year: 2017,
    file: [
      {
        name: 'Bilancio',
        href: 'https://drive.google.com/file/d/12PM7JeOW3yvcvwzKgmmxOybeH77fdUSb/view?usp=sharing',
      },
    ],
  },
  {
    id: 6,
    year: 2021,
    file: [
      {
        name: 'Bilancio',
        href: 'https://drive.google.com/file/d/1YvsxO9DhDsYgAeGnA1yWacz6aZUrNdj0/view?usp=sharing',
      },
    ],
  },
  {
    id: 7,
    year: 2022,
    file: [
      {
        name: 'Bilancio',
        href: 'https://drive.google.com/file/d/12pDEipi2FQ6UO3ISoiD3e9l-Pee-VQOa/view?usp=sharing',
      },
    ],
  },
  {
    id: 8,
    year: 2023,
    file: [
      {
        name: 'Bilancio',
        href: 'https://drive.google.com/file/d/1CoMkCxaYkj-okZH5k1H8vqxiHy40ZUOQ/view?usp=sharing',
      },
    ],
  },
  {
    id: 9,
    year: 2024,
    file: [
      {
        name: 'Bilancio',
        href: 'https://drive.google.com/file/d/1vrS523TYSzioM04d1gblpfBwTIER94fB/view?usp=sharing',
      },
    ],
  },
]

const BilanciPage = () => {
  const [currentItems, setCurrentItems] = useState(8)

  return (
    <Layout>
      <Head>
        <title>Bilanci - Ex Allievi Esperia</title>
      </Head>

      <Heading
        title={'Bilanci'}
        description={"Consulta i bilanci dell'associazione suddivisi per anno"}
        backgroundImage="/img/esterno_2.jpg"
        position="object-[center_70%]"
      />

      <main className="mx-auto max-w-7xl p-6 lg:px-8 my-20">
        {/* Elenco file */}
        <div className="flex flex-col gap-x-10">
          {list
            .filter(item => list.length - item.id <= currentItems)
            .reverse()
            .map((file, index) => (
              <Fragment key={file.id}>
                {file.id === list.length - 1 ? <></> : <hr />}
                <FileList year={file.year} files={file.file} isEven={index % 2 === 0} />
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
