import Image from 'next/image';

interface ICarDetailsImagesProps {
  images: string[];
}

const CarDetailsImages = ({ images }:ICarDetailsImagesProps) => (
  <div className='flex mt-10 w-full rounded-[25px] overflow-clip gap-[17px]'>
    <div className='relative w-full h-[721px] lg:h-[821px]'>
      <Image src='/assets/CarImages/vanDetails.jpg' layout='fill' objectFit='cover' priority />
    </div>
    <div className='hidden lg:flex flex-col gap-[17px] justify-between'>
      {images.map((image, i) => (
        <div className='relative h-[258px] w-[396px]' key={i}>
          <Image src={image} layout='fill' objectFit='cover' priority />
        </div>
      ))}
    </div>
  </div>
);

export default CarDetailsImages;
