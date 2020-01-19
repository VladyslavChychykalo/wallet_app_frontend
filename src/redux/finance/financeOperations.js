/* eslint-disable prefer-const */
import axios from 'axios';
import { closeModalAddTransaction } from '../global/globalActions';

import {
  financeDataFetchStart,
  financeDataFetchFinish,
  financeDataFetchError,
  financeTotalBalanceFetchStart,
  financeTotalBalanceFinish,
  financeTotalBalanceFetchError,
  financeTotalTypeBalanceFetchStart,
  // finaceTypeTotalBalanceFinish,
  // finaceTypeTotalBalanceFetchError,
  financeAddTransactionStart,
  financeAddTransactionFinish,
  financeAddTransactionError,
} from './financeActions';

axios.baseURL = 'https://project1.goit.co.ua/api/';

export const getFinanceDataFetch = userId => dispatch => {
  dispatch(financeDataFetchStart());
  axios
    .get(`transactions/${userId}`)
    .then(data => dispatch(financeDataFetchFinish(data)))
    .catch(error => financeDataFetchError(error));
};

export const getFinanceTotalBalanceFetch = id => dispatch => {
  dispatch(financeTotalBalanceFetchStart());
  axios
    .get(`user_balance/${id}`)
    .then(response => {
      dispatch(financeTotalBalanceFinish(response.totalBalance));
    })
    .catch(erorr => {
      dispatch(financeTotalBalanceFetchError(erorr));
    });
};

export const getFinanceTotalTypeBalanceFetch = () => dispatch => {
  dispatch(financeTotalTypeBalanceFetchStart());
};

export const addTransaction = submittedData => dispatch => {
  dispatch(financeAddTransactionStart());

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
