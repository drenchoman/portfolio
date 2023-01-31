import React from 'react'
import styles from '../../styles/Remake.module.css'
import Intro from '../RHome/Intro'
import Theme from '../Theme/Theme'
export default function layout({children}) {
  return (
    <div className='container'>
    <Theme />
    <main className={styles.main}>
    <Intro />
    {children}
    </main>
    </div>
  )
}
