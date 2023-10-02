/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import Link from 'next/link';

import { FiUsers } from 'react-icons/fi';
import { BiGasPump } from 'react-icons/bi';
import { BsSpeedometer } from 'react-icons/bs';

const CarListingCard = ({ item }) => {
  const image = Object.values(item.vehicleInfo.images)[Object.values(item.vehicleInfo.images).length - 1];
  return (
    <div className='col-span-12 md:col-span-6 xl:col-span-4 w-full xs:w-[335px] font-DMSans'>
      <div className='realtive flex flex-col shadow-lg'>
        <div className='bg-[#F4F5F6] dark:bg-[#3B3E44] rounded-t-lg'>
          <img src={image} alt='car' className='w-full rounded-t-lg h-[192px] object-fill' />
        </div>
        <div className='bg-gray-100 dark:bg-cBlack-2 py-4 rounded-b-md px-4 flex flex-col gap-4'>
          <div>
            <div className='flex justify-between items-center'>
              <h3 className='font-[700] text-[20px] whitespace-nowrap'>{item.vehicleInfo.vehicleExample}</h3>
              {/* pill */}
              <div className='text-[#219653] bg-[#E9F7EF] dark:bg-cBlack-3 rounded-[30px] py-1 px-3'>
                <p className='text-sm whitespace-nowrap uppercase font-[500] text-[12px]'>Special Deal</p>
              </div>
            </div>
            <p className='font-[500] text-[16px] text-[#84878B] mt-2'>{item.vehicleInfo.description}</p>
          </div>

          <div className=''>
            <p className='mb-2 text-[16px] font-[500]'>Features</p>
            <div className='flex items-center gap-12 mb-4'>
              <div className='flex gap-4 items-center'>
                <FiUsers className='dark:text-[#B1B5C4]' />
                <p className='text-[#84878B]'>5</p>
              </div>
              <div className='flex gap-4 items-center'>
                <BiGasPump className='dark:text-[#B1B5C4]' />
                <p className='text-[#84878B]'>Electric</p>
              </div>
            </div>
            <div className='flex gap-4 items-center'>
              <BsSpeedometer className='dark:text-[#B1B5C4]' />
              <p className='text-[#84878B]'>Unlimited milage</p>
            </div>
          </div>

          <div className='flex justify-between mt-4'>
            <div>
              <p className='text-[24px] font-[500]'>${item?.rates?.USD?.basePrices?.DAILY}</p>
              <p className='text-[16px] font-[400] text-[#84878B]'>per day</p>
            </div>
            <Link scroll={false} href={`/listing/car/details/${item.id}`}>
              <button type='button' className='bg-[#316BFF] w-[146px] h-[44px] rounded-[8px] text-white cursor-pointer'>Reserve Deal</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarListingCard;
