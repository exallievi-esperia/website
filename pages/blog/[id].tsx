import Heading from "@/components/Heading"
import Layout from "@/components/layout/Layout"
import { getAllPostIds, getPostData } from "@/utils/posts"
import Head from "next/head"
import React from "react"
import ReactMarkdown from "react-markdown"

const Post = ({ postData }: any) => {
  return (
    <Layout>
      <Head>
        <title>Blog - Ex Allievi Esperia</title>
      </Head>

      <Heading
        title={postData.title}
        description={`di ${postData.authors
          .map((author: any) =>
            author.role === "admin"
              ? author.name
              : author.name + " (" + author.role + ")"
          )
          .join(", ")}`}
        backgroundImage='/img/eventi/elettronica_23032023.jpg'
      />

      <main className='mx-auto max-w-7xl p-6 lg:px-8 my-20'>
        <ReactMarkdown className='dark:text-gray-100 leading-8'>
          {postData.content}
        </ReactMarkdown>
      </main>
    </Layout>
  )
}

export default Post

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }: any) {
  const postData = getPostData(params.id)
  return {
    props: {
      postData,
    },
  }
}
