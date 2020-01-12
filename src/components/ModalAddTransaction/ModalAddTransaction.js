import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import styles from './ModalAddTransaction.module.css';
import AddTransactionForm from './AddTransactionForm/AddTransactionForm';

export default class Modal extends Component {
  static propTypes = {
    closeModalAddTransaction: PropTypes.func.isRequired,
  };

  backdropRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.code !== 'Escape') {
      return;
    }

    this.props.closeModalAddTransaction();
  };

  handleBackdropClick = e => {
    if (this.backdropRef.current && e.target !== this.backdropRef.current) {
      return;
    }

    this.props.closeModalAddTransaction();
  };

  render() {
    const { closeModalAddTransaction } = this.props;
    return (
      <div
        className={styles.backdrop}
        ref={this.backdropRef}
        onClick={this.handleBackdropClick}
        role="presentation"
      >
        <div className={styles.modal}>
          <AddTransactionForm
            closeModalAddTransaction={closeModalAddTransaction}
          />
        </div>
      </div>
    );
  }
}
