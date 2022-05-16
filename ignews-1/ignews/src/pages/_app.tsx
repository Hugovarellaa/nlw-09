import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Header } from '../components/Header/Header'
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
      </SessionProvider>
  )
}

export default MyApp
