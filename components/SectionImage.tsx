import React from "react"
import Image from "next/image"
import Link from "next/link"

interface SectionImageProps {
  reversed?: boolean
  title: string
  paragraph: string
  buttonText: string
  link: string
  imgSrc: string
  imgAlt: string
  id?: string
}

const SectionImage: React.FC<SectionImageProps> = ({
  reversed,
  title,
  paragraph,
  buttonText,
  link,
  imgSrc,
  imgAlt,
  id = title,
}) => {
  return (
    <section id={id}>
      <div className='mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8'>
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16`}>
          <div className='lg:py-24'>
            <h2 className='text-3xl font-bold sm:text-4xl dark:text-white'>
              {title}
            </h2>

            <p className='mt-4 text-gray-600 dark:text-gray-200'>{paragraph}</p>

            <Link
              href={link}
              className='mt-8 inline-block rounded-sm bg-[#f25116] hover:bg-[#d53c04] px-12 py-3 text-sm font-medium text-white transition focus:outline-none focus:ring focus:ring-[#a0c3d9]'
            >
              {buttonText}
            </Link>
          </div>

          <div
            className={`${
              reversed ? "lg:order-first" : ""
            } h-64 overflow-hidden rounded sm:h-80 lg:h-full shadow-lg`}
          >
            <Image
              alt={imgAlt}
              src={imgSrc}
              className='h-full w-full object-cover'
              width={1280}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionImage
