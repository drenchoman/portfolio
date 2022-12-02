import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from '../../styles/Projects.module.css'
import { useInView } from 'react-hook-inview'


export default function ProjectImage({img}) {
  const [ref, isVisible] = useInView()
  const [show,setShow] = useState(false)
  
  useEffect(() => {
    if (isVisible){
      setShow(true)
    }
  },[isVisible])

  return (
    <div ref={ref}  className={ styles.imgWrapper }>
  

    <div className={`${show ? styles.imageWrapper: null}`}>
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
