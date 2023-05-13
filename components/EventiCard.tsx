import Link from "next/link"
import { FcFolder, FcOpenedFolder } from "react-icons/fc"

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
    <Link
      href={href}
      className='bg-blend-overlay bg-cover bg-no-repeat bg-center bg-gray-100 hover:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-800 transition duration-300 p-4 rounded-lg shadow group flex flex-row relative min-h-[12rem]'
      style={{ backgroundImage: `url("${image}")` }}
      rel='noopener noreferrer'
      target='_blank'
    >
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
    </Link>
  )
}

export default EventiCard
