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
      return Date.parse(a.transactionDate) - Date.parse(b.transactionDate);
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
            <table key={trans._id}>
              <tbody>
                <tr>
                  <th>Date</th>
                  <td>{timestampToDate(trans.transactionDate)}</td>
                </tr>
                <tr>
                  <th>Type</th>
                  <td>{trans.type === 'income' ? '+' : '-'}</td>
                </tr>
                <tr>
                  <th>Category</th>
                  <td>{trans.category}</td>
                </tr>
                <tr>
                  <th>Comment</th>
                  <td>{trans.comment}</td>
                </tr>
                <tr>
                  <th>Sum</th>
                  <td className={trans.type === 'expense' ? styles.hilite : ''}>
                    {trans.amount}
                  </td>
                </tr>
                <tr>
                  <th>Balance</th>
                  <td>{trans.balanceAfter}</td>
                </tr>
                <tr>
                  <th>Delete</th>
                  <td>
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
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Type</th>
                <th>Category</th>
                <th>Comment</th>
                <th>Sum</th>
                <th>Balance</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map(trans => (
                <tr key={trans._id}>
                  <td>{timestampToDate(trans.transactionDate)}</td>
                  <td>{trans.type === 'income' ? '+' : '-'}</td>
                  <td>{trans.category}</td>
                  <td>{trans.comment}</td>
                  <td className={trans.type === 'expense' ? styles.hilite : ''}>
                    {trans.amount}
                  </td>
                  <td>{trans.balanceAfter}</td>
                  <td>
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
