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
          "Consulta i bilanci dell'associazione suddivisi per anno"
        }
      />

      <main className='mx-auto max-w-7xl p-6 lg:px-8 my-20'>
        {/* Elenco file */}
        <div className='flex flex-col gap-x-10'>
          {/* 2021 */}
          <FileList
            year={2021}
            files={[
              { name: "Bilancio.pdf", href: "https://drive.google.com/file/d/1pPxqKu4ml3NfKczj-xlu_BGtyxVnnKw-/view?usp=sharing" },
            ]}
            style='bg-gray-100'
          />

          <hr />

          {/* 2017 */}
          <FileList
            year={2017}
            files={[
              { name: "Bilancio.pdf", href: "https://drive.google.com/file/d/12PM7JeOW3yvcvwzKgmmxOybeH77fdUSb/view?usp=sharing" },
            ]}
          />

          <hr />

          {/* 2011 */}
          <FileList
            year={2011}
            files={[
              { name: "Bilancio.pdf", href: "https://drive.google.com/file/d/1J4NKYVQLN0LOqhtCLUH6ztMLhYezhN56/view?usp=sharing" },
            ]}
            style='bg-gray-100'
          />

          <hr />

          {/* 2010 */}
          <FileList
            year={2010}
            files={[
              { name: "Bilancio.pdf", href: "https://drive.google.com/file/d/1SdUnvlQN112V2OGkIiQXdsGz01925siZ/view?usp=sharing" },
            ]}
          />

          <hr />

          {/* 2009 */}
          <FileList
            year={2009}
            files={[
              { name: "Bilancio.pdf", href: "https://drive.google.com/file/d/1PpSc7mk80tbO7-DtmWd-s2u3cNeQw9Hu/view?usp=sharing" },
            ]}
            style='bg-gray-100'
          />

          <hr />

          {/* 2008 */}
          <FileList
            year={2008}
            files={[
              { name: "Bilancio.pdf", href: "https://drive.google.com/file/d/1PpSc7mk80tbO7-DtmWd-s2u3cNeQw9Hu/view?usp=sharing" },
            ]}
          />

          <hr />

          {/* 2007 */}
          <FileList
            year={2007}
            files={[
              { name: "Bilancio.pdf", href: "https://drive.google.com/file/d/1BPjn0D97he0TSn7LmfRo-pqN59CJYAWv/view?usp=sharing" },
            ]}
            style='bg-gray-100'
          />
        </div>
      </main>
    </Layout>
  )
}

export default BilanciPage
