import React from "react";

interface HeaderProps {
  title: string;
  description: string;
}

const HeaderSection: React.FC<HeaderProps> = ({ title, description }) => {
  return (
    <div className="text-center p-12 md:p-36 bg-gray-300">
      <h1 className="font-bold sm:text-5xl text-4xl mb-5">{title}</h1>
      <p className="text-xl">{description}</p>
    </div>
  );
};

export default HeaderSection;
