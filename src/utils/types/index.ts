export type CarLocationOption = {
  airportName: string
  cityID: string
  cityName: string
  country: string
  countryCode: string
  countryName: string
  debitCardFlag: string
  displayName: string
  entered: string
  gmtOffset: number
  id: string
  isoCountryCode: string
  itemName: string
  javaTimeZoneName: string
  lang: string
  lat: number
  lon: number
  majorAirportFlag: string
  opaqueParticipantFlag: string
  poiCategoryTypeId: number
  provinceName: string
  rank: number
  rccAirportFlag: string
  rentalLocationsCount: number
  score: string
  stateCode: string
  timeZoneId: number
  type: string
}

export type FlightLocationOption = {
  airportCode: string
  cityCode: string
  cityID: string
  cityName: string
  country: string
  countryCode: string
  countryName: string
  displayName: string
  entered: string
  gmtOffset: number
  id: string
  itemName: string
  lat: number
  lon: number
  poiCategoryTypeId: number
  provinceName: string
  proximity: number
  rank: number
  score: string
  stateCode: string
  timeZoneID: number
  timeZoneName: string
  type: string
}

export type Currency = {
  name: string
  symbol: string
  symbolNative: string
  decimalDigits: number
  rounding: number
  code: string
  namePlural: string
}

export type Language = {
  id: number
  image: string
  country_name: string
  country_code: string
}

export interface GlobalContextType {
  activeTab: string | string[];
  setActiveTab: (tab: string | string[]) => void;
  selectedLanguage: Language;
  setSelectedLanguage: (language: Language) => void;
  selectedCurrecy: Currency;
  setSelectedCurrecy: (currency: Currency) => void;
  carStartDate: any;
  carSetStartDate: (date: any) => void;
  carEndDate: any;
  carSetEndDate: (date: any) => void;
  carFromLocation: string;
  setCarFromLocation: (location: string) => void;
  carFromID: string;
  setCarFromID: (id: string) => void;
  carToLocation: string;
  setCarToLocation: (location: string) => void;
  carToID: string;
  setCarToID: (id: string) => void;
  flightStartDate: any;
  flightSetStartDate: (any: any) => void;
  flightEndDate: any;
  flightSetEndDate: (any: any) => void;
  flightFromLocation: string;
  setFlightFromLocation: (location: string) => void;
  flightToLocation: string;
  setFlightToLocation: (location: string) => void;
  cars: any;
  setCars: (cars: any) => void;
  activeCar: any;
  setActiveCar: (car: any) => void;
  flights: any;
  setFlights: (flights: any) => void;
  activeFlight: any;
  setActiveFlight: (flight: any) => void;
  flightFromID: string;
  setFlightFromID: (id: string) => void;
  flightToID: string;
  setFlightToID: (id: string) => void;
  flightOneWay: boolean;
  setFlightOneWay: (oneWay: boolean) => void;
  flightPassengers: number;
  setFlightPassengers: (passengers: number) => void;
  flightSortBy: string;
  setFlightSortBy: (sortBy: string) => void;
}

export interface BookingContextType {
  booking: Record<string, never>;
  setBooking: (booking: any) => void;
  bookingCar: any;
  setBookingCar: (booking: any) => void;
  bookingFlight: any;
  setBookingFlight: (booking: any) => void;
  bookingHotel: any;
  setBookingHotel: (booking: any) => void;
  bookingFlightPassengers: any;
  setBookingFlightPassengers: (booking: any) => void;
  bookingFlightPassengersCount: number;
  setBookingFlightPassengersCount: (count: number) => void;
  bookingFlightPassengersTotal: number;
  setBookingFlightPassengersTotal: (total: number) => void;
  bookingFlightPassengersTotalWithTax: number;
  setBookingFlightPassengersTotalWithTax: (total: number) => void;
  bookingFlightPassengersTotalWithTaxAndFees: number;
  setBookingFlightPassengersTotalWithTaxAndFees: (total: number) => void;
  bookingFlightPassengersTotalWithTaxAndFeesAndDiscount: number;
  setBookingFlightPassengersTotalWithTaxAndFeesAndDiscount: (total: number) => void;
  bookingFlightPassengersTotalWithTaxAndFeesAndDiscountAndPromo: number;
}
