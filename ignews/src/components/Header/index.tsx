/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */

import { SignInButton } from "../SignInButton";
import styles from "./styles.module.scss";

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="Logo Ignews" />
        <nav>
          <a href="/" className={styles.active}>Home</a>
          <a href="/posts">Posts</a>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
}
