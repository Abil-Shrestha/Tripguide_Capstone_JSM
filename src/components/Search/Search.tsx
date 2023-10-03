/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { MdHotel, MdFlightTakeoff, MdDirectionsCarFilled, MdKeyboardArrowDown } from 'react-icons/md';

import { HotelSearch, CarSearch, FlightSearch } from '@components';
import { useGlobalContext } from '@context/GlobalContext';

const classNames = {
  homeSearch: 'absolute bottom-0 flex justify-center p-[29px_60px] gap-16 text-[18px] bg-white dark:bg-cBlack-2 dark:text-white rounded-[20px] shadow-home-bookings-card',
  otherSearch: 'min-w-[1100px] w-[60%] mx-auto mt-12 flex justify-center p-[29px_60px] gap-16 text-[18px] bg-white dark:bg-cBlack-2 dark:text-white rounded-[20px] shadow-home-bookings-card',
  tab: 'flex items-start gap-2 cursor-pointer',
  aTab: 'border-b-4 border-b-primaryBlue text-cBlack-3 dark:text-white',
};

const Search = () => {
  const router = useRouter();
  const { locationId, checkIn, checkOut } = useSelector((state) => state.global);
  const { flightStartDate, flightEndDate, flightFromID, flightToID, flightOneWay,
    carStartDate, carEndDate, carFromID, carToID, activeTab, flightPassengers, setFlightOneWay, setActiveTab } = useGlobalContext();

  const [isPassengerOpen, setIsPassengerOpen] = useState(false);
  const [isValidSearch, setIsValidSearch] = useState(false);

  const handleChangeTab = (tab: string | string[]) => {
    setActiveTab(tab);
    router.push({ pathname: router.pathname, query: { source: tab } });
  };

  const handleSearch = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    switch (activeTab) {
      case 'hotel':
        router.push({ pathname: '/listing/hotel', query: { id: locationId, sortOrder: 'HDR', checkIn: checkIn.toISOString().split('T')[0], checkOut: checkOut.toISOString().split('T')[0], page: 1 } });
        break;
      case 'flight':
        // eslint-disable-next-line no-case-declarations
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
        break;
      case 'car':
        router.push({ pathname: '/listing/car',
          query: {
            locationPickup: carFromID,
            locationDropoff: carToID,
            pickupDate: `${carStartDate?.toISOString().split('T')[0]} ${carStartDate?.toISOString().split('T')[1].slice(0, 8)}`,
            returnDate: `${carEndDate?.toISOString().split('T')[0]} ${carEndDate?.toISOString().split('T')[1].slice(0, 8)}`,
          } });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    switch (activeTab) {
      case 'hotel':
        if (locationId !== '' && checkIn !== null && checkOut !== null) {
          setIsValidSearch(true);
        } else {
          setIsValidSearch(false);
        }
        break;
      case 'flight':
        if (flightFromID && flightToID) {
          if (flightOneWay && flightStartDate) {
            setIsValidSearch(true);
          } else if (!flightOneWay && flightStartDate && flightEndDate) {
            setIsValidSearch(true);
          } else {
            setIsValidSearch(false);
          }
        } else {
          setIsValidSearch(false);
        }
        break;
      case 'car':
        if (carFromID && carToID && carStartDate && carEndDate) {
          setIsValidSearch(true);
        } else {
          setIsValidSearch(false);
        }
        break;
      default:
        break;
    }
  }, [carFromID, carToID, carStartDate, carEndDate, activeTab, flightEndDate, flightStartDate, flightFromID, flightToID, flightOneWay, locationId, checkIn, checkOut]);

  return (
    <div className={router.pathname === '/' ? classNames.homeSearch : classNames.otherSearch}>
      <div className='flex flex-col'>
        <div className='relative flex justify-between h-12 w-full'>
          <div className='absolute bottom-0 h-1 w-full bg-gray/30' />
          <div className='relative flex justify-between gap-6 text-[16px] text-cBlack-4 w-full border-b dark:border-[#3B3E44]'>
            <div className='flex gap-6'>
              <div
                onClick={() => handleChangeTab('hotel')}
                className={`${classNames.tab} ${activeTab === 'hotel' && classNames.aTab}`}
              >
                <MdHotel className='h-5 w-5' /> Hotel
              </div>
              <div
                onClick={() => handleChangeTab('flight')}
                className={`${classNames.tab} ${activeTab === 'flight' && classNames.aTab}`}
              >
                <MdFlightTakeoff className='h-5 w-5' /> Flight
              </div>
              <div
                onClick={() => handleChangeTab('car')}
                className={`${classNames.tab} ${activeTab === 'car' && classNames.aTab}`}
              >
                <MdDirectionsCarFilled className='h-5 w-5' /> Car Rental
              </div>
            </div>

            <div className='flex gap-4'>
              {activeTab !== 'car' && (
              <button type='button' className='flex items-start gap-1 text-[#3B3E44] dark:text-[#F4F5F6]' onClick={() => setFlightOneWay((prev) => !prev)}>
                {flightOneWay ? 'One Way' : 'Round Trip'}<MdKeyboardArrowDown className='h-5 w-5' />
              </button>
              )}

              {(activeTab === 'hotel' || activeTab === 'flight') && (
                <div
                  onClick={() => setIsPassengerOpen((prev) => !prev)}
                  className='flex items-start gap-1 cursor-pointer dark:text-[#F4F5F6]'
                >
                  {flightPassengers} Passenger <MdKeyboardArrowDown className='h-5 w-5 mt-1' />
                </div>
              )}
            </div>
          </div>

        </div>
        {activeTab === 'hotel' && <HotelSearch />}
        {activeTab === 'car' && <CarSearch />}
        {activeTab === 'flight' && <FlightSearch />}
      </div>
      <div className='self-end'>
        <button
          onClick={handleSearch}
          disabled={!isValidSearch}
          type='button'
          className='cursor-pointer h-[80px] w-[150px] bg-primaryBlue text-white rounded-[10px] disabled:bg-gray-200 disabled:dark:bg-cBlack-4'
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
