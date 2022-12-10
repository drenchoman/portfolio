import Head from 'next/head';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeSlug from 'rehype-slug';
import styles from '../../styles/Posts.module.css';
import Image from 'next/image';
import 'highlight.js/styles/atom-one-dark-reasonable.css';
import Navbar from '../../components/Navbar/Navbar';
import { getArticleFromSlug, getSlug } from '../../src/utils/mdx';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeHighlight from 'rehype-highlight';
import rehypeCodeTitles from 'rehype-code-titles';
import dayjs from 'dayjs';
import ImageBlog from '../../components/Blog/ImageBlog';
import AuthorCard from '../../components/Post/AuthorCard';

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
      <main className={'main'}>
        <Navbar />
        <section className={styles.section}>
          <AuthorCard frontmatter={frontmatter} />
          <div className={styles.blogImage}>
            <Image
              src={frontmatter.image}
              fill
              sizes="(max-width: 1200px) 100vw"
              style={{ objectFit: 'cover' }}
              alt="Blog Image"
            />
          </div>

          <article>
            <MDXRemote {...source} components={{ Image }} />
          </article>
        </section>
      </main>
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
