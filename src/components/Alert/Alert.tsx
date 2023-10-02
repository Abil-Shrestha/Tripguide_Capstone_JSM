import { FunctionComponent } from 'react';

import { AlertProps } from '@context/alert.types';

import { RiCheckboxCircleFill, RiErrorWarningFill } from 'react-icons/ri';
import { toast } from 'react-toastify';

const generateAlertType = (type:string, message: string) => {
  // TODO: add warning and info alertTypes
  switch (type) {
    case 'success':
      return toast.success(message, {
        icon: <RiCheckboxCircleFill className='w-6 h-6 text-green-500' />,
      });
    case 'error':
      return toast.error(message, {
        icon: <RiErrorWarningFill className='w-6 h-6 text-red-500' />,
      });
    default:
      return toast(message);
  }
};

const Alert:FunctionComponent<AlertProps> = ({ message, type }) => (
  <>
    {generateAlertType(type, message)}
  </>
);

export default Alert;
