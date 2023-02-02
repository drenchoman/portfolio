import React from 'react'
import styles from '../../styles/Info.module.css'

export default function Tech({tech}) {
  return (
    <>
    {tech.map((t, i) => (
      <div style={{animationDelay: `${i * 50}ms`}} className={styles.tech_container} key={t.id}>
       <span>{t.name}</span>
       <div className={styles.icon}>
        {t.icon}
       </div>
      </div>
    ))}
    </>
  )
}
