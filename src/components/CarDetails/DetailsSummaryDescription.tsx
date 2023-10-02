import { useEffect, useState } from 'react';
import Link from 'next/link';

import { AiOutlineCalendar } from 'react-icons/ai';
import { BiCurrentLocation } from 'react-icons/bi';
import { MdCarRental } from 'react-icons/md';
import { FaStar } from 'react-icons/fa';
import { useGlobalContext } from '@context/GlobalContext';
import { DetailSummaryDropdown, CarDetailsBillSummary } from '@components';

const Summary = ({ icon, title, subtitle }) => (
  <div className='flex gap-[10px] p-[18px_24px] bg-[#F4F5F6] dark:bg-cBlack-3 w-full rounded-md'>
    <p className='text-[#84878B] h-[20px] w-[20px] mt-1'>{icon}</p>
    <div className=''>
      <p className='text-[16px] text-cBlack-2 dark:text-white'>{title}</p>
      <p className='text-[#84878B] dark:text-gray-300'>{subtitle}</p>
    </div>
  </div>
);

const DetailsSummaryDescription = ({ styles, carImage, isCheckout }) => {
  const { cars, activeCar, carFromLocation, carToLocation, carStartDate, carEndDate } = useGlobalContext();
  const [toggleFacilitiesOpen, setToggleFacilitiesOpen] = useState(false);
  const [toggleLocationOpen, setToggleLocationOpen] = useState(false);
  const [toggleDateOpen, setToggleDateOpen] = useState(false);
  const [partner, setPartner] = useState(null);

  useEffect(() => {
    setPartner(cars?.partners?.find((p) => p?.partnerCode === activeCar?.partnerInfo?.partnerCode));
  }, []);

  return (
    <div className={styles}>
      <div className='mb-4'>
        <div className='flex justify-between items-center'>
          <p className='text-[#B1B5C4] flex items-center'>
            <span className='text-[20px] md:text-[34px] text-cBlack-1 dark:text-[#FCFCFD] font-[700] mr-3'>${activeCar?.rates?.USD?.basePrices?.DAILY}</span>
            <span className='text-[18px] md:text-[24px] font-[500] line-through'>${(Number(activeCar?.rates?.USD?.basePrices?.DAILY) * 1.2).toFixed(2)}</span><span className='text-[18px]'>&nbsp;/ day</span>
          </p>
          <p className='text-[12px] md:text-[17px] text-[#50A371] dark:bg-cBlack-3'>Car is available</p>
        </div>
        <div className='flex gap-2 items-center mt-2'>
          <FaStar className='text-[#FFC542] h-[12px] w-[13px]' />
          <p className='text-[14px] font-[500]'>4.8 <span className='text-[#777a7e] font-[400] ml-1'>(122 reviews)</span></p>
        </div>
      </div>
      {carImage && (
        <div className='flex justify-center mt-2 mb-4'>
          <img src={carImage} alt='car' className='rounded-lg' />
        </div>
      )}
      <div className='flex flex-col gap-4 mb-10'>
        <DetailSummaryDropdown
          isOpen={toggleFacilitiesOpen}
          setIsOpen={setToggleFacilitiesOpen}
          title='Partner'
          content={(<Summary icon={<MdCarRental />} title='Partner Info' subtitle={`${partner?.partnerName} - ${partner?.phoneNumber}`} />)}

        />
        <DetailSummaryDropdown
          isOpen={toggleLocationOpen}
          setIsOpen={setToggleLocationOpen}
          title='Location'
          content={(<Summary icon={<BiCurrentLocation />} title='From Location' subtitle={carFromLocation} />)}
          additionalContent={(<Summary icon={<BiCurrentLocation />} title='To Location' subtitle={carToLocation} />)}
        />
        <DetailSummaryDropdown
          isOpen={toggleDateOpen}
          setIsOpen={setToggleDateOpen}
          title='Date'
          content={(<Summary icon={<AiOutlineCalendar />} title='Pickup Date' subtitle={carStartDate?.toDateString()} />)}
          additionalContent={(<Summary icon={<AiOutlineCalendar />} title='Dropoff Date' subtitle={carEndDate?.toDateString()} />)}
        />
        <div className='flex items-center justify-between mt-4'>
          <div>
            <p className='text-[18px] text-[#353945] dark:text-white'>Child seat</p>
            <p className='text-[14px] text-[#84878B]'>$50</p>
          </div>
          <button type='button' className='bg-[#F4F5F6] dark:bg-cBlack-3 h-[34px] w-[106px] text-[#84878B] rounded-[6px]'>1 Seat</button>
        </div>
      </div>

      {/* Fare Summary */}
      <CarDetailsBillSummary />
      {/* Reserve button */}
      {!isCheckout && (
      <div className='flex h-full items-center justify-center mt-10'>
        <Link href={`/confirm/car/${activeCar?.id}`}>
          <button type='button' className='bg-[#316BFF] rounded-[30px] w-[190px] h-[50px] text-white font-[700]'>Reserve this Car</button>
        </Link>
      </div>
      )}
    </div>
  );
};

export default DetailsSummaryDescription;
