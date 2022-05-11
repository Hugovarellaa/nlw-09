import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_API_KEY as string, {
  apiVersion: "2020-08-27",
  appInfo: {
    name: "Ignews-1",
    version: "^9.1.0",
  },
});
