import React from 'react'
import ProjectCard from './ProjectCard'
import ProjectImage from './ProjectImage'
import ProjectName from './ProjectName'
import styles from '../../styles/Projects.module.css'


export default function Container({proj}) {

  

  return (
    <div className={styles.container}>
      <ProjectCard  proj={proj} />
      <div className={styles.imageCard}>
        <ProjectImage  img={proj.image} link={proj.link} />
      </div>

    </div>
  )
}
