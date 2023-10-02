import { useState } from 'react';

import { days, genders, months, years } from '@utils/tempdata/FlightDetails';
import { FlightSelect, FlightInput } from '@components';

const PassengerDetails = () => {
  const [isGenderOpen, setIsGenderOpen] = useState(false);
  const [isMonthOpen, setIsMonthOpen] = useState(false);
  const [isDayOpen, setIsDayOpen] = useState(false);
  const [isYearOpen, setIsYearOpen] = useState(false);
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [selectedGender, setSelectedGender] = useState('Choose a gender');

  const handleFirstname = (e) => {
    setFirstname(e.target.value);
  };

  const handleLasttname = (e) => {
    setLastname(e.target.value);
  };

  return (
    <div className='flex flex-col gap-[24px] h-[345px] w-[939px] p-[40px_46px] bg-white dark:bg-cBlack-2 border-[1px] border-cBlack-6 dark:border-cBlack-3 rounded-[20px] font-DMSans'>
      <div className='flex flex-col gap-[30px]'>
        <p className='font-medium text-[24px] text-cBlack-2 dark:text-cBlack-8'>Passenger Details</p>
        <div className='flex gap-[30px]'>
          <FlightInput label='First name' type='text' value={firstname} onChange={handleFirstname} />
          <FlightInput label='Last name' type='text' value={lastname} onChange={handleLasttname} />
        </div>
      </div>
      <div className='flex gap-[30px]'>
        <div className='relative flex flex-col gap-[10px] text-cBlack-4'>
          <p className='font-bold text-[16px]'>Gender </p>
          <div className='border-[1px] border-cBlack-6 dark:border-cBlack-3 rounded-[10px]'>
            <FlightSelect label='Choose a gender' open={setIsGenderOpen} isOpen={isGenderOpen} datas={genders} width={198} />
          </div>
        </div>
        <div>
          <div className='flex flex-col gap-[10px] text-cBlack-4'>
            <p className='font-bold text-[16px]'>Birth Day</p>
            <div className='flex border-[1px] border-cBlack-6 dark:border-cBlack-3 rounded-[10px] divide-x-2 divide-cBlack-6 dark:divide-cBlack-3'>
              <FlightSelect label='Day' open={setIsDayOpen} isOpen={isDayOpen} datas={days} width={110} dropHeight={200} />
              <FlightSelect label='Month' open={setIsMonthOpen} isOpen={isMonthOpen} datas={months} width={150} dropHeight={200} />
              <FlightSelect label='Year' open={setIsYearOpen} isOpen={isYearOpen} datas={years} width={110} dropHeight={200} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassengerDetails;
