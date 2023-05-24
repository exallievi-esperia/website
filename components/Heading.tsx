import React, { ReactNode } from "react"
import Image from "next/image"

interface HeadingProps {
  title?: string
  description?: string
  backgroundImage?: string
  children?: ReactNode
  isHome?: boolean
}

const Heading: React.FC<HeadingProps> = ({
  title = "",
  description = "",
  backgroundImage = "http://via.placeholder.com/1280x500",
  children,
  isHome = false,
}) => {
  return (
    <div
      className={`relative text-center px-8 py-24 md:px-28 ${
        isHome ? "md:py-24" : "md:py-32"
      }`}
    >
      <Image
        src={backgroundImage}
        alt='Heading background image'
        fill
        priority
        className='object-cover object-center'
      />

      {/* Overlay */}
      <div className='absolute w-full h-full inset-0 bg-[#e0f5ffe0] dark:bg-gray-800/[0.88]'></div>

      <h1 className='font-bold sm:text-5xl text-4xl mb-5 dark:text-white break-words relative z-10'>
        {title}
      </h1>
      <p className='text-xl dark:text-gray-100 break-words relative z-10'>
        {description}
      </p>
      {children}
    </div>
  )
}

export default Heading
