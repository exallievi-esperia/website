import Heading from '@/components/Heading'
import Layout from '@/components/layout/Layout'
import { getSortedPostsData } from '@/utils/posts'
import Head from 'next/head'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const HomeBlog = ({ allPostsData }: any) => {
  const [filterSearch, setFilterSearch] = useState('tutti')

  return (
    <Layout>
      <Head>
        <title>Blog - Ex Allievi Esperia</title>
      </Head>

      <Heading
        title={'Blog'}
        description={"Scopri le ultime novità dall'associazione!"}
        backgroundImage="/img/assemblea_2012.jpg"
      />

      <main className="mx-auto max-w-7xl p-6 lg:px-8 mt-5 mb-20">
        <label htmlFor="filterPost" className="block font-medium text-gray-900 dark:text-gray-100">
          Filtra per categoria
        </label>

        <select
          name="filterPost"
          id="filterPost"
          style={{ WebkitAppearance: 'none' }}
          className="mt-1.5 mb-8 px-2 py-2 w-auto sm:w-1/4 rounded-lg outline outline-1 outline-[#f25116] text-gray-700 dark:text-gray-300 dark:bg-slate-800 border-r-[16px] border-r-transparent"
          onChange={e => setFilterSearch(e.target.value)}
        >
          <option value="tutti">Tutti</option>
          <option value="eventi">Eventi</option>
          <option value="festa">Festa ExAllievi</option>
          <option value="assemblea">Assemblea</option>
          <option value="novità">Novità</option>
          <option value="scuola">Scuola</option>
        </select>

        <div className="mt-10 flex gap-20 flex-col items-center">
          {allPostsData
            .filter((item: any) =>
              filterSearch != 'tutti' ? item.tag.includes(filterSearch) : true
            )
            .map((post: any) => (
              <Link
                href={`/blog/${post.id}`}
                key={post.id}
                className="w-fit flex flex-col md:flex-row gap-10 items-center justify-center hover:-translate-y-3 transition-transform duration-300"
              >
                {/* Info articolo */}
                <div className="dark:text-gray-100 md:max-w-3xl bg-[#f0f8ff] dark:bg-gray-900/20 p-6 rounded-md">
                  <div className="flex text-sm gap-4 sm:gap-8 flex-col sm:flex-row items-left sm:items-center">
                    <p>{post.date.split('-').reverse().join('/')}</p>
                    <div className="flex gap-5 flex-wrap">
                      {post.tag.map((tag: string, index: number) => (
                        <div
                          className="rounded-full text-white py-px px-2 bg-[#f25116cc]"
                          key={index}
                        >
                          <p>{tag}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <h2 className="font-bold text-2xl mt-3">{post.title}</h2>
                  <p className="my-6">{post.preview}</p>
                  <hr />

                  {/* author */}
                  <div className="flex flex-col sm:flex-row mt-6 gap-10 flex-wrap">
                    {post.authors.map((author: any, index: number) => (
                      <div key={index} className="flex gap-5 items-center">
                        <Image
                          src={author.image}
                          alt={`Profile ${author.name}`}
                          width={100}
                          height={100}
                          className={`rounded-full w-14 h-14 object-cover object-center`}
                        />
                        <div>
                          <p className="font-semibold">{author.name}</p>
                          <p
                            className={`${
                              author.role === 'admin' ? 'hidden' : ''
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
        </div>
      </main>
    </Layout>
  )
}

export default HomeBlog

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}
