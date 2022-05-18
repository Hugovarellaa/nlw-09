import { fauna } from "../../../services/faunadb";
import { query as q } from "faunadb";
import { stripe } from "../../../services/stripe";

export async function saveSubscriptions(
  subscriptionId: string,
  customerId: string,
  createAction = false
) {
  //Buscar os usuarios no banco de dados Faunadb com o ID {CustomerId} = stripe_customer_id
  //Salvar os dados da subscription no faunadb

  const useRef = await fauna.query(
    q.Select(
      "ref",
      q.Get(q.Match(q.Index("user_by_stripe_customer_id"), customerId))
    )
  );

  const subscription = await stripe.subscriptions.retrieve(subscriptionId);
  const subscriptionData = {
    id: subscription.id,
    userId: useRef,
    status: subscription.status,
    priceId: subscription.items.data[0].price.id,
  };

  console.log(subscriptionData);
  console.log(useRef);

  if (createAction) {
    await fauna.query(
      q.Create(q.Collection("subscriptions"), { data: subscriptionData })
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
