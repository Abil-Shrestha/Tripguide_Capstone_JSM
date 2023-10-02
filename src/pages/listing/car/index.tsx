import Link from 'next/link';

import { MdKeyboardArrowRight } from 'react-icons/md';
import { Search, CarListings } from '@components';

const Car = () => (
  <div className='max-w-[1440px] mx-6 md:mx-16 2xl:mx-auto mb-10'>
    {/* Crumbs */}
    <div className='flex items-center mt-[50px] text-[14px] font-normal font-DMSans'>
      <Link href='/?source=car' className='text-cBlack-3 dark:text-cBlack-7'>Home</Link>
      <MdKeyboardArrowRight className='h-5 w-5 text-cBlack-3 dark:text-cBlack-7' />
      <p className='text-cBlack-5 dark:text-cBlack-4'>Car List</p>
    </div>
    <Search />
    {/* Main Content */}
    <CarListings />
    {/* View All Button */}
    <div className='flex justify-center items-center mt-[50px]'>
      <button
        type='button'
        className='h-[46px] w-[176px] rounded-[47px] transition-all duration-200 hover:bg-[#326BFF]
                hover:text-white text-[16px] text-center font-medium font-DMSans text-cBlack-1 dark:text-cBlack-6 border-[1px] border-cBlack-5 dark:border-cBlack-3'
      >
        View All
      </button>
    </div>
  </div>
);

export default Car;

