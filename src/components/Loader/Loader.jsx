import React, { Component } from "react";
import Loader from "react-loader-spinner";
import styles from './Loader.module.css'

export default class App extends Component {
  render() {
    return (
      <div className={styles.loader}>
        <Loader
          type="BallTriangle"
          color="#00BFFF"
          height={100}
          width={100}
        />
      </div>
    );
  }
}
