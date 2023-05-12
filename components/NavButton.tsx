import React from "react"

type Position = "left" | "central" | "right" | "unique"

interface NavButtonProps {
  isCurrent: boolean
  idPage: number
  onClick: () => void
  position: Position
}

const NavButton: React.FC<NavButtonProps> = ({
  isCurrent,
  onClick,
  idPage,
  position,
}) => {
  const handleClick = () => {
    onClick()
  }

  return (
    <button
      onClick={handleClick}
      aria-current={isCurrent ? "page" : "false"}
      className={`${position === "left" && "rounded-l-md"} ${
        position === "right" && "rounded-r-md"
      } ${position === "central" && "rounded-none"} ${
        position === "unique" && "rounded-md"
      } relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 dark:text-gray-50 ring-1 ring-inset ring-gray-300 ${
        isCurrent
          ? "bg-[#f25116] text-white"
          : "hover:bg-gray-100 dark:hover:bg-gray-800"
      }`}
    >
      {idPage}
    </button>
  )
}

export default NavButton
