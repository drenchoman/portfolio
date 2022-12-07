import React, { useEffect, useState } from 'react';
import styles from '../../styles/Blog.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'react-hook-inview';

export default function Preview({ blogPost }) {
  const [ref, isVisible] = useInView();
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (isVisible) {
      setShow(true);
    }
  }, [isVisible]);

  return (
    <div
      ref={ref}
      className={`${show ? styles.cardPreview : styles.pre}`}
    >
      <div
        className={`${styles.cardInner} ${
          show ? styles.animation : null
        }`}
      >
        <Link href={`/blog/${blogPost.slug}`}>
          <div className={styles.imageWrapper}>
            <Image
              src={blogPost.frontmatter.image}
              fill
              sizes="(max-width: 1200px) 100vw"
              style={{ objectFit: 'cover' }}
              alt="Blog Image"
            />
          </div>
        </Link>

        <div className={styles.tagsContainer}>
          {blogPost.frontmatter.tags.map((t, i) => (
            <span key={i}>{t.toUpperCase()}</span>
          ))}
        </div>
        <div className={styles.blogContainer}>
          <span>{blogPost.frontmatter.date}</span>
          <h3>
            <Link href={`/blog/${blogPost.slug}`}>
              {blogPost.frontmatter.title}
            </Link>
          </h3>
          <p>{blogPost.frontmatter.description}</p>
        </div>
      </div>
    </div>
  );
}
