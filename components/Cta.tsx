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
    <section className='bg-gray-200 dark:bg-gray-800 rounded-md mt-20'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'>
        <div className='mx-auto max-w-screen-sm text-center sm:text-left'>
          <h2 className='mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white break-words'>
            {title}
          </h2>
          <p className='mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg'>
            {subTitle}
          </p>
          <Link
            href={link}
            className='text-white bg-[#f25116] hover:bg-[#d53c04] transition-colors duration-300 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2'
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Cta
