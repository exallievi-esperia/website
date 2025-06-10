import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa'
import Image from 'next/image'

interface TestimonialProps {
  name: string
  label: string
  image: string
  description: string
  position?: string
}

const Testimonial: React.FC<TestimonialProps> = ({
  name,
  label,
  image,
  description,
  position = 'object-center',
}) => {
  return (
    <div className="flex flex-col items-center p-8 sm:p-16">
      <FaQuoteLeft className="mb-4 text-[#f25116]" />
      <p className="text-center max-w-screen-md mx-auto text-xl sm:text-2xl dark:text-gray-100 break-words">
        {description}
      </p>

      <div className="flex items-center gap-x-4 mt-8 justify-end">
        <Image
          className={`w-12 h-12 rounded-full object-cover ${position}`}
          width={100}
          height={100}
          src={image}
          alt="Testimonial picture"
        />
        <div className="flex flex-col basis-[70%]">
          <p className="font-bold text-base dark:text-gray-200">{name}</p>
          <p className="text-gray-500 text-sm dark:text-gray-400">{label}</p>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
