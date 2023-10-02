/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import { AiFillCaretDown } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { MdOutlineConnectWithoutContact } from 'react-icons/md';
import { FaSuitcaseRolling, FaBloggerB } from 'react-icons/fa';
import { BsBoxArrowLeft, BsCardList } from 'react-icons/bs';
import { signOut, useSession } from 'next-auth/react';

const menu = [
  { id: 1, route: 'Manage Account', href: '/account', icon: <BiUser /> },
  { id: 2, route: 'Bookings', href: '/bookings', icon: <FaSuitcaseRolling /> },
  { id: 3, route: 'Contact Us', href: '/contact', icon: <MdOutlineConnectWithoutContact /> },
  { id: 4, route: 'Blog', href: '/blog', icon: <FaBloggerB /> },
  { id: 5, route: 'Terms & Conditions', href: '/terms-conditions', icon: <BsCardList /> },
  { id: 6, route: 'Logout', href: '/', icon: <BsBoxArrowLeft /> },
];

type User = {
  name?: string;
  email?: string;
  image?: string;
}

const MenuDropdown = () => {
  const { data: session } = useSession();
  const { name, email, image } : User = session?.user || {};

  const handleLogout = (route: string) => {
    if (route === 'Logout') {
      signOut({ callbackUrl: '/' });
    }
  };

  return (
    <Menu as='div' className='relative inline-block text-left z-50'>
      <Menu.Button className='flex items-center gap-2'>
        <img
          src={image}
          alt='user'
          className='h-7 w-7 xs:h-8 xs:w-8 rounded-full'
        />
        <div className='hidden md:flex items-center'>
          <p className='text-gray-700 dark:text-white font-medium mr-4'>
            {name.split(' ')[0]}
          </p>
          <AiFillCaretDown className='dark:text-white' />
        </div>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items
          className='absolute top-[55px] right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100
rounded-md bg-white dark:bg-cBlack-2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
        >
          <div className='px-1 py-1'>
            {menu.map((item) => (
              <Menu.Item key={item.id}>
                {({ active }) => (
                  <button
                    type='button'
                    className={`${
                      active ? 'bg-cBlue-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-4 py-4 text-sm`}
                  >
                    <span className='pr-4 text-2xl dark:text-gray-300'>{item.icon}</span>
                    <Link href={item.href}>
                      <p
                        className='dark:text-gray-300'
                        onClick={() => handleLogout(item.route)}
                      >
                        {item.route}
                      </p>
                    </Link>
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default MenuDropdown;
