import Image from 'next/image';
import { FaStar, FaWifi, FaPizzaSlice } from 'react-icons/fa';

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

const FindCarsCard = ({ car }: IProps) => (
  <div key={car.id} className='flex flex-col gap-[17px] h-[429px] w-[370px] items-center justify-center p-[13px_18px] font-DMSans bg-white dark:bg-cBlack-2 rounded-[16px] border-2 border-cBlack-7 dark:border-cBlack-3'>
    <div className='relative h-[246px] w-[334px] rounded-[16px] overflow-clip'>
      <Image src={car.image} layout='fill' objectFit='cover' />
    </div>
    <div className='flex flex-col gap-[13px] w-full'>
      <p className='font-medium text-[18px] text-cBlack-3 dark:text-cBlack-8'>{car.name}</p>
      <div className='flex items-center'>
        <FaStar fill='#FFC542' className='mr-2 h-4 w-4' />
        <p className='text-cBlack-2 dark:text-cBlack-4 font-medium text-[14px]'>
          {car.reviews}&nbsp;
          <span className='text-cBlack-2 dark:text-cBlack-4'>({car.noOfReviews} reviews)</span>
        </p>
      </div>
      <div className='flex gap-4 pb-4 text-[14px] font-medium text-cBlack-4 dark:text-cBlack-6 dark:border-b-[1px] dark:border-b-cBlack-3'>
        <p className='flex items-center'>
          <FaWifi className='text-cBlack-5 h-4 w-4 mr-2' />
          Free Wifi
        </p>
        <p className='flex items-center'>
          <FaPizzaSlice className='text-cBlack-5 dark:text-cBlack-6 h-[14px] w-[14px] mr-2' />
          Breakfast Included
        </p>
      </div>
      <p className='text-[16px] font-bold text-cBlack-2 dark:text-cBlack-8'>${car.price} total</p>
    </div>
  </div>
);

export default FindCarsCard;
