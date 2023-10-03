import { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

import { MdKeyboardArrowRight } from 'react-icons/md';
import { FiCheck } from 'react-icons/fi';

import { useGlobalContext } from '@context/GlobalContext';
import { Checkbox, CreditCardInput, PlaceholderCard, DetailsSummaryDescription, YourTour } from '@components';
import { ccimages, saveCardLabel } from '@utils/tempdata/Bookings';

const ConfirmCarBooking = () => {
  const router = useRouter();
  const { activeCar, carFromID, carToID, carStartDate, carEndDate, carFromLocation, carToLocation } = useGlobalContext();
  const [selectedCard, setSelectedCard] = useState('');
  const [saveCard, setSaveCard] = useState([]);

  const handleSelectCard = (card: string) => {
    setSelectedCard(card);
  };

  const handleSaveCard = (event: ChangeEvent<HTMLInputElement>) => {
    let updatedList = [...saveCard];
    if (event.target.checked) {
      updatedList = [...saveCard, event.target.value];
    } else {
      updatedList.splice(saveCard.indexOf(event.target.value), 1);
    }
    setSaveCard(updatedList);
  };

  const handlePreviousRoute = (type) => {
    if (type === 'listing') {
      router.push({
        pathname: '/listing/car',
        query: {
          fromId: carFromID,
          toId: carToID,
          pickupDate: `${carStartDate?.toISOString().split('T')[0]} ${carStartDate?.toISOString().split('T')[1].slice(0, 8)}`,
          dropoffDate: `${carEndDate?.toISOString().split('T')[0]} ${carEndDate?.toISOString().split('T')[1].slice(0, 8)}`,
        },
      });
    } else if (type === 'details') {
      router.push({ pathname: `/listing/car/details/${activeCar?.id}` });
    }
  };

  const handleRentalCarCheckout = (e) => {
    // this will make the call to stripe, add a rental car booking to our DB and push the user to the success page
    e.preventdefault();
  };

  return (
    <div className='flex justify-center items-center mt-[70px]'>
      <div className='flex justify-between w-[1282px]'>
        <div className='flex flex-col'>
          {/* Crumbs */}
          <div className='flex items-center mt-[50px] text-[14px] font-normal font-DMSans'>
            <Link href='/' className='text-cBlack-3 dark:text-cBlack-7'>Home</Link>
            <MdKeyboardArrowRight className='h-5 w-5 text-cBlack-3 dark:text-cBlack-7' />
            <button onClick={() => handlePreviousRoute('listing')} type='button' className='text-cBlack-3 dark:text-cBlack-7'>
              Car List
            </button>
            <MdKeyboardArrowRight className='h-5 w-5 text-cBlack-3 dark:text-cBlack-7' />
            <button onClick={() => handlePreviousRoute('details')} type='button' className='text-cBlack-3 dark:text-cBlack-7'>
              Car Details
            </button>
            <MdKeyboardArrowRight className='h-5 w-5 text-cBlack-3 dark:text-cBlack-7' />
            <p className='text-cBlack-5 dark:text-cBlack-4'>Confirm and Pay</p>
          </div>
          <div className='flex flex-col gap-[40px] w-[525px] mt-[48px]'>
            <p className='h-[86px] font-DMSans text-[40px] text-cBlack-2 dark:text-white font-bold border-b-2 border-b-cBlack-7 dark:border-b-2 dark:border-b-cBlack-3'>
              Confirm your Rental
            </p>
            <div className='flex flex-col gap-[30px]'>
              <p className='font-DMSans text-[34px] text-cBlack-1 dark:text-cBlack-6 font-bold'>Your Rental</p>
              <div className='flex flex-col gap-[20px]'>
                <YourTour label='Pickup Date' info={carStartDate?.toDateString()} />
                <YourTour label='Pickup Location' info={carFromLocation} />
                <YourTour label='Dropoff Date' info={carEndDate?.toDateString()} />
                <YourTour label='Dropoff Location' info={carToLocation} />
              </div>
            </div>
            {/* Credit Card Section */}
            <div className='flex flex-col gap-[20px] h-[147px] w-fit dark:border-b-2 dark:border-b-cBlack-3'>
              <p className='font-DMSans text-[34px] text-cBlack-1 dark:text-cBlack-6 font-bold'>Credit Cards</p>
              <div className='flex gap-[10px]'>
                {ccimages.map((cc) => (
                  <button
                    key={cc.card}
                    type='button'
                    onClick={() => handleSelectCard(cc.card)}
                    className={`relative h-[51px] w-[98px] py-[12px] px-[5px] rounded-[6px] ${selectedCard === cc.card ? 'bg-primaryBlue/5 dark:bg-cBlack-1 border-[1px] border-primaryBlue' : 'bg-white dark:bg-cBlack-2'}`}
                  >
                    {selectedCard === cc.card && (
                      <div className='absolute -right-1 -top-1 flex items-center justify-center h-[14px] w-[14px] rounded-full bg-primaryBlue'>
                        <FiCheck className='h-[12px] w-[12px] text-white' />
                      </div>
                    )}
                    <Image src={cc.image} height={24} width={72} layout='responsive' objectFit='contain' />
                  </button>
                ))}
              </div>
            </div>
            {/* Placeholder Cards */}
            <div className='flex gap-[20px] w-[692px]'>
              <PlaceholderCard bgColor='bg-[#BDDBA6]' cardTypeImage='/assets/paymentlogos/visa.png' />
              <PlaceholderCard bgColor='bg-[#CED9FD]' cardTypeImage='/assets/paymentlogos/mastercard.png' />
            </div>
            {/* Credit card Input */}
            <div className='flex flex-col gap-[20px] w-[470px]'>
              <div className=''>
                <CreditCardInput />
              </div>
              <Checkbox label={saveCardLabel} checked={saveCard} onChange={handleSaveCard} />
              <button
                onClick={handleRentalCarCheckout}
                type='button'
                className='flex justify-center items-center mt-[14px] h-[45px] w-[232px] font-DMSans font-medium text-white text-[18px] rounded-[30px] bg-primaryBlue disabled:bg-gray-200'
              >
                Confirm and Reserve
              </button>
            </div>
          </div>
        </div>
        {/* Summary */}
        <DetailsSummaryDescription
          isCheckout
          carImage='/assets/CarImages/details3.png'
          styles='w-full h-full mt-10 xl:mt-[200px] xl:ml-32 xl:w-[40%] rounded-[31px] bg-white dark:bg-[#222529] dark:border-cBlack-3 border-2 border-[#F4F5F6] px-4 md:px-8 py-6 flex flex-col'
        />
      </div>
    </div>
  );
};
export default ConfirmCarBooking;
