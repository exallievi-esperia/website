import React from "react"

interface HeadingProps {
  title?: string
  description?: string
}

const Heading: React.FC<HeadingProps> = ({
  title = undefined,
  description = undefined,
}) => {
  return (
    <>
      {/* Title */}
      {title && description ? (
        <div className='text-center px-12 py-24 md:p-36 bg-gray-300 dark:bg-gray-800'>
          <h1 className='font-bold sm:text-5xl text-4xl mb-5 dark:text-white break-words'>
            {title}
          </h1>
          <p className='text-xl dark:text-gray-200 break-words'>
            {description}
          </p>
        </div>
      ) : (
        <></>
      )}
    </>
  )
}

export default Heading
