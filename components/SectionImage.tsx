import React from "react"
import Image from "next/image"
import Button from "./Button"

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
          <div className='lg:py-12'>
            <h2 className='text-3xl font-bold sm:text-4xl dark:text-white'>
              {title}
            </h2>

            <p className='mt-4 text-gray-600 dark:text-gray-200'>{paragraph}</p>

            <Button text={buttonText} link={link} uppercase style='mt-8' />
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
              width={506}
              height={337}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionImage
