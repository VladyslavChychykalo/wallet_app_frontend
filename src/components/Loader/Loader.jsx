import React from 'react';
import LoaderFromLibrary from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <LoaderFromLibrary
        type="BallTriangle"
        color="#00BFFF"
        height={100}
        width={100}
      />
    </div>
  );
};

export default Loader;
