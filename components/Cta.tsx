import Link from "next/link"
import React from "react"

interface CtaProps {
  link: string
  title: string
  subTitle: string
  buttonText: string
}

const Cta: React.FC<CtaProps> = ({ link, title, subTitle, buttonText }) => {
  return (
    <section className='bg-white dark:bg-gray-800 border-2 border-gray-800 rounded-lg'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'>
        <div className='mx-auto max-w-screen-sm text-center'>
          <h2 className='mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white'>
            {title}
          </h2>
          <p className='mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg'>
            {subTitle}
          </p>
          <Link
            href={link}
            className='text-white bg-[#a0c3d9] hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800'
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Cta
