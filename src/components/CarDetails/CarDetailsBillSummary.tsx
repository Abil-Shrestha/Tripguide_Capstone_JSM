import { useGlobalContext } from '@context/GlobalContext';

const CarDetailsBillSummary = () => {
  const { activeCar, carStartDate } = useGlobalContext();

  return (
    <div>
      {/* Bill Summary Section */}
      <h3 className='text-[24px] text-cBlack-1 dark:text-white mb-4'>Bill Summary</h3>
      {/* Costs */}
      <div className='flex flex-col gap-4'>
        <div className='flex items-center justify-between'>
          {/* TODO: Make this dynamic */}
          <p className='text-[#84878B]'>${activeCar?.rates?.USD?.basePrices?.DAILY} x 1 day</p>
          <p className='text-cBlack-3 dark:text-white'>${activeCar?.rates?.USD?.basePrices?.DAILY}</p>
        </div>
      </div>
      {/* total */}
      <div className='bg-[#F4F5F6] dark:bg-cBlack-3 rounded-[6px] h-[40px] p-4 flex justify-between items-center mt-4'>
        <p>Total</p>
        <p>${activeCar?.rates?.USD?.basePrices?.DAILY}</p>
      </div>
      <div className='flex justify-center mt-10'>
        <p className='text-[#84878B] text-[14px] text-center'>Free cancellation until {carStartDate?.toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default CarDetailsBillSummary;

