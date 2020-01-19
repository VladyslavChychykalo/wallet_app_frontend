/* eslint-disable react/prop-types */
import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ReactComponent as Trash } from '../../images/trash.svg';
import styles from './HomeTab.module.css';
import { deleteTransaction } from '../../redux/finance/financeOperations';

function timestampToDate(timestamp) {
  return moment(timestamp).format('DD/MM/YYYY');
}

class HomeTab extends React.Component {
  static propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  // state = {
  //   transactions: [],
  // };

  onDelete({ _id: id }) {
    const { deleteTransaction: deleteTr } = this.props;
    deleteTr(id);
  }

  render() {
    const { transactions } = this.props;

    return (
      <div className={styles.transactionHistory}>
        <div>
          <div className={styles.transactionHead}>
            <div className={styles.textCenter}>Date</div>
            <div className={styles.textCenter}>Type</div>
            <div>Category</div>
            <div>Comment</div>
            <div className={styles.textCenter}>Sum</div>
            <div>Balance</div>
            <div className={styles.textCenter}>Delete</div>
          </div>
          {!Array.isArray(transactions) || transactions.length === 0 ? (
            // {transactions.length === 0 ? (
            <div className={styles.addTransaction}>Please add transaction</div>
          ) : (
            transactions.map(t => (
              // eslint-disable-next-line no-underscore-dangle
              <div key={t._id} className={styles.transaction}>
                <div className={styles.pair}>
                  <div className={styles.key}>Date</div>
                  <div className={`${styles.val} ${styles.textCenter}`}>
                    {timestampToDate(t.transactionDate)}
                  </div>
                </div>
                <div className={styles.pair}>
                  <div className={styles.key}>Type</div>
                  <div className={`${styles.val} ${styles.textCenter}`}>
                    {t.type === 'income' ? '+' : '-'}
                  </div>
                </div>
                <div className={styles.pair}>
                  <div className={styles.key}>Category</div>
                  <div className={styles.val}>{t.category}</div>
                </div>
                <div className={styles.pair}>
                  <div className={styles.key}>Comment</div>
                  <div className={styles.val}>{t.comment}</div>
                </div>
                <div className={styles.pair}>
                  <div className={styles.key}>Sum</div>
                  <div
                    className={`${styles.val} ${styles.textCenter} ${
                      t.type === 'expense' ? styles.hilite : ''
                    }`}
                  >
                    {t.amount}
                  </div>
                </div>
                <div className={styles.pair}>
                  <div className={styles.key}>Balance</div>
                  <div className={`${styles.val} ${styles.textCenter}`}>
                    {t.balanceAfter}
                  </div>
                </div>
                <div className={styles.pair}>
                  <div className={styles.key}>Delete</div>
                  <div className={`${styles.val} ${styles.textCenter}`}>
                    <Trash
                      className={styles.deleteBtn}
                      onClick={() => this.onDelete(t)}
                    />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  transactions: state.finance.data,
});

const mapDispatchToProps = dispatch => ({
  deleteTransaction: transactionId =>
    dispatch(deleteTransaction(transactionId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeTab);
