import Head from 'next/head'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>A blog by:</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
    <main>Posts</main>
    </div>
  )
}
