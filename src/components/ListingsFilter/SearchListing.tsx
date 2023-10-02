import { BiSearch } from 'react-icons/bi';

interface IProps {
  label: string;
  placeholder: string;
}

const SearchListing = ({ label, placeholder }: IProps) => (
  <div className='flex flex-col gap-[14px]'>
    <p className='text-cBlack-1 dark:text-white text-[18px] font-DMSans font-medium'>
      {label}
    </p>
    <div className='flex justify-between bg-white dark:bg-cBlack-2 text-cBlack-1 dark:text-cBlack-8 p-[11px_14px] rounded-[10px] border-[1px] border-cBlack-6 dark:border-cBlack-3'>
      <input
        type='text'
        placeholder={placeholder}
        className='focus:outline-none bg-transparent text-[16px] font-DMSans font-normal w-[204px]'
      />
      <BiSearch className='h-6 w-6 text-cBlack-5' />
    </div>
  </div>
);

export default SearchListing;
