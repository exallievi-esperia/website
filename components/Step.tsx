import React from "react"

interface StepProps {
  order: number
  title: string
  paragraph: string
  isLast?: boolean
}

const Step: React.FC<StepProps> = ({ order, title, paragraph, isLast }) => {
  return (
    <div className={`flex relative ${!isLast ? "pb-12" : ""}`}>
      {!isLast && (
        <div className='h-full w-10 absolute inset-0 flex items-center justify-center'>
          <div className='h-full w-1 bg-gray-200 pointer-events-none'></div>
        </div>
      )}
      <div className='flex-shrink-0 w-10 h-10 rounded-full bg-[#f25116] inline-flex items-center justify-center text-white relative z-10'>
        {order}
      </div>
      <div className='flex-grow pl-4'>
        <h2 className='font-semibold title-font text-sm text-gray-900 dark:text-gray-100 mb-1 tracking-wider'>
          {title}
        </h2>
        <p className='leading-relaxed dark:text-gray-200'>{paragraph}</p>
      </div>
    </div>
  )
}

export default Step
