import React from 'react'
import Container from './Container'
import {DiJavascript, DiHtml5,DiCss3, DiReact } from 'react-icons/di'
import {SiSupabase, SiNextdotjs, SiVisualstudio, SiPostgresql, SiMongodb, SiSqlite } from 'react-icons/si'
import {FaNodeJs, FaAws, FaGithub, FaGitAlt } from 'react-icons/fa'
import styles from '../../styles/Technologies.module.css'


export default function Technologies() {
  const tech = [{
    id:1,
    header: 'CORE',
    description: 'The Core Technologies I use on a daily basis',
    technologies:[
     
      {
      id: 102,
      name: 'CSS',
      icon: <DiCss3 />
    },
    {
      id: 103,
      name: 'HTML',
      icon: <DiHtml5 />
    },
    {
      id: 101,
      name: 'JS',
      icon: <DiJavascript/>
    },
    ],
  },
  
  {
    id: 2,
    header: 'FRONT END',
    description: 'Front End Weapons of Choice',
    technologies:[
      {
      id: 104,
      name: 'React',
      icon: <DiReact />
    },
      {
      id: 105,
      name: 'Next.js',
      icon: <SiNextdotjs />
    },
      ],
  },
  {
    id: 3,
    header: 'BACK END',
    description: 'The tools that do the heavy lifting',
    technologies:[
      {
      id: 107,
      name: 'Supabase',
      icon: <SiSupabase />
    },
      {
      id: 108,
      name: 'AWS',
      icon: <FaAws />
    },
      {
      id: 109,
      name: 'Node.js',
      icon: <FaNodeJs />
    }],
  },
  {
    id: 4,
    header: 'OTHER TOOLS',
    description: 'Everyday workflow tools & databases I have worked with',
    technologies:[
      {
      id: 110,
      name: 'VScode',
      icon: <SiVisualstudio />
    },
      {
      id: 111,
      name: 'Postgresql',
      icon: <SiPostgresql />
    },
    {id: 114,
    name: 'SQLite3',
  icon:<SiSqlite />},
      {
      id: 112,
      name: 'MongoDB',
      icon: <SiMongodb />
    },
    {
      id: 113,
      name: 'Git',
      icon: <FaGitAlt />
    }],
  }
]

  return (
    <section className={styles.section}>
      <h2><span>01.</span>TECH</h2>
      <div className={styles.wrapper}>

      
      {tech.map((x) => (
        <Container key={x.id} tech={x} />
      ))}
      </div>
    </section>
  )
}
