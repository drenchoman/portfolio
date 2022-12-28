import Head from 'next/head';
import Image from 'next/image';
import Technologies from '../components/Technologies/Technologies';
import HomePage from '../components/Home/Home';
import Navbar from '../components/Navbar/Navbar';
import Three from '../components/Three/Three';
import Projects from '../components/Projects/Projects';
import Blog from '../components/Blog/Blog';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

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

export default function Home({ posts }) {
  return (
    <div className={'container'}>
      <Head>
        <title>Oscar Harron | Web Developer</title>
        <meta name="description" content="Its me" />
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
        <link rel="manifest" href="/site.webmanifest" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </Head>

      <main className={'main'}>
        <Three />
        <Navbar />

        <HomePage />
        <Technologies />
        <Projects />
        <Blog posts={posts} />
        <Contact num="04" />
        <Footer />
      </main>
    </div>
  );
}
