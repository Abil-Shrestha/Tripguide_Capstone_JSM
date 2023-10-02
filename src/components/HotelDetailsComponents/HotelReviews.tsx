/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { Dispatch, SetStateAction } from 'react';
import { FaStar } from 'react-icons/fa';

import { LatestReviewCard } from '@components';
import { reviews } from '@utils/tempdata/HotelDetails';

interface IReviews {
  guestReviews: {
    city: string;
    firstName: string;
    overallScore: string;
    reviewTextPositive: string;
    reviewTextGeneral: string;
    reviewTextNegative: string;
    creationDate: string;
  }[];
  review: string;
  setReview: Dispatch<SetStateAction<string>>;
}

const HotelReviews = ({ review, setReview, guestReviews }: IReviews) => (
  <div className='flex flex-col xl:gap-[62px] w-full xl:w-[966px]'>
    <div className='flex flex-col gap-[20px]'>
      <div className='flex justify-between items-center'>
        <p className='font-DMSans font-bold text-[20px] md:text-[34px] text-cBlack-2 dark:text-white'>Attach Your Review</p>
        {/* Test/Temp for Stars rating */}
        <div className='flex gap-[10px]'>
          {Array.from({ length: 5 }).map(() => <FaStar fill='#FFC542' className='h-5 w-5' />)}
        </div>
      </div>
      <textarea
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder='Write your detailed review here...'
        className='h-[134px] p-[25px_30px] font-medium font-DMSans text-[18px] bg-cBlack-7 dark:bg-cBlack-2 border-2 border-cBlack-6 dark:border-cBlack-3 rounded-[12px] focus:outline-none resize-none'
      />
      <div className='flex justify-end items-center gap-[20px] font-DMSans'>
        <button type='button' className='flex items-center justify-center h-[39px] w-[100px] text-[16px] font-bold text-cBlack-4 bg-cBlack-7 dark:bg-cBlack-2 rounded-[10px] border-[1px] border-cBlack-6 dark:border-cBlack-3'>
          Cancel
        </button>
        <button type='button' className='flex items-center justify-center h-[39px] w-[100px] text-[16px] font-bold text-white bg-primaryBlue rounded-[10px]'>Submit</button>
      </div>
    </div>
    <div className='flex flex-col gap-[30px] mt-6 xl:mt-0'>
      <p className='mb-[5px] text-[24px] font-poppins font-[600] text-cBlack-2 dark:text-white'>Latest Reviews</p>
      {/* TODO: Fix this */}
      {guestReviews === null ? (
        reviews.map((rev, i) => (
          <LatestReviewCard reviews={rev} key={i} />
        ))
      ) : (
        guestReviews?.map((rev, i) => (
          <LatestReviewCard reviews={rev} key={i} />
        ))
      )}
    </div>
    <div className='flex justify-center items-center mt-6 xl:mt-[10px]'>
      <button
        type='button'
        className='h-[46px] w-full md:w-[176px] flex justify-center items-center gap-3 rounded-lg xl:rounded-[47px]
        text-[16px] text-center font-medium font-DMSans xl:text-cBlack-1 dark:text-cBlack-6 border border-black xl:border-[1px] xl:border-cBlack-5 dark:border-cBlack-3'
      >
        <img src='/view-all-loader.png' alt='loader' className='h-5 w-5 animate-spin' />
        View All
      </button>
    </div>
  </div>
);

export default HotelReviews;
