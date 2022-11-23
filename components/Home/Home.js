import React from 'react'
import styles from '../../styles/Hero.module.css'
import Image from 'next/image'
export default function Home() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.names}>
        <div>OSCAR</div>
        <div>HARRON</div>
        <div>WEB</div>
        <div>DEVELOPER</div>
       
      </div>
      <div className={styles.image}>

     
<Image
src={"https://media1.giphy.com/media/evDgOkOo9uKFW/giphy.gif?cid=ecf05e47ukpncjnye9lt0rui2f494l7yfj03pous0w3u8zi4&rid=giphy.gif&ct=s"} 
layout="fill"
objectFit='cover'
alt="Abstract art"
/>
 </div>

     
    </section>
  )
}
