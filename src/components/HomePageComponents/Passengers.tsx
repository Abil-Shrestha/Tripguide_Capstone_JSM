import { Dispatch, SetStateAction, useState } from 'react';
import { PassengerType } from '@components';
import { useGlobalContext } from '@context/GlobalContext';

const Passengers = () => {
  const { adults, setAdults, childrenPassenger, setChildrenPassenger, infants, setInfants } = useGlobalContext();

  const adultIncrement = () => setAdults((prev) => prev + 1);
  const adultDecrement = () => setAdults((prev) => prev - 1);
  const childIncrement = () => setChildrenPassenger((prev) => prev + 1);
  const childDecrement = () => setChildrenPassenger((prev) => prev - 1);
  const infantIncrement = () => setInfants((prev) => prev + 1);
  const infantDecrement = () => setInfants((prev) => prev - 1);

  return (
    <div className='absolute right-0 -top-[230px] flex flex-col gap-2 p-[13px_29px] h-[220px] w-[353px] font-DMSans bg-white dark:bg-cBlack-2 overflow-clip rounded-[16px] divide-y-2 divide-[#E6E8EC] dark:divide-cBlack-3 shadow-home-bookings-card'>
      <PassengerType label='Adults' desc='Ages 13 or above' count={adults} increase={adultIncrement} decrease={adultDecrement} />
      <PassengerType label='Children' desc='Ages 2 to 12' count={childrenPassenger} increase={childIncrement} decrease={childDecrement} />
      <PassengerType label='Infants' desc='Under 2' count={infants} increase={infantIncrement} decrease={infantDecrement} />
    </div>
  );
};

export default Passengers;
