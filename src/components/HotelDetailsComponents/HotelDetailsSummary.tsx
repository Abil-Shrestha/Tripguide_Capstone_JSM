/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { FiCalendar } from 'react-icons/fi';
import { MdKeyboardArrowDown } from 'react-icons/md';

import { Checkbox } from '@components';
import { extras, prices } from '@utils/tempdata/HotelDetails';

const HotelDetailsSummary = ({ price, extraFeatures, handleCheck }) => {
  const router = useRouter();
  const { checkIn, checkOut } = useSelector((state) => state.global);

  return (
    <div className='flex flex-col gap-[18px] p-[26px_45px] h-[846px] w-[407px] bg-white dark:bg-cBlack-2 border-[1px] border-[#EAEAEA] dark:border-cBlack-3 rounded-[20px]'>
      <div className='flex items-center justify-between font-DMSans pb-3 border-b-2 border-b-cBlack-6 dark:border-cBlack-3'>
        <p className='font-bold text-cBlack-1 dark:text-cBlack-8 text-[34px]'>
          ${price}
          <span className='text-cBlack-4 dark:text-cBlack-6 text-[20px] font-normal'>/night</span>
        </p>
        <p className='flex items-center justify-center h-[30px] w-[80px] rounded-[30px] bg-[#316BFF] text-[14px] font-medium text-white'>
          20% off
        </p>
      </div>
      <div className='flex justify-between gap-[16px] font-DMSans'>
        <div className='flex flex-col gap-[11px]'>
          <p className='text-[16px] font-medium text-cBlack-4 dark:text-cBlack-5'>Check-In</p>
          <div className='flex gap-[10px] bg-cBlack-7 dark:bg-cBlack-3 rounded-[10px] p-[11px_14px] text-cBlack-3 dark:text-cBlack-7 font-normal text-[14px]'>
            <FiCalendar className='text-cBlack-4 dark:text-cBlack-5 h-5 w-5' /> {checkIn?.toISOString().split('T')[0]}
          </div>
        </div>
        <div className='flex flex-col gap-[11px]'>
          <p className='text-[16px] font-medium text-cBlack-4 dark:text-cBlack-5'>Check-Out</p>
          <div className='flex gap-[10px] bg-cBlack-7 dark:bg-cBlack-3 rounded-[10px] p-[11px_14px] text-cBlack-3 dark:text-cBlack-7 font-normal text-[14px]'>
            <FiCalendar className='text-cBlack-4 dark:text-cBlack-5 h-5 w-5' /> {checkOut?.toISOString().split('T')[0]}
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-[11px]'>
        <p className='text-[16px] font-medium text-cBlack-4 dark:text-cBlack-8'>Guest</p>
        <div className='flex justify-between bg-cBlack-7 dark:bg-cBlack-3 rounded-[10px] p-[11px_14px] text-cBlack-3 dark:text-cBlack-6 font-normal text-[14px]'>
          0 Guest <MdKeyboardArrowDown className='h-5 w-5' />
        </div>
      </div>
      <div className='flex flex-col gap-[11px]'>
        <p className='text-[16px] font-medium text-cBlack-4 dark:text-cBlack-8'>Extra Features</p>
        <div className='flex flex-col gap-3 text-cBlack-3 font-normal text-[14px]'>
          {extras.map((extra) => (
            <Checkbox label={extra} checked={extraFeatures} onChange={handleCheck} />
          ))}
        </div>
      </div>
      <div className='flex flex-col gap-[11px]'>
        <p className='text-[16px] font-medium text-cBlack-4 dark:text-cBlack-8'>Price</p>
        <div className='flex flex-col gap-2 bg-cBlack-7 dark:bg-cBlack-3 rounded-[10px] p-[11px_14px] text-cBlack-3 dark:text-cBlack-6 font-normal text-[14px]'>
          {prices.map((item, idx) => (
            <div key={idx} className='flex justify-between h-[27px]'>
              <p>{item.label}</p>
              <p>${item.price}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-between font-DMSans text-[16px] font-medium'>
        <p className='text-cBlack-4 dark:text-cBlack-8'>Total Payment</p>
        <p className='text-cBlack-3 dark:text-cBlack-8'>$300</p>
      </div>
      <button
        type='button'
        onClick={() => router.push({ pathname: '/confirm' })}
        className='flex items-center justify-center h-[48px] text-[20px] font-medium text-cBlack-8 rounded-[10px] bg-primaryBlue'
      >
        Book Now
      </button>
      <p className='text-center text-[14px] text-cBlack-4 font-normal font-DMSans'>You will not be charged yet</p>
    </div>
  );
};

export default HotelDetailsSummary;
