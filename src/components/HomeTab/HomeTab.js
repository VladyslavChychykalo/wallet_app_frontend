/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as Trash } from '../../images/trash.svg';
import styles from './HomeTab.module.css';
import { getData } from '../../redux/finance/financeSelectors';

function timestampToDate(timestamp) {
  const date = new Date(timestamp);
  const str = date.toISOString();
  const y = str.slice(2, 4);
  const m = str.slice(5, 7);
  const d = str.slice(8, 10);
  return `${d}.${m}.${y}`;
}

function numFormat(num) {
  return num.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

class HomeTab extends React.Component {
  // state = {
  //   transactions: testHomeTab,
  // };

  componentDidMount() {
    // clg
  }

  /* onDelete(t) {
    const { transactions } = this.state;
    transactions.splice(transactions.indexOf(t), 1);
    this.setState({ transactions });
  } */

  render() {
    const { transactions } = this.props;

    // const { transactions } = this.state;

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
          {transactions.map(t => (
            <div key={t.id} className={styles.transaction}>
              <div className={styles.pair}>
                <div className={styles.key}>Date</div>
                <div className={`${styles.val} ${styles.textCenter}`}>
                  {timestampToDate(t.date)}
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
                    t.type === 'cost' ? styles.hilite : ''
                  }`}
                >
                  {numFormat(t.amount)}
                </div>
              </div>
              <div className={styles.pair}>
                <div className={styles.key}>Balance</div>
                <div className={`${styles.val} ${styles.textCenter}`}>
                  {numFormat(t.balanceAfter)}
                </div>
              </div>
              <div className={styles.pair}>
                <div className={styles.key}>Delete</div>
                <div className={`${styles.val} ${styles.textCenter}`}>
                  <Trash className={styles.deleteBtn} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { transactions: getData(state) };
}

export default connect(mapStateToProps)(HomeTab);
