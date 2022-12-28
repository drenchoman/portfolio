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
import { getAllArticles } from '../../src/utils/mdx';
import AuthorCard from '../../components/Post/AuthorCard';
import Links from '../../components/Post/Links';
import Related from '../../components/Post/Related';

export default function PostPage({
  post: { source, frontmatter, posts },
}) {
  const relatedPosts = posts.filter(
    (post) => post.id !== frontmatter.id
  );

  return (
    <div className={'container'}>
      <Head>
        <title>{frontmatter.title}</title>
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
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </Head>
      <main className={'main'}>
        <Navbar />
        <section className={styles.section}>
          <div className={styles.articleWrapper}>
            <Links title={frontmatter.title} />
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
          </div>
          <Related relatedPosts={relatedPosts} />
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

  const articles = await getAllArticles();

  articles
    .map((article) => article.data)
    .sort((a, b) => {
      if (a.data.publishedAt > b.data.publishedAt) return 1;
      if (a.data.publishedAt < b.data.publishedAt) return -1;

      return 0;
    });

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
        posts: articles.reverse(),
      },
    },
  };
}
