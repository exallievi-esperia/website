import { FcFolder, FcOpenedFolder } from "react-icons/fc"
import Image from "next/image"

interface Date {
  day: number
  month: string
  year: number
}

interface EventiCardProps {
  name: string
  description: string
  date: Date
  href: string
  image: string
}

const EventiCard: React.FC<EventiCardProps> = ({
  name,
  description,
  date,
  href,
  image,
}) => {
  return (
    <a
      href={href}
      className='p-4 group flex flex-row relative min-h-[12rem]'
      rel='noopener noreferrer'
      target='_blank'
    >
      <Image
        src={image}
        alt='Eventi background image'
        fill
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        className='object-cover object-center rounded-lg'
      />
      {/* Overlay */}
      <div className='absolute rounded-lg shadow w-full h-full inset-0 bg-white/[0.92] group-hover:bg-white/80 dark:bg-gray-900/[0.92] dark:group-hover:bg-gray-900/80 transition duration-300'></div>

      <div className='z-10 flex flex-col '>
        <span className='font-bold mb-2 flex justify-between flex-wrap text-lg'>
          <h2 className='dark:text-white'>{name}</h2>
        </span>
        <p className='block text-gray-500 text-base dark:text-gray-100 mb-4'>
          {description}
        </p>
        <span className='flex items-center text-gray-500 text-sm mt-auto'>
          <span className='block h-0.5 w-4 bg-[#f25116] mr-2 rounded-full'></span>
          <p className='dark:text-gray-300'>
            {date.day + " " + date.month + " " + date.year}
          </p>
        </span>
      </div>
      <div className='absolute -right-4 -bottom-5'>
        <FcFolder className='group-hover:hidden block w-16 h-16' />
        <FcOpenedFolder className='hidden group-hover:block w-16 h-16' />
      </div>
    </a>
  )
}

export default EventiCard
