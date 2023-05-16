import React from "react"

interface HeadingProps {
  title?: string
  description?: string
  backgroundImage?: string
}

const Heading: React.FC<HeadingProps> = ({
  title = undefined,
  description = undefined,
  backgroundImage = "",
}) => {
  return (
    <>
      {/* Title */}
      {title && description ? (
        <div
          className='text-center px-12 py-24 md:p-36 bg-gray-200 dark:bg-gray-800 bg-blend-overlay bg-cover bg-no-repeat bg-center'
          style={{
            backgroundImage: `url('${backgroundImage}')`,
          }}
        >
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
