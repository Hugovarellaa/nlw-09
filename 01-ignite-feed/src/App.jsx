import { Header } from './components/Header'

import styles from './App.module.css'
import { Sidebar } from './components/Sidebar'
import './styles/global.css'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.container}>
        <Sidebar />
        <main>
          <p>post</p>
          <p>post</p>
          <p>post</p>
        </main>
      </div>
    </div>
  )
}
