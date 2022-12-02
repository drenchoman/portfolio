import React from 'react'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Link from 'next/link'
export default function comingSoon() {
  return (
    <>
            <Head>
        <title>Oscar Harron</title>
        <meta name="description" content="Its me" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,700&display=swap" rel="stylesheet"/>

      </Head>
      <main className={styles.test}>
      
      <h1>Coming Soon</h1>
      <Link href="/"><button>Back</button></Link>
      </main>
      </>
  )
}
