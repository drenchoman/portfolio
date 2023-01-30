import Head from "next/head";
import styles from '../styles/Remake.module.css'
import Theme from "../components/Theme/Theme";

export default function Remake() {
  
  return (
    <div className={'container'}>
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

      <main className={styles.main}>

        <div className={styles.left}>
          <div className={styles.intro}>
          <h1 className={styles.header}>Oscar Harron</h1>
          <p className={styles.subHeader}>Full Stack Developer</p>
          </div>
          <div>
            <ul>
              <li>Home</li>
              <li>Projects</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          <Theme />

        </div>
        <div className={styles.right}>
          <div className={styles.about}>
            <p>
            <span>Self-taught developer & designer.</span>
            <span>Passionate about building </span>
            <span>beautiful, accessible websites</span>
            <span>that solve real world problems</span>
          </p>
          </div>
        </div>
      </main>
    </div>
  );
}
