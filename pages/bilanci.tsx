import Layout from "@/components/layout/Layout"
import Head from "next/head"
import FileList from "@/components/FileList"
import Heading from "@/components/Heading"

const BilanciPage = () => {
  return (
    <Layout>
      <Head>
        <title>Bilanci - Ex Allievi Esperia</title>
      </Head>

      <Heading
        title={"Bilanci"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        }
      />

      <main className='mx-auto max-w-7xl p-6 lg:px-8 my-20'>
        {/* Elenco file */}
        <div className='flex flex-col gap-x-10'>
          {/* 2022 */}
          <FileList
            year={2022}
            files={[
              { name: "primofile.pdf", href: "/" },
              { name: "secondofile.pdf", href: "/" },
              { name: "terzofile.pdf", href: "/" },
            ]}
            style='bg-gray-100 dark:bg-gray-700'
          />

          <hr />

          {/* 2021 */}
          <FileList
            year={2021}
            files={[
              { name: "primofile.pdf", href: "/" },
              { name: "secondofile.pdf", href: "/" },
              { name: "terzofile.pdf", href: "/" },
            ]}
          />

          <hr />

          {/* 2020 */}
          <FileList
            year={2020}
            files={[
              { name: "primofile.pdf", href: "/" },
              { name: "secondofile.pdf", href: "/" },
              { name: "terzofile.pdf", href: "/" },
            ]}
            style='bg-gray-100 dark:bg-gray-700'
          />
        </div>
      </main>
    </Layout>
  )
}

export default BilanciPage
