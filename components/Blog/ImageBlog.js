import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Posts.module.css';

export default function ImageBlog({ img, alt }) {
  return (
    <div className={styles.inblogImage}>
      <Image src={img} style={{ objectFit: 'cover' }} alt={alt} />
    </div>
  );
}
