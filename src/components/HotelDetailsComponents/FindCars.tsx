import { useState } from 'react';

import { FindCarsCard } from '@components';
import { findCars } from '@utils/tempdata/HotelDetails';
import { findCarButtons } from '@utils/tempdata/constants';

const styles = {
  findCarButton: 'flex items-center justify-center h-[30px] w-[100px] text-[14px] rounded-[30px]',
};

const FindCars = () => {
  const [findCarActive, setFindCarActive] = useState('Popular');
  const handleActiveFindCar = (event) => {
    setFindCarActive(event.target.value);
  };

  return (
    <div className='flex flex-col gap-[28px] w-[1170px]'>
      <div className='flex items-center justify-between p-[21px_39px] dark:bg-cBlack-2'>
        <p className='text-[34px] font-DMSans font-bold text-cBlack-1 dark:text-cBlack-7'>Find 250+ Cars</p>
        <div className='flex gap-[39px] font-DMSans'>
          {findCarButtons.map((button) => (
            <button
              key={button.label}
              type='button'
              value={button.label}
              onClick={handleActiveFindCar}
              className={`${styles.findCarButton} ${findCarActive === button.label ? 'bg-primaryBlue text-cBlack-8 font-bold' : 'text-cBlack-3 dark:text-cBlack-6 font-normal'} `}
            >
              {button.label}
            </button>
          ))}
        </div>
      </div>
      <div className='flex gap-[30px] h-[433px]'>
        {findCars.map((car) => (
          <FindCarsCard car={car} />
        ))}
      </div>
    </div>
  );
};

export default FindCars;
