import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from '../../styles/Projects.module.css'


export default function ProjectImage({img, isVisible}) {
  const [show,setShow] = useState(false)
  useEffect(() => {
    if (isVisible){
      setShow(true)
    }
  },[isVisible])

  return (
    <div className={`${show ? styles.imgWrapper :styles.hiddenWrapper}`}>
  
   
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
