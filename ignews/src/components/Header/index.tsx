/* eslint-disable @next/next/no-html-link-for-pages */
import { SigninButton } from "../SignInButton";
import styles from "./styles.module.scss";
import Link from "next/link";

export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <Link href="/">
          <a>
            <img src="/images/logo.svg" alt="Logo Ignews" />
          </a>
        </Link>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/posts">
            <a className={styles.active}>Post</a>
          </Link>
        </nav>
        <SigninButton />
      </div>
    </header>
  );
}
