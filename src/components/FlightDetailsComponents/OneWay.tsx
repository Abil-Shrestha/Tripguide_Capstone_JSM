import Image from 'next/image';

import { useGlobalContext } from '@context/GlobalContext';

const styles = {
  textInfo: 'text-cBlack-3 dark:text-cBlack-7',
  textDetail: 'text-cBlack-4 dark:text-cBlack-5',
};

const OneWay = () => {
  const { activeFlight, flightStartDate, flightOneWay, flightFromLocation, flightToLocation } = useGlobalContext();
  return (
    <div className='flex flex-col gap-[40px] font-DMSans'>
      <div className='flex flex-col gap-[30px]'>
        <div className='flex items-center justify-between pb-[25px] border-b-[1px] border-b-cBlack-6 dark:border-b-cBlack-3'>
          <div className='flex flex-col gap-2 font-medium '>
            <p className='text-[24px] text-cBlack-2 dark:text-cBlack-8'>{`${flightFromLocation?.split(' ')[0]} ${flightFromLocation.split(' ')[1]?.replace(/,/g, '') || ''}`} To&nbsp;
              { `${flightToLocation.split(' ')[0]} ${flightToLocation.split(' ')[1] || ''}`}
            </p>
            <p className='text-[14px] text-cBlack-4 dark:text-cBlack-5'>{flightOneWay ? 'Non Stop' : 'Round Trip'} | 2 hr 20 mins | Economy | {flightStartDate?.toDateString()}</p>
          </div>
          <button
            type='button'
            className='h-[44px] w-[148px] text-center bg-[#FA8F5433] text-[#FA8F54] rounded-[10px]'
          >
            {/* todo: make dynamic */}
            Change Flight
          </button>
        </div>
        <div className='flex items-start justify-between'>
          <div className='flex gap-5 items-center'>
            <Image src={activeFlight?.image} height={35} width={52} priority objectFit='contain' />
            <div className='flex flex-col gap-1 font-medium'>
              <p className={`${styles.textInfo} text-[18px]`}>{activeFlight?.name}</p>
              <p className={`${styles.textDetail} text-[16px]`}>GE-965 320</p>
            </div>
          </div>
          <div className='flex flex-col font-medium'>
            <p className={`${styles.textInfo} text-[24px]`}>8:45 am</p>
            <p className={`${styles.textDetail} text-[14px]`}>{flightStartDate?.toDateString()}</p>
            <p className={`${styles.textDetail} text-[14px] w-[219px]`}>{flightFromLocation}</p>
          </div>
          <div className='flex flex-col gap-[2px] justify-center items-center'>
            <p className={`${styles.textDetail} font-medium text-[16px]`}>05 hrs 20 mins</p>
            <Image src='/assets/FlightListing/flightdash.png' height={22} width={130} priority />
          </div>
          <div className='flex flex-col font-medium'>
            <p className={`${styles.textInfo} text-[24px]`}>12:45 pm</p>
            <p className={`${styles.textDetail} text-[14px]`}>{flightStartDate?.toDateString()}</p>
            <p className={`${styles.textDetail} text-[14px] w-[176px]`}>
              {flightToLocation}
            </p>
          </div>
        </div>
      </div>
      {/* Todo: make this dynamic with features for flights */}
      {/* Details */}
      <div className='flex gap-[50px]'>
        <div className='flex flex-col gap-[9px] font-medium text-[16px]'>
          <p className={styles.textInfo}>Baggage</p>
          <p className={styles.textDetail}>Adult</p>
        </div>
        <div className='flex flex-col gap-[9px] font-medium text-[16px]'>
          <p className={styles.textInfo}>Check-In</p>
          <p className={styles.textDetail}>20Kgs</p>
        </div>
        <div className='flex flex-col gap-[9px] font-medium text-[16px]'>
          <p className={styles.textInfo}>Cabin</p>
          <p className={styles.textDetail}>7 kg</p>
        </div>
        <div className='flex flex-col gap-[9px] font-medium text-[16px]'>
          <p className={styles.textInfo}>Meals</p>
          <p className={styles.textDetail}>Meals Not Available</p>
        </div>
      </div>
    </div>
  );
};

export default OneWay;
