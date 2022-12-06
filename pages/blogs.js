import { getAllPosts } from "../lib/md"
import Head from "next/head"
import Link from "next/link"
import fs from 'fs'
import matter from "gray-matter"
import styles from '../styles/Posts.module.css'
import Navbar from "../components/Navbar/Navbar"

export const getStaticProps = async () => {
  const files = fs.readdirSync('posts')
  console.log(files)
  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', "");
    const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const {data: frontmatter} = matter(readFile)
    return {
      slug,
      frontmatter
    }
  })
  return {
    props: {
      posts
    }
  }
}


export default function Blogs({posts}) {

  return (
    <div className={styles.container}>
       <Head>
        <title>Oscar Harron</title>
        <meta name="description" content="Its me" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,700&display=swap" rel="stylesheet" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <h1>Posts</h1>
        <div className={styles.postsWrapper}>


      {posts.map((blogPost, i) => (
        <div key={i}>
          <Link href={`/posts/${blogPost.slug}`}>
            <h2> {blogPost.frontmatter.title}</h2>
          </Link>
          </div>
      ))}
              </div>

</main>
   
    </div>
  )
}
