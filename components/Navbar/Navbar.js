import React from 'react';
import styles from '../../styles/Navbar.module.css';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.o}></div>
      <nav>
        <div>
          <Link href="/">
            <span>Home</span>
          </Link>
        </div>
        <div>
          <Link href="/blogs">
            <span>Blog</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
