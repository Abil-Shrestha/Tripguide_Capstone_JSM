/* eslint-disable camelcase */
import type { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2022-11-15',
});

const ALLOWED_METHODS = {
  POST: 'POST',
  GET: 'GET',
};

const handler = async (req : NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { amount, currency, payment_intent_id } = req.body;

    if (payment_intent_id) {
      try {
        const current_intent = await stripe.paymentIntents.retrieve(payment_intent_id);
        if (current_intent) {
          const updated_intent = await stripe.paymentIntents.update(payment_intent_id, {
            amount,
            currency,
          });
          res.status(200).json(updated_intent);
        }
      } catch (err) {
        if (err.code !== 'resource_missing') {
          const errorMessage = err instanceof Error ? err.message : 'Internal server error';
          res.status(500).json({ statusCode: 500, message: errorMessage });
        }
      }
    }
    try {
      const params = { amount, currency, payment_method_types: ['card'] };
      const payment_intent = await stripe.paymentIntents.create(params);
      res.status(200).json(payment_intent);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Internal server error';
      res.status(500).json({ statusCode: 500, message: errorMessage });
    }
  }

  if (req.method === 'GET') {
    const { payment_intent_id } = req.query;
    try {
      const payment_intent = await stripe.paymentIntents.retrieve(payment_intent_id as string);
      res.status(200).json(payment_intent);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Internal server error';
      res.status(500).json({ statusCode: 500, message: errorMessage });
    }
  }
  if (req.method !== ALLOWED_METHODS[req.method]) {
    res.setHeader('Allow', Object.values(ALLOWED_METHODS));
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;
