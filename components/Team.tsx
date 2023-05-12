import Image from "next/image"
import Link from "next/link"
import { IconType } from "react-icons"

interface Contact {
  icon: IconType
  link: string
}

interface TeamProps {
  name: string
  role: string
  image: string
  contacts: Contact[]
}

const Team: React.FC<TeamProps> = ({ name, role, image, contacts }) => {
  return (
    <div className='flex flex-col items-center gap-y-8 bg-gray-100 dark:bg-gray-800 py-12 rounded-lg w-11/12 m-auto'>
      <Image
        src={image}
        alt='Direttivo'
        width={200}
        height={200}
        className='rounded-full p-4 sm:p-0'
      />

      <div className='flex flex-col items-center text-center'>
        <h3 className='font-bold text-xl dark:text-white'>{name}</h3>
        <p className='text-gray-500 dark:text-gray-300'>{role}</p>
      </div>

      <div className='flex gap-x-4'>
        {contacts.map((contact, index) => (
          <Link href={contact.link} key={index}>
            <contact.icon
              key={index}
              className='w-6 h-6 hover:text-[#f25116] dark:text-gray-200 dark:hover:text-[#f25116] transition-colors'
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Team
