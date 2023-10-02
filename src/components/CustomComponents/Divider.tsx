import { ReactNode } from 'react';

const Divider = ({ children }: {children: ReactNode}) => (
  <div className='relative my-4 w-[85%] mx-auto'>
    <div className='absolute inset-0 flex items-center' aria-hidden='true'>
      <div className='w-full border-t border-gray-200 dark:border-gray-500' />
    </div>
    <div className='relative flex justify-center'>
      <span className='bg-white px-2 text-sm text-gray-400 dark:text-gray-300 dark:bg-black'>
        {children}
      </span>
    </div>
  </div>
);

export default Divider;
