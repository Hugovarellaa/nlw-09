import { signIn, useSession } from "next-auth/react";
import styles from "./styles.module.scss";

export function SubscribeButton() {
  const { data: session } = useSession();
  async function handleSubscribe() {
    if (!session) {
      signIn("github");
      return;
    }

    //checkoutSession do stripe
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
