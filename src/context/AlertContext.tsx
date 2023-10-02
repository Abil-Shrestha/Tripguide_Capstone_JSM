/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-shadow */
import { createContext, useState, ReactNode } from 'react';

import { AlertProps } from './alert.types';

export type AlertContextProps = {
  alerts: AlertProps[]
  value: AlertProps
  handleAlert: (arg0: AlertProps)=> void
}

export const AlertContext = createContext<Partial<AlertContextProps>>({});

export const AlertProvider = ({ children }: {children: ReactNode}) => {
  const [alerts, setAlerts] = useState<AlertProps[]>([]);

  const handleAlert = (alert : AlertProps) => {
    setAlerts((prevAlerts) => prevAlerts.concat([alert]));

    setTimeout(() => {
      setAlerts((prevAlerts) => prevAlerts.slice(1));
    }, 5000);
  };

  return (
    <AlertContext.Provider value={{ alerts, handleAlert }}>
      {children}
    </AlertContext.Provider>
  );
};
