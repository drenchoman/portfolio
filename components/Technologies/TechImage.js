import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Technologies.module.css'


export default function TechImage({icon}) {
  return (
   
  
    <div className={styles.icon}>
     {icon}
    </div>
    
  )
}
