import fs from 'fs'
import matter from 'gray-matter'
import { remark } from 'remark';
import Head from 'next/head';
import html from 'remark-html'
import remarkHeadingId from 'remark-heading-id';
import styles from '../../styles/Posts.module.css'
import Image from 'next/image';
import me from '../../public/me.jpeg'
import Navbar from '../../components/Navbar/Navbar';

export async function getStaticPaths() {
  const files = fs.readdirSync('posts')
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', '')
    }
  }));
  return {
    paths,
    fallback: false
  }

}

export async function getStaticProps({ params: {slug} }) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
  const {data: frontmatter, content} = matter(fileName)
  const processedContent = await remark().use(html).use(remarkHeadingId).process(content)
  const contentHtml = processedContent.toString()
  return {
    props: {
      frontmatter,
      contentHtml
    }
  }

}

export default function PostPage({frontmatter, contentHtml}){
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
          alt='Author Image'
        />
        </div>
        <span>{frontmatter.author}</span>
        <span>{frontmatter.date}</span>
      </div>
      <div className={styles.blogImage}>
      <Image
      src={frontmatter.image} alt="Blog Image" objectFit='cover' layout='fill'
      />
      </div>
    </div>
    
    <article dangerouslySetInnerHTML={{__html: contentHtml}}>

    </article>
    </section>
</div>
  )
}