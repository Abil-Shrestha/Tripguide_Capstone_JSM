import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { TiLocationOutline } from 'react-icons/ti';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';

interface IProps {
  explore: {
    name: string;
    country: string;
    city: string;
    distance: number;
    roomsAvail: number;
    rating: number;
    noOfRatings: number;
    price: number;
    image: string;
  },
  id: number;
}

const FlightExploreCard = ({ explore, id }: IProps) => {
  const handleSelectHotel = () => {
    // todo: add logic to route to a hotel booking here
  };
  return (
    <div onClick={handleSelectHotel} key={id} className='cursor-pointer relative flex flex-col h-[391px] w-full md:w-[270px] rounded-[20px] overflow-clip bg-white dark:bg-cBlack-2'>
      <div className='relative h-[234px] w-full md:w-[270px]'>
        <div className='absolute z-10 px-4 top-5 flex gap-3 justify-between w-full items-center'>
          <div className='flex items-center justify-center h-[46px] w-[46px] rounded-full font-DMSans font-medium text-[14px] text-cBlack-3 dark:text-cBlack-8 bg-white dark:bg-cBlack-2/80'>
            {explore.rating} <FaStar fill='#FFC542' className='ml-1 h-3 w-3' />
          </div>
          <div className='flex items-center justify-center h-[36px] w-[71px] rounded-full font-Roboto font-medium text-[16px] text-cBlack-2 dark:text-cBlack-7 bg-white dark:bg-cBlack-2/80'>
            ${explore.price}
          </div>
        </div>
        <Image src={explore.image} layout='fill' objectFit='cover' />
      </div>
      <div className='flex flex-col gap-[12px] p-[20px] font-DMSans'>
        <div className='flex flex-col'>
          <p className='text-cBlack-2 dark:text-cBlack-8 text-[24px] font-medium'>{explore.name}</p>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='flex items-center gap-1 text-cBlack-4 dark:text-cBlack-5 text-[14px] font-normal'>
            <TiLocationOutline className='h-5 w-5' />
            {explore.country}. {explore.city}
          </p>
          <p className='flex items-center gap-1 text-cBlack-4 dark:text-cBlack-5 text-[14px] font-normal'>
            <HiOutlineOfficeBuilding className='h-5 w-5' />
            Rooms available: {explore.roomsAvail}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlightExploreCard;
