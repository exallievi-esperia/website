import React, { ReactNode } from 'react'
import Button from './Button'

interface CtaProps {
  link: string
  title: string
  subTitle: ReactNode
  buttonText: string
}

const Cta: React.FC<CtaProps> = ({ link, title, subTitle, buttonText }) => {
  return (
    <section className="bg-[#badaef4b] dark:bg-gray-800 rounded-md mt-20">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md lg:max-w-screen-lg text-center sm:text-left">
          <h2 className="mb-2 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white break-words">
            {title}
          </h2>
          <p className="mb-8 font-light text-gray-600 dark:text-gray-300 md:text-lg">{subTitle}</p>
          <Button text={buttonText} link={link} uppercase />
        </div>
      </div>
    </section>
  )
}

export default Cta
