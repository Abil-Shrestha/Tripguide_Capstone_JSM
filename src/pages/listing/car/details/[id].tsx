import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { MdKeyboardArrowRight } from 'react-icons/md';

import { useGlobalContext } from '@context/GlobalContext';
import { trendingCars, findCars, detailPills, carDetailImages } from '@utils/tempdata/CarDetails';
import { findCarButtons } from '@utils/tempdata/constants';
import { CarDetailsHeader, CarDetailsImages, DetailsSummary, CarDetailsPills, HotelReviews, TrendingHotelsCard, CarDetailsFindCarsCard } from '@components';

const CarDetails = () => {
  const { cars, activeCar, setActiveCar, carFromID, carToID, carStartDate, carEndDate } = useGlobalContext();
  const { query: { id }, push } = useRouter();
  const [findCarActive, setFindCarActive] = useState('Popular');
  const [review, setReview] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    const car = cars?.cars?.find((c) => c.id === id);
    setActiveCar(car);
  }, []);

  const handlePreviousRoute = () => {
    push({ pathname: '/listing/car',
      query: {
        fromId: carFromID,
        toId: carToID,
        pickupDate: `${carStartDate?.toISOString().split('T')[0]} ${carStartDate?.toISOString().split('T')[1].slice(0, 8)}`,
        dropoffDate: `${carEndDate?.toISOString().split('T')[0]} ${carEndDate?.toISOString().split('T')[1].slice(0, 8)}`,
      } });
  };

  return (
    <div className='max-w-[1440px] mx-4 xs:mx-8 md:mx-24 2xl:mx-auto mb-10 font-DMSans'>
      {/* Crumbs */}
      <div className='flex items-center mt-[50px] text-[14px] font-normal font-DMSans'>
        <Link href='/' className='text-cBlack-3 dark:text-cBlack-7'>Home</Link>
        <MdKeyboardArrowRight className='h-5 w-5 text-cBlack-3 dark:text-cBlack-7' />
        <button onClick={handlePreviousRoute} type='button' className='text-cBlack-3 dark:text-cBlack-7'>
          Car List
        </button>
        <MdKeyboardArrowRight className='h-5 w-5 text-cBlack-3 dark:text-cBlack-7' />
        <p className='text-cBlack-5 dark:text-cBlack-4'>Car Details</p>
      </div>
      <CarDetailsHeader activeCar={activeCar} />
      <CarDetailsImages images={carDetailImages} />
      <CarDetailsPills pills={detailPills} />
      <DetailsSummary />
      <div className='flex flex-col items-center justify-center mt-10'>
        <HotelReviews review={review} setReview={setReview} guestReviews={null} />
        <div className='flex flex-col gap-[40px] w-full mt-6'>
          <p className='text-[30px] text-center md:text-left md:text-[48px] text-cBlack-2 dark:text-white font-DMSans font-bold'>Trending Cars</p>
          <div className='flex flex-col lg:flex-row items-center gap-[30px] w-full justify-between'>
            {trendingCars.map((trend, i) => (
              <TrendingHotelsCard trend={trend} key={i} />
            ))}
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-[28px] mt-10'>
        <div className='flex flex-col xl:flex-row items-center justify-between p-[21px_39px] dark:bg-cBlack-2 xl:bg-[#F4F5F6] rounded-[10px]'>
          <p className='text-[30px] md:text-[34px] font-DMSans font-bold text-cBlack-1 dark:text-cBlack-7 whitespace-nowrap'>Find 250+ Cars</p>
          <div className='flex gap-4 xs:gap-[26px] md:gap-[39px] font-DMSans mt-8 xl:mt-0'>
            {findCarButtons.map((button) => (
              <button
                key={button.label}
                type='button'
                value={button.label}
                onClick={(e) => setFindCarActive((e.target as HTMLTextAreaElement).value)}
                className={`flex items-center justify-center h-[30px] w-full xs-w-[50px] sm:w-[100px] text-[14px] rounded-[30px] p-2
                  ${findCarActive === button.label ? 'bg-primaryBlue text-cBlack-8 font-bold' : 'text-cBlack-3 dark:text-cBlack-6 font-normal'} `}
              >
                {button.label}
              </button>
            ))}
          </div>
        </div>
        <div className='flex flex-col lg:flex-row items-center h-full gap-[30px] justify-between'>
          {findCars.map((car, i) => (
            <CarDetailsFindCarsCard car={car} key={i} />
          ))}
        </div>
      </div>

    </div>
  );
};

export default CarDetails;
