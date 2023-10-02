interface IFeature {
  features: string[];
}

const HotelFeatures = ({ features }: IFeature) => (
  <div className='flex flex-col gap-[30px] h-auto dark:border-b-2 dark:border-b-cBlack-3'>
    <p className='font-DMSans font-bold text-[24px] text-cBlack-3 dark:text-cBlack-6'>Hotel Features</p>
    <div className='flex gap-[47px] flex-wrap'>
      {features?.map((feat, idx: number) => (
        <div key={idx} className='flex gap-2 items-center font-Roboto font-normal text-[16px] text-[#4A4E54] dark:text-cBlack-5'>
          {feat}
        </div>
      ))}
    </div>
  </div>
);

export default HotelFeatures;
