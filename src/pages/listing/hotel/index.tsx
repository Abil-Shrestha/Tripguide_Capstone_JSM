/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

import { filters } from '@utils/tempdata/HotelListings';
import { Checkbox, Crumbs, FilterTypeContainer, HotelListingCard, RangeSlider, Search, SearchListing, SeeMoreButton, Loading } from '@components';
import { useGetHotelsByLocationQuery } from '@services/pricelineApi';

const Hotel = () => {
  const router = useRouter();
  const { locationId } = useSelector((state) => state.global);
  const { id, checkIn, checkOut, sortOrder, page } = router.query;
  const { data, isFetching } = useGetHotelsByLocationQuery({ id, checkIn, checkOut, sortOrder, page });
  const [checked, setChecked] = useState([]);
  const [priceRange, setPriceRange] = useState(50);
  const pageNum = parseInt(page, 10);

  const handleCheck = (event: ChangeEvent<HTMLInputElement>) => {
    let updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  const handlePriceChange = (event) => {
    setPriceRange(event.target.value);
  };

  const handlePageNumber = () => {
    router.push({ pathname: '/listing/hotel', query: { id: locationId, sortOrder: 'HDR', checkIn, checkOut, page: pageNum + 1 } });
  };

  if (isFetching) {
    return (
      <Loading label='Looking for available hotels...' />
    );
  }

  return (
    <div className='flex flex-col gap-[70px] items-center mx-[70px]'>
      {/* Crumbs */}
      <div className='flex items-center mt-[50px] -mb-[60px] w-[1300px] text-[14px] font-normal font-DMSans'>
        <Crumbs label='Hotel' step={1} />
      </div>
      {/* Search */}
      <Search />
      {data?.hotels === null ? (
        <div className='w-1/2 h-1/2 flex items-center justify-center text-[24px] text-cBlack-2 dark:text-cBlack-8 font-DMSans font-medium'>
          No available hotels
        </div>
      ) : (
        <>
          <div className='flex gap-[40px]'>
            {/* Filters */}
            <div className='flex flex-col gap-[20px] w-[290px]'>
              <SearchListing label='Search location or property' placeholder='Search location or property' />
              {filters.map((filter, idx) => (
                <div key={idx}>
                  {(filter.checkboxes === undefined || filter.label === 'Price Range') ? (
                    <FilterTypeContainer label={filter.label}>
                      <RangeSlider price={priceRange} min={50} max={150} onChange={handlePriceChange} />
                    </FilterTypeContainer>
                  ) : (
                    <FilterTypeContainer label={filter.label}>
                      {filter.checkboxes.map((box) => (
                        <Checkbox label={box} checked={checked} onChange={handleCheck} />
                      ))}
                      <SeeMoreButton />
                    </FilterTypeContainer>
                  )}
                </div>
              ))}
            </div>
            {/* Cards */}
            <div className='flex flex-col gap-[50px] w-[970px]'>
              {data && data?.hotels.slice(0, 10).map((hotel) => (
                <HotelListingCard hotel={hotel} checkIn={checkIn} checkOut={checkOut} />
              ))}
            </div>
          </div>
          <div className='flex justify-center items-center mt-[10px]'>
            <button
              type='button'
              onClick={handlePageNumber}
              className='h-[46px] w-[176px] rounded-[47px] text-[16px] text-center font-medium font-DMSans text-cBlack-1 dark:text-cBlack-6 border-[1px] border-cBlack-5 dark:border-cBlack-3'
            >
              View More
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Hotel;
