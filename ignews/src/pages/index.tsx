import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Ignews</title>
      </Head>

      <main>
        <section>
          <span>👏 Hey, welcome</span>
          <h1>
            News about <br />
            the <span>React world</span>
          </h1>
          <p>
            Get acess to all the publications
            <br /> <span> for $9,90 month</span>
          </p>
        </section>
        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  );
}
