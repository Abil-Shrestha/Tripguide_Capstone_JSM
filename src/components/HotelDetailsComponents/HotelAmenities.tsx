interface IAmenity {
  amenity: {
    code: string;
    name: string;
  }[]
}

const HotelAmenities = ({ amenity }: IAmenity) => (
  <div className='flex flex-col gap-[36px] mt-[30px]'>
    <p className='font-DMSans font-bold text-[24px] text-cBlack-3 dark:text-cBlack-6'>Amenities</p>
    <div className='flex flex-wrap gap-[24px] w-[604px]'>
      {amenity?.map((item) => (
        <div key={item?.code} className='flex flex-[1_0_33%] gap-3 items-center font-Roboto font-normal text-[16px] text-[#4A4E54] dark:text-cBlack-5 '>
          {item?.name}
        </div>
      ))}
    </div>
    <button
      type='button'
      className='flex items-center justify-center mt-[20px] h-[40px] w-[156px] font-DMSans font-medium text-white text-[16px] bg-primaryBlue rounded-[30px]'
    >
      More Details
    </button>
  </div>
);

export default HotelAmenities;
