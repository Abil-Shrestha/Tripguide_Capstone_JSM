/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { Fragment, ChangeEvent, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { FaPlaneArrival } from 'react-icons/fa';
import { Listbox, Transition } from '@headlessui/react';
import { BsCheck, BsChevronBarDown } from 'react-icons/bs';

import { Checkbox, FilterTypeContainer, FlightListingCard, RangeSlider, Loading, Pagination } from '@components';
import { useGlobalContext } from '@context/GlobalContext';
import { useGetFlightsQuery } from '@services/pricelineApi';

import { shapeFlightData } from '@utils/functions';

const sortOptions = [
  { id: 1, name: 'Cheapest' },
  { id: 2, name: 'Most Expensive' },
];

const FlightListings = () => {
  const router = useRouter();
  const { flights, setFlights } = useGlobalContext();
  const { itineraryType, classType, locationArrival, departureDate, locationDeparture, sortOrder, numberOfStops, maxPrice, passengers, returnDepartureDate } = router.query;
  const [checked, setChecked] = useState([]);
  const [priceRange, setPriceRange] = useState(5000);
  const [filteredFlights, setFilteredFlights] = useState([]);
  const [airlineOptions, setAirlineOptions] = useState([]);
  const [isSeeMoreAirlineOptions, setIsSeeMoreAirlineOptions] = useState(false);
  const [selectedSortOption, setSelectedSortOption] = useState('Cheapest');
  const [pagination, setPagination] = useState({ start: 0, end: 6 });

  const { data: flightData, isFetching, error } = useGetFlightsQuery({
    itineraryType,
    classType,
    locationArrival,
    departureDate,
    locationDeparture,
    sortOrder,
    numberOfStops: numberOfStops || 0,
    maxPrice: maxPrice || 10000,
    passengers: passengers || 1,
    returnDepartureDate: returnDepartureDate || '',
  });

  useEffect(() => {
    if (flightData) {
      const f = shapeFlightData(flightData);
      setFlights(f);
    }
  }, [flightData]);

  useEffect(() => {
    console.log('flights', flights);
    if (flights !== null && flights !== undefined) {
      setFilteredFlights(flights?.airlines?.slice(pagination.start, pagination.end));

      setAirlineOptions({
        label: 'Choose Airline',
        // eslint-disable-next-line no-unsafe-optional-chaining
        checkboxes: [...flights?.airlines?.map((airline) => ({ label: airline?.name }))],
      });
    }
  }, [flightData, flights, pagination]);

  // filter by type & pricerange
  useEffect(() => {
    if (checked.length > 0) {
      setFilteredFlights(flights?.airlines?.filter((airline) => (
        checked.indexOf(airline?.name) !== -1
            && airline?.price < priceRange
      ))?.slice(pagination.start, pagination.end));
    } else {
      setFilteredFlights(flights?.airlines?.filter((airline) => airline?.price < priceRange)?.slice(pagination.start, pagination.end));
    }
  }, [checked, priceRange]);

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

  const handleSortChange = (val) => {
    if (val === 'Cheapest') {
      setFilteredFlights(flights?.airlines?.sort((a, b) => a?.price - b?.price)?.slice(pagination.start, pagination.end));
    } else {
      setFilteredFlights(flights?.airlines?.sort((a, b) => b?.price - a?.price)?.slice(pagination.start, pagination.end));
    }
    setSelectedSortOption(val);
  };

  const handlePagination = (type) => {
    // if we're paginating to a specfic page number
    if (typeof type !== 'string') {
      setPagination({ start: (type - 1) * 6, end: type * 6 });
      // we have a page number
      return;
    }
    switch (type) {
      case 'next':
        if (flights?.airlines?.length < pagination.end + 5) return;
        setPagination({ start: pagination.start + 6, end: pagination.end + 6 });
        break;
      case 'prev':
        if (pagination.start === 0) return;
        setPagination({ start: pagination.start - 6, end: pagination.end - 6 });
        break;
      default:
        break;
    }
  };

  if (isFetching) {
    return (
      <Loading label='Looking for available flights...' />
    );
  }

  if (error) {
    return (
      <div className='h-screen flex items-center justify-center'>
        <p className='text-2xl font-semibold text-red-500'>Something went wrong</p>
      </div>
    );
  }

  return (
    <>
      <div className='flex flex-col lg:flex-row gap-[37px] justify-between max-w-[1170px] min-h-[600px] mx-auto mt-16'>
        {/* Filters */}
        <div className='flex flex-col gap-[24px] p-[24px] min-w-[220px] lg:w-[35%] w-full'>
          {/* Sort */}
          <Listbox value={selectedSortOption} onChange={handleSortChange}>
            <div className='relative mt-1'>
              <Listbox.Label className='text-[18px] text-cBlack-1 dark:text-white font-DMSans font-medium'>Sort By</Listbox.Label>
              <Listbox.Button className='mt-3 relative w-full cursor-pointer rounded-lg bg-white dark:bg-cBlack-3 py-4 pl-3 text-left shadow-md focus:outline-none text-sm'>
                <span className='block truncate'>{selectedSortOption}</span>
                <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
                  <BsChevronBarDown className='h-5 w-5 text-gray-400' aria-hidden='true' />
                </span>
              </Listbox.Button>
              <Transition as={Fragment} leave='transition ease-in duration-100' leaveFrom='opacity-100' leaveTo='opacity-0'>
                <Listbox.Options className='z-10 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-cBlack-3 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                  {sortOptions.map((option, i) => (
                    <Listbox.Option
                      key={i}
                      className={({ active }) => `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-blue-100 dark:bg-blue-300 dark:text-blue-600 text-blue-900' : 'text-gray-900 dark:text-white'
                      }`}
                      value={option.name}
                    >
                      {({ selected }) => (
                        <>
                          <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>{option.name}</span>
                          {selected ? (
                            <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600'>
                              <BsCheck className='h-5 w-5' aria-hidden='true' />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
          {/* By Airline */}
          {airlineOptions?.checkboxes && (
            <div className='mb-4 hidden lg:block'>
              <FilterTypeContainer label={airlineOptions?.label}>
                {airlineOptions?.checkboxes?.slice(0, isSeeMoreAirlineOptions ? airlineOptions?.checkboxes?.length : 6)?.map((box, i) => (
                  <Checkbox label={box} checked={checked} onChange={handleCheck} key={i} />
                ))}
                {
              airlineOptions?.checkboxes?.length > 6 && (
                <button onClick={() => setIsSeeMoreAirlineOptions((prev) => !prev)} type='button' className='w-max text-[16px] text-primaryBlue dark:text-[#145CE6] font-medium font-DMSans'>
                  {isSeeMoreAirlineOptions ? 'Show Less' : 'See More'}
                </button>
              )
            }
              </FilterTypeContainer>
            </div>
          )}
          {/* Max Price */}
          <FilterTypeContainer label='Max Price'>
            <RangeSlider price={priceRange} min={50} max={10000} onChange={handlePriceChange} />
          </FilterTypeContainer>
        </div>

        {/* Flight Listings */}
        {filteredFlights && (
          <div className='flex flex-col gap-[30px] w-full'>
            {filteredFlights?.length ? filteredFlights?.map((detail, idx) => (
              <FlightListingCard id={idx} detail={detail} key={idx} duration={flights?.minDuration} />
            )) : (
              <div className='flex flex-col items-center justify-start w-full h-full'>
                <FaPlaneArrival className='h-24 w-24' />
                <p className='text-2xl font-semibold text-cBlack-5 dark:text-cBlack-4'>No flights found</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Pagination */}
      <div className='w-full max-w-[1170px] mx-auto mt-6'>
        <Pagination
          length={flights?.airlines?.length}
          numPages={Math.ceil(flights?.airlines?.length / 6)}
          start={pagination.start}
          end={pagination.end}
          handleClick={handlePagination}
        />
      </div>
    </>

  );
};

export default FlightListings;
