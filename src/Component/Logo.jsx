import React from 'react';
import styles from './Logo.module.css';

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <div className={styles.diamond}>
        <h6 className={styles.text}>HTML<span style={{color:"#B2836C"}}>&</span>CSS</h6>
        <span className={styles.subtext}>design and build websites</span>
      </div>
    </div>
  );
};

export default Logo;
