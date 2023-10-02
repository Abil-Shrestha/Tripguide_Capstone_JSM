import { Search, HeroImage } from '@components';
import { useGlobalContext } from '@context/GlobalContext';

const HeroSection = () => {
  const { activeTab, carToLocation, carFromLocation, carToID, carFromID } = useGlobalContext();

  const classNames = {
    section: 'relative flex flex-col gap-[50px] justify-center items-center w-full dark:text-white',
  };

  const generateActiveTab = (tab) => {
    switch (tab) {
      case 'flight':
        return (
          <div className='flex flex-col gap-6'>
            <p className='w-full font-poppins leading-[85px] drop-shadow-md text-white'>
              Amazing Flight To<br /> Switzerland
            </p>
            <p className='text-[34px] text-white'>Find and book a great experience</p>
          </div>
        );
      case 'hotel':
        return (
          <p className='w-full font-poppins leading-[85px] drop-shadow-md text-cBlack-1'>
            Book With Us <br /> And Enjoy your <br /> Journey!
          </p>
        );
      case 'car':
        return (
          <div className='flex flex-col gap-6'>
            <p className='w-full font-poppins leading-[85px] drop-shadow-md text-[#23262F]'>
              Find your <br /> Best rental car?
            </p>
            <p className='text-[34px] text-[#23262F]'>Find and book a great experience</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className={`${classNames.section} flex-row h-[732px]`}>
      <div className='absolute inset-0 h-[656px] w-full'>
        <HeroImage activeTab={activeTab} />
      </div>
      <div className='relative flex -mt-[10%] text-6xl mb-24 text-[70px] font-bold tracking-normal mx-6'>
        {generateActiveTab(activeTab)}
      </div>
      <Search />
    </section>
  );
};

export default HeroSection;
