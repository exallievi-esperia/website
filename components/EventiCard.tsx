import Link from "next/link"
import { FcFolder, FcOpenedFolder } from "react-icons/fc"

interface EventiCardProps {
  name: string
  description: string
  date: string
  href: string
}

const EventiCard: React.FC<EventiCardProps> = ({
  name,
  description,
  date,
  href,
}) => {
  return (
    // <Link
    //   href={href}
    //   className='max-w-sm bg-gray-200 hover:bg-gray-300 transition duration-150 p-4 rounded-lg shadow group flex flex-col relative'
    //   rel='noopener noreferrer'
    //   target='_blank'
    // >
    //   <div className="z-50">
    //     <span className='font-bold mb-2 flex justify-between flex-wrap text-lg'>
    //       <h2>{name}</h2>
    //     </span>
    //     <p className='block text-gray-500 text-base'>{description}</p>
    //     <span className='flex items-center text-gray-500 text-sm mt-4'>
    //       <span className='block h-0.5 w-4 bg-[#f25116] mr-2 rounded-full'></span>
    //       <p>{date}</p>
    //     </span>
    //   </div>

    //   <FcFolder className='group-hover:hidden block w-16 h-16 absolute -top-8 -right-3' />
    //   <FcOpenedFolder className='hidden group-hover:block w-16 h-16 absolute -top-8 -right-3' />
    // </Link>

    <Link
      href={href}
      className='bg-gray-100 hover:bg-gray-200 transition duration-150 p-4 rounded-lg shadow group flex flex-row relative'
      rel='noopener noreferrer'
      target='_blank'
    >
      <div className='z-50'>
        <span className='font-bold mb-2 flex justify-between flex-wrap text-lg'>
          <h2>{name}</h2>
        </span>
        <p className='block text-gray-500 text-base'>{description}</p>
        <span className='flex items-center text-gray-500 text-sm mt-4'>
          <span className='block h-0.5 w-4 bg-[#f25116] mr-2 rounded-full'></span>
          <p>{date}</p>
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
