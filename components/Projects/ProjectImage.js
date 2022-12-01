import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Projects.module.css'


export default function ProjectImage({img, isVisible}) {


  return (
    <div className={`${isVisible ? styles.imgWrapper :styles.hiddenWrapper}`}>
  
   
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
