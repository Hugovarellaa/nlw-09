import Link from "next/link";
import { ActiveLink } from "../ActiveLink";
import { SigninButton } from "../SignInButton";
import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="Logo Ignews" />
        <nav>
          <ActiveLink activeclassName={styles.active} href="/">
            <a>Home</a>
          </ActiveLink>
          <ActiveLink activeclassName={styles.active} href="/posts">
            <a>Posts</a>
          </ActiveLink>
        </nav>
        <SigninButton />
      </div>
    </header>
  );
}
