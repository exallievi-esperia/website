import Link from "next/link";
import React from "react";
import { VscFilePdf } from "react-icons/vsc";

interface File {
  name: string;
  href: string;
  desc?: string;
}

interface FileListProps {
  year: number;
  files: File[];
  isEven: boolean;
}

const FileList: React.FC<FileListProps> = ({ year, files, isEven }) => {
  return (
    <div
      id={year.toString()}
      className={`flex flex-col sm:flex-row gap-5 sm:gap-20 items-start sm:items-center w-full py-8 justify-center sm:justify-start px-5 sm:px-32 md:px-60 lg:px-72 xl:px-96 scroll-mt-16 md:scroll-mt-24 ${
        isEven ? "bg-gray-100 dark:bg-gray-700" : ""
      }`}
    >
      <h3 className='text-4xl font-bold self-center dark:text-white'>{year}</h3>
      <ul className='flex flex-col gap-5'>
        {files.map((file: File) => (
          <li key={file.name}>
            <Link
              href={file.href}
              target='_blank'
              rel='noopener noreferrer nofollow'
              className='group hover:underline underline-offset-2 decoration-[#f25116] decoration-2 flex gap-2 items-center'
            >
              <span>
                <VscFilePdf className='text-[#f25116] group-hover:rotate-[20deg] group-hover:scale-110 transition duration-500 w-8 h-8' />
              </span>
              <div>
                <p className='dark:text-gray-200'>{file.name}</p>
                <p className='text-sm'>{file.desc}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileList;
