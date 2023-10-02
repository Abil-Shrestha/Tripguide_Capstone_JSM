import { FaStar } from 'react-icons/fa';
import { AiFillCar } from 'react-icons/ai';
import { useGlobalContext } from '@context/GlobalContext';

interface IProps {
  activeCar: any;
}

const CarDetailsHeader = ({ activeCar }: IProps) => {
  const { cars } = useGlobalContext();
  return (
    <div className='mt-6 flex flex-col gap-6'>
      <p className='font-Roboto text-[22px] md:text-[48px] font-[700] text-cBlack-2 dark:text-cBlack-8'>
        {`Best Seller - ${activeCar?.partnerInfo?.vehicleExample.split(' ')[0]} ${activeCar?.partnerInfo?.vehicleExample.split(' ')[1]}`}
      </p>
      <div className='flex gap-8'>
        <p className='flex items-center text-cBlack-3 dark:text-cBlack-7 font-normal text-[14px]'>
          <FaStar fill='#FFC542' className='mr-2 h-4 w-4' />
          4.8&nbsp;
          <span className='text-cBlack-4 dark:text-cBlack-5'>(122 reviews)</span>
        </p>
        <p className='flex gap-2 items-center text-cBlack-4 dark:text-cBlack-5 text-[14px]'>
          <AiFillCar className='h-5 w-5' />
          {cars?.partners?.find((partner) => partner?.partnerCode === activeCar?.partnerInfo?.partnerCode)?.partnerName}
        </p>
      </div>
    </div>
  );
};

export default CarDetailsHeader;
