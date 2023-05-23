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
        <div className='mx-auto max-w-screen-md lg:max-w-screen-lg text-center sm:text-left'>
          <h2 className='mb-2 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white break-words'>
            {title}
          </h2>
          <p className='mb-8 font-light text-gray-500 dark:text-gray-400 md:text-lg'>
            {subTitle}
          </p>
          <Link
            href={link}
            className='inline-block rounded-sm bg-[#f25116] hover:bg-[#d53c04] px-12 py-3 text-sm font-medium text-white transition focus:outline-none focus:ring focus:ring-[#a0c3d9]'
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Cta
