/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { TbDeviceDesktopAnalytics, TbTrash } from 'react-icons/tb';
import { FiCalendar } from 'react-icons/fi';
import { BsWallet2 } from 'react-icons/bs';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { FaStar } from 'react-icons/fa';

import { useGlobalContext } from '@context/GlobalContext';

const Congratulations = () => {
  const { activeFlight, flightStartDate, flightEndDate, flightFromID, flightToID, flightOneWay, flightPassengers } = useGlobalContext();
  const router = useRouter();

  const reserveDetails = [{
    icon: <TbDeviceDesktopAnalytics className='h-5 w-5' />,
    label: 'Booking code',
    info: 'FD_158456',
  },
  {
    icon: <FiCalendar className='h-5 w-5' />,
    label: 'Date',
    info: flightStartDate?.toDateString(),
  },
  {
    icon: <TbTrash className='h-5 w-5' />,
    label: 'Total',
    info: activeFlight?.price,
  },
  {
    icon: <BsWallet2 className='h-5 w-5' />,
    label: 'Payment method',
    info: 'Credit card',
  },
  ];

  const handlePreviousRoute = (type) => {
    if (type === 'listing') {
      if (type === 'listing') {
        let queryObj = {};
        if (flightPassengers > 0 && flightPassengers <= 7) {
          queryObj.passengers = flightPassengers;
        } else {
          queryObj.passengers = 1;
        }
        queryObj.itineraryType = flightOneWay ? 'ONE_WAY' : 'ROUND_TRIP';
        queryObj.sortOrder = 'PRICE';
        queryObj.classType = 'ECO';
        queryObj.numberOfStops = 0;
        queryObj.maxPrice = 20000;

        if (flightOneWay) {
          queryObj = {
            ...queryObj,
            locationDeparture: flightFromID,
            locationArrival: flightToID,
            departureDate: `${flightStartDate?.toISOString().split('T')[0]}`,
          };
          router.push({ pathname: '/listing/flight', query: queryObj });
        } else {
          queryObj = {
            ...queryObj,
            locationDeparture: flightFromID,
            locationArrival: flightToID,
            departureDate: `${flightStartDate?.toISOString().split('T')[0]}`,
            returnDepartureDate: `${flightEndDate?.toISOString().split('T')[0]}`,
          };
          router.push({ pathname: '/listing/flight', query: queryObj });
        }
        router.push({ pathname: '/listing/flight' });
      } else if (type === 'details') {
        router.push({ pathname: `/listing/flight/details/${activeFlight?.code}` });
      }
    } else if (type === 'confirm') {
      router.push({ pathname: `/confirm/flight/${activeFlight?.code}` });
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
            Flights
          </button>
          <MdKeyboardArrowRight className='h-5 w-5 text-cBlack-3 dark:text-cBlack-7' />
          <button onClick={() => handlePreviousRoute('details')} type='button' className='text-cBlack-3 dark:text-cBlack-7'>
            Flight Details
          </button>
          <MdKeyboardArrowRight className='h-5 w-5 text-cBlack-3 dark:text-cBlack-7' />
          <button onClick={() => handlePreviousRoute('confirm')} type='button' className='text-cBlack-3 dark:text-cBlack-7'>
            Confirm and Pay
          </button>
          <MdKeyboardArrowRight className='h-5 w-5 text-cBlack-3 dark:text-cBlack-7' />
          <p className='text-cBlack-5 dark:text-cBlack-4'>Congratulations</p>
        </div>
        <div className='flex flex-col gap-[37px]'>
          <div className='flex flex-col gap-[22px] font-DMSans h-[156px] w-[608px]'>
            <p className='font-bold text-[25px] text-cBlack-3 dark:text-cBlack-8'>Congratulations!</p>
            <p className='font-medium text-[48px] whitespace-nowrap text-cBlack-3 dark:text-cBlack-8'>Your flight has been booked!</p>
          </div>
          <div className='flex justify-between gap-[27px]'>
            <div className='flex flex-col gap-[30px] w-[480px]'>
              <div className='flex flex-col gap-[24px] font-DMSans'>
                <div className='flex gap-5 items-center'>
                  <p className='text-[20px] font-[700]'>{flightFromID}</p>
                  <div className='flex gap-2 items-center pt-2'>
                    <p>*****</p>
                    <div className=''>
                      <Image src='/flight-99.png' height={22} width={20} priority />
                    </div>
                    <p>*****</p>
                  </div>
                  <p className='text-[20px] font-[700]'>{flightToID}</p>
                </div>
                <div className='flex gap-[37px] pb-5 border-b-2 border-b-[#F1F2F4] dark:border-b-cBlack-3'>
                  <div className='flex items-center'>
                    <FaStar fill='#FFC542' className='mr-2 h-4 w-4' />
                    <p className='text-cBlack-3 dark:text-cBlack-4 font-medium text-[14px]'>
                      4.8&nbsp;
                      <span className='text-cBlack-4 dark:text-cBlack-5'>(122 reviews)</span>
                    </p>
                  </div>
                </div>
                <div className='flex gap-[40px] font-DMSans font-medium'>
                  <div className='flex flex-col p-[9px_20px] h-[64px] w-full bg-[#F4F4F6] dark:bg-cBlack-2  rounded-[12px]'>
                    <p className='text-[14px] text-cBlack-3 dark:text-cBlack-6'>Departure Date</p>
                    <p className='text-[16px] text-cBlack-4'>{flightStartDate?.toDateString()}</p>
                  </div>
                  <div className='flex flex-col p-[9px_20px] h-[64px] w-full bg-[#F4F4F6] dark:bg-cBlack-2  rounded-[12px]'>
                    <p className='text-[14px] text-cBlack-3 dark:text-cBlack-6'>Travelers</p>
                    <p className='text-[16px] text-cBlack-4 whitespace-nowrap'>{flightPassengers} Passenger</p>
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
              <Image src='/flightTest.jpg' layout='fill' objectFit='cover' priority />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Congratulations;
