import { ChangeEvent } from 'react';

interface IProps {
  label: {
    label: string;
    inlineCount?: number;
    count?: number;
    price?: number | string;
  };
  checked: string[];
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const Checkbox = ({ label, checked, onChange }: IProps) => (
  <div key={label.label} className='flex justify-between'>
    <label htmlFor={label.label} className='capitalize flex items-center text-[14px] text-cBlack-3 dark:text-cBlack-6 font-DMSans font-normal cursor-pointer'>
      <input
        id={label.label}
        type='checkbox'
        value={label.label}
        onChange={(e) => onChange(e)}
        className={`${checked.includes(label.label) && 'checked'} cursor-pointer mr-3 appearance-none h-[22px] w-[22px] rounded-[6px] border-[1.5px] border-cBlack-4 hover:border-primaryBlue`}
      />
      {label.label}
      {label?.count && (
        <span className='ml-1'>({label?.count})</span>
      )}
    </label>
    {label?.price && (
      <p className={`${checked.includes(label.label) ? 'text-cBlack-3 dark:text-cBlack-8' : 'text-cBlack-5'} text-[14px] font-DMSans font-medium`}>${label?.price}</p>
    )}
  </div>
);

export default Checkbox;
