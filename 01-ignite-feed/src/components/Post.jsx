import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/Hugovarellaa.png"
            alt=""
          />
          <div className={styles.authorInfo}>
            <strong>Hugo Alves Varella</strong>
            <span>Web Development</span>
          </div>
        </div>

        <time
          dateTime="2022-07-26 15:14:00"
          title="26 de Julho 2022 às 15:14:00"
        >
          Públicado há 1h
        </time>
      </header>

      <div className={styles.postContent}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>👉 &nbsp; jane.design/doctorcare</p>
        <p>
          <a href="#">#novoprojeto </a>
          <a href="#"> #nlw</a> <a href="#">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Escreva um comentário..." />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}
