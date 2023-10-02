import { HiPlusSm, HiMinusSm } from 'react-icons/hi';

const PassengerType = ({ label, desc, count, increase, decrease }) => (
  <div className='flex items-center justify-between h-[59px] w-[295px]'>
    <div className='flex flex-col'>
      <p className='font-medium text-[16px] text-cBlack-4 dark:text-cBlack-7'>{label}</p>
      <p className='font-normal text-[14px] text-cBlack-4'>{desc}</p>
    </div>
    <div className='flex justify-between items-center w-[100px]'>
      <button
        type='button'
        className={`${count === 0 && 'text-cBlack-4 border-cBlack-4'} flex items-center justify-center h-[32px] w-[32px] rounded-full border-[1px] border-[#B1B5C3]`}
        disabled={count === 0}
        onClick={decrease}
      >
        <HiMinusSm className='h-4 w-4 text-[#B1B5C3] dark:text-cBlack-4' />
      </button>
      <p className='font-poppins text-[#B1B5C3] dark:text-[#777E91]'>{count}</p>
      <button
        type='button'
        className='flex items-center justify-center h-[32px] w-[32px] rounded-full border-[1px] border-cBlack-4'
        onClick={increase}
      >
        <HiPlusSm className='h-4 w-4 text-[#B1B5C3] dark:text-cBlack-4' />
      </button>
    </div>
  </div>
);

export default PassengerType;
