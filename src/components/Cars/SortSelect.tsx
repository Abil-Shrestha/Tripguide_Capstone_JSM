/* eslint-disable no-shadow */
import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { AiFillCheckCircle } from 'react-icons/ai';
import { BsChevronDown } from 'react-icons/bs';

const carSort = [
  { name: 'Best Match' },
  { name: 'Top Sellers' },
  { name: 'Cheapest' },
  { name: 'Best Value' },
  { name: 'Discounted' },
  { name: 'New Arrivals' },
];

const SortSelect = () => {
  const [selected, setSelected] = useState(carSort[0]);

  return (
    <div className='w-[153px] font-DMSans'>
      <Listbox value={selected} onChange={setSelected}>
        <div className='relative mt-1'>
          <Listbox.Button className='cursor-pointer relative w-full border dark:border-cBlack-4 rounded-lg dark:bg-cBlack-1 dark:text-cBlack-4 py-3 pl-3 pr-10 text-left focus:outline-none
          focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-[#316BFF] sm:text-sm'
          >
            <span className='block truncate'>{selected.name}</span>
            <span className='pointer-events-none absolute inset-y-0 right-2 flex items-center pr-2'>
              <BsChevronDown
                className='h-5 w-5 text-gray-400 stroke-1'
                aria-hidden='true'
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
              {carSort.map((option, idx) => (
                <Listbox.Option
                  key={idx}
                  className={({ active }) => `relative select-none py-2 pl-4 cursor-pointer  ${
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-900'
                  }`}
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {option.name}
                      </span>
                      {selected ? (
                        <span className='absolute inset-y-0 right-3 flex items-center pl-3 text-[#316BFF]'>
                          <AiFillCheckCircle className='h-5 w-5' aria-hidden='true' />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>

  );
};

export default SortSelect;
