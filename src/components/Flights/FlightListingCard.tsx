import Image from 'next/image';
import Link from 'next/link';

import { BsArrowRight } from 'react-icons/bs';
import { useGlobalContext } from '../../context/GlobalContext';

interface IProps {
  detail: {
    code: string;
    price: number;
    image: string;
    name: string;
  }
  duration: number;
}

const FlightListingCard = ({ detail, duration }: IProps) => {
  const { flightFromLocation, flightToLocation, flightStartDate, flightFromID, flightToID, flightOneWay } = useGlobalContext();
  return (
    <div className='flex flex-col gap-[20px] px-[30px] h-[320px] lg:px-[60px] py-[19px] lg:h-auto w-full rounded-[20px] bg-white dark:bg-cBlack-2 border-[1px] border-cBlack-7 dark:border-cBlack-3'>
      <div className='flex flex-col h-full gap-[10px] whitespace-nowrap'>
        <div className='flex gap-3 items-center font-DMSans font-medium text-[18px] text-cBlack-3 dark:text-cBlack-7'>
          <p>{`${flightFromLocation?.split(' ')[0]} ${flightFromLocation.split(' ')[1]?.replace(/,/g, '') || ''}`}</p>
          <BsArrowRight className='h-4 w-4 text-cBlack-4 dark:text-cBlack-6' />
          <p>{`${flightToLocation.split(' ')[0]} ${flightToLocation.split(' ')[1] || ''}`}</p>
          <p>-<span className='ml-1'> {flightStartDate?.toISOString()?.substring(0, 10)}</span></p>
        </div>
        <div className='flex mt-16 lg:mt-0 justify-center lg:justify-between items-center'>
          <div className='hidden lg:block relative h-[35px] w-[52px]'>
            <Image src={detail?.image} layout='fill' objectFit='contain' priority />
          </div>
          <div className='flex gap-[35px]'>
            <div className='flex flex-col font-DMSans font-medium'>
              <p className='text-[24px] text-cBlack-2 dark:text-cBlack-8'>{flightFromID}</p>
              <p className='text-[14px] text-cBlack-4 dark:text-cBlack-5'>8:10 am</p>
            </div>
            <div className='flex flex-col items-center font-DMSans font-medium'>
              <p className='text-[10px] text-cBlack-4 dark:text-cBlack-5'>{(duration / 60).toFixed(2)} hrs</p>
              <div className='relative overflow-visible'>
                <div className='absolute left-[36px] bottom-2'>
                  <Image src='/assets/FlightListing/Ellipse.png' width={58} height={36} priority />
                </div>
                <Image src='/assets/FlightListing/flightdash.png' width={128} height={20} priority />
              </div>
              <p className='text-[14px] text-cBlack-5'>{flightOneWay ? 'nonstop' : 'roundtrip'}</p>
            </div>
            <div className='flex flex-col font-DMSans font-medium'>
              <p className='text-[24px] text-cBlack-2 dark:text-cBlack-8'>{flightToID}</p>
              <p className='text-[14px] text-cBlack-4 dark:text-cBlack-5'>12:30 pm</p>
            </div>
          </div>
          <div className='hidden lg:flex flex-col text-center font-DMSans'>
            <p className='font-medium text-[24px] text-cBlack-2 dark:text-cBlack-8'>${(detail.price).toFixed(2)}</p>
            <Link href={`/listing/flight/details/${detail?.code}`}>
              <button type='button' className='h-[30px] w-[120px] text-center bg-primaryBlue text-white text-[14px] font-bold rounded-[30px]'>
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className='flex lg:hidden flex-col items-center w-full text-center font-DMSans'>
        <p className='font-medium text-[24px] text-cBlack-2 dark:text-cBlack-8'>${(detail.price).toFixed(2)}</p>
        <Link href={`/listing/flight/details/${detail?.code}`}>
          <button type='button' className='h-[30px] w-[120px] text-center bg-primaryBlue text-white text-[14px] font-bold rounded-[30px]'>
            Book Now
          </button>
        </Link>
      </div>
      <div className='h-[1px] w-full bg-cBlack-6 dark:bg-cBlack-3' />
    </div>
  );
};

export default FlightListingCard;
