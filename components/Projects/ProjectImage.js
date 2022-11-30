import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Projects.module.css'
import {CgScreen} from 'react-icons/cg'

export default function ProjectImage({img}) {
  return (
    <div className={styles.imgWrapper}>
    <CgScreen className={styles.screen}/>
   
    <div className={styles.imageWrapper}>
        <Image
        src={img}
        layout='fill'
        objectFit='contain'
        alt="hello"

        />
   
    </div>
    </div>
  )
}
