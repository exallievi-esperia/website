import Image from 'next/image'
import Link from 'next/link'
import { IconType } from 'react-icons'

interface Contact {
  icon: IconType
  link: string
}

interface TeamProps {
  name: string
  role: string
  contacts?: Contact[]
}

const Team: React.FC<TeamProps> = ({ name, role, contacts }) => {
  return (
    <div className="flex flex-col items-center gap-y-8 bg-gray-100 dark:bg-gray-800 py-12 rounded-md w-11/12 m-auto">
      <div className="flex flex-col items-center text-center">
        <h3 className="font-bold text-xl dark:text-white">{name}</h3>
        <p className="text-gray-500 dark:text-gray-300">{role}</p>
      </div>

      <div className="flex gap-x-4">
        {contacts &&
          contacts.map((contact, index) => (
            <a href={contact.link} key={index} rel="noopener noreferrer" target="_blank">
              <contact.icon
                key={index}
                className="w-6 h-6 hover:text-[#f25116] dark:text-gray-200 dark:hover:text-[#f25116] transition-colors"
              />
            </a>
          ))}
      </div>
    </div>
  )
}

export default Team
