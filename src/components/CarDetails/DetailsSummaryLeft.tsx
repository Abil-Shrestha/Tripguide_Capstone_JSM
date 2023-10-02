import { useState } from 'react';
import { AiFillCar } from 'react-icons/ai';

import { Select } from '@components';

const driverOptions = [
  { id: 0, name: 'View All' },
  { id: 1, name: 'Test Driver 1', phone: '222-222-2222' },
  { id: 2, name: 'Test Driver 2', phone: '222-222-2222' },
  { id: 3, name: 'Test Driver 3', phone: '222-222-2222' },
  { id: 4, name: 'Test Driver 4', phone: '222-222-2222' },
];

const DetailsSummaryLeft = () => {
  const [driverDetails, setDriverDetails] = useState(driverOptions[0]);
  return (
    <div className='w-full flex flex-col gap-4 xl:w-[90%]'>
      {/* Car Details */}
      <div className='pt-4 pb-8 border-b border-[#E7ECF3] dark:border-[#3B3E44]'>
        <h3 className='font-[700] text-[34px] text-[#141416] dark:text-[#FCFCFD] mb-8'>Car Details</h3>
        <div className='flex flex-col gap-4 w-full md:flex-row justify-between xl:justify-start xl:gap-[70px]'>
          <div className='flex flex-col gap-4 md:gap-6'>
            <div className='w-full md:w-[260px] h-[54px] bg-[#F4F5F6] dark:bg-cBlack-2 rounded-[10px] flex items-center pl-4 gap-4'>
              <AiFillCar className='h-[18px] w-[18px] text-[#3B3E44]' />
              <p className='text-[18px] text-[#84878B] font-[400]'>Put your car feature</p>
            </div>
            <div className='w-full md:w-[260px] h-[54px] bg-[#F4F5F6] dark:bg-cBlack-2 rounded-[10px] flex items-center pl-4 gap-4'>
              <AiFillCar className='h-[18px] w-[18px] text-[#3B3E44]' />
              <p className='text-[18px] text-[#84878B] font-[400]'>Put your car feature</p>
            </div>
          </div>
          <div className='flex flex-col gap-4 md:gap-6'>
            <div className='w-full md:w-[260px] h-[54px] bg-[#F4F5F6] dark:bg-cBlack-2 rounded-[10px] flex items-center pl-4 gap-4'>
              <AiFillCar className='h-[18px] w-[18px] text-[#3B3E44]' />
              <p className='text-[18px] text-[#84878B] font-[400]'>Put your car feature</p>
            </div>
            <div className='w-full md:w-[260px] h-[54px] bg-[#F4F5F6] dark:bg-cBlack-2 rounded-[10px] flex items-center pl-4 gap-4'>
              <AiFillCar className='h-[18px] w-[18px] text-[#3B3E44]' />
              <p className='text-[18px] text-[#84878B] font-[400]'>Put your car feature</p>
            </div>
          </div>
        </div>
      </div>
      {/* Driver Details */}
      <div className='pt-4 pb-8'>
        <h3 className='font-[700] text-[34px] text-[#141416] dark:text-[#FCFCFD] mb-8'>Driver Details</h3>
        <div className='flex flex-col gap-4 w-full'>
          <Select
            options={driverOptions}
            selected={driverDetails}
            setSelected={setDriverDetails}
            styles='relative w-full xl:w-[590px] cursor-pointer rounded-lg text-[#84878B] bg-[#F4F5F6] dark:bg-cBlack-2 font-[500] text-[16px] h-[54px] pl-4 text-left focus:outline-none text-sm'
            optionStyles='absolute mt-1 max-h-60 w-full xl:w-[590px] overflow-auto text-[#84878B] bg-[#F4F5f6] dark:bg-cBlack-2 rounded-md bg-white py-1 shadow-lg focus:outline-none text-sm dark:text-white'
          />
          <div className='flex flex-col text-[18px] gap-4 md:gap-6'>
            <div className='flex flex-col md:flex-row justify-between xl:justify-start gap-4 xl:gap-[70px]'>
              <input type='text' placeholder='First Name' className='w-full md:w-[260px] h-[54px] bg-[#F4F5F6] dark:bg-cBlack-2 rounded-[10px] pl-4 focus:outline-none' />
              <input type='text' placeholder='Last Name' className='w-full md:w-[260px] h-[54px] bg-[#F4F5F6] dark:bg-cBlack-2 rounded-[10px] pl-4 focus:outline-none' />
            </div>
            <div className='flex flex-col md:flex-row justify-between xl:justify-start gap-4 xl:gap-[70px]'>
              <input type='email' placeholder='Email Address' className='w-full md:w-[260px] h-[54px] bg-[#F4F5F6] dark:bg-cBlack-2 rounded-[10px] pl-4 focus:outline-none' />
              <input type='text' placeholder='Contact Number' className='w-full md:w-[260px] h-[54px] bg-[#F4F5F6] dark:bg-cBlack-2 rounded-[10px] pl-4 focus:outline-none' />
            </div>
          </div>
        </div>
      </div>
      {/* Place Details */}
      <div className='pt-4 pb-16 border-b border-[#E7ECF3] dark:border-[#3B3E44]'>
        <h3 className='font-[700] text-[34px] text-[#141416] dark:text-[#FCFCFD] mb-8'>Place Details</h3>
        <div className='flex flex-col gap-6 text-[#84878B] font-[400]'>
          <p>The best 16 passenger small group, intimate and unique, miford sournd tour.</p>
          <p>Travel in unporaffeled style and comforn in a premium meredes van
            equpped with large ponoramic windows, leather recining seats, quirky on
            board videos, free wifi and complimentary bottled water.
          </p>
          <p>From your occommadotion enjoy the stunning scenic drive.</p>
        </div>
        <button type='button' className='text-[#3B3E44] font-[700] bg-white border border-[#E7ECF3] rounded-full mt-10 py-[14px] px-[32px]'>Show more</button>
      </div>
    </div>
  );
};

export default DetailsSummaryLeft;
