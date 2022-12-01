import React from 'react'
import styles from '../../styles/Projects.module.css'
import Container from './Container'
import ye from '../../public/yee.svg'
import vc from '../../public/iPhone 14.svg'
import {BiLike, BiLinkExternal} from 'react-icons/bi'


export default function Projects() {

  const proj = [
    {id: 'vc',
      name: 'Vintageclothing.co.nz',
      image: vc,
      p1: "A website that connects you to small independent vintage, opshop and recycled clothing stores in NZ. I thought this project would be useful as many modern day 'opshops' are now online. Still a work in progress.",
      p2: "I used Supabase for the first time during this project and really enjoyed building with it, very easy to use with lots of good documentation.",
      link: "https://vintageclothing.co.nz",
      github: null,
      builtWith: ['Next.js','Supabase', 'React'],
      icon: <BiLinkExternal />
    },
    {
      id: 'ye',
      name: 'Ye Olde Diary',
      image: ye,
      p1: 'Ye Olde Diary is a blog project featuring texts from a bygone era. Users can create an account, like and comment on posts.'  ,
      p2: 'Created using an API only backend and two front ends: a CMS for creating and managing blog posts and a user facing one for reading and commenting on blog posts.',
      link: 'https://blog-client-l1yf8dfav-drenchoman.vercel.app/',
      github: 'https://github.com/drenchoman/blog_client',
      builtWith: ['Next.js', 'MongoDB', 'Node.js', 'React'],
      icon: <BiLinkExternal />

    }
  ]
  return (
    <section className={styles.section}>
      <h2><span>02.</span>PROJECTS</h2>
      <div className={styles.wrapper}>
        {proj.map((x) => (
                  <Container key={x.id} proj={x} />

        ))}
      </div>
    </section>
  )
}
