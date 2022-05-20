/* eslint-disable  */
import Link from "next/link";

export function Header (){
  return (
    <header>
      <div>
        <img src="/images/logo.svg" alt="Logo Ignews" />
        <nav>
          <Link href="/">
            <a >Home</a>
          </Link>
          <Link href="/posts">
            <a >Posts</a>
          </Link>
        </nav>
      </div>
    </header>
  )
}