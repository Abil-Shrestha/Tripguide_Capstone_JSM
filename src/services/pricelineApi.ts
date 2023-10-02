/* eslint-disable max-len */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';

import { PRICELINE_API_URL, PRICELINE_API_HOST } from '@utils/constants';

const pricelineApiKey = process.env.NEXT_PUBLIC_RAPID_API_KEY;

export const pricelineApi = createApi({
  reducerPath: 'pricelineApi',
  baseQuery: fetchBaseQuery({
    baseUrl: PRICELINE_API_URL,
    prepareHeaders: (headers) => {
      headers.set('x-rapidapi-key', pricelineApiKey);
      headers.set('x-rapidapi-host', PRICELINE_API_HOST);
      return headers;
    },
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
    return undefined;
  },
  endpoints: (build) => ({
    getHotelsByLocation: build.query({
      query: ({ id, checkIn, checkOut, sortOrder, page }) => `/v1/hotels/search?location_id=${id}&sort_order=${sortOrder}&date_checkin=${checkIn}&date_checkout=${checkOut}&page_number=${page}`,
    }),
    // this query gives the full details of the rooms availabilities in the hotel
    getHotelBookingDetails: build.query({
      query: ({ id, checkIn, checkOut, numberOfRooms }) => `/v1/hotels/booking-details?date_checkout=${checkOut}&date_checkin=${checkIn}&hotel_id=${id}&rooms_number=${numberOfRooms}`,
    }),
    getHotelDetails: build.query({
      query: (hotelId) => `/v1/hotels/details?hotel_id=${hotelId}`,
    }),
    getFlights: build.query({
      query: ({ itineraryType, classType, locationArrival, departureDate, locationDeparture, sortOrder, numberOfStops, maxPrice, passengers, returnDepartureDate }) => (returnDepartureDate
        ? `/v1/flights/search?itinerary_type=${itineraryType}&class_type=${classType}&location_arrival=${locationArrival}&date_departure=${departureDate}&location_departure=${locationDeparture}&sort_order=${sortOrder}&number_of_stops=${numberOfStops}&price_max=${maxPrice}&number_of_passengers=${passengers}&date_departure_return=${returnDepartureDate}`
        : `/v1/flights/search?itinerary_type=${itineraryType}&class_type=${classType}&location_arrival=${locationArrival}&date_departure=${departureDate}&location_departure=${locationDeparture}&sort_order=${sortOrder}&number_of_stops=${numberOfStops}&price_max=${maxPrice}&number_of_passengers=${passengers}`),
    }),
    getHotelLocations: build.query({
      query: (name) => `/v1/hotels/locations?name=${name}&search_type=ALL`,
    }),
    getFlightLocations: build.query({
      query: (name) => `/v1/flights/locations?name=${name}`,
    }),
    getCarLocations: build.query({
      query: (name) => `/v1/cars-rentals/locations?name=${name}`,
    }),
    getCarRentals: build.query({
      query: ({ locationPickup, locationDropoff, pickupDate, returnDate }) => `v1/cars-rentals/search?location_pickup=${locationPickup}&date_time_return=${returnDate}&date_time_pickup=${pickupDate}&location_return=${locationDropoff}`,
    }),
  }),
});

export const {
  useGetHotelsByLocationQuery,
  useGetHotelBookingDetailsQuery,
  useGetHotelDetailsQuery,
  useGetHotelLocationsQuery,
  useGetFlightsQuery,
  useGetFlightLocationsQuery,
  useGetCarLocationsQuery,
  useGetCarRentalsQuery,
} = pricelineApi;
