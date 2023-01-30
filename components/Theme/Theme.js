import React, {useState, useEffect} from 'react'
import { useTheme } from 'next-themes'
import styles from '../../styles/Theme.module.css'

export default function Theme() {
  const {theme, systemTheme, setTheme} = useTheme()
  const [mounted, setMounted] = useState(false)

  const setDark = () => {
    setTheme('dark')
    console.log(theme)
  }

  const setLight = () => {
    setTheme('light')
    console.log(theme)
  }

  useEffect(() => setMounted(true),[])
  if (!mounted) return null
  return (
    

    <div className={styles.theme}>
      <div className={`${styles.lightContainer} ${styles.container}`} onClick={setLight}>
        <div className={ theme == 'light' ? styles.selected : styles.box}>
        </div>
        <span>Light</span>
      </div>
      <div className={`${styles.lightContainer} ${styles.container}`} onClick={setDark}>
        <div className={ theme == 'dark' ? styles.selected : styles.box}>
        </div>
        <span>Dark</span>
      </div>
 
    </div>
  )
}
