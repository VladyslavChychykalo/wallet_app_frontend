import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as Trash } from '../../images/trash.svg';
import styles from './HomeTab.module.css';

function mapStateToProps(/* state */) {
  return {};
  // return { transactions: state.finance.data };
}

const testHomeTab = [
  {
    type: 'income',
    date: 1578231058734,
    id: 'a1',
    amount: 100,
    category: 'Varia',
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
    category: 'Regular income',
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
    category: 'Car',
    comment: 'test comment',
    balanceAfter: 5000,
    typebalanceAfter: '+',
    updatedAt: '2020-11-25T14:14:14.100Z',
    createdAt: '2020-11-25T14:14:14.100Z',
  },
  {
    type: 'cost',
    date: 1578231058734,
    id: 'a4',
    amount: 1200.12,
    category: 'Products',
    comment: 'test comment',
    balanceAfter: 5000,
    typebalanceAfter: '+',
    updatedAt: '2020-11-25T14:14:14.100Z',
    createdAt: '2020-11-25T14:14:14.100Z',
  },
  {
    type: 'income',
    date: 1578231058734,
    id: 'a5',
    amount: 1200.12,
    category: 'Irregular income',
    comment: 'test comment',
    balanceAfter: 5000,
    typebalanceAfter: '+',
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

class HomeTab extends React.Component {
  state = {
    transactions: testHomeTab,
  };

  componentDidMount() {
    // clg
  }

  onDelete(t) {
    const { transactions } = this.state;
    transactions.splice(transactions.indexOf(t), 1);
    this.setState({ transactions });
  }

  render() {
    // let { transactions } = this.props;

    const { transactions } = this.state;

    return (
      <div className={styles.transactionHistory}>
        <div>
          <div className={styles.transactionHead}>
            <div>Date</div>
            <div>Type</div>
            <div>Category</div>
            <div>Commentary</div>
            <div>Sum</div>
            <div>Balance</div>
            <div>Delete</div>
          </div>
          {transactions.map(t => (
            <div key={t.id} className={styles.transaction}>
              <div className={styles.pair}>
                <div className={styles.key}>Date</div>
                <div className={styles.val}>{timestampToDate(t.date)}</div>
              </div>
              <div className={styles.pair}>
                <div className={styles.key}>Type</div>
                <div className={styles.val}>
                  {t.type === 'income' ? '+' : '-'}
                </div>
              </div>
              <div className={styles.pair}>
                <div className={styles.key}>Category</div>
                <div className={styles.val}>{t.category}</div>
              </div>
              <div className={styles.pair}>
                <div className={styles.key}>Commentary</div>
                <div className={styles.val}>{t.comment}</div>
              </div>
              <div className={styles.pair}>
                <div className={styles.key}>Sum</div>
                <div
                  className={`${styles.val} ${
                    t.type === 'cost' ? styles.hilite : ''
                  }`}
                >
                  {numFormat(t.amount)}
                </div>
              </div>
              <div className={styles.pair}>
                <div className={styles.key}>Balance</div>
                <div className={styles.val}>{numFormat(t.balanceAfter)}</div>
              </div>
              <div className={styles.pair}>
                <div className={styles.key}>Delete</div>
                <div className={styles.val}>
                  <Trash
                    className={styles.deleteBtn}
                    onClick={() => this.onDelete(t)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(HomeTab);
