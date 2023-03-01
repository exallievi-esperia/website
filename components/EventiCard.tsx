import Link from "next/link";

interface EventiCardProps {
  name: string;
  description: string;
  href: string;
}

const EventiCard: React.FC<EventiCardProps> = ({ name, description, href }) => {
  return (
    <Link
      href={href}
      className="bg-gray-200 hover:bg-gray-300 p-4 rounded-lg shadow"
      rel="noopener noreferrer"
      target="_blank"
    >
      <span className="block font-bold mb-2">{name}</span>
      <span className="block text-gray-500 text-sm">{description}</span>
    </Link>
  );
};

export default EventiCard;
