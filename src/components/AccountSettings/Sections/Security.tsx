import { useState } from 'react';
import { HiOutlineDesktopComputer, HiOutlineDeviceMobile } from 'react-icons/hi';

const socialAccounts = [
  {
    name: 'Facebook',
    status: 'Not Connected',
  },
  {
    name: 'Apple Account',
    status: 'Not Connected',
  },
];

const deviceHistory = [
  {
    name: 'Windows 10 Chrome',
    status: 'Active',
    loggedInDate: 'May 1, 2021 at 12:00 PM',
    icon: <HiOutlineDesktopComputer className='w-6 h-6 text-cBlack-5' />,
  },
  {
    name: 'MacOS Safari',
    status: 'Active',
    loggedInDate: 'May 1, 2021 at 12:00 PM',
    icon: <HiOutlineDesktopComputer className='w-6 h-6 text-cBlack-5' />,
  },
  {
    name: 'iPhone 12 Safari',
    status: 'Active',
    loggedInDate: 'May 1, 2021 at 12:00 PM',
    icon: <HiOutlineDeviceMobile className='w-6 h-6 text-cBlack-5' />,
  },
  {
    name: 'Android Chrome',
    status: 'Inactive',
    loggedInDate: 'May 1, 2021 at 12:00 PM',
    icon: <HiOutlineDeviceMobile className='w-6 h-6 text-cBlack-5' />,
  },
];

const Security = () => (
  <div className='space-y-10 w-2/3'>
    <div className='flex flex-col border-b-2 border-cBlack-6 pb-12'>
      <h1 className='text-cBlack-2 text-xl'>Login</h1>
      <div className='flex flex-row justify-between items-center'>
        <div className='flex flex-col pt-4'>
          <p className='text-cBlack-2 text-sm'>
            Password
          </p>
          <p className='text-xs text-cBlack-4'>
            Last updated 2 months ago
          </p>
        </div>
        <button className='text-cBlack-3 border-cBlack-5 border-2 rounded-full py-1 px-4 m-2 text-sm' type='button'>
          Update Password
        </button>
      </div>
    </div>
    <div className='flex flex-col border-b-2 border-cBlack-6 pb-12'>
      <h1 className='text-cBlack-2 text-xl'>Social Accounts</h1>
      <div className='flex items-center gap-[50px] p-2 justify-between'>
        {socialAccounts.map((account, i) => (
          <div className='flex items-center space-x-8'>
            <div className='flex flex-col items-start'>
              <p className='text-cBlack-2 text-sm'> {account.name} </p>
              <p className='text-xs text-cBlack-4'> {account.status} </p>
            </div>
            <button className='text-cBlack-3 border-cBlack-5 border-2 rounded-full py-1 px-4 m-2 text-sm' type='button'>
              Connect
            </button>

          </div>
        ))}
      </div>
    </div>
    <div className='flex flex-col space-y-8'>
      <h1 className='text-cBlack-2 text-xl'>Device History</h1>
      <div className='flex flex-col items-start space-y-8'>
        {deviceHistory.map((device) => (
          <div className='flex flex-row justify-between items-center w-full'>
            <div className='flex space-x-2'>
              <div className='p-2 border-2 items-center rounded-lg '>
                {device.icon}
              </div>
              <div className='flex flex-col my-auto'>
                <p className={`${device.status === 'Inactive' ? 'text-cBlack-5' : 'text-cBlack-2'}  text-sm`}> {device.name} </p>
                <p className='text-xs text-cBlack-4'> {device.status} </p>
              </div>
            </div>
            <button className={`text-cBlack-3 border-cBlack-5 border-2 rounded-full py-1 px-4 m-2 text-sm ${device.status === 'Inactive' ? 'cursor-not-allowed bg-cBlack-6 text-cBlack-5' : 'cursor-pointer'}`} type='button'>
              Log out device
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Security;
