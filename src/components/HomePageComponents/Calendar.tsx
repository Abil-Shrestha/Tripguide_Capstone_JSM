'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */
import { forwardRef } from 'react';
import { useDispatch } from 'react-redux';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import DatePicker, { CalendarContainer } from 'react-datepicker';

import { selectCheckIn, selectCheckOut } from '@redux/features/globalSlice';
import 'react-datepicker/dist/react-datepicker.css';

interface ICustomInput {
  id: string;
  label: string;
  startDate: any;
  endDate: any;
  onClick: any
}

const MyContainer = ({ className, children }) => (
  <CalendarContainer className={className}>
    <div className='flex justify-around px-1 h-max w-[686px] pb-2 bg-primary shadow-home-bookings-card'>
      {children}
    </div>
  </CalendarContainer>
);

const CustomInput = forwardRef(({ id, label, startDate, endDate, onClick }: ICustomInput, ref: any) => {
  const start = startDate?.toLocaleString('en-US', {
    day: '2-digit',
    month: 'short',
  });

  const end = endDate?.toLocaleString('en-US', {
    day: '2-digit',
    month: 'short',
  });

  const style = '!font-poppins mt-2 text-[16px] text-cBlack-5/90 focus:outline-none bg-transparent';

  // todo: address this in future refactor so we can control labels easier

  switch (true) {
    case (label === 'Check in' && startDate !== null):
      return (
        <button
          id={id}
          type='button'
          className={`${style} cursor-pointer`}
          onClick={onClick}
          ref={ref}
        >
          {start}
        </button>
      );
    case (label === 'Check out' && endDate !== null):
      return (
        <button
          id={id}
          type='button'
          disabled
          className={style}
          onClick={onClick}
          ref={ref}
        >
          {end}
        </button>
      );
    default:
      return (
        <button
          type='button'
          className={style}
          disabled={label === 'Check out'}
          onClick={onClick}
          ref={ref}
        >
          {label === 'Check out' ? 'Check in first' : 'Add Date'}
        </button>
      );
  }
});

const Calendar = ({ id, label, type, startDate, endDate, setStartDate, setEndDate }) => {
  const dispatch = useDispatch();

  const onChange = (dates: any) => {
    const [start, end] = dates;
    if (type === 'Hotels') {
      dispatch(selectCheckIn(start));
      dispatch(selectCheckOut(end));
    } else {
      setStartDate(start);
      setEndDate(end);
    }
  };


  return (
    <DatePicker
      showPopperArrow={false}
      selected={startDate}
      onChange={onChange}
      monthsShown={2}
      startDate={startDate}
      endDate={endDate}
      selectsRange
      minDate={new Date()}
      showDisabledMonthNavigation
      customInput={<CustomInput id={id} label={label} startDate={startDate} endDate={endDate} onClick={undefined} />}
      calendarContainer={MyContainer}
      calendarClassName='flex items-center justify-center w-fit font-DMSans border-none'
      renderCustomHeader={({
        monthDate,
        customHeaderCount,
        decreaseMonth,
        increaseMonth,
      }) => (
        <div className='flex items-center justify-center'>
          <button
            type='button'
            aria-label='Previous Month'
            className='absolute left-0'
            style={customHeaderCount === 1 ? { visibility: 'hidden' } : null}
            onClick={decreaseMonth}
          >
            <MdKeyboardArrowLeft className='w-4 h-5 text-cBlack-4 dark:text-cBlack-8' />
          </button>
          <p className='text-cBlack-3 dark:text-cBlack-8 text-[25px] font-medium'>
            {monthDate.toLocaleString('en-US', {
              month: 'long',
              year: 'numeric',
            })}
          </p>
          <button
            type='button'
            aria-label='Next Month'
            className='absolute right-0'
            style={customHeaderCount === 0 ? { visibility: 'hidden' } : null}
            onClick={increaseMonth}
          >
            <MdKeyboardArrowRight className='w-4 h-5 text-cBlack-4 dark:text-cBlack-8' />
          </button>
        </div>
      )}
    />
  );
};

export default Calendar;
