import React, { useState, useEffect } from 'react';
import styles from '../../styles/Blog.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'react-hook-inview';
import dayjs from 'dayjs';

export default function Container({ frontMatter }) {
  console.log(frontMatter.publishedAt);
  const publishedAt = dayjs(frontMatter.publishedAt)
    .format('DD MMM YYYY')
    .toUpperCase();
  console.log(publishedAt);
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
        <Link href={`/blog/${frontMatter.slug}`} passHref>
          <div className={styles.imageWrapper}>
            <Image
              src={frontMatter.image}
              fill
              sizes="(max-width: 1200px) 100vw"
              style={{ objectFit: 'cover' }}
              alt="Blog Image"
            />
          </div>
        </Link>

        <div className={styles.tagsContainer}>
          {frontMatter.tags.map((tag, i) => (
            <span key={i}>{tag.toUpperCase()}</span>
          ))}
        </div>
        <div className={styles.blogContainer}>
          <span>
            {publishedAt}
            &mdash; {frontMatter.readingTime}
          </span>
          <Link href={`/blog/${frontMatter.slug}`} passHref>
            <h3>{frontMatter.title}</h3>
          </Link>
          <p>{frontMatter.excerpt}</p>
        </div>
      </div>
    </div>
  );
}
