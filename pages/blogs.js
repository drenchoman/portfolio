import Head from 'next/head';
import Link from 'next/link';
import fs from 'fs';
import matter from 'gray-matter';
import styles from '../styles/Posts.module.css';
import Navbar from '../components/Navbar/Navbar';
import Preview from '../components/Blog/Preview';
import Footer from '../components/Footer/Footer';
import Contact from '../components/Contact/Contact';

export const getStaticProps = async () => {
  const files = fs.readdirSync('posts');
  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    };
  });
  return {
    props: {
      posts,
    },
  };
};

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
            {posts.map((blogPost, i) => (
              <Preview key={i} blogPost={blogPost} />
            ))}
          </div>
        </section>
        <Contact num={'02'} />
        <Footer />
      </main>
    </div>
  );
}
