import { useState } from 'react';

import { ActiveDescription } from '@components';
import { detailTabsButtons } from '@utils/tempdata/constants';

interface IDescription {
  desc: string;
}

const HotelDescriptions = ({ desc }: IDescription) => {
  const [activeDescription, setActiveDescription] = useState('Description');
  const handleActiveDescription = (event) => {
    setActiveDescription(event.target.value);
  };

  return (
    <div className='flex flex-col gap-4 mt-[10px]'>
      <div className='flex gap-8 text-[16px] font-medium font-Roboto dark:border-b-2 dark:border-b-cBlack-3'>
        {detailTabsButtons.map((tab) => (
          <button
            key={tab.label}
            type='button'
            value={tab.label}
            onClick={handleActiveDescription}
            className={`pb-4 ${activeDescription === tab.label ? 'text-primaryBlue dark:text-[#145CE6] border-b-2 border-b-primaryBlue dark:border-b-[#145CE6]' : 'text-cBlack-5 dark:text-cBlack-6'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <ActiveDescription activeDescription={activeDescription} desc={desc} />
    </div>
  );
};

export default HotelDescriptions;
