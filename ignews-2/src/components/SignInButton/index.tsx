import styles from "./styles.module.scss"

export function SignInButton (){
  return (
    <button type="button" className={styles.signInButton}>
      Sign In with Github
    </button>
  )
}