import React from "react";

interface HeaderProps {
  title: string;
  description: string;
}

const HeaderSection: React.FC<HeaderProps> = ({ title, description }) => {
  return (
    <div className="text-center max-w-xl md:max-w-4xl mx-auto">
      <h1 className="font-bold sm:text-5xl text-3xl mb-5">{title}</h1>
      <p className="text-xl">{description}</p>
    </div>
  );
};

export default HeaderSection;
