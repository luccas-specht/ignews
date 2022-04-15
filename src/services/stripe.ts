import Stripe from 'stripe';

import pack from '../../package.json';

export const stripe = new Stripe(String(process.env.STRIPE_API_KEY), {
  apiVersion: '2020-08-27',
  appInfo: {
    name: 'Ignews',
    version: pack.version,
  },
});