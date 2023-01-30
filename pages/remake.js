import Head from "next/head";
import styles from '../styles/Remake.module.css'
import Theme from "../components/Theme/Theme";
import About from '../components/RHome/About'
import Intro from '../components/RHome/Intro'

export default function Remake() {

  
  return (
    <>
      <Head>
        <title>Oscar Harron | Remake</title>
        <meta
          name="Here you will find my blog posts on Web Development and beyond."
          content="Its me"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </Head>

    
      <About />
     </>
  );
}
