import React from 'react';
import styles from './Balance.module.css';

const Balance = () => {
  const windowWidth = document.documentElement.clientWidth;
  return (
    <>
      <h5 className={styles.title}>Balance {windowWidth >= 768 && ':'}</h5>{' '}
      <p className={styles.amount}>24000 UAH</p>
    </>
  );
};

export default Balance;
