/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, useEffect, Fragment } from 'react';
import { useRouter } from 'next/router';
import { Dialog, Transition } from '@headlessui/react';
import { AiOutlineGoogle, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { IoCloseOutline } from 'react-icons/io5';
import { FaFacebookF } from 'react-icons/fa';
import { signIn } from 'next-auth/react';

import { Button, Divider, FormInput } from '@components';

import { useAlert } from '@utils/hooks/useAlert';
import { useFormFields } from '@utils/hooks/useFormFields';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

type AuthFormProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  setIsForgotPassword : (isForgotPassword: boolean) => void;
}

const AuthForm = ({ open, setOpen, setIsForgotPassword } : AuthFormProps) => {
  const [isSignup, setIsSignup] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [values, handleChange] = useFormFields(initialValues);
  const [termsOfService, setTermsOfService] = useState(false);
  const { handleAlert } = useAlert();
  const router = useRouter();

  useEffect(() => {
    setTermsOfService(false);
  }, [open]);

  const handleAuth = async (type: string) => {
    setOpen(false);
    if (type === 'email') {
      const { error } = await signIn(type, {
        redirect: false,
        callbackUrl: window.location.href,
        email: values.email,
      });
      if (error) {
        handleAlert({
          type: 'error',
          message: error,
        });
      }
    }
    signIn(type, { callbackUrl: window.location.href });
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    setIsForgotPassword(true);
  };

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
      <Dialog.Panel className='relative transform rounded-2xl bg-white dark:bg-black dark:text-white px-8 pt-2 pb-5 text-left shadow-xl transition-all w-full max-w-lg'>
        {/* Absolute close btn */}
        <div
          onClick={() => setOpen(false)}
          className='h-6 w-6 bg-gray-100 dark:bg-cBlack-2 rounded-full flex items-center justify-center absolute right-[-10px] top-[-10px] cursor-pointer'
        >
          <IoCloseOutline className='text-gray-500 dark:text-gray-300 text-lg' />
        </div>
        {/* Welcome Back w/ provider btns */}
        <div>
          <div className='mt-3 text-center sm:mt-5'>
            <Dialog.Title as='h3' className='text-3xl mb-8 font-semibold tracking-wide'>
              {isSignup ? "Let's Go" : 'Welcome Back!'}
            </Dialog.Title>
          </div>
          <div className='flex flex-col xs:flex-row gap-2'>
            <Button styles='basis-[90]% gap-2 bg-cBlue-500 tracking-wide' handleClick={() => handleAuth('google')}>
              <AiOutlineGoogle />
              Sign in with Google
            </Button>
            <Button styles={`${isSignup ? 'basis-[25%]' : 'basis-[10%]'} bg-cBlack-3 dark:bg-cBlack-2 font-medium `} handleClick={() => handleAuth('facebook')}>
              <FaFacebookF />
            </Button>
          </div>
        </div>
        {/* divider */}
        <Divider>
          or continue with
        </Divider>
        {/* Inputs */}
        <div className='flex flex-col gap-4'>
          {isSignup && (
          <div className='flex flex-col xs:flex-row gap-2'>
            <FormInput
              label='First Name'
              name='firstName'
              value={values.firstName}
              onChange={handleChange}
              placeholder='First Name'
              required
              styles='w-full'
            />

            <FormInput
              label='Last Name'
              name='lastName'
              value={values.lastName}
              onChange={handleChange}
              placeholder='Last Name'
              required
              styles='w-full'
            />
          </div>
          )}

          <FormInput
            label='Email'
            name='email'
            value={values.email}
            onChange={handleChange}
            placeholder='Email'
            required
          />
          <FormInput
            type={isShowPassword ? 'text' : 'password'}
            label='Password'
            name='password'
            value={values.password}
            onChange={handleChange}
            placeholder='Enter your password'
            required
            icon={isShowPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            handleClick={() => setIsShowPassword((prev) => !prev)}
          />
        </div>
        {/* Forgot Password */}
        <div className='text-right mt-2'>
          <button onClick={handleForgotPassword} type='button' className='text-sm text-cBlue-300'>
            Forgot your password?
          </button>
        </div>
        {/* Terms of Service + Privacy Policy */}
        {isSignup && (
        <div className='relative flex items-start my-2'>
          <div className='flex h-5 items-center'>
            <input
              aria-describedby='termsOfService-description'
              name='termsOfService'
              onChange={() => setTermsOfService((prev) => !prev)}
              checked={termsOfService}
              type='checkbox'
              className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-cBlue-500'
            />
          </div>
          <div className='ml-3 text-sm'>
            <span>I&apos;ve read and accepted the </span>
            <button onClick={() => router.push('/terms-conditions')} type='button' className='font-medium text-cBlue-300'>
              Terms of Service
            </button>
            <br />
            <span>
              and{' '}
              <button onClick={() => router.push('/terms-conditions')} type='button' className='font-medium text-cBlue-300'>
                Privacy Policy
              </button>
            </span>
          </div>
        </div>
        )}
        {/* Signin btn + toggle */}
        <div className='mt-3'>
          <button
            type='button'
            className='inline-flex w-full justify-center rounded-lg border border-transparent bg-cBlue-500 px-4 py-2 text-base font-medium text-white shadow-sm tracking-wide focus:outline-none'
            onClick={() => setOpen(false)}
          >
            {isSignup ? 'Sign Up' : 'Sign In'}
          </button>
          <div className='text-center mt-4 mb-2 text-sm text-gray-700 dark:text-gray-300'>
            {!isSignup ? (
              <p>
                Don&apos;t have an account?{' '}
                <button
                  type='button'
                  onClick={() => setIsSignup(true)}
                  className='text-cBlue-300 cursor-pointer'
                >
                  Sign up
                </button>
              </p>
            ) : (
              <p>
                Already have an account?{' '}
                <button
                  type='button'
                  onClick={() => setIsSignup(false)}
                  className='text-cBlue-300 cursor-pointer'
                >
                  Sign in
                </button>
              </p>
            )}
          </div>
        </div>
      </Dialog.Panel>
    </Transition.Child>
  );
};

export default AuthForm;
