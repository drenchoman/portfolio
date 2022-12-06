import React, { useState, useEffect } from 'react';
import TechImage from './TechImage';
import styles from '../../styles/Technologies.module.css';
import { useInView } from 'react-hook-inview';

export default function Container({ tech }) {
  const [ref, isVisible] = useInView();
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (isVisible) {
      setShow(true);
    }
  }, [isVisible]);
  return (
    <div ref={ref} className={`${show ? styles.card : styles.pre}`}>
      <h3>{tech.header}</h3>
      <div
        className={`${styles.techWrapper} ${
          show ? styles.animation : null
        }`}
      >
        {tech.technologies.map((x, i) => (
          <div key={i} className={styles.techCard}>
            <h3>{x.name}</h3>
            <TechImage name={x.name} icon={x.icon} />
          </div>
        ))}
      </div>
    </div>
  );
}
