import React from 'react';
import { connect } from 'react-redux';
import styles from './TransactionHistory.module.css';

function mapStateToProps(/* state */) {
  return {};
  // return { transactions: state.finance.data };
}

const testTransactions = [
  {
    type: 'income',
    date: 1578231058734,
    id: 'a1',
    amount: 100,
    category: 'car',
    comment: 'test comment',
    balanceAfter: 5000,
    typebalanceAfter: '-',
    updatedAt: '2020-11-25T14:14:14.100Z',
    createdAt: '2020-11-25T14:14:14.100Z',
  },
  {
    type: 'income',
    date: 1578231058734,
    id: 'a2',
    amount: 110,
    category: 'regular',
    comment: 'test comment',
    balanceAfter: 5000,
    typebalanceAfter: '-',
    updatedAt: '2020-11-25T14:14:14.100Z',
    createdAt: '2020-11-25T14:14:14.100Z',
  },
  {
    type: 'income',
    date: 1578231058734,
    id: 'a3',
    amount: 1200.12,
    category: 'car',
    comment: 'test comment',
    balanceAfter: 5000,
    typebalanceAfter: '-',
    updatedAt: '2020-11-25T14:14:14.100Z',
    createdAt: '2020-11-25T14:14:14.100Z',
  },
];

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

class TransactionHistory extends React.Component {
  componentDidMount() {
    // clg
  }

  render() {
    // let { transactions } = this.props;

    const transactions = testTransactions;

    return (
      <div className={styles.transactionHistory}>
        <div>
          <div className={styles.transactionHead}>
            <div>Дата</div>
            <div>Тип</div>
            <div>Категория</div>
            <div>Комментарий</div>
            <div>Сумма</div>
            <div>Баланс</div>
            {/* <div>Удалить</div> */}
          </div>
          {transactions.map(t => (
            <div key={t.id} className={styles.transaction}>
              <div className={styles.pair}>
                <div className={styles.key}>Дата</div>
                <div className={styles.val}>{timestampToDate(t.date)}</div>
              </div>
              <div className={styles.pair}>
                <div className={styles.key}>Тип</div>
                <div className={styles.val}>
                  {t.type === 'income' ? '+' : '-'}
                </div>
              </div>
              <div className={styles.pair}>
                <div className={styles.key}>Категория</div>
                <div className={styles.val}>{t.category}</div>
              </div>
              <div className={styles.pair}>
                <div className={styles.key}>Комментарий</div>
                <div className={styles.val}>{t.comment}</div>
              </div>
              <div className={styles.pair}>
                <div className={styles.key}>Сумма</div>
                <div className={styles.val}>{numFormat(t.amount)}</div>
              </div>
              <div className={styles.pair}>
                <div className={styles.key}>Баланс</div>
                <div className={styles.val}>{numFormat(t.balanceAfter)}</div>
              </div>
              {/*
              <div className={styles.pair}>
                <div className={styles.key}>Удалить</div>
                <div className={styles.val}>
                  <button>X</button>
                </div>
              </div>
          */}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(TransactionHistory);
