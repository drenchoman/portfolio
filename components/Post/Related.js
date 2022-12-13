import React from 'react';
import styles from '../../styles/Post.module.css';
import Link from 'next/link';
import Image from 'next/image';
import dayjs from 'dayjs';
export default function Related({ relatedPosts }) {
  console.log(relatedPosts);
  return (
    <div className={styles.relatedWrapper}>
      <div className={styles.related}>
        <h3>Related Posts</h3>
        <hr className={styles.divider} />
        {relatedPosts.map((post) => (
          <>
            <div className={styles.relatedItem} key={post.id}>
              <div className={styles.relatedImage}>
                <Image
                  src={post.image}
                  width={50}
                  height={50}
                  style={{ objectFit: 'cover' }}
                  alt="Blog Image"
                />
              </div>
              <div className={styles.relatedInfo}>
                <span>
                  {dayjs(post.publishedAt).format('DD MMM YYYY')}
                </span>
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </div>
            </div>
            <hr className={styles.postDivider} />
          </>
        ))}
      </div>
    </div>
  );
}
