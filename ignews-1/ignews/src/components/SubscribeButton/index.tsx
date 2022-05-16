import { signIn, useSession } from "next-auth/react";
import { api } from "../../services/axios";
import { getStripeJs } from "../../services/stripe-js";
import styles from "./styles.module.scss";

export function SubscribeButton() {
  const { data: session } = useSession();

  async function handleSubscribe() {
    if (!session) {
      signIn("github");
      return;
    }
    //checkoutSession stripe
    const response = await api.post("/subscribe");

    const { sessionId } = response.data;
    const stripe = await getStripeJs();
    stripe.redirectToCheckout({ sessionId });
  }

  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handleSubscribe}
    >
      Subscribe now
    </button>
  );
}
