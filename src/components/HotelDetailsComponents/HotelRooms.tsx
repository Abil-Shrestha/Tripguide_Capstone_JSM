import { SelectRoomCard } from '@components';

interface IRooms {
  rooms: {
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
  }[]
}

const HotelRooms = ({ rooms }: IRooms) => (
  <div className='flex flex-col gap-[20px] w-[966px]'>
    <p className='text-[40px] text-cBlack-2 dark:text-white font-DMSans font-bold'>Select Room</p>
    <div className='flex flex-col gap-[30px]'>
      {rooms?.slice(0, 5).map((room) => (
        <SelectRoomCard room={room} />
      ))}
    </div>
  </div>
);

export default HotelRooms;
