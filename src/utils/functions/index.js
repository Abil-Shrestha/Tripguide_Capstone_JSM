import { flightImages } from '@constants/flightImages';

export const shapeFlightData = (flightData) => {
  const flightDataObj = {};
  let tmpAirlines = [];
  const airlines = [];
  let airports = [];
  const flyerOptions = [];
  let maxDuration;
  let minDuration;

  // for every entry in the carData object extract the data I need
  Object.entries(flightData).forEach(([key, value]) => {
    if (key === 'airline') tmpAirlines = value;
    if (key === 'airport') {
      airports = value;
    }
    if (key === 'brandReference') {
      value?.forEach((brand) => {
        const tmp = {
          name: brand?.name,
        };
        const perks = [];
        brand.brandAttributes.forEach((atr) => {
          const tmp2 = {
            type: atr?.type,
            desc: atr?.description,
          };
          perks.push(tmp2);
        });
        tmp.perks = perks;
        flyerOptions.push(tmp);
      });
    }
    if (key === 'totalTripSummary') {
      value?.airline?.forEach((flight) => {
        const tmp = {
          code: flight?.code,
          price: flight?.lowestTotalFare?.amount,
          image: flightImages[flight.code] || flightImages?.default,
          name: tmpAirlines?.find((airline) => airline.code === flight.code)?.name,
        };
        airlines.push(tmp);
      });
      maxDuration = value?.maxDuration;
      minDuration = value?.minDuration;
    }
  });

  flightDataObj.airlines = airlines;
  flightDataObj.airports = airports;
  flightDataObj.flyerOptions = flyerOptions;
  flightDataObj.maxDuration = maxDuration;
  flightDataObj.minDuration = minDuration;

  return flightDataObj;
};

export const shapeCarData = (carData) => {
  const carDataObj = {};

  const carsInfo = [];
  const partners = [];
  const categories = [];
  const models = [];
  let tags;

  // for every entry in the carData object extract the data I need
  Object.entries(carData).forEach(([key, value]) => {
    if (key === 'partners') {
      Object.values(value).forEach((val) => (
        partners.push(val)
      ));
    }
    if (key === 'tags') {
      tags = value;
    }
    if (key === 'vehicleCategories') {
      Object.values(value).forEach((val) => (
        categories.push({ id: val.display.id, name: val.display.name, image: val.display.images })
      ));
    }
    if (key === 'vehicleRates') {
      Object.values(value).forEach((val) => {
        carsInfo.push(val);
        const modelValue = val.vehicleInfo?.vehicleExample?.split(' ')[0].toLowerCase();
        if (!models.includes(modelValue) && modelValue !== undefined) {
          models.push(modelValue);
        }
      });
    }
  });

  carDataObj.partners = partners;
  carDataObj.tags = tags;
  carDataObj.categories = categories;
  carDataObj.cars = carsInfo;
  carDataObj.models = models;

  return carDataObj;
};
