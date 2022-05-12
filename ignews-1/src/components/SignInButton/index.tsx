import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { useSession, signIn, signOut } from "next-auth/react";

import styles from "./styles.module.scss";

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
      className={styles.signinButton}
      onClick={() => signIn("github")}
    >
      <FaGithub color="var(--yellow-500)" />
      Sign in with Github
    </button>
  );
}
