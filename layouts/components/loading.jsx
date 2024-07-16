import React from 'react';
import styles from './Loading.module.css'; // Assuming you are using CSS Modules

const Loading = () => {
  return (
    <div className={styles.loadingScreen}>
      <div className={styles.loader}>
        <div className={styles.sContainer}>
          <span className={styles.s}>S</span>
          <div className={styles.rectangle}></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;