import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

import { FlightExploreCard } from '@components';
import { explore } from '@utils/tempdata/FlightDestinationData';

const classNames = {
  section: 'relative flex flex-col gap-[50px] justify-center items-center w-full dark:text-white',
  navButton: 'flex items-center justify-center h-[36px] w-[36px] rounded-full bg-white dark:bg-cBlack-3 hover:bg-cBlack-6 hover:dark:bg-cBlack-4 text-cBlack-4 dark:text-cBlack-3 hover:dark:text-cBlack-6',
};

const FlightExploreWorld = () => (
  <section className={`${classNames.section} w-full p-6 lg:w-[1170px]`}>
    <div className='flex w-full'>
      <div className='flex flex-col gap-[12px] font-DMSans'>
        <p className='font-bold text-[30px] md:text-[48px] text-cBlack-1 dark:text-white'>Explore The World</p>
        <p className='text-[14px] md:text-[16px] font-normal text-cBlack-4 dark:text-cBlack-5'>10,788 beautiful places to go</p>
      </div>
    </div>
    <div className='flex flex-col gap-[30px] md:flex-row justify-between w-full'>
      {explore.map((place, idx) => (
        <FlightExploreCard id={idx} explore={place} key={idx} />
      ))}
    </div>
  </section>
);

export default FlightExploreWorld;
