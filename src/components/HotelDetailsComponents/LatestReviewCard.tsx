import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

interface IProps {
  reviews: {
    city: string;
    firstName: string;
    overallScore: string;
    reviewTextPositive: string;
    reviewTextGeneral: string;
    reviewTextNegative: string;
    creationDate: string;
  }
}

const styles = {
  button: 'h-[30px] w-[126px] bg-[#145CE61A]/10 text-primaryBlue text-[16px] font-medium rounded-[30px]',
};

const LatestReviewCard = ({ reviews }: IProps) => (
  <div key={reviews.firstName} className='flex flex-col xl:flex-row justify-between h-full xl:h-auto p-[28px_30px] bg-white dark:bg-cBlack-2 border-[1px] border-cBlack-6 dark:border-cBlack-3 rounded-[16px]'>
    <div className='flex gap-[12px] min-w-[210px]'>
      <div className='relative h-[58px] w-[58px] rounded-full overflow-clip border-[1px] border-cBlack-7'>
        <Image src='/assets/HotelDetails/pf3.jpg' layout='fill' objectFit='cover' />
      </div>
      <div className='flex flex-col gap-1 font-DMSans'>
        <p className='text-[16px] text-cBlack-3 dark:text-cBlack-8 font-medium'>{reviews.firstName}</p>
        <p className='text-[14px] text-cBlack-4 dark:text-cBlack-5 font-normal'>{reviews.city}</p>
        <p className='flex gap-1 text-[12px] text-cBlack-5 font-normal'>
          45 Follower,
          <span>68 Reviews</span>
        </p>
      </div>
    </div>
    <div className='flex flex-col gap-[16px] font-DMSans w-full xl:w-[443px]'>
      <div className='flex items-center gap-[34px]'>
        {/* Test/Temp for Stars rating */}
        <div className='flex gap-[6px]'>
          {Array.from({ length: 5 }).map(() => <FaStar fill='#FFC542' className='h-4 w-4' />)}
        </div>
        <p className='text-cBlack-4 dark:text-cBlack-5 text-[14px] font-normal'>{reviews.creationDate}</p>
      </div>
      <p className='text-[16px] font-normal text-cBlack-4 dark:text-cBlack-5'>
        {reviews.reviewTextPositive || reviews.reviewTextGeneral || reviews.reviewTextNegative}
      </p>
      <div className='flex gap-[32px]'>
        <button type='button' className={styles.button}>Comment</button>
        <button type='button' className={styles.button}>Like</button>
        <button type='button' className={styles.button}>Reply</button>
      </div>
    </div>
  </div>
);

export default LatestReviewCard;
