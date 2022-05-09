/* eslint-disable @next/next/no-img-element */

import { GetStaticProps } from "next";
import Head from "next/head";
import { SubscribeButton } from "../components/SubscribeButton";
import { stripe } from "../services/stripe";
import styles from "./home.module.scss";

interface HomeProps {
  product: {
    priceId: string;
    amount: string;
  };
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Ignews | Home</title>
      </Head>

      <main className={styles.container}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>
            News about <br />
            the <span>React</span> world
          </h1>
          <p>
            Get acess to all the publications
            <br />
            <span>For {product.amount} month</span>
          </p>
          <SubscribeButton />
        </section>
        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prices = await stripe.prices.retrieve("price_1JsSzEH6aihmDxYbnis4Pjbe");

  const product = {
    priceId: prices.id,
    amount: new Intl.NumberFormat("en", {
      style: "currency",
      currency: "USD",
    }).format(prices.unit_amount / 100),
  };
  console.log(product);
  return {
    props: { product },
    revalidate: 60 * 60 * 24, //24hours
  };
};
