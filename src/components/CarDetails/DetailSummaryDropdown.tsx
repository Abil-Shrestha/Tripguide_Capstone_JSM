/* eslint-disable jsx-a11y/label-has-associated-control */
import { BsChevronUp, BsChevronRight } from 'react-icons/bs';

interface IDetailSummaryDropdownProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  title: string;
  content: JSX.Element;
  additionalContent?: JSX.Element;
}

const DetailSummaryDropdown = ({ isOpen, setIsOpen, title, content, additionalContent }: IDetailSummaryDropdownProps) => (
  <>
    <div className={`py-4 flex items-start justify-between ${!isOpen && 'border-b border-[#F4F4F4] dark:border-[#3B3E44]'}`}>
      <div>
        {title}
      </div>
      <div>
        {isOpen
          ? (
            <BsChevronUp className='cursor-pointer' onClick={() => setIsOpen(false)} />
          )
          : (
            <BsChevronRight className='cursor-pointer' onClick={() => setIsOpen(true)} />
          )}
      </div>
    </div>
    <div className={`${isOpen ? `${additionalContent ? 'h-[220px]' : 'h-[110px]'}border-b pb-4` : 'h-0 hidden'} border-[#F4F4F4] transition-all duration-300 ease-in-out pb-4 flex xl:flex-col gap-4 w-full`}>
      <div className={`${isOpen ? 'w-full visibile flex animate-slowfade' : 'invisible hidden'}`}>
        {content}
      </div>
      {additionalContent && (
      <div className={`${isOpen ? 'w-full visibile flex animate-slowfade' : 'invisible hidden'}`}>
        {additionalContent}
      </div>
      )}
    </div>
  </>
);

export default DetailSummaryDropdown;
