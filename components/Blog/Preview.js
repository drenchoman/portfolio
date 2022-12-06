import React from 'react';
import styles from '../../styles/Posts.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Preview({ blogPost }) {
  return (
    <div>
      <Link href={`/posts/${blogPost.slug}`}>
        <h2> {blogPost.frontmatter.title}</h2>
      </Link>
      <div className={styles.previewImage}>
        <Image src={blogPost.image} fill alt="Blog Image" />
      </div>
    </div>
  );
}
