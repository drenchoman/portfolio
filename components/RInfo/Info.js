import React from 'react'
import styles from '../../styles/Info.module.css'
import Tech from './Tech'
import {
  DiJavascript,
  DiHtml5,
  DiCss3,
  DiReact,
} from 'react-icons/di';
import {
  SiSupabase,
  SiNextdotjs,
  SiVisualstudio,
  SiPostgresql,
  SiMongodb,
  SiSqlite,
  SiAffinitydesigner,
  SiAffinityphoto,
  SiAdobephotoshop,
  SiCanva,
  SiThreedotjs,
  SiSvelte
} from 'react-icons/si';
import { FaNodeJs, FaAws, FaGithub, FaGitAlt, FaFigma, } from 'react-icons/fa';

export default function Info() {

  const tech = [
    {
      technologies: [
        {
          id: 102,
          name: 'CSS',
          icon: <DiCss3 />,
        },
        {
          id: 103,
          name: 'HTML',
          icon: <DiHtml5 />,
        },
        {
          id: 101,
          name: 'JS',
          icon: <DiJavascript />,
        },
  
        {
          id: 104,
          name: 'React',
          icon: <DiReact />,
        },
        {
          id: 105,
          name: 'Next.js',
          icon: <SiNextdotjs />,
        },
        {
          id: 115,
          name: 'Three.js',
          icon: <SiThreedotjs />,
        },
        {
          id: 116,
          name: 'Svelte',
          icon: <SiSvelte />,
        },
   
        {
          id: 107,
          name: 'Supabase',
          icon: <SiSupabase />,
        },
        {
          id: 108,
          name: 'AWS',
          icon: <FaAws />,
        },
        {
          id: 109,
          name: 'Node.js',
          icon: <FaNodeJs />,
        },
        {
          id: 110,
          name: 'VScode',
          icon: <SiVisualstudio />,
        },
        {
          id: 111,
          name: 'PostgreSQL',
          icon: <SiPostgresql />,
        },
        { id: 114, name: 'SQLite3', icon: <SiSqlite /> },
        {
          id: 112,
          name: 'MongoDB',
          icon: <SiMongodb />,
        },
        {
          id: 113,
          name: 'Git',
          icon: <FaGitAlt />,
        },
      ],
      design: [
        {

            id: 22,
            name: 'Figma',
            icon: <FaFigma />,
          
        },
        {

          id: 23,
          name: 'Affinity Photo',
          icon: < SiAffinityphoto/>,
        
      },
      {

        id: 26,
        name: 'Affinity Designer',
        icon: < SiAffinitydesigner/>,
      
    },
    {

      id: 24,
      name: 'Adobe Photoshop',
      icon: <  SiAdobephotoshop
      />,
    
  },
  {

    id: 25,
    name: 'Canva',
    icon: <SiCanva/>,
  
}
      ]
    },
  ];



  return (
    <section className={styles.right}>
          <div className={styles.info}>
          <h3 className={styles.header}>TECH</h3>
          
            <div className={styles.tech}>
              {tech.map((t, i) => (
                <Tech key={i} tech={t.technologies} />
                ))}
            </div>
          
            <h3 className={styles.header}>DESIGN</h3>
              <div className={styles.designWrapper}>
             
                <div className={styles.design}>   
                  {tech.map((t, i) => (
                    <Tech key={i} tech={t.design} />
                    ))}
                </div>
              </div>
              </div>
          
        </section>
  )
}
