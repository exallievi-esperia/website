import React, { Fragment } from "react"
import Image from "next/image"

interface BookshelfProps {
  riviste: {
    year: number
    link: string
    imgAlt: string
    imgSrc: string
  }[]
}

const Bookshelf: React.FC<BookshelfProps> = ({ riviste }) => {
  return (
    <div className='grid grid-col-1 sm:grid-cols-2 md:grid-cols-4 gap-x-4'>
      {riviste.map((rivista, index) => (
        <Fragment key={index}>
          <a
            href={rivista.link}
            rel='noopener noreferrer'
            target='_blank'
            className='flex items-center flex-col transition-transform duration-300 hover:-translate-y-5'
          >
            <Image
              src={rivista.imgSrc}
              alt={rivista.imgAlt}
              width={150}
              height={212}
              className='translate-y-9'
            />
            <span className='font-bold bg-[#f25116] text-white px-3 rounded-full z-10 translate-y-5'>
              {rivista.year}
            </span>
          </a>

          <span className='block sm:hidden col-span-1 border-b-[30px] border-b-orange-300 border-r-[20px] border-r-transparent border-l-[20px] border-l-transparent'></span>
          <span className='block sm:hidden col-span-1 mb-10 border-b-[15px] border-b-orange-400 border-r-[20px] border-r-orange-400 border-l-[20px] border-l-orange-400'></span>

          {((index + 1) % 2 === 0 || index + 1 === riviste.length) && (
            <>
              <span className='hidden sm:block md:hidden col-span-2 border-b-[30px] border-b-orange-300 border-r-[20px] border-r-transparent border-l-[20px] border-l-transparent'></span>
              <span className='hidden sm:block md:hidden col-span-2 mb-10 border-b-[15px] border-b-orange-400 border-r-[20px] border-r-orange-400 border-l-[20px] border-l-orange-400'></span>
            </>
          )}

          {((index + 1) % 4 === 0 || index + 1 === riviste.length) && (
            <>
              <span className='hidden md:block col-span-4 border-b-[30px] border-b-orange-300 dark:border-b-yellow-900 border-r-[20px] border-r-transparent border-l-[20px] border-l-transparent'></span>
              <span className='hidden md:block col-span-4 mb-10 border-b-[15px] border-b-orange-400 dark:border-b-yellow-950 border-r-[20px] border-r-orange-400 dark:border-r-yellow-950 border-l-[20px] border-l-orange-400 dark:border-l-yellow-950'></span>
            </>
          )}
        </Fragment>
      ))}
    </div>
  )
}

export default Bookshelf
