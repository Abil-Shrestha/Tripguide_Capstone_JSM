import { ChangeEvent, useState } from 'react';
import { FaStar } from 'react-icons/fa';

import { HotelDetailsSummary, HotelReviews, HotelDetailImages, HotelDescriptions, FindCars, HotelFeatures, HotelAmenities, HotelDetailsHeader, HotelRooms, HotelTrends } from '@components';
import { IHotelDetail } from '@types';

const styles = {
  chips: 'flex items-center justify-center h-[26px] rounded-[5px] dark:bg-cBlack-3 dark:text-cBlack-6',
  findCarButton: 'flex items-center justify-center h-[30px] w-[100px] text-[14px] rounded-[30px]',
};

const HotelDetail = ({ detail }: IHotelDetail) => {
  const [extraFeatures, setExtraFeatures] = useState([]);
  const [review, setReview] = useState('');

  const handleCheck = (event: ChangeEvent<HTMLInputElement>) => {
    let updatedList = [...extraFeatures];
    if (event.target.checked) {
      updatedList = [...extraFeatures, event.target.value];
    } else {
      updatedList.splice(extraFeatures.indexOf(event.target.value), 1);
    }
    setExtraFeatures(updatedList);
  };

  return (
    <div className='flex flex-col gap-[70px] items-center my-[70px]'>
      <div className='flex items-center justify-center w-full pb-[70px] dark:border-b-2 dark:border-b-cBlack-3'>
        <div className='flex flex-col gap-[40px] w-[1240px]'>
          {/* Title */}
          <HotelDetailsHeader name={detail?.name} addressLine1={detail?.location.address.addressLine1} starRating={detail?.starRating} revCount={detail?.totalReviewCount} />
          {/* Images */}
          <HotelDetailImages imgs={detail?.images} />
          {/* Chips and Rating */}
          <div className='flex gap-[36px] items-center font-DMSans font-medium text-[14px]'>
            <div className='flex gap-[14px]'>
              <p className={`${styles.chips} w-[32px] bg-[#D5E1D6] text-[#38B245]`}>{detail?.starRating}</p>
              <p className={`${styles.chips} w-[64px] bg-[#E8DECF] text-[#FD9704]`}>Perfect</p>
              <p className={`${styles.chips} w-[72px] bg-[#EAEEFA] text-[#0B3BA7]`}>Hotels</p>
              <p className={`${styles.chips} w-[89px] bg-[#FCEBF1] text-[#E96594]`}>Building</p>
              <p className={`${styles.chips} w-[89px] bg-[#FBEEE8] text-[#DC6E3D]`}>Top Value</p>
            </div>
            {/* Test/Temp for Stars rating */}
            <div className='flex gap-[10px]'>
              {Array.from({ length: detail?.starRating }).map(() => <FaStar fill='#FFC542' className='h-5 w-5' />)}
            </div>
          </div>
          {/* Details */}
          <div className='flex gap-[90px]'>
            {/* Details 1 */}
            <div className='flex flex-col gap-[38px] w-[742px]'>
              <div className='flex flex-col gap-2 font-Roboto font-medium h-[140px] dark:border-b-2 dark:border-b-cBlack-3'>
                <p className='text-[40px] text-cBlack-2 dark:text-cBlack-6'>{detail?.brand}</p>
                <p className='flex gap-2 text-[24px] text-cBlack-4'>{detail?.location.address.cityName}, {detail?.location.address.countryName}</p>
              </div>
              {/* Tabs */}
              <HotelDescriptions desc={detail?.description} />
              {/* Hotel Features */}
              <HotelFeatures features={detail?.hotelFeatures.features} />
              {/* Amenities */}
              <HotelAmenities amenity={detail?.hotelFeatures.hotelAmenities} />
            </div>
            {/* Details 2 */}
            <HotelDetailsSummary price={detail?.ratesSummary.minPrice} extraFeatures={extraFeatures} handleCheck={handleCheck} />
          </div>
        </div>
      </div>
      {/* Select Room */}
      <HotelRooms rooms={detail?.rooms} />
      {/* Reviews */}
      <HotelReviews guestReviews={detail?.guestReviews} review={review} setReview={setReview} />
      {/* Trending Hotels */}
      <HotelTrends />
      {/* Find Cars */}
      <FindCars />
    </div>
  );
};

export default HotelDetail;
