import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

import { SummaryDetails, BookedDetails } from '@components';
import { bookingDetails } from '@utils/tempdata/Bookings';

const Summary = () => (
  <div className='flex flex-col gap-[30px] mt-[139px] h-[873px] w-[435px] p-[38px_37px] bg-white dark:bg-cBlack-2 border-2 border-cBlack-6 dark:border-cBlack-3 rounded-[20px]'>
    <div className='flex flex-col gap-[14px]'>
      <p className='font-DMSans text-cBlack-1 dark:text-cBlack-8 text-[18px] font-medium'>
        Switzerland Hotels and Places to Stay
      </p>
      <div className='flex items-center'>
        <FaStar fill='#FFC542' className='mr-2 h-4 w-4' />
        <p className='text-cBlack-2 dark:text-cBlack-5 font-medium text-[14px]'>
          4.8&nbsp;
          <span className='text-cBlack-4 dark:text-cBlack-5'>(122 reviews)</span>
        </p>
      </div>
    </div>
    {/* Image */}
    <div className='relative h-[177px] w-[319px] rounded-[10px] overflow-clip'>
      <Image src='/HomeDestination/batu.jpg' layout='fill' objectFit='cover' />
    </div>
    {/* Details */}
    <div className='flex flex-col gap-[20px] font-DMSans w-[312px]'>
      <p className='h-[45px] w-fit text-[16px] text-cBlack-4 dark:text-cBlack-7 font-medium border-b-2 border-b-[#EEEEEE] dark:border-b-cBlack-3'>
        1 bedroom + 1 private room
      </p>
      <div className='flex justify-between font-medium'>
        <SummaryDetails label='Check in' info='June 27, 2020' />
        <SummaryDetails label='Check out' info='June 30, 2020' />
      </div>
      <SummaryDetails label='Guest' info='2 guests' />
    </div>
    {/* Booked Details */}
    <div className='flex flex-col gap-[27px] text-[16px] font-medium'>
      <p className='font-Roboto text-[26px] text-[#333333] dark:text-cBlack-8'>Booked Details</p>
      {bookingDetails.map((detail, idx) => (
        <BookedDetails detail={detail} idx={idx} key={idx} />
      ))}
      <div className='flex justify-between p-[8px_12px] bg-cBlack-7 dark:bg-cBlack-3 rounded-[6px]'>
        <p className='text-cBlack-2 dark:text-cBlack-7'>Total</p>
        <p className='text-cBlack-3 dark:text-cBlack-7'>$833</p>
      </div>
    </div>
    {/* Report */}
    <button type='button' className='w-fit self-center text-[14px] font-DMSans font-medium text-cBlack-5'>Report this property</button>
  </div>
);

export default Summary;
