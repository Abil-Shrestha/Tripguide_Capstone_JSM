import { FiCheck } from 'react-icons/fi';

interface IRoom {
  room: {
    roomId: string;
    roomDisplayName: string;
    displayableRates: {
        displayPrice: number;
    }[];
    longDescription: number;
    roomFeatures: {
      condo: boolean;
      highlightedRoomAmenities: {
          code: string;
          name: string;
      }[];
    };
  }
}

const SelectRoomCard = ({ room }: IRoom) => (
  <div key={room.roomId} className='flex justify-between bg-white dark:bg-cBlack-2 border-[1px] p-[22px_26px] border-cBlack-6 dark:border-cBlack-3 rounded-[10px]'>
    <div className='flex flex-col gap-4'>
      <div className='flex flex-col justify-between h-[67px] font-DMSans'>
        <p className='text-[24px] font-medium text-cBlack-2 dark:text-cBlack-8'>{room.roomDisplayName}</p>
        <p className='text-[14px] font-normal text-cBlack-4'>Offer conditions:</p>
      </div>
      <div className='flex flex-col gap-[7px] font-DMSans text-[14px] text-cBlack-3 dark:text-cBlack-5 font-normal'>
        {room.roomFeatures.highlightedRoomAmenities.map((feat) => (
          <p key={feat.code} className='flex gap-1 items-center'>
            <FiCheck className='h-5 w-5 text-[#03A782]' /> {feat.name}
          </p>
        ))}
      </div>
    </div>
    <div className='flex flex-col gap-[19px] font-DMSans'>
      <p className='flex h-[44px] text-[34px] font-bold text-cBlack-1 dark:text-cBlack-8'>
        ${room.displayableRates[0].displayPrice}
        <span className='flex self-end font-normal text-cBlack-4 dark:text-cBlack-5 text-[20px]'>/night</span>
      </p>
      <p className='flex flex-col items-end text-[18px] font-medium text-[#FFAF4E]'>
        Save $4
        <span className='text-[12px] text-cBlack-4 dark:text-cBlack-5 font-normal'>on TripGuide.com $106</span>
      </p>
      <button type='button' className='flex self-end items-center justify-center h-[40px] w-[88px] text-[18px] text-white font-medium bg-primaryBlue rounded-[6px]'>
        Select
      </button>
    </div>
  </div>
);

export default SelectRoomCard;
