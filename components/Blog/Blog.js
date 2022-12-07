import React from 'react';
import styles from '../../styles/Blog.module.css';
import Container from './Container';
import b1 from '../../public/b1.jpeg';
import b2 from '../../public/b2.jpeg';
import { BiLinkExternal } from 'react-icons/bi';
import Link from 'next/link';

const blogs = [
  {
    id: 1,
    tags: ['Web Development', 'Javascript'],
    image: b1,
    title: 'An Introduction to Javascript',
    description:
      'This introduction will cover Javascripts relationship with HTML and CSS, Control Flow & Loops, the Document Object Model + much more!',
    date: 'July 6th, 2022',
    href: '/blog/An-Introduction-to-Javascript',
  },
  {
    id: 2,
    tags: ['Web Development', 'Life'],
    image: b2,
    title: 'My Approach to Problem Solving',
    description:
      "What I do when I am stuck on a problem and why it's more than asking Google.",
    date: 'July 13th 2022',
    href: '/blog/My-Approach-to-Problem-Solving',
  },
];

export default function Blog() {
  return (
    <section className={styles.section}>
      <h2>
        <span>03</span>BLOG
      </h2>
      <span>FEATURED</span>
      <div className={styles.wrapper}>
        {blogs.map((b) => (
          <Container key={b.id} blog={b} />
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
