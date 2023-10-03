import { OneWay, TwoWay } from '@components';
import { useGlobalContext } from '@context/GlobalContext';

const FlightDetail = () => {
  const { flightOneWay } = useGlobalContext();

  return (
    <div className='flex flex-col gap-[40px] w-[938px] p-[38px_47px] bg-white dark:bg-cBlack-2 border-[1px] border-cBlack-6 dark:border-cBlack-3 rounded-[20px]'>
      <OneWay />
      {!flightOneWay && (
      <>
        <div className='h-[1px] w-[843px] bg-cBlack-6 dark:bg-cBlack-3' />
        <TwoWay />
      </>
      )}
    </div>
  );
};

export default FlightDetail;
