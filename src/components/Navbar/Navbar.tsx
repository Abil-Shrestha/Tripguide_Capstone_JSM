/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Switch } from '@headlessui/react';
import { useTheme } from 'next-themes';

import { MenuDropdown, CustomSelect, AuthModal, DarkModeToggleNav, DarkModeToggle } from '@components';
import { languages, currencies } from '@constants';
import { useGlobalContext } from '@context/GlobalContext';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  const { theme, setTheme } = useTheme('dark');
  const { selectedLanguage, setSelectedLanguage, selectedCurrecy, setSelectedCurrecy } = useGlobalContext();
  const [mounted, setMounted] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [isForgotPassword, setIsForgotPassword] = useState<boolean>(false);
  const [isLanguagesOpen, setIsLanguagesOpen] = useState<boolean>(false);
  const [isCurrenciesOpen, setIsCurrenciesOpen] = useState<boolean>(false);

  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) {
      setIsForgotPassword(false);
    }
  }, [open]);

  useEffect(() => {
    if (enabled) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, [enabled]);

  const handleOpenMenu = (type) => {
    switch (type) {
      case 'language':
        if (isCurrenciesOpen) setIsCurrenciesOpen(false);
        setIsLanguagesOpen((prev) => !prev);
        break;
      case 'currency':
        if (isLanguagesOpen) setIsLanguagesOpen(false);
        setIsCurrenciesOpen((prev) => !prev);
        break;
      default:
        break;
    }
  };

  if (!mounted) return null;

  return (
    <div className='flex h-[78px] w-full bg-white dark:bg-cBlack-2 dark:text-white items-center px-4 md:px-10 xl:px-12 justify-between'>
      <AuthModal open={open} setOpen={setOpen} isForgotPassword={isForgotPassword} setIsForgotPassword={setIsForgotPassword} />
      <div>
        <Link href='/'>
          <div className='flex items-center gap-2 xs:gap-3 cursor-pointer'>
            <img src='/assets/icons/tripguide.png' alt='' className='h-6 xs:h-10' />
            <p className='font-semibold text-sm xs:text-xl text-black dark:text-white'>TripGuide</p>
          </div>
        </Link>
      </div>
      <div className='flex items-center gap-3 relative'>
        <div className='flex relative'>
          <button type='button' className='menu-btn' onClick={() => handleOpenMenu('currency')}>
            <p className='text-[12px] xs:text-[16px] text-gray-500 dark:text-gray-200 font-medium'>{selectedCurrecy.code}</p>
          </button>
          <CustomSelect
            type='currency'
            menu={currencies}
            open={isCurrenciesOpen}
            selected={selectedCurrecy}
            setOpen={setIsCurrenciesOpen}
            setValue={setSelectedCurrecy}
            styles='w-[335px] h-[415px] bg-white dark:bg-cBlack-2 z-20 p-4 rounded-xl absolute top-[60px] right-[-115px] overflow-y-scroll scrollbar-hide'
          />
        </div>
        <div className='flex relative'>
          <button type='button' className='menu-btn' onClick={() => handleOpenMenu('language')}>
            <img src={selectedLanguage.image} alt='country' className='h-6 w-6 rounded-full' />
          </button>
          <CustomSelect
            type='language'
            menu={languages}
            open={isLanguagesOpen}
            selected={selectedLanguage}
            setOpen={setIsLanguagesOpen}
            setValue={setSelectedLanguage}
            styles='w-[335px] h-[365px] bg-white dark:bg-cBlack-2 z-20 p-4 rounded-xl absolute top-[60px] right-[-80px] overflow-y-scroll scrollbar-hide'
          />
        </div>
        <div>
          <DarkModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
