/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import { useTheme } from 'next-themes';

const brandImages = [
  { id: 1, image: '/assets/CarImages/airbnb.png', darkImage: '/assets/CarImages/airbnb-dark.png', name: 'Airbnb', href: 'https://www.airbnb.com' },
  { id: 2, image: '/assets/CarImages/hubspot.png', darkImage: '/assets/CarImages/hubspot-dark.png', name: 'Hubspot', href: 'https://www.hubspot.com' },
  { id: 3, image: '/assets/CarImages/google.png', darkImage: '/assets/CarImages/google-dark.png', name: 'Google', href: 'https://www.google.com' },
  { id: 4, image: '/assets/CarImages/microsoft.png', darkImage: '/assets/CarImages/microsoft-dark.png', name: 'Microsoft', href: 'https://www.microsoft.com' },
  { id: 5, image: '/assets/CarImages/walmart.png', darkImage: '/assets/CarImages/walmart-dark.png', name: 'Walmart', href: 'https://www.walmart.com' },
  { id: 6, image: '/assets/CarImages/fedex.png', darkImage: '/assets/CarImages/fedex-dark.png', name: 'Fedex', href: 'https://www.fedex.com' },
];

const OurBrands = () => {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <div className='mx-4 md:w-[80%] md:mx-auto font-DMSans font-[700] mb-12 mt-8 text-center'>
        <h1 className='text-[28px] md:text-[40px] text-cBlack-1 mb-4 md:mb-6 dark:text-white'>Our Brands</h1>
        <p className='text-[14px] md:text-[16px] text-[#84878B] font-[400] w-full md:w-[600px] md:mx-auto dark:text-[#B1B5C4]'>
          We Know the difference is in the details and that&apos;s what separates our car rental services from the competitors.
          Try us out and experience the differnce.
        </p>
      </div>
      <div className='flex flex-wrap w-full max-w-4xl mx-auto justify-center md:justify-between gap-8 md:gap-0'>
        {brandImages.map((brand, i) => (
          <Link href={brand.href} passHref key={i}>
            <a target='_blank' rel='noreferrer'>
              <img
                src={theme === 'dark' ? brand.darkImage : brand.image}
                alt={brand.name}
                key={brand.id}
                className='cursor-pointer transition-all duration-200 ease-in-out hover:scale-105 animate-slideup w-[90px] h-[29px] object-contain'
              />
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default OurBrands;
