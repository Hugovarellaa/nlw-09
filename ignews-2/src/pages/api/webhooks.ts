import { NextApiRequest, NextApiResponse } from "next";
import { Readable } from "stream";
import Stripe from "stripe";
import { stripe } from "../../services/stripe";

async function buffer(readable: Readable) {
  const chunks = [];

  for await (const chunk of readable) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}

export const config = {
  api: {
    bodyParser: false,
  },
};

const relevantEvents = new Set([
  "checkout.session.completed",
  "customer.subscription.updated",
  "customer.subscription.deleted",
]);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const buf = await buffer(req);
    const secret = req.headers["stripe-signature"];
    const webhooks = process.env.STRIPE_WEBHOOKS;

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(buf, secret, webhooks);
    } catch (error) {
      return res.status(400).send(`Webhook Error: ${error.message}`);
    }

    const { type } = event;

    if (relevantEvents.has(type)) {
      try {
        switch (type) {
          case "checkout.session.completed":
            const checkoutSession = event.data
              .object as Stripe.Checkout.Session;
            break;
          case "customer.subscription.updated":
          case "customer.subscription.deleted":
            const subscription = event.data.object as Stripe.Subscription;
            break;
          default:
            throw new Error("Unhandled event.");
        }
      } catch (error) {
        console.log({ error: `Webhook handler failed.` });
      }
    }

    res.json({ ok: true });
  } else {
    res.setHeader("Allow", "POST");
    res.status(400).end("Method Not Allowed");
  }
};
