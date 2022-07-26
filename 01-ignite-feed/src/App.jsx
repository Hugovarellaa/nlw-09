import { Header } from './components/Header'

import styles from './App.module.css'
import './styles/global.css'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.container}>
        <aside>sidebar</aside>
        <main>
          <p>post</p>
          <p>post</p>
          <p>post</p>
        </main>
      </div>
    </div>
  )
}
