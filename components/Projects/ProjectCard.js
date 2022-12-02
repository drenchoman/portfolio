import React, {useEffect, useState} from 'react'
import styles from '../../styles/Projects.module.css'
import { useInView } from 'react-hook-inview'

export default function ProjectCard({proj}) {
  const [ref, isVisible] = useInView()

  const [show,setShow] = useState(false)
  useEffect(() => {
    if (isVisible){
      setShow(true)
    }
  },[isVisible])
  
  return (
    <div id={proj.id} ref={ref}  className={`${show ? styles.card : styles.pre}`} >
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
          {proj.github != null && 
          <div className={styles.links}>
            <span>
              <a href={proj.github}>Github</a>
            </span>
            
              {proj.icon}
            
          </div>
}
        
      </div>
    </div>
  )
}
