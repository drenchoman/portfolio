import React from 'react'
import Container from './Container'
import {DiJavascript1, DiHtml5,DiCss3, DiReact } from 'react-icons/di'
import {SiSupabase, SiNextdotjs, SiVisualstudio, SiPostgresql, SiMongodb } from 'react-icons/si'
import {FaNodeJs, FaAws, FaGithub, FaGitAlt } from 'react-icons/fa'

export default function Technologies() {
  const tech = [{
    id:1,
    header: 'Core',
    description: 'My tech yo',
    technologies:[
      {
      id: 101,
      name: 'Javascript',
      icon: <DiJavascript1 />
    },
      {
      id: 102,
      name: 'CSS',
      icon: <DiCss3 />
    },
      {
      id: 103,
      name: 'HTML',
      icon: <DiHtml5 />
    }],
  },
  
  {
    id: 2,
    header: 'Front-end',
    description: 'My tech yo',
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
    header: 'Back-end',
    description: 'My tech yo',
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
    header: 'Other Tools',
    description: 'My tech yo',
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
    <section>
      <h2>hi</h2>
      {tech.map((x) => (
        <Container key={x.id} tech={x} />
      ))}
    </section>
  )
}
