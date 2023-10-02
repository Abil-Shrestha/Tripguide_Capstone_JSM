import { ChangeEvent } from 'react';

interface IProps {
  label: string;
  name?: string;
  type: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const FlightInput = ({ label, name, type, onChange, value }: IProps) => (
  <label htmlFor={label} className='font-bold text-[16px] text-cBlack-4 dark:text-cBlack-5'>
    {label} <br />
    <input
      id={label}
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={label}
      className='h-[47px] w-[376px] mt-[14px] p-[13px_20px] font-normal text-[14px] bg-white dark:bg-cBlack-2 dark:text-cBlack-5 border-[1px] border-cBlack-6 dark:border-cBlack-3 rounded-[10px] focus:outline-none'
    />
  </label>
);

export default FlightInput;
