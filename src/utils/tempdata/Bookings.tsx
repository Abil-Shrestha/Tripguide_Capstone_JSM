import { TbDeviceDesktopAnalytics, TbTrash } from 'react-icons/tb';
import { FiCalendar } from 'react-icons/fi';
import { BsWallet2 } from 'react-icons/bs';

export const ccimages = [
  { card: 'MasterCard', image: '/assets/paymentlogos/mastercard.png' },
  { card: 'Paypal', image: '/assets/paymentlogos/paypal.png' },
  { card: 'Visa', image: '/assets/paymentlogos/visa.png' },
  { card: 'AmericanExpress', image: '/assets/paymentlogos/american_express.png' },
];

export const saveCardLabel = { label: 'Save Card' };

export const bookingDetails = [
  {
    detail: '$119 + 5 nights',
    price: 833,
  },
  {
    detail: 'Ocupancy text and fee',
    price: 125,
  },
  {
    detail: 'Service fee',
    price: 103,
  },
];

// congratulations -- reserve details
export const reserveDetails = [
  {
    icon: <TbDeviceDesktopAnalytics className='h-5 w-5' />,
    label: 'Booking code',
    info: 'FD_158456',
  },
  {
    icon: <FiCalendar className='h-5 w-5' />,
    label: 'Date',
    info: '30 Apr, 2021',
  },
  {
    icon: <TbTrash className='h-5 w-5' />,
    label: 'Total',
    info: 833,
  },
  {
    icon: <BsWallet2 className='h-5 w-5' />,
    label: 'Payment method',
    info: 'Credit card',
  },
];
