import React from "react"

interface SectionImageProps {
  reversed?: boolean
  title: string
  paragraph: string
  buttonText: string
  link: string
}

const SectionImage: React.FC<SectionImageProps> = ({
  reversed,
  title,
  paragraph,
  buttonText,
  link,
}) => {
  return (
    <section>
      <div className='mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8'>
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16`}>
          <div
            className={`${
              reversed ? "order-last" : ""
            } relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full`}
          >
            <img
              alt='Party'
              src='http://via.placeholder.com/1280x500'
              className='absolute inset-0 h-full w-full object-cover'
            />
          </div>

          <div className='lg:py-24'>
            <h2 className='text-3xl font-bold sm:text-4xl dark:text-white'>
              {title}
            </h2>

            <p className='mt-4 text-gray-600 dark:text-gray-200'>{paragraph}</p>

            <a
              href={link}
              className='mt-8 inline-block rounded bg-[#a0c3d9] 0 px-12 py-3 text-sm font-medium text-white transition hover:bg-[#a0c3d9] focus:outline-none focus:ring focus:ring-[#a0c3d9]'
            >
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionImage
