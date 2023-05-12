import React, { ReactNode } from "react"

interface PaginationProps {
  children: ReactNode
}

const Pagination: React.FC<PaginationProps> = ({ children }) => {
  return (
    <div className='flex justify-center mt-8'>
      <nav
        className='isolate inline-flex -space-x-px rounded-md shadow-sm'
        aria-label='Pagination'
      >
        {children}
      </nav>
    </div>
  )
}

export default Pagination
