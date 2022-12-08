import React from 'react';
import styles from '../../styles/Blog.module.css';
import Container from './Container';

import { BiLinkExternal } from 'react-icons/bi';
import Link from 'next/link';

export default function Blog({ posts }) {
  return (
    <section className={styles.section}>
      <h2>
        <span>03</span>BLOG
      </h2>
      <span>FEATURED</span>
      <div className={styles.wrapper}>
        {posts.map((frontMatter) => (
          <Container key={frontMatter.id} frontMatter={frontMatter} />
        ))}
      </div>
      <div className={styles.buttonWrapper}>
        <div className={styles.button}>
          <button>
            <Link href="/blogs">See All Blog Posts</Link>
          </button>
          <BiLinkExternal />
        </div>
      </div>
    </section>
  );
}
