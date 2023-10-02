import { ChangeEvent } from 'react';

interface IProps {
  price: number;
  min: number;
  max: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const RangeSlider = ({ price, min, max, onChange }: IProps) => (
  <div className='flex flex-col gap-[23px]'>
    <div className='flex gap-[30px] items-center'>
      <input
        type='range'
        value={price}
        min={min}
        max={max}
        onChange={(e) => onChange(e)}
        className='range-slider w-full h-1 rounded-lg appearance-none cursor-pointer bg-[#E9EDF1] dark:bg-cBlack-6'
      />
      <div className='flex justify-center w-[56px] h-[30px] rounded-[6px] border-[1px] border-primaryBlue bg-white dark:bg-cBlack-2'>
        <input
          type='number'
          value={price}
          onChange={(e) => onChange(e)}
          className='range-arrows bg-transparent text-center w-[56px] text-cBlack-3 dark:text-cBlack-8 font-bold text-[16px] focus:outline-none cursor-pointer'
        />
      </div>
    </div>
    <div className='flex justify-between text-cBlack-3 dark:text-cBlack-8 font-DMSans font-medium text-[16px]'>
      <p>${min}</p>
      <p>${max}</p>
    </div>
  </div>
);

export default RangeSlider;
