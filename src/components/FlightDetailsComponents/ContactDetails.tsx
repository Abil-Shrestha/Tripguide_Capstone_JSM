import { ChangeEvent, useState } from 'react';
import Link from 'next/link';

import { useGlobalContext } from '@context/GlobalContext';
import { BiEditAlt } from 'react-icons/bi';
import { FlightInput } from '@components';

const ContactDetails = () => {
  const { activeFlight } = useGlobalContext();
  const [contactData, setContactData] = useState({
    email: '',
    confirmEmail: '',
    address: '',
    city: '',
    country: '',
    password: '',
    countryCode: '',
    phoneNumber: '',
  });

  const { email, confirmEmail, address, city, country, password, countryCode, phoneNumber } = contactData;

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setContactData({
      ...contactData,
      [name]: value,
    });
  };

  return (
    <div className='flex flex-col gap-[24px] h-[653px] w-[939px] p-[40px_46px] bg-white dark:bg-cBlack-2 border-[1px] border-cBlack-6 dark:border-cBlack-3 rounded-[20px] font-DMSans'>
      <div className='flex flex-col gap-[30px]'>
        <div className='flex justify-between items-center w-[779px]'>
          <p className='font-medium text-[24px] text-cBlack-2 dark:text-cBlack-8'>Contact Details</p>
          <button
            type='button'
            className='flex gap-[9px] justify-center items-center font-medium text-[14px] h-[34px] w-[112px] text-cBlack-4 dark:text-cBlack-5 border-[1px] border-cBlack-5 dark:border-cBlack-3 rounded-[30px]'
          >
            <BiEditAlt className='h-4 w-4 text-cBlack-4 dark:text-cBlack-5' /> Edit
          </button>
        </div>
        <div className='flex gap-[30px] flex-wrap flex-[0_1_33%]'>
          <FlightInput label='Enter your Email' name='email' type='email' value={email} onChange={handleChangeInput} />
          <FlightInput label='Enter a Confirm Email' name='confirmEmail' type='email' value={confirmEmail} onChange={handleChangeInput} />
          <FlightInput label='Enter an address name' name='address' type='text' value={address} onChange={handleChangeInput} />
          <FlightInput label='Enter a city name' name='city' type='text' value={city} onChange={handleChangeInput} />
          <FlightInput label='Country' type='text' name='country' value={country} onChange={handleChangeInput} />
          <FlightInput label='Enter a Password' name='password' type='password' value={password} onChange={handleChangeInput} />
          <FlightInput label='Country Code' name='countryCode' type='text' value={countryCode} onChange={handleChangeInput} />
          <FlightInput label='Enter a Phone Number' name='phoneNumber' type='tel' value={phoneNumber} onChange={handleChangeInput} />
        </div>
        <Link href={`/confirm/flight/${activeFlight?.code}`}>
          <button
            type='button'
            className='h-[39px] w-[144px] text-center text-[16px] font-DMSans font-bold text-white bg-primaryBlue rounded-[30px]'
          >
            Continue
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContactDetails;
