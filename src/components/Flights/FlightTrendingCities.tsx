import { HomeTrendingCard } from '@components';
import { trendingCities } from '@utils/tempdata/HomeDestinationData';

const FlightTrendingCities = () => {
  const handleBookHotel = (trend) => {
    // update with code to send to a hotel listing
  };
  return (
    <section className='p-6 lg:w-[1020px] relative flex flex-col gap-[50px] justify-center items-center w-full dark:text-white'>
      <div className='flex flex-col gap-[16px] items-center font-DMSans'>
        <p className='text-[30px] md:text-[48px] font-bold text-center text-cBlack-2 dark:text-white w-full'>Book a hotel</p>
        <p className='text-[14px] md:text-[24px] font-normal text-center text-cBlack-4 dark:text-cBlack-6 w-full'>Book a hotel in the most flown to cities on TripGuide</p>
      </div>
      <div className='w-full flex flex-col lg:grid lg:grid-cols-2 gap-[30px] items-center'>
        {trendingCities.map((trend, idx) => (
          <div onClick={() => handleBookHotel(trend)} key={idx} className='lg:col-span-1 flex gap-[30px] p-[23px_24px] h-[215px] w-full lg:w-[470px] rounded-[20px] bg-white dark:bg-cBlack-2'>
            <HomeTrendingCard trend={trend} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FlightTrendingCities;
