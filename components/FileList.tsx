import Link from "next/link";
import React from "react";
import { VscFilePdf } from "react-icons/vsc";

interface File {
  name: string;
  href: string;
}

interface FileListProps {
  year: number;
  files: File[];
}

const FileList: React.FC<FileListProps> = ({ year, files }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-10 sm:gap-20 items-center justify-center w-full">
      <h3 className="text-4xl font-bold">{year}</h3>
      <ul className="flex flex-col gap-5">
        {files.map((file: File) => (
          <li key={file.name}>
            <Link href={file.href} className="flex gap-2 items-center">
              <span>
                <VscFilePdf className="text-red-400" />
              </span>
              {file.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileList;
