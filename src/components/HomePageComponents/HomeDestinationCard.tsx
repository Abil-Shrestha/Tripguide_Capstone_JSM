import Image from 'next/image';

const HomeDestinationCard = ({ destinations }) => (
  <>
    <div className='overflow-clip rounded-[10px]'>
      <Image src={destinations.image} height={90} width={60} objectFit='fill' />
    </div>
    <div className='flex flex-col gap-[12px] items-start w-[210px] h-[59px] font-DMSans'>
      <p className='text-[20px] font-bold text-cBlack-3 dark:text-cBlack-6'>{destinations.name}</p>
      <p className='text-[14px] text-cBlack-4'>{destinations.destinations} Destinations</p>
    </div>
  </>
);

export default HomeDestinationCard;
