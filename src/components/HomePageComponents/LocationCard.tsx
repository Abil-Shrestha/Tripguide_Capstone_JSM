import { Dispatch, SetStateAction } from 'react';
import { TiLocationOutline } from 'react-icons/ti';
import { useDispatch } from 'react-redux';

import { selectLocation, selectLocationId } from '../../redux/features/globalSlice';

interface IProps {
  locations: {
    cityID: string;
    cityName: string;
    countryName: string;
    itemName: string;
  };
  handleFocus: Dispatch<SetStateAction<boolean>>;
}

const LocationCard = ({ locations, handleFocus }: IProps) => {
  const dispatch = useDispatch();

  return (
    <div
      key={locations.cityID}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(selectLocation(`${locations.cityName}, ${locations.countryName}`));
        dispatch(selectLocationId(locations.cityID));
        handleFocus(false);
      }}
      className='flex gap-[5px] h-[47px] w-full cursor-pointer group'
    >
      <div className='flex items-center'>
        <TiLocationOutline className='h-7 w-7 text-cBlack-5 group-hover:text-primaryBlue' />
      </div>
      <div className=' flex flex-col gap-[2px] max-w-[300px] font-DMSans'>
        <p className='font-medium text-[#777E91] dark:text-cBlack-6 text-[16px] group-hover:text-cBlack-1'>{locations.cityName}</p>
        <p className='flex font-normal text-[#B1B5C4] dark:text-cBlack-4 text-[14px] truncate group-hover:text-cBlack-1'>{locations.itemName}, {locations.countryName}</p>
      </div>
    </div>
  );
};

export default LocationCard;
