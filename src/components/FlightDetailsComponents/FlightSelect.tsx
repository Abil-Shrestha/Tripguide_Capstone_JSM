import { Dispatch, SetStateAction } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

interface IProps {
  label: string;
  open: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
  datas: string[];
  width?: number;
  dropHeight?: number;
}

const FlightSelect = ({ label, open, isOpen, datas, width, dropHeight }: IProps) => (
  <div className='relative'>
    <button
      type='button'
      onClick={() => open((prev) => !prev)}
      className={`flex justify-between h-[47px] w-[${width}px] p-[13px_20px] font-normal text-[14px] dark:text-cBlack-5 bg-white dark:bg-cBlack-2 rounded-[10px]`}
    >
      {label} <MdKeyboardArrowDown className='h-5 w-5' />
    </button>
    {isOpen && (
    <div className={`absolute flex flex-col gap-2 h-[${dropHeight}px] w-[${width}px] font-normal text-[14px] border-[1px] border-cBlack-6 dark:border-cBlack-3 rounded-[10px] overflow-auto bg-white dark:bg-cBlack-2`}>
      {datas?.map((data, idx) => (
        <div key={idx} className='dark:text-cBlack-5 hover:bg-primaryBlue hover:text-white p-[6px_20px] cursor-pointer'>{data}</div>
      ))}
    </div>
    )}
  </div>
);

export default FlightSelect;
