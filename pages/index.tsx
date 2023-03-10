import Layout from "@/components/layout/Layout"
import Head from "next/head"
import Image from "next/image"

const HomePage = () => {
  return (
    <Layout>
      <Head>
        <title>Ex Allievi Esperia - Home</title>
      </Head>
      <main className='mx-auto max-w-7xl p-6 lg:px-8 my-12'>
        {/* Hero */}
        <p>Hero</p>

        {/* Chi siamo */}
        <p>Chi siamo</p>

        {/* Cosa facciamo */}
        <p>Cosa facciamo</p>
        <p>Soci (CTA)</p>
        <p>Foto</p>
        <p>News (dal blog, successivo)</p>
        <p>Dona (CTA)</p>
      </main>
    </Layout>
  )
}

export default HomePage
