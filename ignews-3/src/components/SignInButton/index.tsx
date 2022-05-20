import { useSession, signIn, signOut } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import styles from "./styles.module.scss";

export function SigninButton() {
  const { data: session } = useSession();

  return session ? (
    <button
      type="button"
      onClick={() => signOut()}
      className={styles.signinButton}
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
      Sign in with GitHub
    </button>
  );
}