import Link from 'next/link';
import { MdKeyboardArrowRight } from 'react-icons/md';

import { Search, FlightListings } from '@components';

const FlightListing = () => (
  <div className='max-w-[1440px] mx-6 md:mx-12 xl:mx-16 2xl:mx-auto mb-10'>
    {/* Crumbs */}
    <div className='flex items-center mt-[50px] text-[14px] font-normal font-DMSans'>
      <Link href='/?source=flight' className='text-cBlack-3 dark:text-cBlack-7 text-[14px]'>Home</Link>
      <MdKeyboardArrowRight className='h-5 w-5 text-cBlack-3 dark:text-cBlack-7' />
      <p className='text-cBlack-5 dark:text-cBlack-4'>Flights</p>
    </div>
    <Search />
    <div className='h-[2px] w-[80%] mx-auto my-12 bg-gradient-to-r from-[#EDEDED66] via-[#EDEDED] to-[#EDEDED66] dark:from-[#00000066] dark:via-[#585252] dark:to-[#00000066]' />
    {/* Main Content */}
    <FlightListings />
  </div>
);

export default FlightListing;
