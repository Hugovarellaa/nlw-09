import Head from "next/head";
import styles from "./styles.module.scss";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
        <a href="">
            <time>12 de marco de 2021</time>
            <strong>quaerat, inventore, omnis iste reprehenderit e</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem consequuntur ducimus possimus recusandae, id hic nam
              ipsam itaque quaerat, inventore, omnis iste reprehenderit et modi
              ad eligendi voluptas vel nostrum.
            </p>
          </a>

          <a href="">
            <time>12 de marco de 2021</time>
            <strong>quaerat, inventore, omnis iste reprehenderit e</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem consequuntur ducimus possimus recusandae, id hic nam
              ipsam itaque quaerat, inventore, omnis iste reprehenderit et modi
              ad eligendi voluptas vel nostrum.
            </p>
          </a>

          <a href="">
            <time>12 de marco de 2021</time>
            <strong>quaerat, inventore, omnis iste reprehenderit e</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem consequuntur ducimus possimus recusandae, id hic nam
              ipsam itaque quaerat, inventore, omnis iste reprehenderit et modi
              ad eligendi voluptas vel nostrum.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
