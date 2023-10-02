import { CgArrowsExchange } from 'react-icons/cg';
import { Calendar } from '@components';

const CalendarInput = ({ id, label, divider, width, startDate, setStartDate, endDate, setEndDate, type }) => (
  <div className={`relative flex flex-col h-[80px] p-[11px_24px] bg-[#E7E8EA] focus:bg-[#E8EFFF] dark:bg-cBlack-3 rounded-lg ${width}`}>
    <p>{label}</p>
    <Calendar id={id} label={label} startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} type={type} />
    {divider && (
      <div className='absolute z-10 -right-5 bottom-6 rounded-full p-1 bg-white dark:bg-cBlack-3'>
        <CgArrowsExchange className='h-6 w-6 text-cBlack-5' />
      </div>
    )}
  </div>
);

export default CalendarInput;
