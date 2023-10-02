import { FeatureDestinationsDesktop, FeatureDestinationsMobile } from '@components';

const FlightFeaturedDestinations = () => (
  <section className='p-6 w-full xl:w-[1170px] relative flex flex-col gap-[40px] justify-center items-center dark:text-white'>
    <div className='flex flex-col items-center text-center justify-center gap-[12px] font-DMSans'>
      <p className='w-[70%] font-bold md:w-full text-[30px] md:text-[48px] text-cBlack-1 dark:text-white'>Featured Destinations</p>
      <p className='w-[70%] text-[16px] text-cBlack-4 dark:text-cBlack-5'>Popular destinations open to visitors from around the World</p>
    </div>
    <FeatureDestinationsMobile />
    <FeatureDestinationsDesktop />
  </section>
);

export default FlightFeaturedDestinations;
