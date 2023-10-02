import { ReactNode } from 'react';

interface IProps {
  label: string;
  children: ReactNode;
}

const FilterTypeContainer = ({ label, children }: IProps) => (
  <div className='flex flex-col gap-[15px] pb-7 border-b-[2px] border-cBlack-6 dark:border-cBlack-3'>
    <p className='text-[18px] text-cBlack-1 dark:text-white font-DMSans font-medium'>{label}</p>
    {children}
  </div>
);

export default FilterTypeContainer;
