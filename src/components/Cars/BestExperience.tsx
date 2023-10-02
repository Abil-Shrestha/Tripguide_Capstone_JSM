import { AiOutlineDollarCircle, AiOutlineTag } from 'react-icons/ai';
import { BsHeadphones, BsShieldCheck } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';

const experienceOptions = [
  {
    id: 5,
    name: 'Deals for every budget',
    desc: 'Choose from a wide variety of car classes new high-quality vehicles testing your needs and budget.',
    icon: <AiOutlineDollarCircle />,
  },
  {
    id: 6,
    name: 'Awesome Customer Support',
    desc: 'Deilver faster, more personalized support with the power of co browse and live chat',
    icon: <BsHeadphones />,
  },
  {
    id: 7,
    name: 'Free Cancelation',
    desc: 'No extra fee, you can cancel your booking anytime.',
    icon: <AiOutlineTag />,
  },
  {
    id: 8,
    name: 'Your Best Security',
    desc: 'Every detail that is part of your service has been created with your safety in mind',
    icon: <BsShieldCheck />,
  },
  {
    id: 9,
    name: 'Quality Drivces',
    desc: 'We have the most rigours drive selection process in the market. We work only with the best.',
    icon: <BiUser />,
  },
];

const BestExperience = () => (
  <div className='w-full grid grid-cols-12 gap-8 font-DMSans'>
    <div className='col-span-12 lg:col-span-6'>
      <img src='/assets/CarImages/carMobile.png' alt='' className='object-contain lg:hidden animate-slideleft' />
      <img src='/assets/CarImages/carDesktop.png' alt='' className='hidden object-cover lg:inline-flex h-[846px] animate-slideleft' />
    </div>
    <div className='col-span-12 lg:col-span-6 mx-6 lg:mr-auto lg:mt-[130px]'>
      <h3 className='text-[24px] xs:text-[32px] md:text-[40px] font-[500] ml-4 xs:ml-0 leading-[48px] dark:text-[#FCFCFD] text-cBlack-1'>Feel the best experience <br />with our rental deals</h3>
      <hr className='my-4 border border-[#F4F5F6] dark:border-cBlack-2' />
      <div className='mx-6'>
        {experienceOptions.map((option) => (
          <div key={option.id} className='group cursor-pointer flex mt-8 gap-4'>
            <div className='min-w-[48px] h-[42px] bg-[#F2F2F2] dark:bg-cBlack-2 rounded-md flex items-center justify-center text-[#B1B5C4] text-xl mt-2 dark:border dark:border-cBlack-3'>
              <p className='w-full flex items-center justify-center group-hover:text-2xl transition-all duration-300 ease-in-out text-[#316BFF] dark:text-[#B1B5C4]'>
                {option.icon}
              </p>
            </div>
            <div className='ml-4 w-full'>
              <h4 className='text-[22px] font-[500]'>{option.name}</h4>
              <p className='text-[14px] text-[#B1B5C4]'>{option.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default BestExperience;
