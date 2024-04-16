import Head from "next/head";
import styles from "@/pages/index.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Classic next routing</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <h1 className={styles.title}>
          I'm gonna leave this here just to show old routing
        </h1>
      </main>
    </div>
  );
}
