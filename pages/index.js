import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <section className="bg-coming-soon flex-column">
      <Head>
        <title>AronWorks - Coming Soon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Image src="/aw.svg" alt="AronWorks" width={200} height={40} />

      <div className="coming-soon-container">
        <span className="heading">We are</span>
        <div>
          <h1 className="title">Coming Soon</h1>
        </div>
        <p className="description">
          Our website is under construction. We'll be here soon with our new
          awesome site.
        </p>
      </div>
      <footer className="coming-soon-container" />
    </section>
  );
}
