import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import styles from '../../styles/Post.module.css';
import Link from 'next/link';

export default function Links({ title }) {
  const path = [
    { id: 1, name: 'Home', href: '/' },
    { id: 2, name: 'Blog', href: '/blogs' },
  ];

  return (
    <div className={styles.linkWrapper}>
      {path.map((p) => (
        <div className={styles.link} key={p.id}>
          <Link href={p.href}>
            <span>{p.name}</span>
          </Link>

          <AiOutlineRight />
        </div>
      ))}
      <span className={styles.linkTitle}>{title}</span>
    </div>
  );
}
