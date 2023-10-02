/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { toast } from 'react-toastify';

const initialValues = { name: '', email: '', message: '', phone: '' };

const GetInTouch = () => {
  const [formValues, setFormValues] = useState(initialValues);

  const formatPhoneNumber = (value: string) => {
    if (!value) return;

    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) {
      return phoneNumber;
    }
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }

    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
  };

  const capitalizeFirstLetter = (value: string) => value.charAt(0).toUpperCase() + value.slice(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast('Message Sent!', {
      position: 'top-center',
      type: 'success',
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      progress: undefined,
      theme: 'colored',
    });
    setFormValues(initialValues);
  };

  const handleChange = (e) => {
    if (e.target.name === 'phone') {
      const formatedPhoneNumber = formatPhoneNumber(e.target.value);
      setFormValues({ ...formValues, phone: formatedPhoneNumber });
    } else if (e.target.name === 'name') {
      const capitalizedValue = capitalizeFirstLetter(e.target.value);
      setFormValues({ ...formValues, name: capitalizedValue });
    } else {
      setFormValues({ ...formValues, [e.target.name]: e.target.value });
    }
  };

  return (
    <div className='font-DMSans flex justify-center max-w-7xl mx-auto pt-12 md:pt-24 mb-20'>
      <div className='w-full lg:w-[40%] flex flex-col gap-4 mx-6'>
        <div className='flex flex-col gap-4 mb-4'>
          <h3 className='text-3xl md:text-3xl xl:text-4xl'>Get In Touch</h3>
          <p className='text-gray-400 text-lg w-full md:w-[70%]'>
            This is a TravelGuide for a variety of booking destinations!
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col mb-4'>
            <label htmlFor='name' className='mb-3 dark:text-gray-300 text-gray-400'>
              Your Name
            </label>
            <input
              required
              className='dark:border-cBlack-3 dark:bg-cBlack-1 bg-primaryGray border border-gray-200 rounded-md p-2 pl-3 focus:outline-none'
              type='text'
              id='name'
              name='name'
              value={formValues.name}
              onChange={handleChange}
              placeholder='Your Name'
            />
          </div>
          <div className='flex flex-col mb-4'>
            <label htmlFor='phone' className='mb-3 dark:text-gray-300 text-gray-400'>
              Phone
            </label>
            <input
              required
              className='dark:border-cBlack-3 dark:bg-cBlack-1 bg-primaryGray border border-gray-200 rounded-md p-2 pl-3 focus:outline-none'
              type='text'
              id='phone'
              name='phone'
              value={formValues.phone}
              onChange={handleChange}
              placeholder='(555)555-555'
            />
          </div>
          <div className='flex flex-col mb-4'>
            <label htmlFor='email' className='mb-3 dark:text-gray-300 text-gray-400'>
              Email Address
            </label>
            <input
              required
              className='dark:border-cBlack-3 dark:bg-cBlack-1 bg-primaryGray border border-gray-200 rounded-md p-2 pl-3 focus:outline-none'
              type='email'
              id='email'
              name='email'
              value={formValues.email}
              onChange={handleChange}
              placeholder='johndoe@user.com'
            />
          </div>
          <div className='flex flex-col mb-4'>
            <label htmlFor='message' className='mb-3 dark:text-gray-300 text-gray-400'>
              Message
            </label>
            <textarea
              className='dark:border-cBlack-3 dark:bg-cBlack-1 bg-primaryGray border border-gray-200 rounded-md p-2 pl-3 focus:outline-none'
              rows={4}
              id='message'
              name='message'
              value={formValues.message}
              onChange={handleChange}
              placeholder='Hi, what do you do..?'
            />
          </div>
          <button
            type='submit'
            className='text-white border border-cBlue-500 bg-cBlue-500 hover:bg-cBlue-300 hover:border-cBlue-300
          py-2 w-full lg:w-[136px] mt-2 rounded-md transition-colors duration-300 ease-in-out focus:border-white focus:ring-0 focus:outline-none'
          >
            Send
          </button>
        </form>
      </div>
      <div className='w-[60%] hidden lg:flex'>
        <img src='/assets/background-images/contact-hero.png' alt='' />
      </div>
    </div>
  );
};

export default GetInTouch;
