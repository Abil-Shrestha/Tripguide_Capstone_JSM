import Link from 'next/link';

import { DarkModeToggle } from '@components';
import { footerLinks } from '@constants';

const FooterInfo = () => (
  <div className='bg-footerGray dark:bg-cBlack-2 flex justify-center w-full'>
    <div className='py-8 md:py-16 max-w-7xl flex w-full'>
      <div className='flex flex-col-reverse md:flex-row w-full px-8'>
        <div className='w-1/3'>
          {/* TripGuide Logo + Darkmode Toggle */}
          <div className='w-full'>
            <div className='flex flex-col gap-3 text-sm w-[80%]'>
              <div>
                <Link scroll={false} href='/'>
                  <div className='flex items-center gap-2 xs:gap-3 cursor-pointer'>
                    <img src='/assets/icons/tripguide.png' alt='' className='h-6 xs:h-10' />
                    <p className='font-medium text-sm xs:text-xl'>TripGuide</p>
                  </div>
                </Link>
              </div>
              <p className='hidden lg:inline-flex text-gray-400 text-[16px] leading-8 font-extralight'>
                Our team specializes in finding you the best service when it comes to hotel, car, and
                flight rentals.
              </p>
            </div>
          </div>
        </div>
        <div className='flex flex-col md:flex-row md:ml-8 w-full'>
          {/* Services */}
          <div className='w-full'>
            <div className='flex flex-col gap-3 text-sm'>
              <h3 className='text-lg'>Services</h3>
              {footerLinks.services.map((link, i) => (
                <Link scroll={false} href={link.href} key={i}>
                  <p className='text-gray-400 hover:underline cursor-pointer'>{link.title}</p>
                </Link>
              ))}
              <hr className='mt-4 mb-6 md:hidden' />
            </div>
          </div>
          {/* Support */}
          <div className='w-full'>
            <div className='flex flex-col gap-3 text-sm'>
              <h3 className='text-lg'>Support</h3>
              {footerLinks.support.map((link, i) => (
                <Link scroll={false} href={link.href} key={i}>
                  <p className='text-gray-400 hover:underline cursor-pointer'>{link.title}</p>
                </Link>
              ))}
              <hr className='mt-4 mb-6 md:hidden' />
            </div>
          </div>
          {/* Business */}
          <div className='w-1/2'>
            <div className='flex flex-col gap-3 text-sm'>
              <h3 className='text-lg'>Business</h3>
              {footerLinks.business.map((link, i) => (
              <div key={i}>
                <Link scroll={false} href={link.href} key={i}>
                  <p className='text-gray-400 hover:underline cursor-pointer'>{link.title}</p>
                </Link>
              </div>
              ))}
              <hr className='mt-4 mb-6 md:hidden' />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default FooterInfo;
