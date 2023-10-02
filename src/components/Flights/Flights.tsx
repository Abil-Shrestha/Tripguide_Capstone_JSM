import { FlightExploreWorld, ExploreFlightLocations, FlightFeaturedDestinations, FlightTrendingCities } from '@components';

const Flights = () => (
  <div className='w-full flex flex-col justify-center items-center gap-[40px] bg-[#FAFAFA] dark:bg-cBlack-1'>
    <ExploreFlightLocations />
    <FlightFeaturedDestinations />
    <FlightTrendingCities />
    <FlightExploreWorld />
  </div>
);

export default Flights;
