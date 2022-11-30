import React from 'react'
import TechImage from './TechImage'
import styles from '../../styles/Technologies.module.css'
export default function Container({tech}) {
  return (
    <div className={styles.card}>
      <h3>{tech.header}</h3>
      {/* <p>{tech.description}</p> */}
      <div className={styles.techWrapper}>

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
