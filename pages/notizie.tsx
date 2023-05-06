import Heading from "@/components/Heading"
import Layout from "@/components/layout/Layout"
import Head from "next/head"
import React from "react"

const news = () => {
  return (
    <Layout>
      <Head>
        <title>Notizie - Ex Allievi Esperia</title>
      </Head>

      <Heading
        title={"Notizie"}
        description={"Scopri le ultime novità dall'associazione!"}
      />

      <main className='mx-auto max-w-7xl p-6 lg:px-8 my-20'>
        <p className='dark:text-white'>News!</p>
      </main>
    </Layout>
  )
}

export default news
