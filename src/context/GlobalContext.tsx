/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { createContext, useState, useContext, useMemo, useEffect } from 'react';

import { languages, currencies } from '@constants';
import { Language, Currency, GlobalContextType } from '@utils/types';

interface Booking {
  price: number;
  currency: string;
  start_date: string;
  end_date: string;
  type: string;
}

const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  // global state
  const [activeTab, setActiveTab] = useState<string | string[]>('hotel');
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(languages[0]);
  const [selectedCurrecy, setSelectedCurrecy] = useState<Currency>(currencies[0]);

  // flight state
  const [flightFromLocation, setFlightFromLocation] = useState<string>('');
  const [flightToLocation, setFlightToLocation] = useState<string>('');
  const [flightFromID, setFlightFromID] = useState<string>('');
  const [flightToID, setFlightToID] = useState<string>('');
  const [flightStartDate, flightSetStartDate] = useState<any>(null);
  const [flightEndDate, flightSetEndDate] = useState<any>(null);
  const [flightOneWay, setFlightOneWay] = useState<boolean>(false);
  const [flights, setFlights] = useState<any>(null);
  const [activeFlight, setActiveFlight] = useState<any>(null);
  const [flightSortBy, setFlightSortBy] = useState('PRICE');
  const [adults, setAdults] = useState(1);
  const [childrenPassenger, setChildrenPassenger] = useState();
  const [infants, setInfants] = useState(0);
  const [flightPassengers, setFlightPassengers] = useState(adults + childrenPassenger + infants);

  useEffect(() => {
    setFlightPassengers(adults + childrenPassenger + infants);
  }, [adults, childrenPassenger, infants]);

  // car state
  const [carFromLocation, setCarFromLocation] = useState<string>('');
  const [carFromID, setCarFromID] = useState<string>('');
  const [carToLocation, setCarToLocation] = useState<string>('');
  const [carToID, setCarToID] = useState<string>('');
  const [carStartDate, carSetStartDate] = useState<any>(null);
  const [carEndDate, carSetEndDate] = useState<any>(null);
  const [cars, setCars] = useState<any>(null);
  const [activeCar, setActiveCar] = useState<any>(null);

  const [booking, setBooking] = useState<Booking>({});

  // wrap the value I pass to my global context in a useMemo hook
  const value = useMemo<GlobalContextType>(
    () => ({
      activeTab,
      setActiveTab,
      selectedLanguage,
      setSelectedLanguage,
      selectedCurrecy,
      setSelectedCurrecy,
      cars,
      setCars,
      carStartDate,
      carSetStartDate,
      carEndDate,
      carSetEndDate,
      carFromLocation,
      setCarFromLocation,
      carFromID,
      setCarFromID,
      carToLocation,
      setCarToLocation,
      carToID,
      setCarToID,
      flightStartDate,
      flightSetStartDate,
      flightEndDate,
      flightSetEndDate,
      flightFromLocation,
      setFlightFromLocation,
      flightFromID,
      setFlightFromID,
      flightToLocation,
      setFlightToLocation,
      flightToID,
      setFlightToID,
      flightOneWay,
      setFlightOneWay,
      activeCar,
      setActiveCar,
      flights,
      setFlights,
      activeFlight,
      setActiveFlight,
      flightSortBy,
      setFlightSortBy,
      flightPassengers,
      setFlightPassengers,
      adults,
      setAdults,
      childrenPassenger,
      setChildrenPassenger,
      infants,
      setInfants,
      booking,
      setBooking,
    }),
  );

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext) as GlobalContextType;
