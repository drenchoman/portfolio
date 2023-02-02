import Head from "next/head";
import Projects from '../components/RProjects/Projects'
import { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import AppContext from "../components/AppContext";

export default function Project() {
  
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
        <title>Oscar Harron | Full Stack Developer</title>
        <meta
          name="Here you will find my blog posts on Web Development and beyond."
          content="Its me"
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
          content="Oscar Harron | Full Stack Developer"
        />
        <meta
          property="og:description"
          content="Based in AKL, NZ. Passionate about building beautiful accessible websites that solve real world problems."
        />
        <meta property="og:url" content="https://www.oscarharron.com" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dbyprqeyc/image/upload/v1675313489/pic_cpdbmi.jpg"
        />

            {/* Linkedin */}
            <meta
          itemProp="name"
          content="Oscar Harron | Full Stack Developer"
        />
        <meta
          itemProp="description"
          content="Based in AKL, NZ. Passionate about building beautiful accessible websites that solve real world problems."
        />
        <meta
          itemProp="image"
          content="https://res.cloudinary.com/dbyprqeyc/image/upload/v1675313489/pic_cpdbmi.jpg"
        />
        {/* Twiiter */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Oscar Harron | Full Stack Developer"
        />

        <meta name="twitter:url" content="https://oscarharron.com" />

        <meta
          name="twitter:description"
          content="Based in AKL, NZ. Passionate about building beautiful accessible websites that solve real world problems."
        />

        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dbyprqeyc/image/upload/v1675313489/pic_cpdbmi.jpg"
        />
      </Head>
      <Projects /> 
</>
  );
}
