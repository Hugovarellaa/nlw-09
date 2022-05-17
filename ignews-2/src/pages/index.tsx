import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Ignews</title>
      </Head>
      <main>
        <section>
          <strong>👏 Hey , welcome</strong>
          <h1>
            News about <br />
            the <span>React </span>world
          </h1>
          <p>
            Get acess to all <br />
            the publications <span>for $9,90 month</span>
          </p>
          {/* Botao de se inscrever na aplicação */}
        </section>
        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  );
}
