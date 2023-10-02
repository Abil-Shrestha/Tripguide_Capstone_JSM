/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { Hotels, Cars, Flights, HeroSection } from '@components';
import { useGlobalContext } from '@context/GlobalContext';

const Home = () => {
  const router = useRouter();
  const { activeTab, setActiveTab } = useGlobalContext();

  useEffect(() => {
    if (router.query && router.query.source) {
      const { source } = router.query;
      setActiveTab(source);
    }
    window.scrollTo(0, 0);
  }, [router]);

  return (
    <div className='flex flex-col gap-[40px] bg-[#FAFAFA] dark:bg-cBlack-1 w-full relative'>
      <HeroSection />
      <div className='z-1 relative'>
        {activeTab === 'hotel' && (
        <Hotels />
        )}
        {activeTab === 'car' && (
        <Cars />
        )}
        {activeTab === 'flight' && (
        <Flights />
        )}
      </div>
    </div>
  );
};

export default Home;
