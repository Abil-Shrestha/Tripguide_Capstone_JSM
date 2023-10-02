/* eslint-disable max-len */
/* eslint-disable no-shadow */
import { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { AiFillCheckCircle } from 'react-icons/ai';

const Select = ({ options, selected, setSelected, styles, optionStyles }) => (
  <Listbox value={selected} onChange={setSelected}>
    <div className='relative mt-1 w-full'>
      <Listbox.Button className={styles}>
        <span className='block truncate'>{selected?.name}</span>
        <span className='pointer-events-none absolute inset-y-0 right-2 flex items-center pr-2'>
          <svg width='10' height='16' viewBox='0 0 10 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M0.511213 5.9853L0.510975 5.98504C0.449892 5.91858 0.400025 5.83795 0.365541 5.74715C0.331047 5.65632 0.312992 5.55803 0.312992 5.45816C0.312992 5.35829 0.331047 5.26 0.365541 5.16917C0.399988 5.07846 0.449783 4.99792 0.510776 4.9315C0.510842 4.93143 0.510908 4.93135 0.510975 4.93128L4.57966 0.519855L4.57967 0.519866L4.58175 0.517561C4.64235 0.45054 4.71284 0.399085 4.7883 0.364596C4.86366 0.330154 4.9433 0.312908 5.02291 0.312908C5.10251 0.312908 5.18215 0.330154 5.25751 0.364596C5.33297 0.399085 5.40347 0.45054 5.46406 0.517563L5.46492 0.518508L9.48655 4.93034L9.48655 4.93034L9.48742 4.93128C9.5485 4.99774 9.59837 5.07837 9.63285 5.16917C9.66734 5.26 9.6854 5.35829 9.6854 5.45816C9.6854 5.55803 9.66734 5.65633 9.63285 5.74715C9.59837 5.83795 9.5485 5.91858 9.48742 5.98504L9.48718 5.9853C9.36547 6.11802 9.20733 6.18637 9.04928 6.18637C8.89135 6.18637 8.73333 6.11812 8.61166 5.9856C8.61157 5.9855 8.61147 5.9854 8.61138 5.9853L5.25433 2.30252L5.02453 2.05042L4.79297 2.30091L1.38786 5.98437L1.38701 5.9853C1.2653 6.11802 1.10716 6.18637 0.94911 6.18637C0.791057 6.18637 0.632918 6.11802 0.511213 5.9853Z' fill='#84878B' stroke='#84878B' strokeWidth='0.626276' />
            <path d='M9.71958 9.80258C9.54187 9.60878 9.30147 9.5 9.05089 9.5C8.80031 9.5 8.55991 9.60878 8.3822 9.80258L4.97709 13.486L1.61941 9.80258C1.4417 9.60878 1.2013 9.5 0.95072 9.5C0.70014 9.5 0.459742 9.60878 0.282029 9.80258C0.193128 9.89931 0.122565 10.0144 0.0744107 10.1412C0.0262567 10.268 0.00146484 10.404 0.00146484 10.5414C0.00146484 10.6787 0.0262567 10.8147 0.0744107 10.9415C0.122565 11.0683 0.193128 11.1834 0.282029 11.2801L4.30366 15.692C4.39183 15.7895 4.49674 15.8669 4.61232 15.9197C4.72791 15.9725 4.85188 15.9997 4.97709 15.9997C5.10231 15.9997 5.22628 15.9725 5.34186 15.9197C5.45745 15.8669 5.56235 15.7895 5.65053 15.692L9.71958 11.2801C9.80848 11.1834 9.87904 11.0683 9.9272 10.9415C9.97535 10.8147 10.0001 10.6787 10.0001 10.5414C10.0001 10.404 9.97535 10.268 9.9272 10.1412C9.87904 10.0144 9.80848 9.89931 9.71958 9.80258Z' fill='#84878B' />
          </svg>
        </span>
      </Listbox.Button>
      <Transition
        as={Fragment}
        leave='transition ease-in duration-100'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
      >
        <Listbox.Options className={optionStyles}>
          {options.map((option, idx) => (
            <Listbox.Option
              key={idx}
              className={({ active }) => `relative select-none py-2 pl-4 cursor-pointer  ${
                active ? 'bg-gray-200 text-gray-900 dark:text-gray-300' : 'text-gray-900 dark:text-gray-300'
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
);

export default Select;
