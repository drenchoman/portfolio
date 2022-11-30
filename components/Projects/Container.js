import React from 'react'
import ProjectCard from './ProjectCard'
import ProjectImage from './ProjectImage'
import styles from '../../styles/Projects.module.css'

export default function Container({proj}) {
  return (
    <div className={styles.card}>
      <ProjectCard proj={proj} />
      <ProjectImage img={proj.image} />
    </div>
  )
}
