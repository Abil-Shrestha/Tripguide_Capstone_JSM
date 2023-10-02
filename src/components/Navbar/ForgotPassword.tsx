/* eslint-disable jsx-a11y/label-has-associated-control */
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { IoCloseOutline } from 'react-icons/io5';

interface ForgotPasswordProps {
  setOpen: (open: boolean) => void;
  setIsForgotPassword: (isForgotPassword: boolean) => void;
}

const ForgotPassword = ({ setOpen, setIsForgotPassword }: ForgotPasswordProps) => {
  const [recoveryEmail, setRecoveryEmail] = useState('');
  return (
    <Transition.Child
      as={Fragment}
      enter='ease-out duration-300'
      enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
      enterTo='opacity-100 translate-y-0 sm:scale-100'
      leave='ease-in duration-200'
      leaveFrom='opacity-100 translate-y-0 sm:scale-100'
      leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
    >
      <Dialog.Panel className='relative transform rounded-2xl bg-white dark:bg-black dark:text-white px-8 pt-16 pb-5 text-left shadow-xl transition-all w-full max-w-lg'>
        {/* Absolute close btn */}
        <div
          onClick={() => setOpen(false)}
          className='h-6 w-6 bg-gray-100 dark:bg-cBlack-800 rounded-full flex items-center justify-center absolute right-[-10px] top-[-10px] cursor-pointer'
        >
          <IoCloseOutline className='text-gray-500 dark:text-gray-300 text-lg' />
        </div>
        {/* Welcome Back w/ provider btns */}
        <div>
          <div className='mt-3 text-center sm:mt-5'>
            <Dialog.Title as='h3' className='text-3xl mb-8 font-semibold tracking-wide text-left'>
              Password Recovery
            </Dialog.Title>
          </div>
          <div className='mt-3 text-center sm:mt-5'>
            <Dialog.Description as='p' className='text-[16px] text-gray-400 mb-8 text-left'>
              Enter your email to recover your password
            </Dialog.Description>
          </div>
        </div>
        <form className='flex flex-col gap-4 px-6'>
          <div className='flex flex-col gap-2'>
            <label htmlFor='recoveryEmail' className='tracking-wide text-gray-600 dark:text-white'>
              Email address
            </label>
            <input
              id='recoveryEmail'
              type='recoveryEmail'
              name='recoveryEmail'
              onChange={(e) => setRecoveryEmail(e.target.value)}
              value={recoveryEmail}
              required
              placeholder='Enter your email'
              className='rounded-lg bg-[#E7ECF3] dark:bg-cBlack-800 h-[48px] px-4 border border-gray-200 dark:border-cBlack-800 placeholder:text-cBlack-600 focus:outline-none dark:focus:border-cBlack-800 placeholder:text-sm'
            />
          </div>
          <button
            type='submit'
            className='inline-flex w-full justify-center rounded-lg border border-transparent bg-cBlue-100
            px-4 py-2 text-base font-medium text-white shadow-sm tracking-wide focus:outline-none'
          >Send Recovery Email
          </button>
          <div className='text-center mb-8 text-sm text-gray-700 dark:text-gray-300'>
            <p>
              Back to Signin Page{' '}
              <button
                type='button'
                onClick={() => setIsForgotPassword(false)}
                className='text-cBlue-300 cursor-pointer'
              >
                Sign in
              </button>
            </p>
          </div>
        </form>
      </Dialog.Panel>
    </Transition.Child>
  );
};

export default ForgotPassword;
