import { StaticImageData } from "next/image";
import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

// interface TestimonialProps {
//   name: string;
//   label: string;
//   image: StaticImageData;
//   description: string;
// }

interface TestimonialProps {
  name: string;
  label: string;
  image: string;
  description: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  name,
  label,
  image,
  description,
}) => {
  return (
    <div className="flex flex-col items-center p-8 sm:p-16">
      <FaQuoteLeft className="mb-4 text-red-400" />
      <p className="text-center max-w-screen-md mx-auto text-xl sm:text-2xl">
        {description}
      </p>

      <div className="flex items-center gap-x-4 mt-8">
        {/* <Image
          className="w-10 h-10 rounded-full"
          width={image.width}
          height={image.height}
          src={image.src}
          alt="Testimonial picture"
        /> */}
        <Image
          className="w-10 h-10 rounded-full"
          width={100}
          height={100}
          src={image}
          alt="Testimonial picture"
        />
        <div className="flex flex-col">
          <p className="font-bold text-base">{name}</p>
          <p className="text-gray-500 text-sm">{label}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
