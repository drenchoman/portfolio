import Head from 'next/head';

import styles from '../styles/Posts.module.css';
import Navbar from '../components/Navbar/Navbar';
import Preview from '../components/Blog/Preview';
import Footer from '../components/Footer/Footer';
import Contact from '../components/Contact/Contact';
import { getAllArticles } from '../src/utils/mdx';

export async function getStaticProps() {
  const articles = await getAllArticles();

  articles
    .map((article) => article.data)
    .sort((a, b) => {
      if (a.data.publishedAt > b.data.publishedAt) return 1;
      if (a.data.publishedAt < b.data.publishedAt) return -1;

      return 0;
    });

  return {
    props: {
      posts: articles.reverse(),
    },
  };
}

export default function Blogs({ posts }) {
  return (
    <div className={'container'}>
      <Head>
        <title>Oscar Harron | Blogs</title>
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

      <main className={'main'}>
        <Navbar />
        <section className={styles.sectionAll}>
          <h1>
            <span>01</span>ALL POSTS
          </h1>
          <div className={styles.postsWrapper}>
            {posts.map((frontMatter, i) => (
              <Preview key={i} frontMatter={frontMatter} />
            ))}
          </div>
        </section>
        <Contact num={'02'} />
        <Footer />
      </main>
    </div>
  );
}
