import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { Crumbs, Notifications, PaymentPayout, PersonalDetails, Preferences, PrivacySharing, Security } from '@components';
import Link from 'next/link';

const tabs = {
  'personal-details': {
    label: 'Personal Details',
    component: <PersonalDetails />,
  },
  security: {
    label: 'Security',
    component: <Security />,
  },
  notifications: {
    label: 'Notifications',
    component: <Notifications />,
  },
  'payment-payout': {
    label: 'Payment & Payout',
    component: <PaymentPayout />,
  },
  privacy: {
    label: 'Privacy & Sharing',
    component: <PrivacySharing />,
  },
  preferences: {
    label: 'Preferences',
    component: <Preferences />,
  },
};

const generateComponent = (tab: string) => {
  if (tab in tabs) {
    return tabs[tab].component;
  }
  return <div>404</div>;
};

const TabIndex = () => {
  const [activeTab, setActiveTab] = useState('');
  const router = useRouter();
  const { tab } = router.query;

  useEffect(() => {
    if (tab) {
      setActiveTab(tab as string);
    }
  }, [tab]);

  return (
    <div className='px-6 pt-[70px] max-w-7xl mx-auto'>
      <div className='space-y-2'>
        <div className='hidden md:flex'>
          <Crumbs label={tabs[tab as string]?.label} step={1} />
        </div>
        <div className='border-b-2 border-[#E7ECF3] '>
          <ul className='flex justify-between -mb-px'>
            {Object.keys(tabs).map((t) => (
              <li
                key={t}
                className={`${activeTab === t ? 'border-b-[#316BFF] text-cBlack-2 font-semibold -mb-px'
                  : 'text-cBlack-4'} inline-block py-4 border-b-2 border-transparent `}
              >
                <Link href={`/account/${t}`}>{tabs[t].label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='mt-8 pt-16'>
          {generateComponent(activeTab)}
        </div>
      </div>
    </div>
  );
};

export default TabIndex;
