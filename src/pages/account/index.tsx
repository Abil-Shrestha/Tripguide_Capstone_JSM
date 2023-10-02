import { BiLockAlt, BiUserPlus, BiBell, BiPurchaseTag, BiShareAlt } from 'react-icons/bi';
import { IoOptionsOutline } from 'react-icons/io5';

import { Card, Crumbs } from '@components';

const Links = {
  personalDetails: {
    label: 'Personal Details',
    path: '/account/personal-details',
    caption: 'Manage Personal Details',
    icon: <BiUserPlus className='w-6 h-6 text-[#316BFF] ' />,
    bgColor: 'bg-[#EAF0FF]',
  },
  security: {
    label: 'Security',
    path: '/account/security',
    caption: 'Manage account security settings',
    icon: <BiLockAlt className='w-6 h-6 text-[#FA8F54]' />,
    bgColor: 'bg-[#FEF4EE]',
  },
  notifications: {
    label: 'Notifications',
    path: '/account/notifications',
    caption: 'Manage account notifications',
    icon: <BiBell className='w-6 h-6 text-[#FF543D]' />,
    bgColor: 'bg-[#FFEEEC]',
  },
  paymentPayout: {
    label: 'Payment Payout',
    path: '/account/payment-payout',
    caption: 'Manage payment and payout settings',
    icon: <BiPurchaseTag className='w-6 h-6 text-[#316BFF]' />,
    bgColor: 'bg-[#EAF0FF]',
  },
  privacy: {
    label: 'Privacy & Sharing',
    path: '/account/privacy',
    caption: 'Manage privacy and sharing settings',
    icon: <BiShareAlt className='w-6 h-6 text-[#FA8F54]' />,
    bgColor: 'bg-[#FEF4EE]',
  },
  preferences: {
    label: 'Preferences',
    path: '/account/preferences',
    caption: 'Manage account preferences',
    icon: <IoOptionsOutline className='w-6 h-6 text-[#FF543D]' />,
    bgColor: 'bg-[#FFEEEC]',
  },
};

const Account = () => (
  <div className='px-6 py-[70px] max-w-7xl mx-auto'>
    <div className='space-y-2'>
      <div className='hidden md:flex'>
        <Crumbs label='Account Settings' step={1} />
      </div>
      <h2 className='font-semibold text-3xl text-cBlack-1 dark:text-cBlack-8'>
        Account Settings
      </h2>
      <p className='text-cBlack-3 dark:text-cBlack-5'>
        Manage your TripGuide.com experience.
      </p>
    </div>
    <div>
      <div className='flex flex-wrap justify-center gap-6 mt-8'>
        {Object.values(Links).map((item) => (
          <Card key={item.label} item={item} />
        ))}
      </div>
    </div>
  </div>
);

export default Account;
