/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { useState, useEffect } from 'react';
import { CgArrowsExchange } from 'react-icons/cg';
import { TiLocationOutline } from 'react-icons/ti';

import { useGetFlightLocationsQuery } from '@services/pricelineApi';
import { CalendarInput } from '@components';
import { useGlobalContext } from '@context/GlobalContext';
import { useDebounce } from '@utils/hooks/useDebounce';
import { FlightLocationOption } from '@utils/types';
import 'react-datepicker/dist/react-datepicker.css';

const FlightSearch = () => {
  const { flightStartDate, flightEndDate, flightFromLocation, flightToLocation, flightOneWay,
    flightSetStartDate, flightSetEndDate, setFlightFromLocation, setFlightToLocation, setFlightFromID, setFlightToID } = useGlobalContext();

  const [isFromLocationFocused, setIsFromLocationFocused] = useState(false);
  const [isToLocationFocused, setIsToLocationFocused] = useState(false);
  const debouncedFromLocation = useDebounce(flightFromLocation, 500);
  const debouncedToLocation = useDebounce(flightToLocation, 500);

  const { data: flightFromLocationData } = useGetFlightLocationsQuery(debouncedFromLocation, { skip: !debouncedFromLocation || debouncedFromLocation.length < 3 });
  const { data: flightToLocationData } = useGetFlightLocationsQuery(debouncedToLocation, { skip: !debouncedToLocation || debouncedToLocation.length < 3 });

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
      setFlightFromLocation(e.target.value);
    } else {
      setFlightToLocation(e.target.value);
    }
  };

  // we want to show the location name, but to make the API calls uniform I will always use the location ID
  const handleSetLocation = (type: string, location: FlightLocationOption) => {
    if (type === 'from') {
      setFlightFromLocation(`${location.cityName} ${location.country}`);
      setFlightFromID(location.id);
    } else {
      setFlightToLocation(`${location.cityName} ${location.country}`);
      setFlightToID(location.id);
    }
  };

  return (
    <div className='flex items-center gap-2 mt-8 w-full'>
      <div className={`${isFromLocationFocused ? 'bg-[#E8EFFF] dark:bg-[#404858]' : 'bg-[#E7E8EA] dark:bg-cBlack-3'}
      pl-4 pr-12 py-10 rounded-md h-[70px] w-[260px] flex flex-col justify-center relative`}
      >
        <label htmlFor='fromLocation' className='block text-[#3B3E44] dark:text-white'>Leaving From</label>
        <input
          className={`${isFromLocationFocused ? 'bg-[#E8EFFF] dark:bg-[#404858]' : 'bg-[#E7E8EA] dark:bg-cBlack-3'} placeholder:text-[#B1B5C3] focus:outline-none`}
          type='text'
          name='from'
          id='fromLocation'
          placeholder='Where are you from?'
          value={flightFromLocation}
          onFocus={() => setIsFromLocationFocused(true)}
          onInput={() => setIsFromLocationFocused(true)}
          onChange={handleLocationChange}
          autoComplete='off'
        />
        <div className='absolute z-10 -right-5 bottom-6 rounded-full p-1 bg-white dark:bg-[#42464B]'>
          <CgArrowsExchange className='h-6 w-6 text-cBlack-5' />
        </div>
        {(isFromLocationFocused && flightFromLocationData && flightFromLocation.length >= 3) && (
        <div id='fromMenu' className='absolute z-30 top-[90px] left-0 flex flex-col max-h-[321px] w-[380px] p-[15px_17px] gap-[10px] rounded-[20px] shadow-home-bookings-card bg-white dark:bg-cBlack-2 overflow-auto'>
          {flightFromLocationData.map((location: FlightLocationOption, i: number) => (
            <div
              key={i}
              className='p-4 flex gap-2 z-50 transition-all duration-200 ease-in-out hover:bg-gray-100 dark:hover:bg-cBlack-3 cursor-pointer relative'
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleSetLocation('from', location);
                setIsFromLocationFocused(false);
              }}
            >
              <TiLocationOutline />
              <p className='w-[90%] truncate text-sm relative'>
                {location.itemName}
              </p>
            </div>
          ))}
        </div>
        )}

      </div>
      <div className={`${isToLocationFocused ? 'bg-[#E8EFFF] dark:bg-[#404858]' : 'bg-[#E7E8EA] dark:bg-cBlack-3'} pl-4 pr-12 py-10 rounded-md h-[70px] w-[200px] flex flex-col justify-center relative`}>
        <label htmlFor='toLocation' className='block text-[#3B3E44] dark:text-white'>Going To</label>
        <input
          type='text'
          className={`${isToLocationFocused ? 'bg-[#E8EFFF] dark:bg-[#404858]' : 'bg-[#E7E8EA] dark:bg-cBlack-3'} placeholder:text-[#B1B5C3] focus:outline-none`}
          id='toLocation'
          placeholder='Going to'
          value={flightToLocation}
          onFocus={() => setIsToLocationFocused(true)}
          onInput={() => setIsToLocationFocused(true)}
          onChange={handleLocationChange}
          autoComplete='off'
        />
        <div className='absolute z-10 -right-5 bottom-6 rounded-full p-1 bg-white dark:bg-[#42464B]'>
          <CgArrowsExchange className='h-6 w-6 text-cBlack-5' />
        </div>
        {(isToLocationFocused && flightToLocationData && flightToLocation.length >= 3) && (
        <div id='toMenu' className='absolute z-30 top-[90px] left-0 flex flex-col max-h-[321px] w-[380px] p-[15px_17px] gap-[10px] rounded-[20px] shadow-home-bookings-card bg-white dark:bg-cBlack-2 overflow-auto'>
          {flightToLocationData.map((location: FlightLocationOption, i: number) => (
            <div
              key={i}
              className='p-4 flex gap-2 z-50 transition-all duration-200 ease-in-out hover:bg-gray-100 dark:hover:bg-cBlack-3 cursor-pointer relative'
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleSetLocation('to', location);
                setIsFromLocationFocused(false);
              }}
            >
              <TiLocationOutline />
              <p className='w-[90%] truncate text-sm relative'>
                {location.itemName}
              </p>
            </div>
          ))}
        </div>
        )}
      </div>
      {/* Start Date Input Box */}
      <CalendarInput
        id='check-in'
        label='Check in'
        divider={!flightOneWay}
        startDate={flightStartDate}
        setStartDate={flightSetStartDate}
        endDate={flightEndDate}
        setEndDate={flightSetEndDate}
        width={`${flightOneWay ? 'w-[372px]' : 'w-[182px]'}`}
        type='Flights'
      />
      {!flightOneWay ? (
        <CalendarInput
          id='check-in'
          label='Check out'
          divider={false}
          startDate={flightStartDate}
          setStartDate={flightSetStartDate}
          endDate={flightEndDate}
          setEndDate={flightSetEndDate}
          width='w-[182px]'
          type='Flights'
        />
      ) : null}
    </div>
  );
};

export default FlightSearch;
