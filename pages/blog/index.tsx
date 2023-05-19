import Heading from "@/components/Heading"
import Layout from "@/components/layout/Layout"
import { getSortedPostsData } from "@/utils/posts"
import Head from "next/head"
import React from "react"

const index = ({ allPostsData }) => {
  return (
    <Layout>
      <Head>
        <title>Blog - Ex Allievi Esperia</title>
      </Head>

      <Heading
        title={"Blog"}
        description={"Scopri le ultime novità dall'associazione!"}
        backgroundImage='/img/eventi/elettronica_23032023.jpg'
      />

      <main className='mx-auto max-w-7xl p-6 lg:px-8 my-20'>
        <p>Blog!</p>
        {allPostsData.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
          </div>
        ))}
      </main>
    </Layout>
  )
}

export default index

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}
