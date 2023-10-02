import { DetailsSummaryLeft, DetailsSummaryDescription } from '@components';

const DetailsSummary = () => (
  <div className='flex flex-col xl:flex-row w-full'>
    <DetailsSummaryLeft />
    <DetailsSummaryDescription
      isCheckout={false}
      carImage={null}
      styles='w-full mt-10 xl:mt-0 xl:ml-32 xl:w-[60%] rounded-[31px] bg-white dark:bg-[#222529] dark:border-cBlack-3 border-2 border-[#F4F5F6] px-4 md:px-8 py-6 flex flex-col'
    />
  </div>
);

export default DetailsSummary;

