/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect } from 'react';

import { TermList } from '@components';

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='max-w-6xl mx-16 xl:mx-auto font-DMSans mt-6 lg:mt-12'>
      <h1 className='text-2xl font-semibold ml-1 mb-4 lg:mb-8'>Terms and Conditions</h1>
      <div>
        <h3 className='mb-3 text-lg'>Last Updated: Oct 9, 2022</h3>
        <p className='text-gray-400 text-[12px] md:text-[14px] leading-[1.3rem] md:leading-[2rem]'>
          Please read these terms and conditions of use carefully before accessing, using or obtaining any materials,
          information, products or services. By accessing the TripGuide website, mobile or tablet application, or any other feature or other
          TripGuide platform (collectively, &apos;Our Website&apos;), you agree to be bound by these terms and conditions (&apos;Terms&apos;) and our Privacy Policy.
          If you do not accept all of these Terms, then you may not use Our Website. In these Terms, &apos;we&apos;, &apos;us&apos;, &apos;our&apos; and &apos;TripGuid&apos;
          refer to TripGuide Software Corporation,
          &apos;your&apos; refers to you, the user of Our Website.
        </p>
      </div>
      <div className='flex flex-col gap-2 mt-6 text-gray-400 text-[12px] w-full overflow-hidden'>
        <div className='flex gap-3 items-center w-full'>
          <input type='checkbox' disabled className='h-2 w-3 xs:h-3 bg-cBlue-100 appearance-none rounded-sm' />
          <label className='text-[9px] sm:text-[12px] lg:text-[16px]'>THESE TERMS INCLUDE AN ARBITRATION CLAUSEHT TO PAIN A CLASS ACTION OR REPRESENTATIVE LAWSUIT.</label>
        </div>
        <div className='flex gap-3 items-center w-full'>
          <input type='checkbox' disabled className='h-2 w-3 xs:h-3 bg-cBlue-100 appearance-none rounded-sm' />
          <label className='text-[9px] sm:text-[12px] lg:text-[16px]'>We may modify these Terms for any reason rights and obligations that arose prior to such changes.</label>
        </div>
        <div className='flex gap-3 items-center w-full'>
          <input type='checkbox' disabled className='h-2 w-3 xs:h-3 bg-cBlue-100 appearance-none rounded-sm' />
          <label className='text-[9px] sm:text-[12px] lg:text-[16px]'>Your continued use of Our Website following tf your use. Please review these Terms periodically for changes.</label>
        </div>
        <div className='flex gap-3 items-center w-full'>
          <input type='checkbox' disabled className='h-2 w-3 xs:h-3 bg-cBlue-100 appearance-none rounded-sm' />
          <label className='text-[9px] sm:text-[12px] lg:text-[16px]'>If you object to any provision of these your only recourse is to immediately terminate use of Our Website.</label>
        </div>
      </div>
      <TermList />
    </div>
  );
};

export default TermsAndConditions;
