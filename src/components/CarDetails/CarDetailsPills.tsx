interface DetailPill {
  image: string;
  name: string;
}
interface IDetailPillsProps {
  pills: DetailPill[];
}

const CarDetailsPills = ({ pills }:IDetailPillsProps) => (
  <div className='flex flex-wrap gap-[50px] lg:gap-[80px] my-10'>
    {pills.map((pill, i) => (
      <div className='flex items-center gap-4' key={i}>
        <img src={pill.image} alt='pill' className='h-[32px] w-[32px] lg:h-[50px] lg:w-[50px]' />
        <p className='text-[15px] lg:text-[18px] font-[500]'>{pill.name}</p>
      </div>
    ))}
  </div>
);

export default CarDetailsPills;
