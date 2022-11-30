import React from 'react'
import styles from '../../styles/Projects.module.css'
import Container from './Container'
import ye from '../../public/ye.jpg'
import vc from '../../public/vc.jpg'
import {BiLike, BiLinkExternal} from 'react-icons/bi'


export default function Projects() {

  const proj = [
    {id: 1,
      name: 'Vintageclothing.co.nz',
      image: vc,
      p1: "Featured on Product Hunt, Tailwindhelper is an open source tool that helps you with tailwind classes. It can convert units, helps you choose colors, visualize how a font will look and more. Still a work in progress.",
      p2: "When switching from working with css to working with tailwind, I sometimes forget what the tailwind class for a specific style is, so this tool helps me to stay productive when I code with tailwind.",
      link: "https://vintageclothing.co.nz",
      github: null,
      builtWith: ['Next.js','Supabase', 'React'],
      icon: <BiLinkExternal />
    },
    {
      id: 2,
      name: 'Ye Olde Diary',
      image: ye,
      p1: 'A blog for yadda yadd and it is awesome. Really cool tjing',
      p2: 'Yeah its pretty cools aye',
      link: 'https://blog-client-l1yf8dfav-drenchoman.vercel.app/',
      github: 'https://github.com/drenchoman/blog_client',
      builtWith: ['Next.js', 'MongoDB', 'Node.js', 'React'],
      icon: <BiLinkExternal />

    }
  ]
  return (
    <section className={styles.section}>
      <h2>Projects</h2>
      <div className={styles.wrapper}>
        {proj.map((x) => (
                  <Container key={x.id} proj={x} />

        ))}
      </div>
    </section>
  )
}
