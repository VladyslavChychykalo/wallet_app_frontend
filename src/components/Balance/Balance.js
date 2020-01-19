import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getBalance } from '../../redux/finance/financeSelectors';

import styles from './Balance.module.css';

const Balance = ({ balance }) => {
  const windowWidth = document.documentElement.clientWidth;
  return (
    <>
      <h5 className={styles.title}>Balance {windowWidth >= 768 && ':'}</h5>{' '}
      <p className={styles.amount}>{balance} UAH</p>
    </>
  );
};
const mapStateToProps = state => ({
  balance: getBalance(state),
});

Balance.propTypes = {
  balance: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Balance);
