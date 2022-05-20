import { fauna } from "../../../services/faunadb";
import { query as q } from "faunadb";
import { stripe } from "../../../services/stripe";

export async function saveSubscriptions(
  subscriptionId: string,
  customerId: string,
  createAction = false
) {
  //Buscar o usuario no banco do faunadb com o Id (customerId) stripe_customer_id
  //salvar os dados da comprar (subscription) no faunadb em uma nova tabela (subscriptions)

  const userRef = await fauna.query(
    q.Select(
      "ref",
      q.Get(q.Match(q.Index("user_by_stripe_customer_id"), customerId))
    )
  );
  const subscription = await stripe.subscriptions.retrieve(subscriptionId);
  const subscriptionData = {
    id: subscription.id,
    userId: userRef,
    status: subscription.status,
    price_id: subscription.items.data[0].price.id,
  };

  if (createAction) {
    await fauna.query(
      q.Create(q.Collection("subscriptions"), { data: subscriptionData })
    );
  } else {
    await fauna.query(
      q.Update(
        q.Select(
          "ref",
          q.Get(q.Match(q.Index("subscription_by_id"), subscriptionId))
        ),
        { data: { status: subscriptionData.status } }
      )
    );
  }
}
