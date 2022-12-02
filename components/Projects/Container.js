import React from 'react'
import ProjectCard from './ProjectCard'
import ProjectImage from './ProjectImage'
import styles from '../../styles/Projects.module.css'
import { useInView } from 'react-hook-inview'


export default function Container({proj}) {
  const [ref, isVisible] = useInView()

  

  return (
    <div ref={ref} className={styles.container}>
      <ProjectCard isVisible={isVisible} proj={proj} />
      <div className={styles.imageCard}>
        <div className={styles.name}>
        <h3>{proj.name}</h3>

        </div>
        <ProjectImage isVisible={isVisible} img={proj.image} />
      </div>

    </div>
  )
}
