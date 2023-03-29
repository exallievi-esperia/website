import React from "react";
import { HiCheck } from "react-icons/hi2";

interface FeatureProps {
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ title, description }) => {
  return (
    <div className='relative pl-16'>
      <div className='font-semibold leading-7 text-gray-900'>
        <span className='absolute top-0 left-0 flex h-8 w-8 items-center justify-center rounded-lg bg-[#f25116]'>
          <HiCheck className='h-6 w-6 text-white' aria-hidden='true' />
        </span>
        <h3 className='text-lg dark:text-gray-100'>{title}</h3>
      </div>
      <p className='mt-2 leading-7 text-gray-600 dark:text-gray-200'>{description}</p>
    </div>
  )
};

export default Feature;
