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
        <title>Oscar Harron</title>
        <meta name="description" content="Its me" />
        <link rel="icon" href="/favicon.ico" />
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
