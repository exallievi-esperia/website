import Layout from "@/components/layout/Layout"
import Head from "next/head"
import FileList from "@/components/FileList"
import Heading from "@/components/Heading"

const VerbaliPage = () => {
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
      />

      <main className='mx-auto max-w-7xl p-6 lg:px-8 my-20'>
        {/* Elenco file */}
        <div className='flex flex-col gap-x-10'>
          {/* 2023 */}
          <FileList
            year={2023}
            files={[
              { name: "4 Febbraio.pdf", href: "https://drive.google.com/file/d/1wAlG6N9kC8W8hTC1YJFAyBch3tlomDq8/view?usp=sharing" }
            ]}
            style='bg-gray-100 dark:bg-gray-700'
          />

          <hr />

          {/* 2022 */}
          <FileList
            year={2022}
            files={[
              { name: "22 Ottobre.pdf", href: "https://drive.google.com/file/d/1z1dTHwQJE0uxNtz201CQUN_7h8XrpA8c/view?usp=sharing" },
              { name: "10 Dicembre.pdf", href: "https://drive.google.com/file/d/1TK1zTKQNlKs02EHJEEYH-gf0pm1RF_uw/view?usp=sharing" }
            ]}
          />

          <hr />

          {/* 2021 */}
          <FileList
            year={2021}
            files={[
              { name: "19 Giugno.pdf", href: "https://drive.google.com/file/d/1kaeXAQ_8q-JbITubSgVUiz00ZLKaC3WP/view?usp=sharing" }
            ]}
            style='bg-gray-100 dark:bg-gray-700'
          />

          <hr />

          {/* 2020 */}
          <FileList
            year={2020}
            files={[
              { name: "1 Febbraio.pdf", href: "https://drive.google.com/file/d/1cqW_Ms9XXcETULoWuSi5TUEMWVNfvXpo/view?usp=sharing" },
              { name: "24 Ottobre.pdf", href: "https://drive.google.com/file/d/1P5KLjYvDyG38IkbI5Hg_OdSPQ0PITmJC/view?usp=sharing" }
            ]}
          />

          <hr />

          {/* 2019 */}
          <FileList
            year={2019}
            files={[
              { name: "26 Gennaio.pdf", href: "https://drive.google.com/file/d/1fkwihmzGa8Xnuq0_r93DUZyqOHRv1V7r/view?usp=sharing" },
              { name: "18 Maggio.pdf", href: "https://drive.google.com/file/d/1NNd6I4WLqEs3Q3Pg_GaCFNPuKQf4a1Bw/view?usp=sharing" }
            ]}
            style='bg-gray-100 dark:bg-gray-700'
          />

        </div>
      </main>
    </Layout>
  )
}

export default VerbaliPage
