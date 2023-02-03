import React from 'react'
import styles from '../../styles/Remake.module.css'
import Intro from '../RHome/Intro'
import Theme from '../Theme/Theme'
import Three from '../Three/Three'
import { Canvas } from '@react-three/fiber'

export default function layout({children}) {
  return (
    <>
        <Three />

    <div className='container'>
    <Theme />
    <main className={styles.main}>
      <div className={styles.bg}></div>
    <Intro />
    {children}
    </main>
    </div>
    </>
  )
}
