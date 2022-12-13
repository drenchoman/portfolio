import React from 'react';
import Image from 'next/image';
import me from '../../public/me.jpeg';
import styles from '../../styles/Post.module.css';
import dayjs from 'dayjs';

export default function AuthorCard({ frontmatter }) {
  const publishedAt = dayjs(frontmatter.publishedAt).format(
    'DD MMM YYYY '
  );
  return (
    <div className={styles.card}>
      <div className={styles.tags}>
        {frontmatter.tags.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
      <h1>{frontmatter.title}</h1>
      <div className={styles.author}>
        <div>
          <Image src={me} width={35} height={35} alt="Author Image" />
        </div>
        <span>{frontmatter.author}</span>
        <span>
          {publishedAt}
          &mdash; {frontmatter.readingTime}
        </span>
      </div>
    </div>
  );
}
