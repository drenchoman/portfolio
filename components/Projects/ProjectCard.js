import React from 'react'
import styles from '../../styles/Projects.module.css'

export default function ProjectCard({proj}) {
  return (
    <div id={proj.id} className={styles.card} >
      <div className={styles.headerCard}>
        <h3>{proj.name}</h3>
      </div>
        <div>
        <p>{proj.p1}</p>
        <p>{proj.p2}</p>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.bwWrapper}>
          <h3>Built with</h3>
          <div className={styles.builtWithContainer}>
          {proj.builtWith.map((t, i) => (
            <div className={styles.builtWith} key={i}><span>{t}</span></div>
          ))}
          </div>
        </div>
        <div className={styles.linksWrapper}>
          <div className={styles.links}>
            <span>
              <a href={proj.link}>Live Site</a>
            </span>
            
              {proj.icon}
            
          </div>
          <div className={styles.links}>
            <span>
              <a href={proj.github}>Github</a>
            </span>
            
              {proj.icon}
            
          </div>
          
        
      </div>
    </div>
  )
}
