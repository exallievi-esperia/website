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
        <div className='text-center p-12 md:p-36 bg-gray-300 dark:bg-gray-600'>
          <h1 className='font-bold sm:text-5xl text-4xl mb-5 dark:text-white'>
            {title}
          </h1>
          <p className='text-xl dark:text-gray-200'>{description}</p>
        </div>
      ) : (
        <></>
      )}
    </>
  )
}

export default Heading
