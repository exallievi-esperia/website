import Link from "next/link";
import { FcFolder, FcOpenedFolder } from "react-icons/fc";

interface EventiCardProps {
  name: string;
  description: string;
  date: string;
  href: string;
}

const EventiCard: React.FC<EventiCardProps> = ({
  name,
  description,
  date,
  href,
}) => {
  return (
    <Link
      href={href}
      className="bg-gray-200 hover:bg-gray-300 transition duration-150 p-4 rounded-lg shadow group"
      rel="noopener noreferrer"
      target="_blank"
    >
      <span className="font-bold mb-2 flex justify-between flex-wrap text-lg">
        {name}
        <FcFolder className="group-hover:hidden block w-16 h-16" />
        <FcOpenedFolder className="hidden group-hover:block w-16 h-16" />
      </span>
      <p className="block text-gray-500 text-base">{description}</p>
      <span className="flex items-center text-gray-500 text-sm mt-4">
        <span className="block h-0.5 w-4 bg-red-400 mr-2 rounded-full"></span>
        {date}
      </span>
    </Link>
  );
};

export default EventiCard;
