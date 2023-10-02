import Image from 'next/image';

interface IImages {
  imgs: {
      imageHDUrl: string;
  }[]
}

const HotelDetailImages = ({ imgs }: IImages) => (
  <div className='flex gap-[17px] h-[632px] rounded-[25px] overflow-clip'>
    <div className='relative h-[632px] w-[756px]'>
      <Image src={imgs?.[0]?.imageHDUrl} layout='fill' objectFit='cover' priority />
    </div>
    <div className='flex flex-col gap-[17px]'>
      <div className='relative h-[216px] w-[498px]'>
        <Image src={imgs?.[1]?.imageHDUrl} layout='fill' objectFit='cover' priority />
      </div>
      <div className='relative h-[216px] w-[498px]'>
        <Image src={imgs?.[2]?.imageHDUrl} layout='fill' objectFit='cover' priority />
      </div>
      <div className='relative h-[216px] w-[498px]'>
        <Image src={imgs?.[3]?.imageHDUrl} layout='fill' objectFit='cover' priority />
      </div>
    </div>
  </div>
);

export default HotelDetailImages;
