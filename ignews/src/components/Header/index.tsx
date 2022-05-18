import Link from "next/link";
import styles from "./styles.module.scss";

export function Header() {
  return (
    <>
      <header>
        <div>
          <img src="/images/logo.svg" alt="Logo Ignews" />
          <nav>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/posts">
              <a>Posts</a>
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
