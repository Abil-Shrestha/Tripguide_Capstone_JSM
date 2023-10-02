import Image from 'next/image';
import { SiManjaro } from 'react-icons/si';
import { HiDotsVertical } from 'react-icons/hi';

interface IProps {
  bgColor: string;
  cardTypeImage: string;
}

const PlaceholderCard = ({ bgColor, cardTypeImage }: IProps) => (
  <div className={`flex flex-col justify-between gap-[27px] h-[161px] w-[336px] py-[20px] px-[18.5px] rounded-[20px] ${bgColor}`}>
    <div className='relative flex justify-between items-center h-[28px]'>
      <p className='rounded-[5px] overflow-clip'><SiManjaro className='h-7 w-7 text-cBlack-3' /></p>
      <p className='absolute -right-2'><HiDotsVertical className='h-6 w-6 text-cBlack-4' /></p>
    </div>
    <div className='flex flex-col gap-[8px] h-[60px] font-DMSans text-[16px] text-[#3D4852] font-medium'>
      <p>8949 xxxx xxxx 7894</p>
      <div className='flex justify-between items-center'>
        <p>Holder Name</p>
        <div className='relative h-[25px] w-[66px]'>
          <Image src={cardTypeImage} layout='fill' objectFit='contain' />
        </div>
      </div>
    </div>
  </div>
);

export default PlaceholderCard;
