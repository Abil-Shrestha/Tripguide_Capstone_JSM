/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { Dispatch, SetStateAction } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CgArrowsExchange } from 'react-icons/cg';

import { selectLocation } from '../../redux/features/globalSlice';

interface IProps {
  id: string;
  label: string;
  placeholder: string;
  style: string;
  handleFocus: Dispatch<SetStateAction<boolean>>;
  divider: boolean | null;
}

const SearchInput = ({ id, label, placeholder, style, handleFocus, divider }: IProps) => {
  const dispatch = useDispatch();
  const { location } = useSelector((state) => state.global);

  return (
    <>
      <label htmlFor={id}>
        {label} <br />
        <input
          id={id}
          type='text'
          onChange={(e) => dispatch(selectLocation(e.target.value))}
          value={location}
          placeholder={placeholder}
          className={style}
          onFocus={() => handleFocus(true)}
          autoComplete='off'
        />
      </label>
      {divider && (
      <div className='absolute z-10 -right-5 bottom-6 rounded-full p-1 bg-white dark:bg-cBlack-3'>
        <CgArrowsExchange className='h-6 w-6 text-cBlack-5' />
      </div>
      )}
    </>
  );
};

export default SearchInput;
