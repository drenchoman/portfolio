import React, {useContext} from 'react'
import styles from '../../styles/Remake.module.css'
import AppContext from '../AppContext'
import { useRouter } from 'next/router'
import {FiGithub} from 'react-icons/fi'


export default function Intro() {
  const router = useRouter()
  const context = useContext(AppContext)

  const updateNav = (value) => {
    context.setSession(value)
    if(value.toLowerCase() == 'home'){
      router.push('/')
    } else {
    router.push(`/${value.toLowerCase()}`)
  }
  }
 

  const navOptions = [
    {
      id: 1,
      name: 'Home'
    },
    {
    id: 2,
    name: 'Projects',
    },
    {
    id: 3,
    name:'Info'
    },
    {
    id: 4,
  name:'Contact'
  }
]

  return (
    <div className={styles.left}>
    <div className={styles.intro}>
    <h1 className={styles.header}>Oscar Harron</h1>
    <p className={styles.subHeader}>Full Stack Developer <span className={styles.github}><a target="_blank" rel='noreferrer noopener' href='https://github.com/drenchoman'><FiGithub /></a></span></p>
    
    <nav>
      <ul className={styles.options}>
        {navOptions.map((o) => (
          <li onClick={() => updateNav(o.name)} key={o.id}>{context.session.toLowerCase() == o.name.toLowerCase() ? '●' : o.name}</li>
        ))}
      </ul>
    </nav>
    </div>
  </div>
  )
}
