import fs from 'fs'
import matter from 'gray-matter'
import { remark } from 'remark';
import html from 'remark-html'

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
  const processedContent = await remark().use(html).process(content)
  const contentHtml = processedContent.toString()
  console.log(contentHtml)
  return {
    props: {
      frontmatter,
      contentHtml
    }
  }

}

export default function PostPage({frontmatter, contentHtml}){
  return (
    <div dangerouslySetInnerHTML={{__html: contentHtml}}>

    </div>
  )
}