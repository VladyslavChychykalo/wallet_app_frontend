import React, { Component, createRef } from 'react';
import styles from './Modal.module.css';
import AddTransactionForm from '../AddTransactionForm/AddTransactionForm';

export default class Modal extends Component {
  backdropRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  // handleKeyPress = e => {
  //   if (e.code !== 'Escape') {
  //   }

  //   this.props.onClose();
  // };

  // handleBackdropClick = e => {
  //   if (this.backdropRef.current && e.target !== this.backdropRef.current) {
  //   }

  //   this.props.onClose();
  // };

  render() {
    return (
      <div
        className={styles.backdrop}
        ref={this.backdropRef}
        onClick={this.handleBackdropClick}
        role="presentation"
      >
        <div className={styles.modal}>
          <AddTransactionForm />
        </div>
      </div>
    );
  }
}
