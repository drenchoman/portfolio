import React from 'react'
import styles from '../../styles/Projects.module.css'

export default function ProjectCard({proj}) {
  return (
    <div className={styles.pCard} >
      <div>
        <h3>{proj.name}</h3>
      </div>
      <div className={styles.projectWrapper}>
        <div>
        <p>{proj.p1}</p>
        <p>{proj.p2}</p>
        </div>
        <div className={styles.builtWithContainer}>
          {proj.builtWith.map((t, i) => (
            <div key={i}><span>{t}</span></div>
          ))}
        </div>
        <div className={styles.linksWrapper}>
          <div>
            <span>
              <a href={proj.link}>Live Site</a>
            </span>
            <div>
              {proj.icon}
            </div>
          </div>
          <div>
            <span>
              <a href={proj.github}>Github</a>
            </span>
            <div>
              {proj.icon}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}
