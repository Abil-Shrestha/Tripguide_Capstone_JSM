import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { TiLocationOutline } from 'react-icons/ti';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';

const HomeExploreCard = ({ explore }) => (
  <>
    <div className='flex flex-col gap-[20px] h-[193px] w-full'>
      <div className='relative h-[152px] w-[242px] rounded-[16px] overflow-clip'>
        <Image src={explore.image} layout='fill' objectFit='cover' />
      </div>
      <div className='flex items-center'>
        <FaStar fill='#FFC542' className='mr-2 h-4 w-4' />
        <p className='text-cBlack-3 dark:text-cBlack-7 font-medium text-[14px]'>
          {explore.rating}&nbsp;
          <span className='text-cBlack-4 dark:text-cBlack-5'>({explore.noOfRatings})</span>
        </p>
      </div>
    </div>
    <div className='flex flex-col gap-[14px] h-[113px] w-full'>
      <div className='flex justify-between h-[49px] w-full'>
        <div className='flex flex-col font-medium'>
          <p className='text-cBlack-3 dark:text-cBlack-8 text-[20px]'>{explore.name}</p>
          <p className='text-cBlack-4 dark:text-cBlack-4 text-[14px]'>{explore.distance} km to Town Center</p>
        </div>
        <div className='flex justify-center items-center h-[30px] w-[60px] rounded-[6px] bg-primaryBlue'>
          <p className='font-bold text-[16px] text-white'>${explore.price}</p>
        </div>
      </div>
      <div className='flex flex-col gap-[7px] h-[50px] w-full'>
        <p className='flex items-center gap-1 font-normal text-[14px] text-cBlack-4 dark:text-cBlack-5'>
          <TiLocationOutline className='h-5 w-5' />
          {explore.country}, {explore.city}
        </p>
        <p className='flex items-center gap-1 font-normal text-[14px] text-cBlack-4 dark:text-cBlack-5'>
          <HiOutlineOfficeBuilding className='h-5 w-5' />
          Rooms available: {explore.roomsAvail}
        </p>
      </div>
    </div>
  </>
);

export default HomeExploreCard;
