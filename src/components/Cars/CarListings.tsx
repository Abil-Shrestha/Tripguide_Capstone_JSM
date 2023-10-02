/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { IoCarSharp } from 'react-icons/io5';
import { carFilters } from '@utils/tempdata/CarListings';
import { useGetCarRentalsQuery } from '@services/pricelineApi';
import { useGlobalContext } from '@context/GlobalContext';
import { Checkbox, FilterTypeContainer, CarListingCard, SortSelect, Loading } from '@components';
import { shapeCarData } from '@utils/functions';

const CarOptionCard = () => {
  const router = useRouter();
  const { cars, setCars } = useGlobalContext();
  const { locationPickup, locationDropoff, pickupDate, returnDate } = router.query;
  const { data: carData, isFetching, error } = useGetCarRentalsQuery({ locationPickup, locationDropoff, pickupDate, returnDate });

  const [filteredCars, setFilteredCars] = useState(null);
  const [checked, setChecked] = useState([]);
  const [priceRange, setPriceRange] = useState(50);
  const [activeType, setActiveType] = useState('all');
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(6);
  const [rentalModels, setRentalModels] = useState({});

  const size = (priceRange * 100) / 200;

  useEffect(() => {
    if (carData) {
      const c = shapeCarData(carData);
      setCars(c);
    }
  }, [carData]);

  // filter by category
  useEffect(() => {
    if (activeType && activeType !== 'all') {
      setFilteredCars(cars?.cars?.filter((car) => car.vehicleCategoryIds.indexOf(activeType) !== -1));
    } else {
      setFilteredCars(cars?.cars);
    }
  }, [activeType]);

  // filter by type
  useEffect(() => {
    if (checked.length > 0) {
      setFilteredCars(cars?.cars?.filter((car) => checked.indexOf(car?.vehicleInfo?.vehicleExample?.split(' ')[0]?.toLowerCase()) !== -1));
    } else {
      setFilteredCars(cars?.cars);
    }
  }, [checked]);

  useEffect(() => {
    if (cars !== null && cars !== undefined) {
      setFilteredCars(cars?.cars?.slice(start, end));

      setRentalModels({
        label: 'Best Brands',
        // eslint-disable-next-line no-unsafe-optional-chaining
        checkboxes: [...cars?.models.map((model) => ({ label: model }))],
      });
    }
  }, [carData, cars]);

  const setSliderBackground = () => `linear-gradient(90deg, #145CE6 ${size}%, #F2F2F2 ${size}%)`;

  const handleCheck = (event: ChangeEvent<HTMLInputElement>) => {
    let updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  const handlePriceChange = (event) => {
    setPriceRange(event.target.value);
  };

  if (isFetching) {
    return (
      <Loading label='Looking for available car rentals...' />
    );
  }

  if (error) {
    return (
      <div className='h-screen flex items-center justify-center'>
        <p className='text-2xl font-semibold text-red-500'>Something went wrong</p>
      </div>
    );
  }

  return (
    <div className='w-full h-full flex flex-col lg:flex-row mt-16 overflow-hidden'>
      {cars?.cars.length === 0 ? (
        <div className='flex flex-col items-center justify-center w-full h-full'>
          <IoCarSharp className='h-24 w-24' />
          <p className='text-2xl font-semibold text-cBlack-5 dark:text-cBlack-4'>No cars found</p>
        </div>
      ) : (
        <>
          {/* Filters */}
          <div className='hidden lg:block lg:w-[320px] mr-[40px] xl:mr-[80px]'>
            <h3 className='text-[24px] font-[500] mb-4'>Filter by</h3>
            {rentalModels?.checkboxes && (
            <div className='mb-4'>
              <FilterTypeContainer label={rentalModels?.label}>
                {rentalModels?.checkboxes?.slice(0, 6)?.map((box, i) => (
                  <Checkbox label={box} checked={checked} onChange={handleCheck} key={i} />
                ))}
              </FilterTypeContainer>
            </div>
            )}

            {carFilters.map((filter, idx) => (
              <div key={idx} className='mb-4'>
                {(filter.checkboxes === undefined || filter.label === 'Price Range') ? (
                  <FilterTypeContainer label={filter.label}>
                    <input
                      style={{ background: setSliderBackground() }}
                      type='range'
                      value={priceRange}
                      min={0}
                      max={200}
                      onChange={handlePriceChange}
                      className='range-slider-car w-full rounded-lg appearance-none cursor-pointer'
                    />
                    <p className='text-[18px] font-[400] text-[#84878B]'>${priceRange}</p>
                  </FilterTypeContainer>
                ) : (
                  <FilterTypeContainer label={filter.label}>
                    {filter.checkboxes.map((box, i) => (
                      <Checkbox label={box} checked={checked} onChange={handleCheck} key={i} />
                    ))}
                  </FilterTypeContainer>
                )}
              </div>
            ))}
          </div>
          {/* Cars */}
          <div className='w-full h-full'>
            { /* Categories */ }
            <div className='flex max-w-[1050px] justify-between gap-6 font-Roboto mb-8 overflow-x-scroll pb-4'>
              <div
                className={`${activeType === 'all' && 'shadow-xl'} bg-white min-w-[180px] flex flex-col items-center justify-center cursor-pointer transition-all duration-300 group`}
                onClick={() => setActiveType('all')}
              >
                <div className='p-4 w-full flex flex-col items-center justify-center rounded-t-md'>
                  <img src='https://i.gyazo.com/e2f643986a968a1566bc7af29f6ef50d.png' alt='car-type' className='object-cover w-full h-[80px] bg-transparent' />
                </div>
                <p className='bg-gray-200 capitalize text-center  w-full p-2 text-[14px] font-[500] rounded-b-md'>All</p>
              </div>
              {cars && cars?.categories?.map((item, idx) => (
                <div
                  className={`${activeType === item.id && 'shadow-xl'} bg-white min-w-[180px] flex flex-col items-center justify-center cursor-pointer transition-all duration-300 group`}
                  key={idx}
                  onClick={() => setActiveType(item.id)}
                >
                  <div className='p-4 w-full flex flex-col items-center justify-center rounded-t-md'>
                    <img
                      src={item.image ? `https://s1.pclncdn.com${Object?.values(item.image)[0]}` : 'https://i.gyazo.com/e2f643986a968a1566bc7af29f6ef50d.png'}
                      alt='car-type'
                      className='object-cover w-full h-[80px]'
                    />
                  </div>
                  <p
                    className='bg-gray-200 capitalize text-center  w-full p-2 text-[14px] font-[500] rounded-b-md'
                  >{item.name}
                  </p>
                </div>
              ))}
            </div>
            {/* Sort TODO */}
            <div className='flex justify-end relative z-20 items-center mb-12 gap-2'>
              <p className='text-[14px] text-[#84878B]'>Sort by</p>
              <SortSelect />
            </div>
            {/* Car Cards */}
            <div className='grid grid-cols-12 w-full gap-6 place-items-center'>
              {cars && filteredCars?.slice(start, end).map((item) => (
                <CarListingCard item={item} key={item.id} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CarOptionCard;
