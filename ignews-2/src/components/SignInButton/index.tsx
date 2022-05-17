import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import styles from "./styles.module.scss";

export function SignInButton() {
  const isLog = true

  return isLog ? (
    <button type="button" className={styles.signInButton}>
      <FaGithub color="var(--green-500)"/>
      Hugo Alves Varella
      <FiX className={styles.closeIcon}/>
    </button>
  ) : (
    <button type="button" className={styles.signInButton}>
      <FaGithub color="var(--yellow-500)"/>
      Sign In with Github
    </button>
  )
}
