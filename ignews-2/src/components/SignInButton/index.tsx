import styles from "./styles.module.scss";
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { signIn, signOut, useSession } from "next-auth/react";

export function SigninButton() {
  const { data: session } = useSession();

  return session ? (
    <button
      type="button"
      className={styles.signinButton}
      onClick={() => signOut()}
    >
      <FaGithub color="var(--green-500)" />
      {session.user.name}
      <FiX className={styles.closeIcon} />
    </button>
  ) : (
    <button
      type="button"
      onClick={() => signIn("github")}
      className={styles.signinButton}
    >
      <FaGithub color="var(--yellow-500)" />
      Sign in with Github
    </button>
  );
}
