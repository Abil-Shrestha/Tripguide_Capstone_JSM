import { useTheme } from 'next-themes';

interface Data {
  id: number;
  name: string;
  desc: string;
  image: string;
  darkImage: string;
}

interface IProps {
  data: Data;
}

const CarOptionCard = ({ data }: IProps) => {
  const { theme, setTheme } = useTheme();

  return (
    <div className='flex flex-col gap-2 h-[211px] w-[241px] items-center justify-center'>
      <img src={theme === 'dark' ? data.darkImage : data.image} alt='option' />
      <p className='text-[24px] text-[#3B3E44] text-center dark:text-white'>{data.name}</p>
      <p className='text-[#84878B] font-[400] text-[14px] text-center dark:text-[#B1B5C4]'>{data.desc}</p>
    </div>
  );
};

export default CarOptionCard;
