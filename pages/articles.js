import Head from "next/head";
import Articles from "../components/RArticle/Articles";
import { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import AppContext from "../components/AppContext";
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



export default function Project({posts}) {
  
  const router = useRouter()
  const context = useContext(AppContext)
  const path = router.pathname.substring(1)

  const capitaliseFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
   
  }

  const updateNav = (value) => {
    if(value.toLowerCase() !== context.session.toLowerCase()){
      let update = capitaliseFirstLetter(value)
      context.setSession(update)
    }
    return

  }

  useEffect(() => {
    updateNav(path)
  },[])

  return (
    <>
      <Head>
        <title>Oscar Harron | Articles</title>
        <meta
          name="description"
          content="Based in AKL, NZ. Passionate about building beautiful accessible websites that solve real world problems."
        />
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
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />

        <meta
          property="og:title"
          content="Oscar Harron"
        />
        <meta
          property="og:description"
          content="Connecting you to small independent Vintage, Opshop and Recycled Clothing stores in NZ.
          Discover your new favourite store here!"
        />
        <meta property="og:url" content="https://www.vintageclothing.co.nz" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dbyprqeyc/image/upload/v1675313489/pic_cpdbmi.jpg"
        />


      </Head>
      <Articles posts={posts} />
</>
  );
}
