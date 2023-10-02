/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { useEffect, useState } from 'react';
import { CgArrowsExchange } from 'react-icons/cg';
import { TiLocationOutline } from 'react-icons/ti';

import { CalendarInput } from '@components';
import { useGetCarLocationsQuery } from '@services/pricelineApi';
import { useGlobalContext } from '@context/GlobalContext';
import { CarLocationOption } from '@utils/types';
import { useDebounce } from '@utils/hooks/useDebounce';

const CarSearch = () => {
  const { carStartDate, carEndDate, carSetStartDate, carSetEndDate, carFromLocation, setCarFromLocation, setCarFromID, carToLocation, setCarToLocation, setCarToID } = useGlobalContext();
  const [isFromLocationFocused, setIsFromLocationFocused] = useState(false);
  const [isToLocationFocused, setIsToLocationFocused] = useState(false);
  const debouncedFromLocation = useDebounce(carFromLocation, 500);
  const debouncedToLocation = useDebounce(carToLocation, 500);

  const { data: carFromLocationData } = useGetCarLocationsQuery(debouncedFromLocation, { skip: !debouncedFromLocation || debouncedFromLocation.length < 3 });
  const { data: carToLocationData } = useGetCarLocationsQuery(debouncedToLocation, { skip: !debouncedToLocation || debouncedToLocation.length < 3 });

  useEffect(() => {
    const clickOutsideFrom = (e:React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.closest('#fromMenu') || e.target.closest('#fromLocation')) return;
      setIsFromLocationFocused(false);
    };
    const clickOutsideTo = (e:React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.closest('#toMenu') || e.target.closest('#toLocation')) return;
      setIsToLocationFocused(false);
    };

    if (isFromLocationFocused) {
      window.addEventListener('click', clickOutsideFrom);
    }
    if (isToLocationFocused) {
      window.addEventListener('click', clickOutsideTo);
    }

    return () => {
      window.removeEventListener('click', clickOutsideFrom);
      window.removeEventListener('click', clickOutsideTo);
    };
  }, [isFromLocationFocused, isToLocationFocused]);

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'from') {
      setCarFromLocation(e.target.value);
    } else {
      setCarToLocation(e.target.value);
    }
  };

  const handleSetLocation = (type:string, location:CarLocationOption) => {
    if (type === 'from') {
      setCarFromLocation(`${location.cityName} ${location.countryName}`);
      setCarFromID(location.cityID);
    } else {
      setCarToLocation(`${location.cityName} ${location.countryName}`);
      setCarToID(location.cityID);
    }
  };

  return (
    <div className='flex items-center gap-2 mt-8 w-full'>
      <div className={`${isFromLocationFocused ? 'bg-[#E8EFFF] dark:bg-[#404858]' : 'bg-[#E7E8EA] dark:bg-cBlack-3'} 
      pl-4 pr-12 py-10 rounded-md h-[70px] w-[260px] flex flex-col justify-center relative`}
      >
        <label htmlFor='fromLocation' className='block text-[#3B3E44] dark:text-white'>Pick up from</label>
        <input
          className={`${isFromLocationFocused ? 'bg-[#E8EFFF] dark:bg-[#404858]' : 'bg-[#E7E8EA] dark:bg-cBlack-3'} placeholder:text-[#B1B5C3] focus:outline-none`}
          type='text'
          autoComplete='off'
          id='fromLocation'
          name='from'
          placeholder='Where are you from?'
          value={carFromLocation}
          onFocus={() => setIsFromLocationFocused(true)}
          onInput={() => setIsFromLocationFocused(true)}
          onChange={handleLocationChange}
        />
        <div className='absolute z-10 -right-5 bottom-6 rounded-full p-1 bg-white dark:bg-[#42464B]'>
          <CgArrowsExchange className='h-6 w-6 text-cBlack-5' />
        </div>
        {(isFromLocationFocused && carFromLocationData && carFromLocation.length >= 3) && (
        <div id='fromMenu' className='absolute z-30 top-[90px] left-0 flex flex-col max-h-[321px] w-[380px] p-[15px_17px] gap-[10px] rounded-[20px] shadow-home-bookings-card bg-white dark:bg-cBlack-2 overflow-auto'>
          {carFromLocationData?.map((location: CarLocationOption, i : number) => (
            <div
              key={i}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleSetLocation('from', location);
                setIsFromLocationFocused(false);
              }}
              className='flex gap-[5px] h-[47px] w-full cursor-pointer group'
            >
              <div className='flex items-center'>
                <TiLocationOutline className='h-7 w-7 text-cBlack-5 group-hover:text-primaryBlue' />
              </div>
              <div className=' flex flex-col gap-[2px] max-w-[300px] font-DMSans'>
                <p className='font-medium text-[#777E91] dark:text-cBlack-6 text-[16px] group-hover:text-cBlack-1'>{location.cityName}</p>
                <p className='flex font-normal text-[#B1B5C4] dark:text-cBlack-4 text-[14px] truncate group-hover:text-cBlack-1'>{location.itemName}, {location.countryName}</p>
              </div>
            </div>
          ))}
        </div>
        )}
      </div>
      <div className={`${isToLocationFocused ? 'bg-[#E8EFFF] dark:bg-[#404858]' : 'bg-[#E7E8EA] dark:bg-cBlack-3'} pl-4 pr-12 py-10 rounded-md h-[70px] w-[200px] flex flex-col justify-center relative`}>
        <label htmlFor='toLocation' className='block text-[#3B3E44] dark:text-white'>Dropoff to</label>
        <input
          type='text'
          autoComplete='off'
          className={`${isToLocationFocused ? 'bg-[#E8EFFF] dark:bg-[#404858]' : 'bg-[#E7E8EA] dark:bg-cBlack-3'} placeholder:text-[#B1B5C3] focus:outline-none`}
          id='toLocation'
          placeholder='Going to'
          value={carToLocation}
          onFocus={() => setIsToLocationFocused(true)}
          onInput={() => setIsToLocationFocused(true)}
          onChange={handleLocationChange}
        />
        <div className='absolute z-10 -right-5 bottom-6 rounded-full p-1 bg-white dark:bg-[#42464B]'>
          <CgArrowsExchange className='h-6 w-6 text-cBlack-5' />
        </div>
        {(isToLocationFocused && carToLocationData && carToLocation.length >= 3) && (
        <div id='toMenu' className='absolute z-30 top-[90px] left-0 flex flex-col max-h-[321px] w-[380px] p-[15px_17px] gap-[10px] rounded-[20px] shadow-home-bookings-card bg-white dark:bg-cBlack-2 overflow-auto'>
          {carToLocationData?.map((location: CarLocationOption, i: number) => (
            <div
              key={i}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleSetLocation('to', location);
                setIsToLocationFocused(false);
              }}
              className='flex gap-[5px] h-[47px] w-full cursor-pointer group'
            >
              <div className='flex items-center'>
                <TiLocationOutline className='h-7 w-7 text-cBlack-5 group-hover:text-primaryBlue' />
              </div>
              <div className=' flex flex-col gap-[2px] max-w-[300px] font-DMSans'>
                <p className='font-medium text-[#777E91] dark:text-cBlack-6 text-[16px] group-hover:text-cBlack-1'>{location.cityName}</p>
                <p className='flex font-normal text-[#B1B5C4] dark:text-cBlack-4 text-[14px] truncate group-hover:text-cBlack-1'>{location.itemName}, {location.countryName}</p>
              </div>
            </div>
          ))}
        </div>
        )}
      </div>
      {/* Start Date Input Box */}
      <CalendarInput
        id='check-in'
        label='Check in'
        divider
        startDate={carStartDate}
        setStartDate={carSetStartDate}
        endDate={carEndDate}
        setEndDate={carSetEndDate}
        width='w-[182px]'
        type='Cars'
      />
      {/* End Date Input Box */}
      <CalendarInput
        id='check-out'
        label='Check out'
        divider={false}
        startDate={carStartDate}
        setStartDate={carSetStartDate}
        endDate={carEndDate}
        setEndDate={carSetEndDate}
        width='w-[182px]'
        type='Cars'
      />
    </div>
  );
};

export default CarSearch;
