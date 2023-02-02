import React from 'react'
import styles from '../../styles/RContact.module.css'
import { BsLinkedin, BsInstagram, BsGithub } from 'react-icons/bs'

export default function Contact() {
  return (
        <div className={styles.right}>
          <div className={styles.contact}>
            <p>
            <span>I am currently</span>
            <span>looking for Front</span>
            <span>End and Full Stack</span>
            <span>Opportunities.</span>
            <span>Let&apos;s chat.</span>
            <span><a className={styles.link} target="_blank" rel='noreferrer noopener' href='https://www.linkedin.com/in/oscar-harron/'><BsLinkedin />Linkedin</a></span>
            <span><a className={styles.link} target="_blank" rel='noreferrer noopener' href='https://www.instagram.com/its_oggie/'><BsInstagram />Instagram</a></span>
            <span><a className={styles.link} target="_blank" rel='noreferrer noopener' href='https://github.com/drenchoman'><BsGithub/>Github</a></span>

          </p>
          </div>
        </div>
    
  )
}
