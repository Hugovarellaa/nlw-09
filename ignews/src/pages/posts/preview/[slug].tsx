import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import { getSession } from "next-auth/react";
import { RichText } from "prismic-dom";
import { getPrismicClient } from "../../../services/prismic";
import Head from "next/head";

import styles from "../posts.module.scss";
import Link from "next/link";

interface Post {
  slug: string;
  title: string;
  content: string;
  updateAt: string;
}

interface PreviewPostProps {
  post: Post;
}

export default function PreviewPost({ post }: PreviewPostProps) {
  return (
    <>
      <Head>
        <title>{post.slug} | Ignews</title>
      </Head>

      <main className={styles.container}>
        <article className={styles.content}>
          <h1>{post.title}</h1>
          <time>{post.updateAt}</time>
          <div
            dangerouslySetInnerHTML={{ __html: post.content }}
            className={`${styles.post} ${styles.previewContent}`}
          />
          <div className={styles.continueReading}>
            Wanna continue reading?
            <Link href="/">
              <a>Subscribe now 🤗</a>
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;
  const prismic = getPrismicClient();

  const response = await prismic.getByUID<any>("teste", String(slug), {});

  const post = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content.splice(0, 3)),
    updateAt: new Date(response.last_publication_date).toLocaleDateString(
      "pt-br",
      {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }
    ),
  };

  return {
    props: { post },
  };
};
