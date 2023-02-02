import React from 'react'
import styles from '../../styles/Info.module.css'

export default function Tech({tech}) {
  return (
    <>
    {tech.map((t) => (
      <div className={styles.tech} key={t.id}>
       <span>{t.name}</span>
       <div>
        {t.icon}
       </div>
      </div>
    ))}
    </>
  )
}
