import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

import { HomeDestinationCard, HomeFeaturedCard, HomePassionsCard, HomeTopTourCard, HomeExploreCard, HomeTrendingCard } from '@components';
import { destinations, featuredDestinations, topTour, explore, trendingCities, passions } from '../../utils/tempdata/HomeDestinationData';

const Hotels = () => {
  const classNames = {
    section: 'relative flex flex-col gap-[50px] justify-center items-center w-full dark:text-white',
    input: 'mt-2 text-[16px] focus:outline-none bg-transparent',
    navButton: 'flex items-center justify-center h-[36px] w-[36px] rounded-full bg-white dark:bg-cBlack-2 hover:bg-cBlack-6 hover:dark:bg-cBlack-3 text-cBlack-4 dark:text-cBlack-3 hover:dark:text-cBlack-6',
    tab: 'flex items-start gap-2 cursor-pointer',
    aTab: 'border-b-4 border-b-primaryBlue text-cBlack-3 dark:text-white',
    featuredCard1: {
      container: 'h-[280px] p-[30px]',
      rating: ' h-[24px] w-[65px] text-[18px]',
      name: 'text-[40px] mb-[10px]',
      activity: ' gap-[11px] text-[20px] ',
    },
    featuredCard2: {
      container: 'h-[408px] p-[30px]',
      rating: 'h-[24px] w-[65px] text-[18px]',
      name: 'text-[24px] gap-[10px]',
      activity: 'gap-[11px] text-[14px]',
    },
    featuredCard3: {
      container: 'h-[220px] p-[15px_20px]',
      rating: 'h-[20px] w-[49px] text-[13px]',
      name: 'text-[18px] mb-[6px]',
      activity: 'gap-[6px] text-[10px]',
    },
  };

  return (
    <div className='flex flex-col gap-[40px] bg-[#FAFAFA] dark:bg-[#18191B]'>
      {/* Destination Card */}
      <section className={`${classNames.section} p-[30px_135px] h-[706px]`}>
        <div className='flex flex-col gap-4 w-[1170px] h-[130px]'>
          <p className='w-full text-center text-[48px] font-bold'>Search a best place in the world.</p>
          <p className='w-full text-center text-[16px] text-cBlack-4 dark:text-cBlack-5'>
            Whether you’re looking for places for a vacation. We are here to Guide you <br />
            about the details you need to check in and ease your trips in advance
          </p>
        </div>
        <div className='flex flex-[1_1_44%] justify-between flex-wrap w-[1170px] h-[446px]'>
          {destinations.map((dest, idx) => (
            // eslint-disable-next-line max-len
            <div
              key={idx}
              className='cursor-pointer flex flex-col gap-[30px] items-start justify-center p-[30px] h-[211px] w-[270px]
              border-[1px] border-cBlack-6 dark:border-cBlack-3 rounded-[10px] hover:bg-white hover:dark:bg-cBlack-3 hover:shadow-home-destination-card-hover'
            >
              <HomeDestinationCard destinations={dest} />
            </div>
          ))}
        </div>
      </section>
      {/* Featured */}
      <section className={`${classNames.section} h-[954px]`}>
        <div className='flex flex-col gap-[12px] h-[106px] w-[1170px] font-DMSans'>
          <p className='h-[70px] font-bold text-[48px] text-cBlack-1 dark:text-white'>Featured Destinations</p>
          <p className='h-[24px] text-[16px] font-normal text-cBlack-3 dark:text-cBlack-5'>Popular destinations open to visitors from Indonesia</p>
        </div>
        <div className='flex gap-[30px] h-[718px] w-[1170px]'>
          <div className='flex flex-col justify-between items-center h-[718px] w-[870px]'>
            <HomeFeaturedCard styles={classNames.featuredCard1} name={featuredDestinations[0].name} activities={featuredDestinations[0].activities} rating={featuredDestinations[0].rating} image={featuredDestinations[0].image} />
            <div className='flex gap-[54px] justify-between items-center h-[408px] w-full'>
              <HomeFeaturedCard styles={classNames.featuredCard2} name={featuredDestinations[1].name} activities={featuredDestinations[1].activities} rating={featuredDestinations[1].rating} image={featuredDestinations[1].image} />
              <HomeFeaturedCard styles={classNames.featuredCard2} name={featuredDestinations[2].name} activities={featuredDestinations[2].activities} rating={featuredDestinations[2].rating} image={featuredDestinations[2].image} />
            </div>
          </div>
          <div className='flex flex-col justify-between items-center h-[718px] w-[270px]'>
            <HomeFeaturedCard styles={classNames.featuredCard3} name={featuredDestinations[3].name} activities={featuredDestinations[3].activities} rating={featuredDestinations[3].rating} image={featuredDestinations[3].image} />
            <HomeFeaturedCard styles={classNames.featuredCard3} name={featuredDestinations[4].name} activities={featuredDestinations[4].activities} rating={featuredDestinations[4].rating} image={featuredDestinations[4].image} />
            <HomeFeaturedCard styles={classNames.featuredCard3} name={featuredDestinations[5].name} activities={featuredDestinations[5].activities} rating={featuredDestinations[5].rating} image={featuredDestinations[5].image} />
          </div>
        </div>
      </section>
      {/* Top Tour */}
      <section className={`${classNames.section} h-[731px]`}>
        <div className='flex justify-between h-[106px] w-[1170px]'>
          <div className='flex flex-col gap-[12px] font-DMSans'>
            <p className='h-[70px] font-bold text-[48px] text-cBlack-1 dark:text-white'>Top Tour</p>
            <p className='h-[24px] text-[16px] font-normal text-cBlack-4 dark:text-cBlack-5'>Keep calm & Travel on</p>
          </div>
          <div className='flex gap-2 items-center'>
            <button type='button' className={classNames.navButton}>
              <MdKeyboardArrowLeft className='h-5 w-5' />
            </button>
            <button type='button' className={classNames.navButton}>
              <MdKeyboardArrowRight className='h-5 w-5' />
            </button>
          </div>
        </div>
        <div className='flex justify-between h-[495px] w-[1170px]'>
          {topTour.map((tour, idx) => (
            <div key={idx} className='cursor-pointer relative isolate p-[30px] h-full w-[370px] rounded-[16px] overflow-clip'>
              <HomeTopTourCard tour={tour} type='' />
            </div>
          ))}
        </div>
      </section>
      {/* Explore */}
      <section className={`${classNames.section} h-[731px]`}>
        <div className='flex justify-between h-[106px] w-[1170px]'>
          <div className='flex flex-col gap-[12px] font-DMSans'>
            <p className='h-[70px] font-bold text-[48px] text-cBlack-1 dark:text-white'>Explore The World</p>
            <p className='h-[24px] text-[16px] font-normal text-cBlack-4 dark:text-cBlack-5'>10,788 beautiful places to go</p>
          </div>
          <div className='flex gap-2 items-center'>
            <button type='button' className={classNames.navButton}>
              <MdKeyboardArrowLeft className='h-5 w-5' />
            </button>
            <button type='button' className={classNames.navButton}>
              <MdKeyboardArrowRight className='h-5 w-5' />
            </button>
          </div>
        </div>
        <div className='flex justify-between h-[362px] w-[1170px]'>
          {explore.map((place, idx) => (
            <div key={idx} className='cursor-pointer flex flex-col gap-[10px] p-[14px_14px_26px] h-full w-[270px] bg-white dark:bg-cBlack-2 rounded-[16px] font-DMSans'>
              <HomeExploreCard explore={place} />
            </div>
          ))}
        </div>
      </section>
      {/* Trending */}
      <section className={`${classNames.section} h-[945px]`}>
        <div className='flex flex-col gap-[16px] items-center h-[110px] w-[980px] font-DMSans'>
          <p className='text-[48px] font-bold text-center text-cBlack-2 dark:text-white w-full'>Trending Cities</p>
          <p className='text-[24px] font-normal text-center text-cBlack-3 dark:text-cBlack-6 w-full'>The most searched for cities on TripGuide</p>
        </div>
        <div className='flex flex-[1_1_22%] flex-wrap gap-[30px] items-center h-[705px] w-[980px]'>
          {trendingCities.map((trend, idx) => (
            <div key={idx} className='cursor-pointer flex gap-[30px] p-[23px_24px] h-[215px] w-[470px] rounded-[20px] bg-white dark:bg-cBlack-2'>
              <HomeTrendingCard trend={trend} />
            </div>
          ))}
        </div>
      </section>
      {/* Passion */}
      <section className={`${classNames.section} h-[560px]`}>
        <div className='flex flex-col gap-[12px] h-[106px] w-[1170px] font-DMSans'>
          <p className='h-[70px] font-bold text-[48px] text-cBlack-1 dark:text-white'>Travel Your Passion</p>
          <p className='h-[24px] text-[16px] font-normal text-cBlack-4 dark:text-cBlack-5'>Most Brilliant reasons Entrada should be your one-stop-shop!</p>
        </div>
        <div className='flex justify-between h-[324px] w-[1170px]'>
          {passions.map((passion, idx) => (
            <div key={idx} className='cursor-pointer relative flex gap-[10px] h-[324px] w-[270px] p-[30px] rounded-[20px] overflow-clip'>
              <HomePassionsCard passion={passion} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Hotels;
