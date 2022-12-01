import React from 'react'
import TechImage from './TechImage'
import styles from '../../styles/Technologies.module.css'
import { useInView } from 'react-hook-inview'


export default function Container({tech}) {
  const [ref, isVisible] = useInView()
  return (
    <div ref={ref} className={`${isVisible ? styles.card : styles.pre}`}>
      <h3>{tech.header}</h3>
      {/* <p>{tech.description}</p> */}
      <div className={`${styles.techWrapper} ${isVisible ? styles.animation : null}`}>

      {tech.technologies.map((x, i) => (
        <div key={i.id} className={styles.techCard}>
        <h3>{x.name}</h3>
        <TechImage  name={x.name} icon={x.icon} />
        </div>
      ))}
      </div>

    </div>
  )
}
