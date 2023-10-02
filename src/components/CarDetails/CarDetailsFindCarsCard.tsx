import Image from 'next/image';

import { FaStar } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';

interface IProps {
  car: {
    id: number;
    name: string;
    reviews: number;
    noOfReviews: number;
    price: number;
    image: string;
  }
}

const CarDetailsFindCarsCard = ({ car }: IProps) => (
  <div
    key={car.id}
    className='flex flex-col gap-[17px] h-[429px] w-full xl:w-[370px] font-DMSans bg-white
  dark:bg-cBlack-2 border-2 border-cBlack-7 dark:border-cBlack-3 rounded-[20px]'
  >
    <div className='relative h-[240px] w-full overflow-clip'>
      <Image src={car.image} layout='fill' objectFit='cover' />
    </div>
    <div className='flex flex-col gap-[13px] w-full px-6'>
      <div className='flex justify-between'>
        <p className='font-medium text-[18px] text-cBlack-3 dark:text-cBlack-8'>{car.name}</p>
        <p className='font-[700] text-[16px]'>${car.price}</p>
      </div>
      <div className='flex items-center'>
        <FaStar fill='#FFC542' className='mr-2 h-4 w-4' />
        <p className='text-cBlack-2 dark:text-cBlack-4 font-medium text-[14px]'>
          {car.reviews}&nbsp;
          <span className='text-cBlack-2 dark:text-cBlack-4'>({car.noOfReviews} reviews)</span>
        </p>
      </div>
      <hr className='mb-6 mt-2 border-[#E7ECF3] dark:border-[#3B3E44]' />
      <div className='flex items-center gap-[30px]'>
        <div className='flex gap-1 items-center'>
          <AiOutlineUser className='text-[#B1B5C4] h-[20px] w-[20px]' />
          <p>6 Peoples</p>
        </div>
        <div className='h-6 border-l border-[#B1B5C4]' />
        <div className='flex gap-1 items-center'>
          <img src='/best-value.png' alt='' className='h-[20px] w-[20px]' />
          <p>6 Peoples</p>
        </div>
      </div>
    </div>
  </div>
);

export default CarDetailsFindCarsCard;
