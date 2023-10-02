/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable max-len */
import { useState, useEffect } from 'react';

import { Crumbs, MyBookings } from '@components';

const bookings = [
  {
    booking_id: '12345632',
    booking_status: 'Confirmed',
    booking_start_date: '2021-10-10',
    booking_end_date: '2021-10-12',
    booked_on_date: 'April 10, 2021',
    booking_price: '100',
    booking_currency: 'USD',
    stripe_payment_intent_id: 'pi_123123213',
  },
  {
    booking_id: '13231',
    booking_status: 'Confirmed',
    booking_start_date: '2021-10-10',
    booking_end_date: '2021-10-12',
    booked_on_date: 'April 12, 2021',
    booking_price: '100',
    booking_currency: 'USD',
    stripe_payment_intent_id: 'pi_12312324534',
  },
  {
    booking_id: '123456',
    booking_status: 'Upcoming',
    booking_start_date: '2021-10-10',
    booking_end_date: '2021-10-12',
    booked_on_date: 'April 22, 2021',
    booking_price: '100',
    booking_currency: 'USD',
    stripe_payment_intent_id: 'pi_123123213',
  },
  {
    booking_id: '1323121',
    booking_status: 'Upcoming',
    booking_start_date: '2021-10-10',
    booking_end_date: '2021-10-12',
    booked_on_date: 'March 12, 2021',
    booking_price: '100',
    booking_currency: 'USD',
    stripe_payment_intent_id: 'pi_12312324534',
  },
  {
    booking_id: '12345126',
    booking_status: 'Cancelled',
    booking_start_date: '2021-10-10',
    booking_end_date: '2021-10-12',
    booked_on_date: 'October 5, 2021',
    booking_price: '100',
    booking_currency: 'USD',
    stripe_payment_intent_id: 'pi_123123213',
  },
];

const Tabs = [
  {
    name: 'Total Bookings',
    count: bookings.length,
    data: bookings,
  },
  {
    name: 'Upcoming',
    count: bookings.filter((booking) => booking.booking_status === 'Upcoming').length,
    data: bookings.filter((booking) => booking.booking_status === 'Upcoming'),
  },
  {
    name: 'Cancelled',
    count: bookings.filter((booking) => booking.booking_status === 'Cancelled').length,
    data: bookings.filter((booking) => booking.booking_status === 'Cancelled'),
  },
];

const Bookings = () => {
  const [activeTab, setActiveTab] = useState(null);

  const switchTab = (tab: string) => setActiveTab(tab);

  useEffect(() => {
    setActiveTab(Tabs[0].name);
  }, []);

  return (
    <div className='px-6 py-[70px] max-w-7xl mx-auto'>
      <div className='space-y-2'>
        <div className='hidden md:flex'>
          <Crumbs label='Bookings' step={1} />
        </div>
        <h2 className='font-semibold text-3xl text-cBlack-1 dark:text-cBlack-8 pt-8'>
          Bookings
        </h2>
      </div>
      <div className='border-b-2 border-[#E7ECF3]'>
        <ul className='flex justify-between -mb-px w-2/3'>
          {Tabs?.map((tab) => (
            <li
              key={tab?.name}
              className={` ${activeTab === tab?.name ? 'border-b-[#316BFF] text-cBlack-3 font-semibold -mb-px' : 'text-cBlack-4'} flex items-center text-center py-4 text-sm font-medium text-cBlack-3 dark:text-cBlack-8 border-b-2 border-transparent cursor-pointer hover:text-cBlue-1 dark:hover:text-cBlue-8 hover:border-cBlue-1 dark:hover:border-cBlue-8`}
              onClick={() => switchTab(tab?.name)}
            >
              {tab?.name}
              <span className='block text-xs ml-1 text-cGray-1 dark:text-cGray-8'>
                ({tab?.count})
              </span>
            </li>
          ))}

        </ul>
      </div>
      <div className='mt-8'>
        {Tabs?.map((tab) => (
          <div key={tab?.name} className={`${activeTab === tab?.name ? 'block' : 'hidden'} space-y-12`}>
            {tab?.data.map((booking) => (
              <MyBookings key={booking?.booking_id} booking={booking} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookings;
