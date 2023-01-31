import React from 'react';
import styles from '../../styles/Projects.module.css';
import Container from './Container';
import ye from '../../public/yegood.png';
import vc from '../../public/goodvc.png';
import { BiLike, BiLinkExternal } from 'react-icons/bi';

export default function Projects() {


  return (
    <section className={styles.section}>
      <h2>
        <span>02.</span>PROJECTS
      </h2>
      <div className={styles.wrapper}>
        {proj.map((x) => (
          <Container key={x.id} proj={x} />
        ))}
      </div>
    </section>
  );
}
