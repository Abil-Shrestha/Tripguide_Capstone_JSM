import { useRouter } from 'next/router';

import { useGlobalContext } from '@context/GlobalContext';
import { HomeFeaturedCard } from '@components';
import { featuredDestinations } from '@utils/tempdata/FlightDestinationData';

const classNames = {
  section: 'relative flex flex-col gap-[50px] justify-center items-center w-full dark:text-white',
  input: 'mt-2 text-[16px] focus:outline-none bg-transparent',
  navButton: `flex items-center justify-center h-[36px] w-[36px] rounded-full bg-white 
    dark:bg-cBlack-2 hover:bg-cBlack-6 hover:dark:bg-cBlack-3 text-cBlack-4 dark:text-cBlack-3 hover:dark:text-cBlack-6',
    tab: 'flex items-start gap-2 cursor-pointer`,
  aTab: 'border-b-4 border-b-primaryBlue text-cBlack-3 dark:text-white',
  featuredCard1: {
    container: 'h-[280px] p-[30px] cursor-pointer',
    rating: ' h-[24px] w-[65px] text-[18px]',
    name: 'text-[40px] mb-[10px]',
    activity: ' gap-[11px] text-[20px] ',
  },
  featuredCard2: {
    container: 'h-[408px] p-[30px] cursor-pointer',
    rating: 'h-[24px] w-[65px] text-[18px]',
    name: 'text-[24px] gap-[10px]',
    activity: 'gap-[11px] text-[14px]',
  },
  featuredCard3: {
    container: 'h-[220px] p-[15px_20px] cursor-pointer',
    rating: 'h-[20px] w-[49px] text-[13px]',
    name: 'text-[18px] mb-[6px]',
    activity: 'gap-[6px] text-[10px]',
  },
};

const FeatureDestinationsDesktop = () => {
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
    <div className='hidden lg:flex gap-[30px] h-[718px] w-[1170px]'>
      <div className='flex flex-col justify-between items-center h-[718px] w-[870px]'>
        <HomeFeaturedCard
          handleClick={() => handleSelectDestination(featuredDestinations[0])}
          styles={classNames.featuredCard1}
          name={featuredDestinations[0].name}
          activities={featuredDestinations[0].activities}
          rating={featuredDestinations[0].rating}
          image={featuredDestinations[0].image}
        />
        <div className='flex gap-[54px] justify-between items-center h-[408px] w-full'>
          <HomeFeaturedCard
            handleClick={() => handleSelectDestination(featuredDestinations[1])}
            styles={classNames.featuredCard2}
            name={featuredDestinations[1].name}
            activities={featuredDestinations[1].activities}
            rating={featuredDestinations[1].rating}
            image={featuredDestinations[1].image}
          />
          <HomeFeaturedCard
            handleClick={() => handleSelectDestination(featuredDestinations[2])}
            styles={classNames.featuredCard2}
            name={featuredDestinations[2].name}
            activities={featuredDestinations[2].activities}
            rating={featuredDestinations[2].rating}
            image={featuredDestinations[2].image}
          />
        </div>
      </div>
      <div className='flex flex-col justify-between items-center h-[718px] w-[270px]'>
        <HomeFeaturedCard
          handleClick={() => handleSelectDestination(featuredDestinations[3])}
          styles={classNames.featuredCard3}
          name={featuredDestinations[3].name}
          activities={featuredDestinations[3].activities}
          rating={featuredDestinations[3].rating}
          image={featuredDestinations[3].image}
        />
        <HomeFeaturedCard
          handleClick={() => handleSelectDestination(featuredDestinations[4])}
          styles={classNames.featuredCard3}
          name={featuredDestinations[4].name}
          activities={featuredDestinations[4].activities}
          rating={featuredDestinations[4].rating}
          image={featuredDestinations[4].image}
        />
        <HomeFeaturedCard
          handleClick={() => handleSelectDestination(featuredDestinations[5])}
          styles={classNames.featuredCard3}
          name={featuredDestinations[5].name}
          activities={featuredDestinations[5].activities}
          rating={featuredDestinations[5].rating}
          image={featuredDestinations[5].image}
        />
      </div>
    </div>
  );
};

export default FeatureDestinationsDesktop;
