import Image from 'next/image';

const HomeFeaturedCard = ({ name, activities, rating, image, styles, handleClick }) => (
  <div onClick={handleClick} className={`${styles.container} relative isolate flex flex-col gap-[10px] items-start w-full rounded-[18px] font-DMSans overflow-clip`}>
    <div className='absolute inset-0 z-10 bg-gradient-to-tr from-[rgba(3,_3,_3,_0.54)_-3.66%] to-[rgba(6,_6,_6,_0)_45.57%] pointer-events-none' />
    <Image src={image} layout='fill' objectFit='cover' />
    <div className='relative z-10 flex flex-col justify-between items-start h-full'>
      <div className={`${styles.rating} flex justify-center bg-white rounded-[20px]`}>
        <p className='font-bold text-primaryRed'>{rating}</p>
      </div>
      <div className='flex flex-col'>
        <p className={`${styles.name} font-bold text-white`}>{name}</p>
        <p className={`${styles.activity} flex items-center justify-between font-normal text-white`}>{activities} Activities</p>
      </div>
    </div>
  </div>
);

export default HomeFeaturedCard;
