import { useState } from 'react';

import { genders } from '@utils/tempdata/FlightDetails';
import { FlightInput, FlightSelect } from '@components';

const PassengerDetailsAdult = () => {
  const [isGenderOpen, setIsGenderOpen] = useState(false);
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

  const handleFirstname = (e) => {
    setFirstname(e.target.value);
  };

  const handleLasttname = (e) => {
    setLastname(e.target.value);
  };

  return (
    <div className='flex flex-col gap-[24px] h-[345px] w-[939px] p-[40px_46px] bg-white dark:bg-cBlack-2 border-[1px] border-cBlack-6 dark:border-cBlack-3 rounded-[20px] font-DMSans'>
      <div className='flex flex-col gap-[30px]'>
        <p className='font-medium text-[24px] text-cBlack-2 dark:text-cBlack-8'>Passenger Details (Adult)</p>
        <div className='flex gap-[30px]'>
          <FlightInput label='First name' type='text' value={firstname} onChange={handleFirstname} />
          <FlightInput label='Last name' type='text' value={lastname} onChange={handleLasttname} />
        </div>
      </div>
      <div className='relative flex flex-col gap-[10px] text-cBlack-4'>
        <p className='font-bold text-[16px]'>Gender </p>
        <div className='border-[1px] border-cBlack-6 dark:border-cBlack-3 rounded-[10px] w-max'>
          <FlightSelect label='Choose a gender' open={setIsGenderOpen} isOpen={isGenderOpen} datas={genders} width={198} />
        </div>
      </div>
    </div>
  );
};

export default PassengerDetailsAdult;
