import { FunctionComponent } from 'react';

import { AlertListProps } from '@context/alert.types';

import { Alert } from '@components';

const AlertList:FunctionComponent<AlertListProps> = ({ alerts }) => (
  <>
    {alerts.map((alert, index) => (
      <Alert key={index} message={alert.message} type={alert.type} />
    ))}
  </>
);

export default AlertList;
