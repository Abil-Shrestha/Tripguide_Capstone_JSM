/* eslint-disable no-nested-ternary */
/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { useRouter } from 'next/router';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { CardNumberElement, CardExpiryElement, CardCvcElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';

import supabase from '@utils/supabase';
import { useGlobalContext } from '@context/GlobalContext';

const styles = {
  label: 'text-[16px] text-cBlack-3 dark:text-cBlack-6 font-normal font-DMSans',
  input: 'font-medium bg-cBlack-7 dark:bg-cBlack-1 border-2 border-[#EAEAEA] dark:border-cBlack-2 focus:outline-none focus:border-[1px] focus:border-primaryPurple p-[14px_14px] rounded-[10px] mt-[12px]',
};

const stripeLib = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

const CreditCardFields = () => {
  const router = useRouter();
  const stripe = useStripe();
  const elements = useElements();
  const { selectedCurrecy } = useGlobalContext();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cardElement = elements.getElement(CardNumberElement);

    if (!stripe || !elements) return null;

    setIsSubmitting(true);
    const intent = await axios.post('api/booking/stripe_intent', {
      amount: 123 * 100,
      currency: selectedCurrecy.code,
    });

    const { client_secret, id: paymentIntentId } = intent.data;

    const { error, paymentIntent } = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: cardElement,
        billing_details: {
          name: 'test name',
          email: 'testemail@tripguide.com',
        },
      },
    });

    if (paymentIntent) {
      setIsSubmitting(false);
      setIsSubmitted(true);

      const { data, error: supabaseError } = await supabase.from('booking').insert({
        stripe_payment_intent_id: paymentIntentId,
        user_id: '',
        booking_start_date: '',
        booking_end_date: '',
        booking_status: paymentIntent.status,
        booking_price: paymentIntent.amount,

      });

      console.log(data, supabaseError);

      setTimeout(() => {
        router.push({
          pathname: 'congratulations',
          query: {
            bookingId: paymentIntentId,
          },
        });
      }, 3000);
    }

    return { error, paymentIntent };
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className={styles.label}>Card Number</label>
      <CardNumberElement className={styles.input} />
      <div className='flex w-full gap-[30px] mt-[20px] mb-12'>
        <div>
          <label className={styles.label}>Expiry Date</label>
          <CardExpiryElement className={`${styles.input} w-[220px]`} />
        </div>
        <div>
          <label className={styles.label}>CVC/CVV</label>
          <CardCvcElement className={`${styles.input} w-[220px]`} />
        </div>
      </div>
      <button
        type='submit'
        className={`flex my-8 justify-center items-center mt-[14px] h-[45px] w-[232px] font-DMSans font-medium text-white text-[18px] rounded-[30px] ${isSubmitting ? 'bg-slate-300' : isSubmitted ? 'bg-green-500' : 'bg-primaryBlue'}`}
      >
        {isSubmitting ? 'Processing...' : isSubmitted ? 'Payment Successful' : 'Confirm and Reserve'}
      </button>
    </form>
  );
};

const CreditCardInput = () => (
  <Elements stripe={stripeLib}>
    <CreditCardFields />
  </Elements>
);
export default CreditCardInput;
