import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { stripe } from "../../services/stripe";

export default async (req: NextApiRequest, rest: NextApiResponse) => {
  if (req.method === "POST") {

    const session = await getSession({req})

    const stripeCustomer = await stripe.customers.create({
      email: session.user.email
      //metadata: 
    })

    
    const stripeCheckoutSession = await stripe.checkout.sessions.create({
      customer: stripeCustomer.id,
      payment_method_types: ["card"],
      billing_address_collection: "auto",
      line_items: [
        {
          price: "price_1JsSzEH6aihmDxYbnis4Pjbe",
          quantity: 1,
        },
      ],
      mode: "subscription",
      allow_promotion_codes: true,
      success_url: process.env.STRIPE_SUCCESS_URL,
      cancel_url: process.env.STRIPE_CANCEL_URL,
    });

    return rest.json({ received: true });
  } else {
    rest.setHeader("Allow", "POST");
    rest.status(400).end("Method not allowed");
  }
};
