import styles from "./styles.module.scss";
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";

export function SigninButton() {
  const isLog = false;

  return isLog ? (
    <button type="button" onClick={() => {}} className={styles.signinButton}>
      <FaGithub color="var(--green-500)" />
      Hugo Alves Varella
      <FiX className={styles.closeIcon} />
    </button>
  ) : (
    <button type="button" onClick={() => {}} className={styles.signinButton}>
      <FaGithub color="var(--yellow-500)" />
      Sign in with Github
    </button>
  );
}
