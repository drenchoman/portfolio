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
      <ProjectImage isVisible={isVisible} img={proj.image} />
    </div>
  )
}
