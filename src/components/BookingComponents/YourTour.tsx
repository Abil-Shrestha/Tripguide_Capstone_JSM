import { BiEditAlt } from 'react-icons/bi';

interface IProps {
  label: string;
  info: string;
}

const YourTour = ({ label, info }: IProps) => (
  <div className='flex justify-between items-center rounded-[15px] bg-[#F4F4F6] dark:bg-cBlack-2 p-[7px_20px]'>
    <div className='flex flex-col font-DMSans text-[16px] font-medium'>
      <p className='text-cBlack-1 dark:text-cBlack-5'>{label}</p>
      <p className='text-cBlack-4'>{info}</p>
    </div>
    <BiEditAlt className='h-6 w-6 text-cBlack-4' />
  </div>
);

export default YourTour;
