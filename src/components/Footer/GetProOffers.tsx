import { useState } from 'react';

const GetProOffers = () => {
  const [email, setEmail] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='relative mt-16'>
      <div className="z-10 mx-4 md:mx-6 relative max-w-7xl h-[248px] xl:mx-auto px-4 md:px-8 py-4 md:py-8 lg:px-16 bg-[url('/assets/background-images/pro-offers.png')] bg-center bg-contain bg-repeat bg-cBlue-500 rounded-lg">
        <div className='flex flex-col lg:flex-row lg:items-center justify-between h-full'>
          <div className='lg:w-[80%] px-2 lg:px-0'>
            <h3 className='text-2xl xs:text-3xl font-semibold mb-2 md:mb-4 text-white'>Get our pro offers</h3>
            <p className='text-gray-100 font-light leading-[2rem] text-[12px] xs:text-[15px]'>Create visual identity for your company, and an improve your overall brand</p>
          </div>
          <form onSubmit={handleSubmit} className='relative lg:ml-32 w-full mt-4 md:mt-0'>
            <input
              className='rounded-md pl-4 py-7 xl:py-5 w-full bg-white text-gray-400 focus:outline-none'
              type='email'
              placeholder='Type your email here'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type='submit'
              className='absolute top-0 right-0 w-12 xs:w-32 h-16 xl:h-12 mt-2 mr-2 rounded-md bg-cBlack-3 focus:outline-none text-white'
            >Sub<span className='hidden xs:inline-flex'>scribe</span>
            </button>
          </form>
        </div>
      </div>
      <div className='absolute bottom-0 h-12 xl:h-20 w-full bg-footerGray dark:bg-cBlack-2 left-0 z-1' />
    </div>
  );
};

export default GetProOffers;
