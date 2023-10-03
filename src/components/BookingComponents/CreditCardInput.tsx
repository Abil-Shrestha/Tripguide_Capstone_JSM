/* eslint-disable no-nested-ternary */
/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

import { useGlobalContext } from '@context/GlobalContext';

const styles = {
  label: 'text-[16px] text-cBlack-3 dark:text-cBlack-6 font-normal font-DMSans',
  input: 'font-medium bg-cBlack-7 dark:bg-cBlack-1 border-2 border-[#EAEAEA] dark:border-cBlack-2 focus:outline-none focus:border-[1px] focus:border-primaryPurple p-[14px_14px] rounded-[10px] mt-[12px]',
};

const CreditCardFields = () => (
  <div>
    Credit CardFields
  </div>
);

const CreditCardInput = () => (
  <div>
    Card Input
  </div>
);
export default CreditCardInput;
