import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { MdKeyboardArrowRight } from 'react-icons/md';
import { FaStar } from 'react-icons/fa';

import { useGlobalContext } from '@context/GlobalContext';
import { reserveDetails } from '@utils/tempdata/Bookings';

const Congratulations = () => {
  const { cars, activeCar, carFromID, carToID, carStartDate, carEndDate } = useGlobalContext();
  const router = useRouter();

  const handlePreviousRoute = (type) => {
    if (type === 'listing') {
      router.push({ pathname: '/listing/car',
        query: {
          fromId: carFromID,
          toId: carToID,
          pickupDate: `${carStartDate?.toISOString().split('T')[0]} ${carStartDate?.toISOString().split('T')[1].slice(0, 8)}`,
          dropoffDate: `${carEndDate?.toISOString().split('T')[0]} ${carEndDate?.toISOString().split('T')[1].slice(0, 8)}`,
        } });
    } else if (type === 'details') {
      router.push({ pathname: `/listing/car/details/${activeCar?.id}` });
    } else if (type === 'confirm') {
      router.push({ pathname: `/confirm/car/${activeCar?.id}` });
    }
  };

  return (
    <div className='flex justify-center items-center mt-[70px]'>
      <div className='flex flex-col gap-[70px] w-[1170px]'>
        {/* Crumbs */}
        <div className='flex items-center mt-[50px] text-[14px] font-normal font-DMSans'>
          <Link href='/' className='text-cBlack-3 dark:text-cBlack-7'>Home</Link>
          <MdKeyboardArrowRight className='h-5 w-5 text-cBlack-3 dark:text-cBlack-7' />
          <button onClick={() => handlePreviousRoute('listing')} type='button' className='text-cBlack-3 dark:text-cBlack-7'>
            Car List
          </button>
          <MdKeyboardArrowRight className='h-5 w-5 text-cBlack-3 dark:text-cBlack-7' />
          <button onClick={() => handlePreviousRoute('details')} type='button' className='text-cBlack-3 dark:text-cBlack-7'>
            Car Details
          </button>
          <MdKeyboardArrowRight className='h-5 w-5 text-cBlack-3 dark:text-cBlack-7' />
          <button onClick={() => handlePreviousRoute('confirm')} type='button' className='text-cBlack-3 dark:text-cBlack-7'>
            Confirm and Pay
          </button>
          <MdKeyboardArrowRight className='h-5 w-5 text-cBlack-3 dark:text-cBlack-7' />
          <p className='text-cBlack-5 dark:text-cBlack-4'>Congratulations</p>
        </div>
        <div className='flex flex-col gap-[37px]'>
          <div className='flex flex-col gap-[22px] font-DMSans h-[156px] w-[608px] border-b-2 border-b-cBlack-6 dark:border-b-cBlack-3'>
            <p className='font-bold text-[25px] text-cBlack-3 dark:text-cBlack-8'>Congratulations!</p>
            <p className='font-medium text-[48px] whitespace-nowrap text-cBlack-3 dark:text-cBlack-8'>Your car has been booked!</p>
          </div>
          <div className='flex justify-between gap-[27px]'>
            <div className='flex flex-col gap-[30px] w-[480px]'>
              <div className='flex flex-col gap-[24px] font-DMSans'>
                <p className='w-max font-bold text-[34px] text-cBlack-2 dark:text-cBlack-7'>
                  {`${activeCar?.partnerInfo?.vehicleExample.split(' ')[0]} ${activeCar?.partnerInfo?.vehicleExample.split(' ')[1]}`}
                </p>
                <div className='flex gap-[37px] pb-5 border-b-2 border-b-[#F1F2F4] dark:border-b-cBlack-3'>
                  <div className='flex items-center'>
                    <FaStar fill='#FFC542' className='mr-2 h-4 w-4' />
                    <p className='text-cBlack-3 dark:text-cBlack-4 font-medium text-[14px]'>
                      4.8&nbsp;
                      <span className='text-cBlack-4 dark:text-cBlack-5'>(122 reviews)</span>
                    </p>
                  </div>
                  {/* TODO: Make this dynamic */}
                  <p className='font-medium text-[14px] text-cBlack-3 dark:text-cBlack-4'>1 car x 1 day</p>
                </div>
                <div className='flex gap-[40px] font-DMSans font-medium'>
                  <div className='flex flex-col p-[9px_20px] h-[64px] w-full bg-[#F4F4F6] dark:bg-cBlack-2  rounded-[12px]'>
                    <p className='text-[14px] text-cBlack-3 dark:text-cBlack-6'>Pickup Date</p>
                    <p className='text-[16px] text-cBlack-4'>{carStartDate?.toDateString()}</p>
                  </div>
                  <div className='flex flex-col p-[9px_20px] h-[64px] w-full bg-[#F4F4F6] dark:bg-cBlack-2  rounded-[12px]'>
                    <p className='text-[14px] text-cBlack-3 dark:text-cBlack-6'>Partner</p>
                    <p className='text-[16px] text-cBlack-4 whitespace-nowrap'>{cars?.partners?.find((p) => p?.partnerCode === activeCar?.partnerInfo?.partnerCode)?.partnerName}</p>
                  </div>
                </div>
              </div>
              {/* Reserve details */}
              <div className='flex flex-col gap-[23px] h-[267px] w-full p-[19px_25px] bg-[#F4F4F6] dark:bg-cBlack-2 font-DMSans rounded-[10px]'>
                <p className='font-bold text-[28px] text-cBlack-2 dark:text-cBlack-8'>Reserve Details</p>
                {/* Make this dynamic to the rental car data */}
                {reserveDetails.map((detail, idx) => (
                  <div key={idx} className='flex justify-between items-center font-medium text-[16px]'>
                    <p className='flex items-center gap-2 text-cBlack-4 dark:text-cBlack-6'>{detail.icon} {detail.label}</p>
                    <p className='text-cBlack-3 dark:text-cBlack-4'>{typeof (detail.info) === 'number' ? `$${detail.info}` : detail.info}</p>
                  </div>
                ))}
              </div>
              {/* button */}
              <button type='button' className='h-[61px] w-[205px] text-center bg-primaryBlue text-white rounded-[30px]'>
                <Link href='/'>
                  Go To Your Home
                </Link>
              </button>
            </div>
            <div className='ml-12 relative my-[96px] h-[412px] w-[699px] rounded-[16px] overflow-clip'>
              <Image src='/assets/CarImages/details3.png' layout='fill' objectFit='cover' priority />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Congratulations;
