/* eslint-disable prefer-const */
import axios from 'axios';
import moment from 'moment';
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
  financeDeleteTransactionStart,
  financeDeleteTransactionFinish,
  financeDeleteTransactionError,
} from './financeActions';

axios.baseURL = 'https://cryptic-citadel-50371.herokuapp.com/api';

export const getFinanceDataFetch = userId => dispatch => {
  dispatch(financeDataFetchStart());
  axios
    .get(`transactions/${userId}`)
    .then(data => {
      dispatch(financeDataFetchFinish(data));
    })
    .catch(error => financeDataFetchError(error));
};

export const getFinanceTotalBalanceFetch = userId => dispatch => {
  dispatch(financeTotalBalanceFetchStart());
  axios
    .get(`user_balance/${userId}`)
    .then(response => {
      dispatch(financeTotalBalanceFinish(response.totalBalance));
    })
    .catch(err => {
      dispatch(financeTotalBalanceFetchError(err));
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

  const transactionDate = moment(timeOfTransaction, 'DD/MM/YYYY').toISOString();

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

export const deleteTransaction = transactionId => dispatch => {
  dispatch(financeDeleteTransactionStart());
  axios
    .delete(`/transactions/${transactionId}`)
    .then(() => {
      dispatch(financeDeleteTransactionFinish(transactionId));
    })
    .catch(error => {
      dispatch(financeDeleteTransactionError(error));
    });
};
