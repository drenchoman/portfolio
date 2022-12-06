import React, { useState, useEffect } from 'react';
import styles from '../../styles/Blog.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'react-hook-inview';

export default function Container({ blog }) {
  const [ref, isVisible] = useInView();
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (isVisible) {
      setShow(true);
    }
  }, [isVisible]);

  return (
    <div ref={ref} className={`${show ? styles.card : styles.pre}`}>
      <div
        className={`${styles.cardInner} ${
          show ? styles.animation : null
        }`}
      >
        <Link href={blog.href}>
          <div className={styles.imageWrapper}>
            <Image
              src={blog.image}
              fill
              sizes="(max-width: 1200px) 100vw"
              style={{ objectFit: 'cover' }}
              alt="Blog Image"
            />
          </div>
        </Link>

        <div className={styles.tagsContainer}>
          {blog.tags.map((t, i) => (
            <span key={i}>{t.toUpperCase()}</span>
          ))}
        </div>
        <div className={styles.blogContainer}>
          <span>{blog.date}</span>
          <h3>
            <Link href={blog.href}>{blog.title}</Link>
          </h3>
          <p>{blog.description}</p>
        </div>
      </div>
    </div>
  );
}
