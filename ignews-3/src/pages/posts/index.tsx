import Head from "next/head";
import styles from "./styles.module.scss";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.content}>
          <a href="">
            <time>02 de janeiro de 2021</time>
            <strong>Alguma coisa esta acontecendo enquanto eu estudo</strong>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laudantium commodi, sapiente maiores blanditiis distinctio illo
              delectus quas mollitia ipsam! Distinctio necessitatibus explicabo
              accusantium, soluta veniam magni suscipit molestiae facere fugit.
            </p>
          </a>

          <a href="">
            <time>02 de janeiro de 2021</time>
            <strong>Alguma coisa esta acontecendo enquanto eu estudo</strong>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laudantium commodi, sapiente maiores blanditiis distinctio illo
              delectus quas mollitia ipsam! Distinctio necessitatibus explicabo
              accusantium, soluta veniam magni suscipit molestiae facere fugit.
            </p>
          </a>

          <a href="">
            <time>02 de janeiro de 2021</time>
            <strong>Alguma coisa esta acontecendo enquanto eu estudo</strong>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laudantium commodi, sapiente maiores blanditiis distinctio illo
              delectus quas mollitia ipsam! Distinctio necessitatibus explicabo
              accusantium, soluta veniam magni suscipit molestiae facere fugit.
            </p>
          </a>

          <a href="">
            <time>02 de janeiro de 2021</time>
            <strong>Alguma coisa esta acontecendo enquanto eu estudo</strong>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laudantium commodi, sapiente maiores blanditiis distinctio illo
              delectus quas mollitia ipsam! Distinctio necessitatibus explicabo
              accusantium, soluta veniam magni suscipit molestiae facere fugit.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
