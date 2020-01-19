/* eslint-disable */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import { ReactComponent as Trash } from '../../images/trash.svg';
import styles from './HomeTab.module.css';
import { deleteTransaction } from '../../redux/finance/financeOperations';

function timestampToDate(timestamp) {
  return moment(timestamp).format('DD/MM/YYYY');
}

const sortByDate = dates => {
  if (dates.length > 0) {
    dates.sort((a, b) => {
      return Date.parse(b.transactionDate) - Date.parse(a.transactionDate);
    });
  }
  return dates;
};

class HomeTab extends React.Component {
  static propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.object).isRequired,
    deleteTransaction: PropTypes.func.isRequired,
  };

  onDelete({ _id: id }) {
    const { deleteTransaction: deleteTr } = this.props;
    deleteTr(id);
  }

  render() {
    const { transactions } = this.props;
    const windowWidth = document.documentElement.clientWidth;
    return (
      <div className={styles.transactionHistory}>
        {windowWidth < 768 &&
          transactions.map(trans => (
            <table className={styles.table} key={trans._id}>
              <tbody>
                <tr className={styles.tr}>
                  <th className={styles.th}>Date</th>
                  <td className={styles.td}>
                    {timestampToDate(trans.transactionDate)}
                  </td>
                </tr>
                <tr className={styles.tr}>
                  <th className={styles.th}>Type</th>
                  <td className={styles.td}>
                    {trans.type === 'income' ? '+' : '-'}
                  </td>
                </tr>
                <tr className={styles.tr}>
                  <th className={styles.th}>Category</th>
                  <td className={styles.td}>{trans.category}</td>
                </tr>
                <tr className={styles.tr}>
                  <th className={styles.th}>Comment</th>
                  <td>{trans.comment}</td>
                </tr>
                <tr className={styles.tr}>
                  <th className={styles.th}>Sum</th>
                  <td
                    className={styles.td}
                    className={trans.type === 'expense' ? styles.hilite : ''}
                  >
                    {trans.amount}
                  </td>
                </tr>
                <tr className={styles.tr}>
                  <th className={styles.th}>Balance</th>
                  <td className={styles.td}>{trans.balanceAfter}</td>
                </tr>
                <tr className={styles.tr}>
                  <th className={styles.th}>Delete</th>
                  <td className={styles.td}>
                    <Trash
                      className={styles.deleteBtn}
                      onClick={() => this.onDelete(trans)}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          ))}
        {windowWidth >= 768 && (
          <table className={styles.table}>
            <thead>
              <tr className={styles.tr}>
                <th className={styles.th}>Date</th>
                <th className={styles.th}>Type</th>
                <th className={styles.th}>Category</th>
                <th className={styles.th}>Comment</th>
                <th className={styles.th}>Sum</th>
                <th className={styles.th}>Balance</th>
                <th className={styles.th}>Delete</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map(trans => (
                <tr className={styles.tr} key={trans._id}>
                  <td className={styles.td}>
                    {timestampToDate(trans.transactionDate)}
                  </td>
                  <td className={styles.td}>
                    {trans.type === 'income' ? '+' : '-'}
                  </td>
                  <td className={styles.td}>{trans.category}</td>
                  <td className={styles.td}>{trans.comment}</td>
                  <td
                    className={styles.td}
                    className={trans.type === 'expense' ? styles.hilite : ''}
                  >
                    {trans.amount}
                  </td>
                  <td className={styles.td}>{trans.balanceAfter}</td>
                  <td className={styles.td}>
                    <Trash
                      className={styles.deleteBtn}
                      onClick={() => this.onDelete(trans)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {transactions.length === 0 && (
          <div className={styles.addTransaction}>Please add transaction</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  transactions: sortByDate(state.finance.data),
});

const mapDispatchToProps = dispatch => ({
  deleteTransaction: transactionId =>
    dispatch(deleteTransaction(transactionId)),
});
export default connect(mapStateToProps, mapDispatchToProps)(HomeTab);
