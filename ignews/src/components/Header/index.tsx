/* eslint-disable @next/next/no-html-link-for-pages */
import { SigninButton } from "../SignInButton";
import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <img src="/images/logo.svg" alt="Logo Ignews" />
        <nav>
          <a href="/">Home</a>
          <a href="/posts" className={styles.active}>
            Post
          </a>
        </nav>
        <SigninButton />
      </div>
    </header>
  );
}
