/* eslint-disable jsx-a11y/label-has-associated-control */
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

import { AuthForm, ForgotPassword } from '@components';

interface AuthModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  isForgotPassword: boolean;
  setIsForgotPassword: (isForgotPassword: boolean) => void;
}

const AuthModal = ({ open, setOpen, isForgotPassword, setIsForgotPassword }: AuthModalProps) => (
  <Transition.Root show={open} as={Fragment}>
    <Dialog as='div' className='relative z-10' onClose={setOpen}>
      <Transition.Child
        as={Fragment}
        enter='ease-out duration-300'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='ease-in duration-200'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
      >
        <div className='fixed inset-0 bg-opacity-50 bg-cBlack-3 transition-opacity' />
      </Transition.Child>
      <div className='fixed inset-0 z-10 overflow-y-auto'>
        <div className='flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0'>
          {isForgotPassword ? (
            <ForgotPassword setOpen={setOpen} setIsForgotPassword={setIsForgotPassword} />
          ) : (
            <AuthForm open={open} setOpen={setOpen} setIsForgotPassword={setIsForgotPassword} />
          )}
        </div>
      </div>
    </Dialog>
  </Transition.Root>
);

export default AuthModal;
