import { useRouter } from 'next/router';

import { useGlobalContext } from '@context/GlobalContext';
import { featuredDestinations } from '@utils/tempdata/FlightDestinationData';

const FeatureDestinationsMobile = () => {
  const { setFlightFromLocation, setFlightFromID, setFlightToLocation, setFlightToID, flightSetStartDate, setFlightOneWay } = useGlobalContext();
  const router = useRouter();
  const date = new Date();
  const tomorrow = new Date(date);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const handleSelectDestination = (dest) => {
    const queryObj = {
      passengers: 1,
      itineraryType: 'ONE_WAY',
      sortOrder: 'PRICE',
      classType: 'ECO',
      numberOfStops: 0,
      maxPrice: 20000,
      locationDeparture: dest.fromID,
      locationArrival: dest.toID,
      departureDate: `${tomorrow?.toISOString().split('T')[0]}`,
    };

    setFlightFromLocation(dest.fromLocation);
    setFlightFromID(dest.fromID);
    setFlightToLocation(dest.toLocation);
    setFlightToID(dest.toID);
    flightSetStartDate(new Date(tomorrow));
    setFlightOneWay(true);
    router.push({ pathname: '/listing/flight', query: queryObj });
  };
  return (
    <div className='flex flex-col lg:hidden gap-[30px] w-full relative'>
      {featuredDestinations.map((dest, idx) => (
        <div onClick={() => handleSelectDestination(dest)} key={idx} className='h-[408px] w-full rounded-[20px] relative cursor-pointer'>
          <img src={dest.image} alt='' className='h-full w-full z-1 object-cover absolute rounded-[20px]' />
          <div className='p-4 relative z-10 flex flex-col justify-between items-start h-full'>
            <div className='h-[28px] w-[66px] flex justify-center items-center bg-white rounded-[20px]'>
              <p className='font-bold text-primaryRed'>{dest.rating}</p>
            </div>
            <div className='flex flex-col font-DMSans'>
              <p className='font-bold text-white text-[24px]'>{dest.name}</p>
              <div className='flex items-center gap-2'>
                <div className='h-8 w-8 rounded-full'>
                  <img
                    src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80'
                    alt='user'
                    className='rounded-full'
                  />
                </div>
                <p className='flex items-center justify-between font-normal text-white text-[14px]'>{dest.activities} Activities</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureDestinationsMobile;
