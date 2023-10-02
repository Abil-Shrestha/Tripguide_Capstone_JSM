import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

const HomePassionsCard = ({ passion }) => (
  <>
    <div className='absolute inset-0 z-10 bg-gradient-to-tr from-[rgba(31,_31,_31,_0.63)_17.12%] to-[rgba(35,_35,_35,_0)_92.69%)] pointer-events-none' />
    <Image src={passion.image} layout='fill' objectFit='cover' />
    <div className='relative z-10 flex flex-col justify-end'>
      <p className='text-white text-[24px] font-[600] font-poppins'>{passion.hobby}</p>
      <p className='flex items-center gap-1 text-white text-[14px] font-normal font-DMSans'>
        <FaStar fill='#FFC542' className='mr-1 h-4 w-4' /> {passion.rating}
        <span>({passion.noOfRatings})</span>
      </p>
    </div>
  </>
);

export default HomePassionsCard;
