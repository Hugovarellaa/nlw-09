import styles from "./styles.module.scss";
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { useSession, signIn, signOut } from "next-auth/react";

export function SigninButton() {
  const { data: session } = useSession();
  return session ? (
    <button
      type="button"
      onClick={() => signOut()}
      className={styles.signInButton}
    >
      <FaGithub color="var(--green-500)" />
      Hugo Alves Varella
      <FiX className={styles.closeIcon} />
    </button>
  ) : (
    <button
      type="button"
      onClick={() => signIn("github")}
      className={styles.signInButton}
    >
      <FaGithub color="var(--yellow-500)" />
      Sign in with Github
    </button>
  );
}
