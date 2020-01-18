/* eslint-disable prefer-const */
import axios from 'axios';
import { closeModalAddTransaction } from '../global/globalActions';
import {
  financeDataFetchStart,
  financeDataFetchFinish,
  financeDataFetchError,
  financeTotalBalanceFetchStart,
  // financeTotalBalanceFinish,
  // financeTotalBalanceFetchError,
  financeTotalTypeBalanceFetchStart,
  // financeTypeTotalBalanceFinish,
  // financeTypeTotalBalanceFetchError,
  financeAddTransactionStart,
  financeAddTransactionFinish,
  financeAddTransactionError,
} from './financeActions';
import { store } from '../store';

axios.baseURL = 'https://project1.goit.co.ua/api/transactions';

// import axios from 'axios';
// import {
// fetchTransactionsSuccess,
// fetchTransactionsErorr,
// } from './financeActions';
// import apiURL from '../../services/api'

// export const fetchTransactions = () => dispatch => {
// axios
// .get('apiURL')
// .then(response => {
// dispatch(fetchTransactionsSuccess(response.data));
// })
// .catch(erorr => {
// dispatch(fetchTransactionsErorr(erorr));
// });
// };

// delete later
// export const fetchTransactions = () => {};

export const getFinanceDataFetch = userId => dispatch => {
  dispatch(financeDataFetchStart());
  axios
    .get(userId)
    .then(data => dispatch(financeDataFetchFinish(data)))
    .catch(error => financeDataFetchError(error));
};

export const getFinanceTotalBalanceFetch = () => dispatch => {
  dispatch(financeTotalBalanceFetchStart());
};

export const getFinanceTotalTypeBalanceFetch = () => dispatch => {
  dispatch(financeTotalTypeBalanceFetchStart());
};

export const addTransaction = submittedData => dispatch => {
  dispatch(financeAddTransactionStart());
  const userId = store.getState().session.user.id;

  let {
    typeOfTransaction,
    timeOfTransaction,
    value,
    category,
    comment,
  } = submittedData;

  const transactionDate = new Date(
    timeOfTransaction.replace(/(\d+)\/(\d+)\/(\d+)/, '$3/$2/$1'),
  );
  if (typeOfTransaction === 'income') {
    category = 'Income';
    typeOfTransaction = 'Income';
  }
  if (typeOfTransaction === 'expense') typeOfTransaction = 'Expense';

  const reqData = {
    userId,
    type: typeOfTransaction,
    transactionDate,
    amount: +value,
    category,
    comment,
  };

  axios
    .post('/transactions', reqData)
    .then(data => {
      dispatch(financeAddTransactionFinish(data));
      dispatch(closeModalAddTransaction());
    })
    .catch(error => {
      dispatch(financeAddTransactionError(error));
    });
};
