import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

interface IProps {
  trend: {
    id: number;
    name: string;
    reviews: number;
    noOfReviews: number;
    image: string;
  }
}

const profiles = ['/assets/HotelDetails/pf1.jpg', '/assets/HotelDetails/pf2.jpg', '/assets/HotelDetails/pf3.jpg', '/assets/HotelDetails/pf4.jpg', '/assets/HotelDetails/pf5.jpg'];

const TrendingHotelsCard = ({ trend }: IProps) => (
  <div key={trend.id} className='flex flex-col gap-[20px] items-center justify-center p-[17px] w-[80%] h-full xl:h-[316px] xl:w-[270px] bg-white dark:bg-cBlack-2 rounded-[17px] border-2 border-cBlack-7 dark:border-none'>
    <div className='relative h-[208px] w-full xl:h-[162px] xl:w-[236px] rounded-[17px] overflow-clip'>
      <Image src={trend.image} layout='fill' objectFit='cover' />
    </div>
    <div className='flex flex-col gap-[22px] w-full'>
      <div className='flex flex-col gap-2'>
        <p className='font-medium font-DMSans text-[20px] text-cBlack-2 dark:text-cBlack-8'>{trend.name}</p>
        <div className='flex items-center'>
          <FaStar fill='#FFC542' className='mr-2 h-4 w-4' />
          <p className='text-cBlack-4 dark:text-cBlack-5 font-medium text-[14px]'>
            {trend.reviews}&nbsp;
            <span className='text-cBlack-4 dark:text-cBlack-5'>({trend.noOfReviews} reviews)</span>
          </p>
        </div>
      </div>
    </div>
    <div className='flex items-center justify-between w-full'>
      <div className='flex'>
        {profiles.map((img, idx) => (
          <div key={idx} className='relative -mr-[4.5px] h-[24px] w-[24px] rounded-full overflow-clip border-2 border-white'>
            <Image src={img} layout='fill' objectFit='cover' />
          </div>
        ))}
      </div>
      <p className='font-Roboto font-medium text-[12px] text-cBlack-4 dark:text-cBlack-5'>50+ go on this hotel</p>
    </div>
  </div>
);

export default TrendingHotelsCard;
