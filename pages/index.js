import Head from "next/head";
import UtilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>A blog by:</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className={`${UtilStyles.headingMd} ${UtilStyles.padding1px}`}>
        Posts
        </section>
      </main>
    </div>
  );
}
