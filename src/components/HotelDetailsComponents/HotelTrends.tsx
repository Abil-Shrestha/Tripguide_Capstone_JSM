import { TrendingHotelsCard } from '@components';
import { trendingHotels } from '@utils/tempdata/HotelDetails';

const HotelTrends = () => (
  <div className='flex flex-col gap-[40px] w-[1170px]'>
    <p className='text-[48px] text-cBlack-2 dark:text-white font-DMSans font-bold'>Trending Hotels</p>
    <div className='flex gap-[30px]'>
      {trendingHotels.map((trend) => (
        <TrendingHotelsCard trend={trend} />
      ))}
    </div>
  </div>
);

export default HotelTrends;
