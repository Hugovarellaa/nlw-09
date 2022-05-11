/* eslint-disable @next/next/no-html-link-for-pages */
import { SigninButton } from "../SignInButton";
import styles from "./styles.module.scss";
import Link from "next/link";
import { ActiveLink } from "../ActiveLink";

export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <ActiveLink href="/">
          <a>
            <img src="/images/logo.svg" alt="Logo Ignews" />
          </a>
        </ActiveLink>
        <nav>
          <ActiveLink activeClasseName={styles.active} href="/">
            <a>Home</a>
          </ActiveLink>
          <ActiveLink href="/posts" activeClasseName={styles.active}>
            <a>Post</a>
          </ActiveLink>
        </nav>
        <SigninButton />
      </div>
    </header>
  );
}
