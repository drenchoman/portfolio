import React from 'react'
import styles from '../../styles/RProject.module.css'
import Image from 'next/image';
import github from '../../public/github.svg'
import Link from 'next/link';

const proj = [
  {
    id: 'form',
    year: 2023,
    name: 'FEEDBACK FORM',
    p1: 'A typeform-esque feedback form built as part of my Summer of AWS project.',
    p2: 'Created using an API only backend and two front ends: a CMS for creating and managing blog posts and a user facing one for reading and commenting on blog posts.',
    link: 'https://aws-project-client.vercel.app/',
    github: 'https://github.com/drenchoman/aws-project-client',
    builtWith: ['Svelte', 'DynamoDB', 'EC2'],
  },
  {
    id: 'vc',
    year: 2022,
    name: 'VINTAGECLOTHING',
    p1: "A website that connects you to small independent vintage, opshop and recycled clothing stores in NZ. I thought this project would be useful as many modern day 'opshops' are now online. Still a work in progress.",
    p2: 'I used Supabase for the first time during this project and really enjoyed building with it, very easy to use with lots of good documentation.',
    link: 'https://vintageclothing.co.nz',
    github: null,
    builtWith: ['Next.js', 'Supabase',],
  },
  {
    id: 'ye',
    year: 2022,
    name: 'YE OLDE DIARY',
    p1: 'Ye Olde Diary is a blog project featuring texts from a bygone era. Users can create an account, like and comment on posts.',
    p2: 'Created using an API only backend and two front ends: a CMS for creating and managing blog posts and a user facing one for reading and commenting on blog posts.',
    link: 'https://blog-client-l1yf8dfav-drenchoman.vercel.app/',
    github: 'https://github.com/drenchoman/blog_client',
    builtWith: ['Next.js', 'MongoDB', 'Node.js'],
  },

];

export default function Projects() {
  
  return (
    <div className={styles.right}>
     <div className={styles.project}>
       {proj.map((p, i) => 
       <div style={{animationDelay: `${i * 100}ms`}}   className={styles.container} key={p.id}>
        <Link href={p.link}>
          <h2 className={styles.header}>{p.name}</h2>
        </Link>
        <div className={styles.info}>
          <span>{p.year}</span>
         {p.builtWith.map((option, i) =>
         <div key={i}>
          <span className={styles.divider}>/</span> {option} 
          </div>)}
          {p.github &&
          <Link href={p.github}>
          
          <div className={styles.github}>
          <span className={styles.divider}>/</span>
          <Image
          className={styles.image}
          src={github}
          width={11}
          height={11}
          alt='Link to Github' />
          </div>
          </Link>
}
      
        </div>
        
       </div>)}
    </div>
  </div>
  )
}
