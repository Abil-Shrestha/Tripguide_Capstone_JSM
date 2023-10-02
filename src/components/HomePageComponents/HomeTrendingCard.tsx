import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

const HomeTrendingCard = ({ trend }) => (
  <>
    <div className='overflow-clip rounded-[15px]'>
      <Image src={trend.image} height={168} width={160} />
    </div>
    <div className='flex flex-col gap-[24px] h-full w-[232px] font-DMSans'>
      <div className='flex flex-col gap-[15px] justify-between h-[112px] w-full'>
        <p className='font-bold text-[24px] text-[#282832] dark:text-cBlack-8 w-full'>{trend.city}</p>
        <p className='flex items-center text-cBlack-3 dark:text-cBlack-6 font-normal text-[16px]'>
          <FaStar fill='#FFC542' className='mr-2 h-4 w-4 ' />
          {trend.rating}&nbsp;
          <span className='text-cBlack-4 dark:text-[#92929A]'>({trend.noOfRatings})</span>
        </p>
        <p className='font-poppins font-[600] text-[24px] text-cBlack-3 dark:text-cBlack-8'>
          ${trend.price}.00
          <span className='text-[#92929A] font-normal text-[16px]'>/night</span>
        </p>
      </div>
      <button type='button' className='flex items-center justify-center w-[99px] h-[33px] bg-primaryBlue rounded-[6px] text-white font-bolc text-[16px]'>
        Book now
      </button>
    </div>
  </>
);

export default HomeTrendingCard;
