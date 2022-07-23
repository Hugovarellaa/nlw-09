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
            <strong>Hugo Varella</strong>
            <span>Web Development</span>
          </div>
        </div>
        <time
          title="22 de Julho de 2022 21:08:35"
          dateTime="2022-07-22 21:08:35"
        >
          Públicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p> 👉 jane.design/doctorcare</p>
        <p>
          <a href="#">#novoprojeto </a> <a href="#">#nlw</a>{' '}
          <a href="#">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe seu feedback" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  )
}
