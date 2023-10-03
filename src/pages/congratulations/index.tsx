/* eslint-disable no-unsafe-optional-chaining */
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FaStar } from 'react-icons/fa';
import axios from 'axios';

import { Crumbs } from '@components';
import { TbDeviceDesktopAnalytics, TbTrash } from 'react-icons/tb';
import { FiCalendar } from 'react-icons/fi';
import { BsWallet2 } from 'react-icons/bs';
import { currencies } from '@constants';

const paymentMethods = {
  card: 'Credit Card',
  paypal: 'Paypal',
};

const Congratulations = () => {
  const [booking, setBooking] = useState(null);
  const router = useRouter();
  // find currency symbol inside currencies array using booking currency
  const currency = currencies.find((item) => item.code === booking?.currency.toUpperCase());

  useEffect(() => {
    const { bookingId } = router.query;
    if (bookingId) {
      console.log(bookingId);
    }
  }, [router.query]);

  return (
    <div className='flex justify-center items-center mt-[70px]'>
      <div className='flex flex-col gap-[70px] w-[1170px]'>
        <Crumbs label='Hotel' step={4} />
        <div className='flex flex-col gap-[37px]'>
          <div className='flex flex-col gap-[22px] font-DMSans h-[156px] w-[608px] border-b-2 border-b-cBlack-6 dark:border-b-cBlack-3'>
            <p className='font-bold text-[25px] text-cBlack-3 dark:text-cBlack-8'>Congratulations!</p>
            <p className='font-medium text-[48px] text-cBlack-3 dark:text-cBlack-8'>Your trip has been booked</p>
          </div>
          <div className='flex gap-[27px]'>
            <div className='flex flex-col gap-[30px] w-[411px] overflow-visible'>
              <div className='flex flex-col gap-[24px] font-DMSans'>
                <p className='w-max font-bold text-[34px] text-cBlack-2 dark:text-cBlack-7'>Switzerland Hotels and Places to Stay</p>
                <div className='flex gap-[37px] pb-5 border-b-2 border-b-[#F1F2F4] dark:border-b-cBlack-3'>
                  <div className='flex items-center'>
                    <FaStar fill='#FFC542' className='mr-2 h-4 w-4' />
                    <p className='text-cBlack-3 dark:text-cBlack-4 font-medium text-[14px]'>
                      4.8&nbsp;
                      <span className='text-cBlack-4 dark:text-cBlack-5'>(122 reviews)</span>
                    </p>
                  </div>
                  <p className='font-medium text-[14px] text-cBlack-3 dark:text-cBlack-4'>1 bed room + Private room</p>
                </div>
                <div className='flex gap-[40px] font-DMSans font-medium'>
                  <div className='flex flex-col p-[9px_20px] h-[64px] w-[168px] bg-[#F4F4F6] dark:bg-cBlack-2  rounded-[12px]'>
                    <p className='text-[14px] text-cBlack-3 dark:text-cBlack-6'>Dates</p>
                    <p className='text-[16px] text-cBlack-4'>May 15-22, 2021</p>
                  </div>
                  <div className='flex flex-col p-[9px_20px] h-[64px] w-[168px] bg-[#F4F4F6] dark:bg-cBlack-2  rounded-[12px]'>
                    <p className='text-[14px] text-cBlack-3 dark:text-cBlack-6'>Travelers</p>
                    <p className='text-[16px] text-cBlack-4'>1 Passenger</p>
                  </div>
                </div>
              </div>
              {/* Reserve details */}
              <div className='flex flex-col gap-[23px] h-[267px] w-[378px] p-[19px_25px] bg-[#F4F4F6] dark:bg-cBlack-2 font-DMSans rounded-[10px]'>
                <p className='font-bold text-[28px] text-cBlack-2 dark:text-cBlack-8'>Reserve Details</p>
                <div className='flex justify-between items-center font-medium text-[16px]'>
                  <p className='flex items-center gap-2 text-cBlack-4 dark:text-cBlack-6'>
                    <TbDeviceDesktopAnalytics className='h-5 w-5' /> Booking Code:
                  </p>
                  <p className='text-cBlack-3 dark:text-cBlack-4 text-xs'>
                    {booking?.id.slice(0, 6)}...{booking?.id.slice(booking?.id.length - 5)}
                  </p>
                </div>
                <div className='flex justify-between items-center font-medium text-[16px]'>
                  <p className='flex items-center gap-2 text-cBlack-4 dark:text-cBlack-6'>
                    <FiCalendar className='h-5 w-5' /> Date:
                  </p>
                  <p className='text-cBlack-3 dark:text-cBlack-4 text-xs'>
                    {new Date(booking?.created * 1000).toLocaleDateString()}
                  </p>
                </div>
                <div className='flex justify-between items-center font-medium text-[16px]'>
                  <p className='flex items-center gap-2 text-cBlack-4 dark:text-cBlack-6'>
                    <TbTrash className='h-5 w-5' /> Total:
                  </p>
                  <p className='text-cBlack-3 dark:text-cBlack-4 text-xs'>
                    {currency?.symbol} {booking?.amount.toLocaleString()}
                  </p>
                </div>
                <div className='flex justify-between items-center font-medium text-[16px]'>
                  <p className='flex items-center gap-2 text-cBlack-4 dark:text-cBlack-6'>
                    <BsWallet2 className='h-5 w-5' /> Payment Method:
                  </p>
                  <p className='text-cBlack-3 dark:text-cBlack-4 text-xs'>
                    {paymentMethods[booking?.payment_method_types[0]]}
                  </p>
                </div>
              </div>
              {/* button */}
              <button type='button' className='h-[61px] w-[205px] text-center bg-primaryBlue text-white rounded-[30px]' onClick={() => router.push('/bookings')}>
                Go To Your Home
              </button>
            </div>
            <div className='relative my-[96px] h-[396px] w-[699px] rounded-[16px] overflow-clip'>
              <Image src='/HomeDestination/batu.jpg' layout='fill' objectFit='cover' priority />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Congratulations;
