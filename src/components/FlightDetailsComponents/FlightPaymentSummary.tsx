import { useState } from 'react';
import Image from 'next/image';

import { FaPlaneDeparture, FaStar } from 'react-icons/fa';
import { BiCurrentLocation } from 'react-icons/bi';
import { AiOutlineCalendar } from 'react-icons/ai';

import { useGlobalContext } from '@context/GlobalContext';
import { DetailSummaryDropdown } from '@components';

const Summary = ({ icon, title, subtitle }) => (
  <div className='flex gap-[10px] p-[18px_24px] bg-[#F4F5F6] dark:bg-cBlack-3 w-full rounded-md'>
    <p className='text-[#84878B] h-[20px] w-[20px] mt-1'>{icon}</p>
    <div className=''>
      <p className='text-[16px] text-cBlack-2 dark:text-white'>{title}</p>
      <p className='text-[#84878B] dark:text-gray-300'>{subtitle}</p>
    </div>
  </div>
);

const FlightPaymentSummary = () => {
  const { activeFlight, flightFromID, flightToID, flightStartDate, flightFromLocation, flightToLocation, flightPassengers } = useGlobalContext();
  const [toggleFacilitiesOpen, setToggleFacilitiesOpen] = useState(false);
  const [toggleLocationOpen, setToggleLocationOpen] = useState(false);
  const [toggleDateOpen, setToggleDateOpen] = useState(false);

  return (
    <div className='w-[434px] h-full mt-[200px] rounded-[20px] border-2 border-[#E7ECF3] dark:border-cBlack-3 bg-white dark:bg-cBlack-2 p-[36px_35px] flex flex-col'>
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
      <div className='flex gap-2 items-center mt-4 mb-8'>
        <FaStar className='text-[#FFC542] h-[12px] w-[13px]' />
        <p className='text-[14px] font-[500]'>4.8 <span className='text-[#777a7e] font-[400] ml-1'>(122 reviews)</span></p>
      </div>
      <div className='h-[177px] w-full rouned-md mb-8'>
        <img src='/flightTest.jpg' className='object-cover h-[177px] w-full rounded-md' />
      </div>
      <div className='flex text-[16px] font-[500] gap-4'>
        <h3>1 Baggage</h3>
        <p>+</p>
        <p>Meals</p>
      </div>
      <hr className='my-4 border border-[#E7ECF3] dark:border-cBlack-3' />
      <div>
        <DetailSummaryDropdown
          isOpen={toggleFacilitiesOpen}
          setIsOpen={setToggleFacilitiesOpen}
          title='Airline'
          content={(<Summary icon={<FaPlaneDeparture />} title='Airline Info' subtitle={activeFlight?.name} />)}
        />
        <DetailSummaryDropdown
          isOpen={toggleLocationOpen}
          setIsOpen={setToggleLocationOpen}
          title='Location'
          content={(<Summary icon={<BiCurrentLocation />} title='From Location' subtitle={flightFromLocation} />)}
          additionalContent={(<Summary icon={<BiCurrentLocation />} title='To Location' subtitle={flightToLocation} />)}
        />
        <DetailSummaryDropdown
          isOpen={toggleDateOpen}
          setIsOpen={setToggleDateOpen}
          title='Date'
          content={(<Summary icon={<AiOutlineCalendar />} title='Pickup Date' subtitle={flightStartDate?.toDateString()} />)}
        />
      </div>
      <div className='flex flex-col gap-4'>
        <h3 className='text-[24px] font-[500] mt-10'>Fare Summary</h3>
        <div className='ml-4 flex flex-col gap-8 text-[#B1B5C3]'>
          <p>{flightPassengers}x Passenger</p>
          <p>Tax and fee</p>
          <p>Service Fee</p>
        </div>
        <div className='bg-[#F4F5F6] dark:bg-cBlack-3 rounded-[6px] h-[40px] p-4 flex justify-between items-center mt-4'>
          <p>Total</p>
          <p>${activeFlight?.price}</p>
        </div>
        <button className='text-[14px] text-[#B1B5C3] mt-4' type='button'>Report this flight</button>
      </div>
    </div>
  );
};
export default FlightPaymentSummary;
