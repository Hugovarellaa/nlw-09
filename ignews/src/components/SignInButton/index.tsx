import styles from "./styles.module.scss";
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";

export function SignInButton() {
  return (
    <button type="button" className={styles.signInButton}>
      <FaGithub color="var(--green-500)" />
      hugo alves varella
      <FiX className={styles.closeIcon}/>
    </button>
  );
}
