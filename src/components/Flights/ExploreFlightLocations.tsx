import { useRouter } from 'next/router';

import { HomeDestinationCard } from '@components';
import { useGlobalContext } from '@context/GlobalContext';
import { destinations } from '@utils/tempdata/FlightDestinationData';

const ExploreFlightLocations = () => {
  const { setFlightFromLocation, setFlightFromID, setFlightToLocation, setFlightToID, flightSetStartDate, setFlightOneWay } = useGlobalContext();
  const router = useRouter();
  const date = new Date();
  const tomorrow = new Date(date);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const handleDestinationClick = (dest) => {
    const fromLocation = dest.name.split('-')[0].trim();
    const toLocation = dest.name.split('-')[1].trim();

    const queryObj = {
      passengers: 1,
      itineraryType: 'ONE_WAY',
      sortOrder: 'PRICE',
      classType: 'ECO',
      numberOfStops: 0,
      maxPrice: 20000,
      locationDeparture: dest.from,
      locationArrival: dest.to,
      departureDate: `${tomorrow?.toISOString().split('T')[0]}`,
    };

    setFlightFromLocation(fromLocation);
    setFlightFromID(dest.from);
    setFlightToLocation(toLocation);
    setFlightToID(dest.to);
    flightSetStartDate(new Date(tomorrow));
    setFlightOneWay(true);
    router.push({ pathname: '/listing/flight', query: queryObj });
  };
  return (
    <section className='p-6 w-full xl:w-[1170px] relative flex flex-col gap-[40px] justify-center items-center dark:text-white'>
      <div className='flex flex-col p-6 gap-4 w-full font-DMSans'>
        <p className='w-full text-center text-[30px] md:text-[48px] font-bold'>Most popular flights in the world.</p>
        <p className='w-full text-center text-[16px] text-cBlack-4 dark:text-cBlack-5'>
          Whether you’re looking for places for a vacation. We are here to Guide you <br />
          about the details you need to check in and ease your trips in advance
        </p>
      </div>
      <div className='py-2 md:grid md:grid-cols-12 w-full flex items-center gap-6 overflow-x-auto md:overflow-visible'>
        {destinations.map((dest, idx) => (
          <div
            onClick={() => handleDestinationClick(dest)}
            key={idx}
            className='col-span-12 sm:col-span-6 lg:col-span-3 cursor-pointer md:hover:scale-[103%] transition-all duration-200 ease-in-out flex flex-col gap-[30px]
        items-start justify-center p-[30px] h-[211px] border-[1px] border-cBlack-6 dark:border-cBlack-3
        rounded-[10px] hover:bg-white hover:dark:bg-cBlack-3 hover:shadow-home-destination-card-hover'
          >
            <HomeDestinationCard destinations={dest} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreFlightLocations;
