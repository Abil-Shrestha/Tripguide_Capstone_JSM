/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { SearchInput, LocationCard, CalendarInput } from '@components';
import { useGetHotelLocationsQuery } from '@services/pricelineApi';

const HotelSearch = () => {
  const { location, checkIn, checkOut } = useSelector((state) => state.global);
  const [isLocationFocused, setIsLocationFocused] = useState(false);

  const { data } = useGetHotelLocationsQuery(location, { skip: !location || location.length < 3 });

  const classNames = {
    input: 'mt-2 text-[16px] focus:outline-none bg-transparent w-full truncate',
  };

  useEffect(() => {
    console.log('Hello There');
  }, [data]);

  return (
    <div className='flex gap-2 mt-8'>
      {/* Location Input Box */}
      <div className='relative h-[80px] w-[332px] p-[11px_24px] bg-[#E7E8EA] dark:bg-cBlack-3 rounded-lg'>
        <SearchInput id='location' label='Location' placeholder='Where are you from' style={`${classNames.input}`} handleFocus={setIsLocationFocused} divider />
        {/* Location Input Card */}
        {(isLocationFocused && location.length >= 3) && (
        <div className='absolute z-10 top-[90px] left-0 flex flex-col h-[321px] w-[380px] p-[15px_17px] gap-[10px] rounded-[20px] shadow-home-bookings-card bg-white dark:bg-cBlack-2 overflow-auto'>
          {/* .map through data if exists, and render Location card */}
          {data?.map((loc, i) => (
            <LocationCard locations={loc} handleFocus={setIsLocationFocused} key={i} />
          ))}
        </div>
        )}
      </div>
      <CalendarInput
        id='check-in'
        label='Check in'
        divider
        startDate={checkIn}
        setStartDate={null}
        endDate={checkOut}
        setEndDate={null}
        width='w-[250px]'
        type='Hotels'
      />
      <CalendarInput
        id='check-in'
        label='Check out'
        divider
        startDate={checkIn}
        setStartDate={null}
        endDate={checkOut}
        setEndDate={null}
        width='w-[250px]'
        type='Hotels'
      />
    </div>
  );
};

export default HotelSearch;
