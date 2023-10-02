import { CarOptionCard } from '@components';

const options = [
  { id: 1, name: 'Choose Your Car', desc: 'Select a car using search or Catakxy', image: '/assets/CarImages/car-option1.png', darkImage: '/assets/CarImages/car-option1-dark.png' },
  { id: 2, name: 'Contact Your Dealer', desc: "After you've selected a car book it and a dealer will contact you soon", image: '/assets/CarImages/car-option2.png', darkImage: '/assets/CarImages/car-option2-dark.png' },
  { id: 3, name: 'Get Your Car', desc: 'Here you are! Your car is booked and waiting for you!', image: '/assets/CarImages/car-option3.png', darkImage: '/assets/CarImages/car-option3-dark.png' },
];

const FindModernCars = () => (
  <div className='mx-4 md:w-[80%] md:mx-auto font-DMSans font-[700] mb-[110px]'>
    <div className='text-center mb-24'>
      <h1 className='text-[28px] md:text-[40px] text-cBlack-1 mb-4 md:mb-6 dark:text-white'>Best Way to Find Your <br className='md:hidden' />Modern Cars</h1>
      <p className='text-[14px] md:text-[16px] text-[#84878B] font-[400] w-full md:w-[600px]  md:mx-auto dark:text-[#B1B5C4]'>
        We Know the difference is in the details and that&apos;s what separates our car rental services from the competitors.
        Try us out and experience the differnce.
      </p>
    </div>
    <div className='flex flex-col md:flex-row gap-[100px] md:gap-12 justify-between items-center xl:px-32 mb-24'>
      {options.map((option, i) => (
        <CarOptionCard data={option} key={i} />
      ))}
    </div>

  </div>
);

export default FindModernCars;
