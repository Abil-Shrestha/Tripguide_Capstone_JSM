/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { MdKeyboardArrowRight } from 'react-icons/md';

import { useGlobalContext } from '@context/GlobalContext';
import { ContactDetails, FlightDetail, PassengerDetails, PassengerDetailsAdult, PriceDetails, Search, TrendingFlights } from '@components';

const FlightDetails = () => {
  const { flights, setActiveFlight, flightStartDate, flightEndDate, flightFromID, flightToID, flightOneWay, flightPassengers } = useGlobalContext();

  const { query: { id }, push } = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
    const flight = flights?.airlines?.find((airline) => airline.code === id);
    setActiveFlight(flight);
  }, []);

  const handlePreviousRoute = () => {
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
      push({ pathname: '/listing/flight', query: queryObj });
    } else {
      queryObj = {
        ...queryObj,
        locationDeparture: flightFromID,
        locationArrival: flightToID,
        departureDate: `${flightStartDate?.toISOString().split('T')[0]}`,
        returnDepartureDate: `${flightEndDate?.toISOString().split('T')[0]}`,
      };
      push({ pathname: '/listing/flight', query: queryObj });
    }
  };

  return (
    <div className='flex flex-col items-center gap-[40px] py-[40px] max-w-[1440px] xl:mx-auto mx-6 md:mx-12'>
      <div className='flex flex-col w-full'>
        {/* Crumbs */}
        <div className='flex items-center mt-[50px] text-[14px] font-normal font-DMSans'>
          <Link href='/?source=flight' className='text-cBlack-3 dark:text-cBlack-7'>Home</Link>
          <MdKeyboardArrowRight className='h-5 w-5 text-cBlack-3 dark:text-cBlack-7' />
          <button onClick={handlePreviousRoute} type='button' className='text-cBlack-3 dark:text-cBlack-7'>
            Flights
          </button>
          <MdKeyboardArrowRight className='h-5 w-5 text-cBlack-3 dark:text-cBlack-7' />
          <p className='text-cBlack-5 dark:text-cBlack-4'>Flight Details</p>
        </div>
        <Search />
      </div>
      <div className='flex flex-col xl:flex-row h-full gap-[30px] w-full max-w-[1303px] mx-auto mt-[30px]'>
        <FlightDetail />
        <PriceDetails />
      </div>
      <div className='flex flex-col gap-[40px] w-[1303px]'>
        <PassengerDetails />
        <PassengerDetailsAdult />
        <ContactDetails />
      </div>
      <div className='flex flex-col gap-[40px] w-[1170px]'>
        <TrendingFlights />
      </div>
    </div>
  );
};

export default FlightDetails;
