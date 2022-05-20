import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import styles from "./styles.module.scss";

export function SigninButton() {
  return (
    <button type="button" onClick={() => {}} className={styles.signinButton}>
      <FaGithub color="var(--green-500)" />
      Hugo Alves Varella
      <FiX className={styles.closeIcon} />
    </button>
  );
}
