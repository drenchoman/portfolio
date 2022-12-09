import Head from 'next/head';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeSlug from 'rehype-slug';
import styles from '../../styles/Posts.module.css';
import Image from 'next/image';
import 'highlight.js/styles/atom-one-dark-reasonable.css';
import me from '../../public/me.jpeg';
import Navbar from '../../components/Navbar/Navbar';
import { getArticleFromSlug, getSlug } from '../../src/utils/mdx';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeHighlight from 'rehype-highlight';
import rehypeCodeTitles from 'rehype-code-titles';
import dayjs from 'dayjs';
import ImageBlog from '../../components/Blog/ImageBlog';

export default function PostPage({ post: { source, frontmatter } }) {
  const publishedAt = dayjs(frontmatter.publishedAt).format(
    'DD MMM YYYY'
  );

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
      <Navbar />
      <section className={styles.section}>
        <div className={styles.card}>
          <div className={styles.tags}>
            {frontmatter.tags.map((t, i) => (
              <span key={i}>{t.toUpperCase()}</span>
            ))}
          </div>
          <h1>{frontmatter.title}</h1>
          <div className={styles.author}>
            <div>
              <Image
                src={me}
                width={35}
                height={35}
                alt="Author Image"
              />
            </div>
            <span>{frontmatter.author}</span>
            <span>
              {publishedAt}
              &mdash; {frontmatter.readingTime}
            </span>
          </div>
          <div className={styles.blogImage}>
            <Image
              src={frontmatter.image}
              fill
              sizes="(max-width: 1200px) 100vw"
              style={{ objectFit: 'cover' }}
              alt="Blog Image"
            />
          </div>
        </div>

        <article>
          <MDXRemote {...source} components={{ Image }} />
        </article>
      </section>
    </div>
  );
}

export async function getStaticPaths() {
  // getting all paths of each article as an array of
  // objects with their unique slugs
  const paths = (await getSlug()).map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    // in situations where you try to access a path
    // that does not exist. it'll return a 404 page
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const { content, frontmatter } = await getArticleFromSlug(slug);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            properties: { className: ['anchor'] },
          },
          { behaviour: 'wrap' },
        ],
        rehypeHighlight,
        rehypeCodeTitles,
      ],
    },
  });
  return {
    props: {
      post: {
        source: mdxSource,
        frontmatter,
      },
    },
  };
}
