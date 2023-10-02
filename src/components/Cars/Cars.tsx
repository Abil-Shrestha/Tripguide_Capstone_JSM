import { FindModernCars, CarsExploreTopSection, OurBrands, BestExperience, FrequentlyAskedQuestions } from '@components';

const Cars = () => (
  <>
    <div className='mx-6 max-w-[1600px] xl:mx-auto mt-8 mb-[25px]'>
      <FindModernCars />
      <CarsExploreTopSection />
      <OurBrands />
    </div>
    <BestExperience />
    <div className='mx-6 max-w-[1600px] xl:mx-auto mt-8'>
      <FrequentlyAskedQuestions />
    </div>
  </>

);

export default Cars;
