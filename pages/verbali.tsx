import Layout from '@/components/layout/Layout';
import Head from 'next/head';
import FileList from '@/components/FileList';
import Heading from '@/components/Heading';
import { Fragment, useState } from 'react';
import Pagination from '@/components/Pagination';
import NavButton from '@/components/NavButton';

const list = [
  {
    id: 0,
    year: 2019,
    file: [
      {
        name: '26 Gennaio',
        href: 'https://drive.google.com/file/d/1fkwihmzGa8Xnuq0_r93DUZyqOHRv1V7r/view?usp=sharing',
      },
      {
        name: '18 Maggio',
        href: 'https://drive.google.com/file/d/1NNd6I4WLqEs3Q3Pg_GaCFNPuKQf4a1Bw/view?usp=sharing',
      },
    ],
  },
  {
    id: 1,
    year: 2020,
    file: [
      {
        name: '1 Febbraio',
        href: 'https://drive.google.com/file/d/1cqW_Ms9XXcETULoWuSi5TUEMWVNfvXpo/view?usp=sharing',
      },
      {
        name: '24 Ottobre',
        href: 'https://drive.google.com/file/d/1P5KLjYvDyG38IkbI5Hg_OdSPQ0PITmJC/view?usp=sharing',
      },
    ],
  },
  {
    id: 2,
    year: 2021,
    file: [
      {
        name: '19 Giugno',
        href: 'https://drive.google.com/file/d/1kaeXAQ_8q-JbITubSgVUiz00ZLKaC3WP/view?usp=sharing',
      },
    ],
  },
  {
    id: 3,
    year: 2022,
    file: [
      {
        name: '22 Ottobre',
        href: 'https://drive.google.com/file/d/1z1dTHwQJE0uxNtz201CQUN_7h8XrpA8c/view?usp=sharing',
      },
      {
        name: '10 Dicembre',
        href: 'https://drive.google.com/file/d/1TK1zTKQNlKs02EHJEEYH-gf0pm1RF_uw/view?usp=sharing',
      },
    ],
  },
  {
    id: 4,
    year: 2023,
    file: [
      {
        name: '4 Febbraio',
        href: 'https://drive.google.com/file/d/1wAlG6N9kC8W8hTC1YJFAyBch3tlomDq8/view?usp=sharing',
      },
      {
        name: '6 Maggio',
        href: 'https://drive.google.com/file/d/1mJZ9U6K-Y_9H07mWHX8o80LZ6ahnEJza/view?usp=sharing',
      },
      {
        name: '20 Maggio',
        href: 'https://drive.google.com/file/d/1o7EXdQkwIfbUtpNLUp1PusdmmghjKlU-/view?usp=sharing',
      },
      {
        name: '28 Ottobre',
        href: 'https://drive.google.com/file/d/1Lq6q1_5pdmjDQINXEyQDtS4pyF7IwTWu/view?usp=sharing',
      },
      {
        name: '20 Dicembre',
        href: 'https://drive.google.com/file/d/1VYHMnTwfpcKf9g1MmqZhCRbn6KOyBKTZ/view?usp=sharing',
      },
    ],
  },
  {
    id: 5,
    year: 2024,
    file: [
      {
        name: '9 Marzo',
        href: 'https://drive.google.com/file/d/1ue8-Q30A9DJI_uGLBFMIggFNw15PM2F9/view?usp=sharing',
      },
      {
        name: '11 Maggio',
        href: 'https://drive.google.com/file/d/17Tq_34hVnox87Xw3sZEO40-xUbONhd8d/view?usp=sharing',
      },
      {
        name: '31 Agosto',
        href: 'https://drive.google.com/file/d/1_9o_9eIG5_1-UimH0YLBMFe3RqKK5wGg/view?usp=sharing',
      },
      {
        name: '11 Dicembre',
        href: 'https://drive.google.com/file/d/1caLcsxaz5xkhrJCRXU_pdNsK9FxpGbnq/view?usp=sharing',
        desc: 'Riconoscimento personalità giuridica',
      },
    ],
  },
  {
    id: 6,
    year: 2025,
    file: [
      {
        name: '8 Marzo',
        href: 'https://drive.google.com/file/d/1fJOuLgunMQqCHUUfnyO5ZIlQW2w9NYtT/view?usp=sharing',
      },
      {
        name: '10 Maggio',
        href: 'https://drive.google.com/file/d/1MLOc18W-qKIuFzZQYdtQAIl1jpc6GBzJ/view?usp=sharing',
      },
    ],
  },
];

const VerbaliPage = () => {
  const [currentItems, setCurrentItems] = useState(6);

  return (
    <Layout>
      <Head>
        <title>Verbali - Ex Allievi Esperia</title>
      </Head>

      <Heading
        title={'Verbali'}
        description={'Consulta i verbali delle assemblee suddivisi per anno'}
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
  );
};

export default VerbaliPage;
