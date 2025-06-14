import Layout from '@/components/layout/Layout'
import { getAllPostIds, getPostData } from '@/utils/posts'
import Head from 'next/head'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'

const Post = ({ postData }: any) => {
  return (
    <Layout>
      <Head>
        <title>Blog - Ex Allievi Esperia</title>
      </Head>

      <main className="mx-auto max-w-7xl px-6 pb-6 lg:px-8 mb-20">
        <article className="px-4 py-24 mx-auto max-w-7xl">
          <div className="w-full mx-auto text-left md:w-2/3">
            <h1 className="mt-6 mb-3 text-3xl font-bold leading-tight text-gray-900 dark:text-gray-100 md:text-4xl">
              {postData.title}
            </h1>

            <div className="mt-6 flex flex-col sm:flex-row sm:items-center text-gray-700 dark:text-gray-200">
              <div className="flex">
                {postData.authors.map(
                  (author: { name: string; role: string; image: string }, index: number) => (
                    <Image
                      key={index}
                      src={author.image}
                      alt={`Immagine autore ${author.name}`}
                      width={100}
                      height={100}
                      className={`w-14 h-14 rounded-full object-cover ${index > 0 ? '-ml-4' : ''}`}
                    />
                  )
                )}
              </div>
              <div className="ml-2 mt-4 sm:mt-0">
                <p className="font-semibold text-gray-800 dark:text-gray-200">
                  {`scritto da ${postData.authors.map((author: any) => author.name).join(', ')}`}
                </p>
                <p className="text-gray-500 dark:text-gray-300">
                  {postData.date.split('-').reverse().join('/')}
                </p>
              </div>
            </div>
            <hr className="my-8" />
          </div>

          <div className="w-full mx-auto prose md:w-2/3">
            <ReactMarkdown className="dark:text-gray-100 leading-8 flex flex-col items-left gap-10 sm:gap-0 markdown text-justify">
              {postData.content}
            </ReactMarkdown>
          </div>

          <div className="mt-12 w-full mx-auto prose md:w-2/3 flex mb-6 gap-5 flex-wrap">
            {postData.tag.map((tag: string, index: number) => (
              <p key={index} className="rounded-full text-white py-px px-2 bg-[#f25116cc]">
                {tag}
              </p>
            ))}
          </div>
        </article>
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
