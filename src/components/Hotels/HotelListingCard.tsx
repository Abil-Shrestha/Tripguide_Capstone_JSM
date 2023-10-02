import Image from 'next/image';
import { useRouter } from 'next/router';
import { FaStar, FaWifi } from 'react-icons/fa';
import { CgFlagAlt } from 'react-icons/cg';
import { TiLocationOutline } from 'react-icons/ti';
import { FiCalendar, FiDatabase } from 'react-icons/fi';
import { TbPlane, TbParking } from 'react-icons/tb';
import { BsWallet2 } from 'react-icons/bs';
import { VscGlobe } from 'react-icons/vsc';

interface IHotel {
  hotel: {
    hotelId: string;
    brand: string;
    location: {
      address: {
        addressLine1: string;
        cityName: string;
        countryName: string;
        zip: string;
      }
    }
    ratesSummary: {
      minCurrencyCode: string;
      minPrice: number;
    }
    hotelFeatures: {
      hotelAmenityCodes: string[]
    }
    media: {
      url: string;
    }
    name: string;
    starRating: number;
    totalReviewCount: number;
    thumbnailUrl: string;
  }
  checkIn: string | string[];
  checkOut: string | string[];
}

const styles = {
  icon: 'h-5 w-5 dark:text-cBlack-5',
  iconLabel: 'flex gap-4 items-center',
};

const services = [
  {
    name: 'Free Wifi',
    icon: <FaWifi className={styles.icon} />,
  },
  {
    name: 'Free Parking',
    icon: <TbParking className={styles.icon} />,
  },
  {
    name: 'Special Offer',
    icon: <BsWallet2 className={styles.icon} />,
  },
  {
    name: 'Visit Hotel Website',
    icon: <VscGlobe className={styles.icon} />,
  },
  {
    name: 'Taking Safety Measures',
    icon: <FiDatabase className={styles.icon} />,
  },
];

const HotelListingCard = ({ hotel, checkIn, checkOut }: IHotel) => {
  const router = useRouter();

  const handleDetails = () => {
    router.push({ pathname: `/listing/hotel/details/${hotel.hotelId}` });
  };

  return (
    hotel?.hotelId && (
    <div key={hotel.hotelId} className='flex h-[465px] rounded-[30px] border-[1px] border-cBlack-6 dark:border-cBlack-3 overflow-clip'>
      <div className='relative min-w-[430px]'>
        <Image src={hotel.media.url} layout='fill' objectFit='cover' priority />
      </div>
      <div className='flex flex-col justify-between p-[30px]'>
        <div className='flex flex-col justify-between h-[103px]'>
          <div className='font-DMSans font-bold text-[40px] text-cBlack-2 dark:text-cBlack-8 cursor-pointer'>{hotel.brand}</div>
          <div className='flex justify-between'>
            <p className='flex items-center text-cBlack-3 dark:text-cBlack-7 font-normal text-[14px]'>
              <FaStar fill='#FFC542' className='mr-2 h-4 w-4' />
              {hotel.starRating}&nbsp;
              <span className='text-cBlack-4 dark:text-cBlack-5'>({hotel.totalReviewCount} reviews)</span>
            </p>
            <p className='flex gap-2 items-center text-cBlack-4 dark:text-cBlack-5 text-[14px]'>
              <CgFlagAlt className='h-5 w-5' />
              {hotel.location.address.cityName}, {hotel.location.address.countryName}
            </p>
          </div>
        </div>
        <div className='flex flex-[0_0_22%] flex-wrap justify-between text-[16px] font-normal font-DMSans text-cBlack-1'>
          <p className={`${styles.iconLabel} dark:text-white`}>
            <TiLocationOutline className={styles.icon} />
            {hotel.location.address.addressLine1}
          </p>
          <p className={`${styles.iconLabel} dark:text-white`}>
            <FiCalendar className={styles.icon} />
            {checkIn}-{checkOut}
          </p>
          <p className={`${styles.iconLabel} dark:text-white`}>
            <TbPlane className={styles.icon} />
            Departure from {hotel.location.address.cityName}
          </p>
        </div>
        <div className='flex justify-between'>
          <div className='flex flex-col gap-[12px] text-cBlack-3 text-[14px] font-DMSans font-normal'>
            {services.map((service, idx) => (
              <p key={idx} className={`${styles.iconLabel}  dark:text-cBlack-6`}>
                {service.icon}
                {service.name}
              </p>
            ))}
          </div>
          <div className='flex flex-col justify-between items-center'>
            <p className='flex items-center justify-center h-[49px] w-[176px] mt-9 text-[28px] text-cBlack-3 dark:text-cBlack-8 font-DMSans font-bold rounded-[30px] dark:bg-cBlack-2'>
              ${hotel.ratesSummary.minPrice}&nbsp;
              <span className='text-[16px] text-cBlack-4 dark:text-cBlack-5 font-medium'>For Two</span>
            </p>
            <button
              type='button'
              onClick={handleDetails}
              className='h-[49px] w-[176px] bg-primaryBlue text-[20px] font-medium font-DMSans text-white text-center rounded-[30px]'
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
    )
  );
};

export default HotelListingCard;
