import { useRouter } from 'next/router';

import { useGlobalContext } from '@context/GlobalContext';
import { HomeTopTourCard } from '@components';
import { exploreTopDestinations } from '@utils/tempdata/CarsTopDestinations';

const locationIds = {
  Germany: '2000000062',
  Mexico: '2000039665',
  Spain: '2000000344',
};

const CarsExploreTopSection = () => {
  const { setCarFromLocation, setCarFromID, setCarToLocation, setCarToID, carSetStartDate, carSetEndDate } = useGlobalContext();
  const router = useRouter();
  const date = new Date();
  const tomorrow = new Date(date);
  const threeDaysLater = new Date(date);

  tomorrow.setDate(tomorrow.getDate() + 1);
  threeDaysLater.setDate(threeDaysLater.getDate() + 3);

  const handleTopDestination = (destination) => {
    switch (destination.country) {
      case 'Germany':
        setCarFromLocation(`${destination.city} ${destination.country}`);
        setCarFromID(locationIds.Germany);
        setCarToLocation(`${destination.city} ${destination.country}`);
        setCarToID(locationIds.Germany);
        carSetStartDate(new Date(tomorrow));
        carSetEndDate(new Date(threeDaysLater));
        router.push({ pathname: '/listing/car',
          query: {
            locationPickup: locationIds.Germany,
            locationDropoff: locationIds.Germany,
            pickupDate: `${tomorrow?.toISOString().split('T')[0]} 13:00:00`,
            returnDate: `${threeDaysLater?.toISOString().split('T')[0]} 13:00:00`,
          } });
        break;
      case 'Mexico':
        setCarFromLocation(`${destination.city} ${destination.country}`);
        setCarFromID(locationIds.Mexico);
        setCarToLocation(`${destination.city} ${destination.country}`);
        setCarToID(locationIds.Mexico);
        carSetStartDate(new Date(tomorrow));
        carSetEndDate(new Date(threeDaysLater));
        router.push({ pathname: '/listing/car',
          query: {
            locationPickup: locationIds.Mexico,
            locationDropoff: locationIds.Mexico,
            pickupDate: `${tomorrow?.toISOString().split('T')[0]} 13:00:00`,
            returnDate: `${threeDaysLater?.toISOString().split('T')[0]} 13:00:00`,
          } });
        break;
      case 'Spain':
        setCarFromLocation(`${destination.city} ${destination.country}`);
        setCarFromID(locationIds.Spain);
        setCarToLocation(`${destination.city} ${destination.country}`);
        setCarToID(locationIds.Spain);
        carSetStartDate(new Date(tomorrow));
        carSetEndDate(new Date(threeDaysLater));
        router.push({ pathname: '/listing/car',
          query: {
            locationPickup: locationIds.Spain,
            locationDropoff: locationIds.Spain,
            pickupDate: `${tomorrow?.toISOString().split('T')[0]} 13:00:00`,
            returnDate: `${threeDaysLater?.toISOString().split('T')[0]} 13:00:00`,
          } });
        break;
      default:
        break;
    }
  };

  return (
    <section className='w-full font-DMSans max-w-7xl mx-auto'>
      {/* Explore Top Destinations */}
      <div className='mb-8 md:mb-12 text-center xl:text-left xl:ml-12'>
        <p className='font-bold text-[28px] md:text-[48px] text-cBlack-1 dark:text-white mb-3'>Explore Top Destinations</p>
        <p className='text-[16px] font-normal text-cBlack-4 dark:text-cBlack-5'>for car rentals</p>
      </div>
      <div className='md:flex md:gap-8 justify-center'>
        {exploreTopDestinations.map((tour, idx) => (
          <div onClick={() => handleTopDestination(tour)} key={idx} className='cursor-pointer hover:scale-[102%] transition-all duration-300 ease-in-out relative isolate p-[30px] w-full h-[455px] md:w-[370px] rounded-[16px] overflow-clip mb-10'>
            <HomeTopTourCard tour={tour} type='car' />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CarsExploreTopSection;
