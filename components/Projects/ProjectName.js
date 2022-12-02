import React, {useEffect, useState} from 'react'
import styles from '../../styles/Projects.module.css'
import { useInView } from 'react-hook-inview'


export default function ProjectName({name}) {
  const [ref, isVisible] = useInView()
  const [show, setShow] = useState(false)
  useEffect(() => {
    if(isVisible){
      setShow(true)
    }
  },[isVisible])

  return (
    <div ref={ref} className={`${styles.name} ${show ? styles.fade : null}`}>
      <h3>{name}</h3></div>
  )
}
