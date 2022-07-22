import { PencilLine } from 'phosphor-react'
import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <>
      <aside className={styles.sidebar}>
        <img
          className={styles.cover}
          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
          alt=""
        />
        <div className={styles.profile}>
          <img
            className={styles.avatar}
            src="https://github.com/Hugovarellaa.png"
            alt=""
          />
          <strong>Hugo Varella</strong>
          <span>Web Development</span>
        </div>
        <footer>
          <a href="#">
            <PencilLine size={20} />
            <span>Editar seu perfil</span>
          </a>
        </footer>
      </aside>
    </>
  )
}
