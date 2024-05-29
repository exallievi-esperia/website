import Heading from "@/components/Heading"
import Layout from "@/components/layout/Layout"
import { getSortedPostsData } from "@/utils/posts"
import Head from "next/head"
import React from "react"
import Link from "next/link"
import Image from "next/image"

const index = ({ allPostsData }: any) => {
  return (
    <Layout>
      <Head>
        <title>Blog - Ex Allievi Esperia</title>
      </Head>

      <Heading
        title={"Blog"}
        description={"Scopri le ultime novità dall'associazione!"}
        backgroundImage='/img/assemblea_2012.jpg'
      />

      <main className='mx-auto max-w-7xl p-6 lg:px-8 mb-20'>
        {allPostsData.map((post: any) => (
          <Link
            href={`/blog/${post.id}`}
            key={post.id}
            className='flex flex-col md:flex-row gap-10 items-center justify-center mt-20 hover:-translate-y-3 transition-transform duration-300'
          >
            {/* Info articolo */}
            <div className='dark:text-gray-100 md:max-w-3xl bg-[#f0f8ff] dark:bg-gray-900/20 p-6 rounded-md'>
              <div className='flex text-sm gap-4 sm:gap-8 flex-col sm:flex-row items-left sm:items-center'>
                <p>{post.date.split("-").reverse().join("/")}</p>
                <div className='flex gap-5 flex-wrap'>
                  {post.tag.map((tag: string, index: number) => (
                    <div
                      className='rounded-full text-white py-px px-2 bg-[#f25116cc]'
                      key={index}
                    >
                      <p>{tag}</p>
                    </div>
                  ))}
                </div>
              </div>
              <h2 className='font-bold text-2xl mt-3'>{post.title}</h2>
              <p className='my-6'>{post.preview}</p>
              <hr />

              {/* author */}
              <div className='flex flex-col sm:flex-row mt-6 gap-10 flex-wrap'>
                {post.authors.map((author: any, index: number) => (
                  <div key={index} className='flex gap-5 items-center'>
                    <Image
                      src={author.image}
                      alt={`Profile ${author.name}`}
                      width={100}
                      height={100}
                      className={`rounded-full w-14 h-14 object-cover object-center`}
                    />
                    <div>
                      <p className='font-semibold'>{author.name}</p>
                      <p
                        className={`${
                          author.role === "admin" ? "hidden" : ""
                        } font-light dark:text-gray-200`}
                      >
                        {author.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Link>
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
