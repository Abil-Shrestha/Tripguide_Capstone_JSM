import { MdHotel } from 'react-icons/md';
import { FaWifi, FaBath, FaPizzaSlice } from 'react-icons/fa';
import { GiKnifeFork, GiCycle } from 'react-icons/gi';
import { CgScreen } from 'react-icons/cg';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { TbKeyboardHide } from 'react-icons/tb';

// hotel details
export const features = [
  {
    label: 'Wi-fi',
    icon: <FaWifi className='h-6 w-6' />,
  },
  {
    label: 'Bathtub',
    icon: <FaBath className='h-6 w-6' />,
  },
  {
    label: 'Breakfast',
    icon: <GiKnifeFork className='h-6 w-6' />,
  },
  {
    label: 'Kings Bed',
    icon: <MdHotel className='h-6 w-6' />,
  },
  {
    label: '4m x 6m',
    icon: <GiCycle className='h-6 w-6' />,
  },
];

export const amenities = [
  {
    label: 'free wifi 24/7',
    icon: <FaWifi className='h-6 w-6' />,
  },
  {
    label: 'Free clean bathroom',
    icon: <FaBath className='h-6 w-6' />,
  },
  {
    label: 'Free computer',
    icon: <TbKeyboardHide className='h-6 w-6' />,
  },
  {
    label: 'Breakfast Included',
    icon: <FaPizzaSlice className='h-6 w-6' />,
  },
  {
    label: 'Free wifi 24/7',
    icon: <CgScreen className='h-6 w-6' />,
  },
  {
    label: 'ATM',
    icon: <TbKeyboardHide className='h-6 w-6' />,
  },
  {
    label: 'Free wifi 24/7',
    icon: <CgScreen className='h-6 w-6' />,
  },
  {
    label: 'Nearby city',
    icon: <HiOutlineOfficeBuilding className='h-6 w-6' />,
  },
];

export const detailTabsButtons = [
  { label: 'Description' },
  { label: 'Features' },
  { label: 'Virtual' },
  { label: 'Price & Task History' },
];

export const findCarButtons = [
  { label: 'Popular' },
  { label: 'Car Ratings' },
  { label: 'Price' },
  { label: 'Map View' },
];
