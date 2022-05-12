import { signIn, useSession } from "next-auth/react";
import { api } from "../../pages/api/api";
import { getStripeJs } from "../../services/stripejs";
import styles from "./styles.module.scss";

export function SubscriberButton() {
  const { data: session } = useSession();
  async function handleSubscribe() {
    if (!session) {
      signIn("github");
      return;
    }

    try {
      const response = await api.post("subscribe");
      const { sessionId } = response.data;
      const stripe = await getStripeJs();
      await stripe.redirectToCheckout({ sessionId });
    } catch (error) {
      alert({ error: error.message });
    }
  }

  return (
    <button
      type="button"
      className={styles.subscriberButton}
      onClick={handleSubscribe}
    >
      Subscriber now
    </button>
  );
}
