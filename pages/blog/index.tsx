import Heading from "@/components/Heading"
import Layout from "@/components/layout/Layout"
import Head from "next/head"
import React from "react"

const index = () => {
  return (
    <Layout>
      <Head>
        <title>Blog - Ex Allievi Esperia</title>
      </Head>

      <Heading
        title={"Blog"}
        description={"Scopri le ultime novità dall'associazione!"}
      />

      <main className='mx-auto max-w-7xl p-6 lg:px-8 my-20'>
        <p>Blog!</p>
      </main>
    </Layout>
  )
}

export default index
