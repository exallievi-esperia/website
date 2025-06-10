import React from 'react'

interface NavButtonProps {
  onClick: () => void
}

const NavButton: React.FC<NavButtonProps> = ({ onClick }) => {
  const handleClick = () => {
    onClick()
  }

  return (
    <button
      onClick={handleClick}
      className={`bg-[#f25116] hover:bg-[#bf3617] transition-colors text-white rounded-md relative inline-flex items-center px-4 py-2 text-sm font-semibold`}
    >
      Carica altro
    </button>
  )
}

export default NavButton
