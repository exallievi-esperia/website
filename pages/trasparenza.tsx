import Layout from "@/components/layout/Layout"
import Head from "next/head"
import FileList from "@/components/FileList"
import Heading from "@/components/Heading"

const TrasparenzaPage = () => {
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
          {/* 2022 */}
          <FileList
            year={2022}
            files={[
              { name: "Contributo 5x1000.pdf", href: "/trasparenza" },
            ]}
            style='bg-gray-100 dark:bg-gray-700'
          />

          <hr />

          {/* 2021 */}
          <FileList
            year={2021}
            files={[
              { name: "Contrbuto 5x1000.pdf", href: "https://drive.google.com/file/d/1UWDG3RpNgs6vJi4uh3tiDGwyvuP7PrHf/view?usp=sharing" },
              { name: "Dichiarazione 5x1000.pdf", href: "https://drive.google.com/file/d/1IMvdhhzZHHHRWY1ANwR0LWj1Rqe7QFU9/view?usp=sharing" },
            ]}
          />

          <hr />

          {/* 2020 */}
          <FileList
            year={2020}
            files={[
              { name: "Contributo 5x1000.pdf", href: "https://drive.google.com/file/d/1-8zh41IjWHOi576P6xRGvPEno3pEJw4T/view?usp=sharing" },
            ]}
            style='bg-gray-100 dark:bg-gray-700'
          />

          <hr />

          {/* 2019 */}
          <FileList
            year={2019}
            files={[
              { name: "Contributo 5x1000.pdf", href: "https://drive.google.com/file/d/1XzOAq5m73CATPVYxR3vkEexUo6DCdHJy/view?usp=sharing" },
            ]}
          />

          <hr />

          {/* 2018 */}
          <FileList
            year={2018}
            files={[
              { name: "Contributo 5x1000.pdf", href: "https://drive.google.com/file/d/1XzOAq5m73CATPVYxR3vkEexUo6DCdHJy/view?usp=sharing" },
            ]}
            style='bg-gray-100 dark:bg-gray-700'
          />

          <hr />

          {/* 2017 */}
          <FileList
            year={2017}
            files={[
              { name: "Contributo 5x1000.pdf", href: "https://drive.google.com/file/d/1QCFexIWpevX_JYdpRZDvjk4OvYaVyNeB/view?usp=sharing" },
            ]}
          />

          <hr />

          {/* 2016 */}
          <FileList
            year={2016}
            files={[
              { name: "Contributo 5x1000.pdf", href: "https://drive.google.com/file/d/12yb1HZb9PBZ-atiDG4cs-leIx5TnUyph/view?usp=sharing" },
            ]}
            style='bg-gray-100 dark:bg-gray-700'
          />

          <hr />

          {/* 2015 */}
          <FileList
            year={2015}
            files={[
              { name: "Contributo 5x1000.pdf", href: "https://drive.google.com/file/d/1bLTJ0eyYBPb9koJwvQzW7gPl2ppLw7nm/view?usp=sharing" },
              { name: "Dichiarazione 5x1000.pdf", href: "https://drive.google.com/file/d/1lqWFLXZnv37jDjiQPgqQeJMRkzhiq7gK/view?usp=sharing" },
            ]}
          />
        </div>
      </main>
    </Layout>
  )
}

export default TrasparenzaPage
