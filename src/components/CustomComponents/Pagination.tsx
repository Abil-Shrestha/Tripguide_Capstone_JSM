import { BsChevronBarLeft, BsChevronBarRight } from 'react-icons/bs';

interface PaginationProps {
  length: number;
  numPages: number;
  start: number;
  end: number;
  handleClick: (click: string | number) => void;
}

const Pagination = ({ length, numPages, start, end, handleClick }: PaginationProps) => (
  <div className='flex items-center justify-between bg-primaryGray dark:bg-cBlack-1 px-4 py-3 sm:px-6'>
    {/* Mobile */}
    <div className='flex flex-1 justify-between sm:hidden'>
      <button
        onClick={() => handleClick('prev')}
        type='button'
        className='relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'
      >
        Previous
      </button>
      <button
        onClick={() => handleClick('next')}
        type='button'
        className='relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'
      >
        Next
      </button>
    </div>
    {/* Larger Screens */}
    <div className='hidden sm:flex sm:flex-1 sm:items-center sm:justify-between'>
      <div>
        <p className='text-sm text-gray-700 dark:text-white'>
          Showing <span className='font-medium'>{start + 1}</span> to <span className='font-medium'>{length >= 6 && end < length ? end : length}</span> of{' '}
          <span className='font-medium'>{length}</span> results
        </p>
      </div>
      <div>
        <nav className='isolate inline-flex -space-x-px rounded-md shadow-sm dark:bg-cBlack-2 ' aria-label='Pagination'>
          <button
            onClick={() => handleClick('prev')}
            type='button'
            className='relative inline-flex items-center rounded-l-md border border-gray-300 dark:border-cBlack-3 px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 dark:hover:bg-cBlack-3 focus:z-20'
          >
            <span className='sr-only'>Previous</span>
            <BsChevronBarLeft className='h-5 w-5' aria-hidden='true' />
          </button>
          {numPages > 0
            && new Array(numPages)?.fill(0)?.map((_, index) => (
              <button
                onClick={() => handleClick(index + 1)}
                key={index}
                type='button'
                className={`dark:text-white relative inline-flex items-center border border-gray-300 dark:border-cBlack-3 
                px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:hover:bg-cBlack-3 focus:z-20 ${(index + 1) * 6 === end ? 'bg-gray-200 dark:bg-cBlack-2' : ''}`}
              >
                {index + 1}
              </button>
            ))}
          <button
            onClick={() => handleClick('next')}
            type='button'
            className='relative inline-flex items-center rounded-r-md border border-gray-300 dark:border-cBlack-3 px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 dark:hover:bg-cBlack-3 focus:z-20'
          >
            <span className='sr-only'>Next</span>
            <BsChevronBarRight className='h-5 w-5' aria-hidden='true' />
          </button>
        </nav>
      </div>
    </div>
  </div>
);

export default Pagination;
