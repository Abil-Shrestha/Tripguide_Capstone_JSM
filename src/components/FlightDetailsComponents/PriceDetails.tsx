import Link from 'next/link';

import { useGlobalContext } from '@context/GlobalContext';

const styles = {
  label: 'text-[20px] text-cBlack-3 dark:text-cBlack-8',
  detail: 'text-[16px] text-cBlack-4 dark:text-cBlack-5',
};

const PriceDetails = () => {
  const { activeFlight, flightPassengers } = useGlobalContext();
  return (
    <div className='flex flex-col gap-5 h-[712px] w-[335px] bg-white dark:bg-cBlack-2 pt-[22px] font-DMSans border-[1px] border-cBlack-6 dark:border-cBlack-3 rounded-[10px] divide-y-2 divide-cBlack-6 dark:divide-cBlack-3'>
      <div className='flex flex-col gap-[20px] px-[21px]'>
        <p className='font-medium text-[20px] text-[#333333] dark:text-cBlack-8'>Price Details</p>
        <div className='flex flex-col gap-[20px]'>

          <div className='flex justify-between px-[13px] font-medium text-[16px]'>
            <p className='text-cBlack-4 dark:text-cBlack-5'>{flightPassengers}x Passenger</p>
            <p className='text-cBlack-2 dark:text-cBlack-8'>${activeFlight?.price.toFixed(2)}</p>
          </div>
          <div className='flex justify-between px-[13px] font-medium text-[16px]'>
            <p className='text-cBlack-4 dark:text-cBlack-5'>Tax</p>
            <p className='text-cBlack-2 dark:text-cBlack-8'>$0</p>
          </div>

          <div className='flex justify-between p-[8px_13px] font-medium text-[16px] text-cBlack-2 dark:text-cBlack-8 bg-[#3B71FE]/20 dark:bg-cBlack-3 rounded-[6px]'>
            <p>Total</p>
            <p>${activeFlight?.price.toFixed(2)}</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-[18px] pt-[18px] px-[21px] font-DMSans font-medium'>
        <p className={styles.label}>Passengers</p>
        <p className={styles.detail}>1x adult 2 children</p>
      </div>
      <div className='flex flex-col gap-[18px] pt-[18px] px-[21px] font-DMSans font-medium'>
        <p className={styles.label}>Check-in baggage</p>
        <div className='flex flex-col gap-4'>
          <div className='flex justify-between'>
            <p className={styles.detail}>Departure</p>
            <p className={styles.detail}>3 bags ( 120g total )</p>
          </div>
          <div className='flex justify-between'>
            <p className={styles.detail}>Return</p>
            <p className={styles.detail}>3 bags ( 120g total )</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-2 pt-[18px] px-[21px] font-DMSans font-medium'>
        <p className={styles.label}>Services</p>
        <p className={styles.detail}>No extra services selected</p>
      </div>
      <div className='flex h-full items-center justify-center'>
        <Link href={`/confirm/flight/${activeFlight?.code}`}>
          <button type='button' className='bg-[#316BFF] rounded-[30px] w-[190px] h-[50px] text-white font-[700]'>Book this Flight</button>
        </Link>
      </div>
    </div>
  );
};

export default PriceDetails;
