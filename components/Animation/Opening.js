import React, {useEffect, useState} from 'react'
import styles from '../../styles/ROpening.module.css'

export default function Opening() {
  const [hide,setHide]=useState(false)

const hideDiv = () => {
  setHide(true)
}

useEffect(() => {
setTimeout(hideDiv, 5500)
return () => {
  clearTimeout(hideDiv)
}
},[])

  return (<>
    {!hide && 
    <div className={styles.container}>
      <div className={styles.name}>
        <span className={styles.me}>Oscar Harron</span>
       <span className={styles.portfolio}>Portfolio</span> 
      </div>
  
    </div>}
    </>
  )
}
