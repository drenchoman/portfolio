import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Technologies from '../components/Technologies/Technologies'
import HomePage from '../components/Home/Home'
import Three from '../components/Three/Three'
import Projects from '../components/Projects/Projects'
import Blog from '../components/Blog/Blog'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Oscar Harron</title>
        <meta name="description" content="Its me" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,700&display=swap" rel="stylesheet"/>

      </Head>

      <main className={styles.main}>
        <Three />
       <HomePage />
       <Technologies />
       <Projects />
       <Blog />

       <Contact />
       <Footer />
      </main>

      
    </div>
  )
}
