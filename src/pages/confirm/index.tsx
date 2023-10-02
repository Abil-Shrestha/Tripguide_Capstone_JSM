import { ChangeEvent, useState } from 'react';
import Image from 'next/image';
import { FiCheck } from 'react-icons/fi';
import { useSession } from 'next-auth/react';

import { Checkbox, CreditCardInput, Crumbs, PlaceholderCard, Summary, YourTour } from '@components';
import { ccimages, saveCardLabel } from '@utils/tempdata/Bookings';

const Confirm = () => {
  const [selectedCard, setSelectedCard] = useState('');
  const [saveCard, setSaveCard] = useState([]);
  const { data: session } = useSession();
  console.log('session ---->', session.user);
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

  return (
    <div className='flex justify-center items-center mt-[70px]'>
      <div className='flex justify-between w-[1282px]'>
        <div className='flex flex-col'>
          {/* Crumbs */}
          <Crumbs label='Hotel' step={3} />
          <div className='flex flex-col gap-[40px] w-[525px] mt-[48px]'>
            <p className='h-[86px] font-DMSans text-[40px] text-cBlack-2 dark:text-white font-bold border-b-2 border-b-cBlack-7 dark:border-b-2 dark:border-b-cBlack-3'>
              Confirm your Book
            </p>
            <div className='flex flex-col gap-[30px]'>
              <p className='font-DMSans text-[34px] text-cBlack-1 dark:text-cBlack-6 font-bold'>Your tour</p>
              <div className='flex flex-col gap-[20px]'>
                <YourTour label='Date' info='June 27-30, 2020' />
                <YourTour label='Traveller' info='1 passenger' />
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
            </div>
          </div>
        </div>
        {/* Summary */}
        <Summary />
      </div>
    </div>
  );
};

export default Confirm;
