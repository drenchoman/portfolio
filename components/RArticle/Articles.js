import React from 'react'
import styles from '../../styles/Articles.module.css'
import Image from 'next/image'
import Link from 'next/link'
import dayjs from 'dayjs'

export default function Articles({posts}) {
 

return (
  <div className={styles.right}>
  <div className={styles.articles}>
    {posts.map((art) => 
    <div className={styles.container} key={art.id}>
     <Link href={`/articles/${art.slug}`} passHref>
       <h2 className={styles.header}>{art.title}</h2>
     </Link>
     <div className={styles.info}>
      <div className={styles.info_top}>
        <span>{dayjs(art.publishedAt).format('DD MM YY')}</span>
        <span>/</span>
        <span>{art.readingTime}</span>
     </div>
     <div className={styles.info_bot}>
      {art.tags.map((t, i) =>
        <span key={i}>{t}</span>
  
     )}
      </div>
    </div>
     
    </div>)} 
 </div>
</div>
)
}

  