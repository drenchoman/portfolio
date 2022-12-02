import { getAllPosts } from "../lib/md"
import Head from "next/head"
import Link from "next/link"
import fs from 'fs'
import matter from "gray-matter"

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
  console.log(posts);
  return {
    props: {
      posts
    }
  }
}


export default function Blogs({posts}) {
  console.log(posts[0].frontmatter.title);
  return (
    <div className="main">
      <h1>hi</h1>
      {posts.map((blogPost, i) => (
        <div key={i}>
          <Link href={`/posts/${blogPost.slug}`}>
            <h2> {blogPost.frontmatter.title}</h2>
          </Link>
          </div>
      ))}

      
   
    </div>
  )
}
