import { Header } from './components/Header'

import styles from './App.module.css'
import { Sidebar } from './components/Sidebar'
import './styles/global.css'

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>post</main>
      </div>
    </>
  )
}
