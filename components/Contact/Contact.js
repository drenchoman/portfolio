import React, { useState, useEffect } from 'react';
import styles from '../../styles/Contact.module.css';
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs';
import { useInView } from 'react-hook-inview';
const size = 32;

export default function Contact() {
  const [ref, isVisible] = useInView();
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (isVisible) {
      setShow(true);
    }
  });
  return (
    <section className={styles.section}>
      <h2>
        <span>04</span>CONTACT
      </h2>
      <div className={styles.wrapper}>
        <div
          ref={ref}
          className={`${styles.paragraph} ${
            show ? styles.appear : null
          }`}
        >
          <p className={`${show ? styles.fade : null}`}>
            I am currently looking for Front End / Full Stack
            Opportunities.
          </p>
          <p className={`${show ? styles.fade : null}`}>
            {' '}
            If you have a question or want to chat, feel free to send
            me a message and I will get back to you!
          </p>
        </div>
        <div className={styles.links}>
          <a
            className={`${show ? styles.fade : null}`}
            rel="noopener noreferrrer noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/oscar-harron/"
          >
            <BsGithub size={size} />
          </a>
          <a
            className={`${show ? styles.fade : null}`}
            rel="noopener noreferrrer noreferrer"
            target="_blank"
            href="https:www.github.com/drenchoman"
          >
            <BsLinkedin size={size} />
          </a>
          <a
            className={`${show ? styles.fade : null}`}
            rel="noopener noreferrrer noreferrer"
            target="_blank"
            href="https:www.instagram.com/its_oggie"
          >
            <BsInstagram size={size} />
          </a>
        </div>
      </div>
    </section>
  );
}
