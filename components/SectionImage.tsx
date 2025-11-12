import React from 'react'
import Image from 'next/image'
import Button from './Button'

interface SectionImageProps {
  reversed?: boolean
  title: string
  // paragraph: string
  buttonText?: string
  link: string
  src: string
  alt: string
  id?: string
  isVideo?: boolean
  isBlank?: boolean
  assetsClassName?: string
  containerClassName?: string
  children?: React.ReactNode
}

const SectionImage: React.FC<SectionImageProps> = ({
  reversed,
  title,
  children,
  buttonText,
  link,
  src,
  alt,
  assetsClassName,
  id = title,
  isVideo = false,
  isBlank = false,
  containerClassName,
}) => {
  return (
    <section id={id}>
      <div
        className={`mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 ${containerClassName}`}
      >
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16`}>
          <div className="lg:py-12">
            <h2 className="text-3xl font-bold sm:text-4xl dark:text-white">{title}</h2>

            <div className="mt-4 text-gray-600 dark:text-gray-200">{children}</div>

            {buttonText && (
              <Button text={buttonText} link={link} isBlank={isBlank} uppercase style="mt-8" />
            )}
          </div>

          <div
            className={`${
              reversed ? 'lg:order-first' : ''
            } h-64 overflow-hidden rounded sm:h-80 lg:h-full shadow-lg`}
          >
            {!isVideo && (
              <Image
                alt={alt}
                src={src}
                className={`h-full w-full object-cover ${assetsClassName}`}
                width={506}
                height={337}
              />
            )}

            {isVideo && (
              <video
                controls={true}
                className={`h-full w-full object-cover ${assetsClassName}`}
                playsInline
              >
                <source src={src} type="video/mp4" />
                Il tuo browser non supporta il tag video.
              </video>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionImage
