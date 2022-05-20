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

    //checkoutSession do stripe
    try {
      const response = await api.post("subscribe");
      const { sessionId } = response.data;
      const stripe = await getStripeJs();
      await stripe.redirectToCheckout({ sessionId });
    } catch (err) {
      console.log({ err: err.message });
    }
  }

  return (
    <button
      type="button"
      onClick={handleSubscribe}
      className={styles.subscribeButton}
    >
      Subscribe now
    </button>
  );
}
