import React, { ReactNode } from 'react'
import Image from 'next/image'

interface HeadingProps {
  title?: string
  description?: string
  backgroundImage: string
  children?: ReactNode
  isHome?: boolean
  position?: string
}

const Heading: React.FC<HeadingProps> = ({
  title = '',
  description = '',
  backgroundImage,
  children,
  isHome = false,
  position = 'object-center',
}) => {
  return (
    <div className={`relative text-center px-8 py-24 md:px-28 ${isHome ? 'md:py-24' : 'md:py-32'}`}>
      <img
        src={backgroundImage}
        alt="Heading background image"
        className={`object-cover ${position} heading-background`}
        fetchpriority="high"
        loading="eager"
        decoding="async"
      />

      {/* Overlay */}
      <div className="absolute w-full h-full inset-0 bg-[#eaf8ffe0] dark:bg-gray-800/[0.88]"></div>

      {!isHome && (
        <>
          <h1 className="font-bold sm:text-5xl text-4xl mb-5 dark:text-white break-words relative z-10">
            {title}
          </h1>
          <p className="text-xl dark:text-gray-100 break-words relative z-10">{description}</p>
        </>
      )}
      {children}
    </div>
  )
}

export default Heading
