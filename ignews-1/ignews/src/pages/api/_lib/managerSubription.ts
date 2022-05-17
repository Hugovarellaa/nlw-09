import { fauna } from "../../../services/faunadb";
import { query as q } from "faunadb";
import { stripe } from "../../../services/stripe";

export async function saveSubscriptions(
  subscriptionId: string,
  customerId: string,
  createAction = false
) {
  // Buscar o usuario no banco do faunadb com o ID customerId (stripe_customer_id)
  // Salvar os dados da subscription do usuario no banco faunaDB (subscriptions)

  const userRef = await fauna.query(
    q.Select(
      "ref",
      q.Get(q.Match(q.Index("user_by_stripe_customer_id"), customerId))
    )
  );
  const subscription = await stripe.subscriptions.retrieve(subscriptionId);

  const subscriptionData = {
    id: subscription.id,
    userRef: userRef,
    status: subscription.status,
    priceId: subscription.items.data[0].price.id,
  };

  if (createAction) {
    await fauna.query(
      q.Create(q.Collection("subscriptions"), {
        data: subscriptionData,
      })
    );
  } else {
    await fauna.query(
      q.Replace(
        q.Select(
          "ref",
          q.Get(q.Match(q.Index("subscription_by_id"), subscriptionId))
        ),
        {
          data: subscriptionData,
        }
      )
    );
  }
}
