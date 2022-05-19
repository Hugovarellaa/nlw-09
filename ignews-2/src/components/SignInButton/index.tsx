import styles from "./styles.module.scss";
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";

export function SigninButton() {
  return (
    <button type="button" onClick={() => {}} className={styles.signinButton}>
      <FaGithub />
      Sign in with Github
    </button>
  );
}
