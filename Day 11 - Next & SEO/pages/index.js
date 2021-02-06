import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cats | Home</title>
        <meta name="og:title" content="The Cats"/>
        <meta name="og:type" content="Cat"/>
        <meta name="og:url" content="http://127.0.0.1:8080/"/>
        <meta name="og:site_name" content="Cats"/>
        <meta name="og:description" content="A simple website to see Cat quotes"/>
      </Head>
      <Link href="/cats">
      <button style={{padding: '10px', fontSize: '18px', background: '#212121', color: "#fff"}}>Go to Quotes</button>
      </Link>
    </div>
  )
}
