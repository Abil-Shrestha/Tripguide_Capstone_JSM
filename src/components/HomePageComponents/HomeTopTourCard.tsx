import Image from 'next/image';

const HomeTopTourCard = ({ tour, type }) => (
  <>
    <div className='absolute inset-0 z-10 bg-gradient-to-bl from-[rgba(2,_0,_14,_0.13)_9.38%] via-[rgba(42,_34,_101,_0)_47.26%] to-[rgba(15,_11,_44,_0.6)_92.77%] pointer-events-none' />
    <Image src={tour.image} layout='fill' objectFit='cover' />
    <div className='relative z-10 flex flex-col justify-between items-start h-full font-DMSans'>
      <div className='flex items-center justify-center p-[11px_42px] bg-[rgba(20,_20,_22,_0.2)] rounded-[35px]'>
        <p className='font-medium text-[20px] text-white'>{tour.city}</p>
      </div>
      <div className='flex flex-col gap-2'>
        <p className='font-bold text-[34px] text-cBlack-8'>{tour.country}</p>
        {type === 'car'
          ? <p className='font-normal text-[16px] text-cBlack-8'>Car rentals in {tour.pickupLocations} pickup locations</p>
          : <p className='font-normal text-[16px] text-cBlack-8'>{tour.popularPlaces} Popular Places</p>}
      </div>
    </div>
  </>
);

export default HomeTopTourCard;
