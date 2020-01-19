/* eslint-disable react/prop-types */
import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ReactComponent as Trash } from '../../images/trash.svg';
import styles from './HomeTab.module.css';

function timestampToDate(timestamp) {
  return moment(timestamp).format('DD/MM/YYYY');
}

class HomeTab extends React.Component {
  static propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  state = {};

  // componentDidMount() {
  //   // console.log(this.props.transactions);
  // }

  /* onDelete(t) {
    const { transactions } = this.state;
    transactions.splice(transactions.indexOf(t), 1);
    this.setState({ transactions });
  } */

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
          {typeof transactions === 'object' && transactions.length === 0 ? (
            // {transactions.length === 0 ? (
            <div className={styles.addTransaction}>Please add transaction</div>
          ) : (
            transactions.map(t => (
              // eslint-disable-next-line no-underscore-dangle
              <div key={t._id} className={styles.transaction}>
                <div className={styles.pair}>
                  <div className={styles.key}>Date</div>
                  <div className={`${styles.val} ${styles.textCenter}`}>
                    {timestampToDate(t.transactonDate)}
                  </div>
                </div>
                <div className={styles.pair}>
                  <div className={styles.key}>Type</div>
                  <div className={`${styles.val} ${styles.textCenter}`}>
                    {t.type === 'Income' ? '+' : '-'}
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
                      t.type === 'Expense' ? styles.hilite : ''
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
                    <Trash className={styles.deleteBtn} />
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

export default connect(mapStateToProps)(HomeTab);
