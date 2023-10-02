import { FaStar } from 'react-icons/fa';
import { CgFlagAlt } from 'react-icons/cg';

import { Crumbs } from '@components';

interface IHotelHeader {
  name: string;
  addressLine1: string;
  starRating: number;
  revCount: number;
}

const HotelDetailsHeader = ({ name, addressLine1, starRating, revCount }: IHotelHeader) => (
  <div className='flex flex-col gap-[25px]'>
    {/* Crumbs */}
    <div className='flex items-center w-[1300px] text-[14px] font-normal font-DMSans'>
      <Crumbs label='Hotel' step={2} />
    </div>
    <p className='font-Roboto font-medium text-[48px] text-cBlack-2 dark:text-cBlack-8'>
      {name}
    </p>
    <div className='flex gap-8'>
      <p className='flex items-center text-cBlack-3 dark:text-cBlack-7 font-normal text-[14px]'>
        <FaStar fill='#FFC542' className='mr-2 h-4 w-4' />
        {starRating}&nbsp;
        <span className='text-cBlack-4 dark:text-cBlack-5'>({revCount} reviews)</span>
      </p>
      <p className='flex gap-2 items-center text-cBlack-4 dark:text-cBlack-5 text-[14px]'>
        <CgFlagAlt className='h-5 w-5' />
        {addressLine1}
      </p>
    </div>
  </div>
);

export default HotelDetailsHeader;
