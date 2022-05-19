import { GetStaticPaths, GetStaticProps } from "next";
import { RichText } from "prismic-dom";
import { getPrismicClient } from "../../../services/prismic";
import Head from "next/head";

import styles from "../post.module.scss";
import Link from "next/link";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

interface PreviewPostProps {
  post: {
    slug: string;
    title: string;
    content: string;
    updateAt: string;
  };
}

export default function PreviewPost({ post }: PreviewPostProps) {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session?.activeSubscription) {
      router.push(`/posts/${post.slug}`);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);
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
            Wanna continuew reading?
            <Link href="/">Subscribe now 🤗</Link>
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
