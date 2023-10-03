import { useState } from 'react';
import { BiEditAlt } from 'react-icons/bi';

import { useFormFields } from '@utils/hooks/useFormFields';
import { FormInput } from '@components';

const PersonalDetails = () => {
  const [isDisabled, setIsDisabled] = useState(true);

  const [values, handleChange] = useFormFields({
    displayName: 'Jwick',
    realName: 'John Wick',
    gender: '',
    birthday: '',
    phoneNumber: '',
    email: '',
    website: '',
    twitter: '',
  });

  return (
    <div>
      <div className='flex justify-between items-center w-2/3'>
        <h1 className='text-cBlack-2 text-xl'>Account Info</h1>
        <button type='button' className='rounded-full border py-1 px-4 border-cBlack-5 flex space-x-3 items-center' onClick={() => setIsDisabled((prev) => !prev)}>
          <BiEditAlt className='text-sm' />
          <span className='text-cBlack-3 text-sm'>
            Edit
          </span>
        </button>
      </div>
      <fieldset disabled={isDisabled}>
        <div className='w-2/3 flex space-x-6'>
          <div className='flex flex-col space-y-8 mt-8 w-1/2'>
            <FormInput
              label='Display Name'
              onChange={handleChange}
              name='displayName'
              type='text'
              placeholder='Junatan776'
              value={values.displayName}
            />

            <FormInput
              select
              name='gender'
              value={values.gender}
              onChange={handleChange}
              placeholder='male'
              label='Gender'
              options={['male', 'female']}
            />
            <FormInput
              label='Phone Number'
              onChange={handleChange}
              name='phoneNumber'
              type='tel'
              placeholder='(123) 456-7890'
              value={values.phoneNumber}
            />
            <FormInput
              label='Address'
              onChange={handleChange}
              name='address'
              type='text'
              placeholder='1234 Main St'
              value={values.address}
            />
          </div>
          <div className='flex flex-col space-y-8 mt-8 w-1/2'>
            <FormInput
              label='Real Name'
              onChange={handleChange}
              name='realName'
              type='text'
              placeholder='Junatan776'
              value={values.realName}
            />

            <FormInput
              label='Date of Birth'
              onChange={handleChange}
              name='realName'
              type='date'
              placeholder='Junatan776'
              value={values.realName}
            />
            <FormInput
              label='Email'
              onChange={handleChange}
              name='email'
              type='email'
              placeholder='email'
              value={values.email}
            />
            <FormInput
              label='Language'
              onChange={handleChange}
              name='language'
              type='text'
              placeholder='English'
              value={values.language}
            />
          </div>
        </div>
        <div className='pt-8'>
          <h1 className='text-cBlack2 text-xl'>Social</h1>
          <div className='flex space-x-6 mt-8 w-2/3'>
            <FormInput
              label='Website'
              onChange={handleChange}
              name='website'
              type='text'
              placeholder='https://example.com'
              value={values.website}
            />
            <FormInput
              label='Twitter'
              onChange={handleChange}
              name='twitter'
              type='text'
              placeholder='https://twitter.com'
              value={values.twitter}
            />
          </div>
        </div>
        <div className='mt-16 space-x-4'>
          <button type='button' className={`${isDisabled ? 'bg-cBlack-4 cursor-not-allowed' : 'bg-primaryBlue '} py-2 px-6 rounded-full text-white cursor-pointer`}> Update Profile </button>
          <button type='button' className={`text-cBlack-4 ${isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}> Cancel </button>
        </div>
      </fieldset>

    </div>
  );
};

export default PersonalDetails;
