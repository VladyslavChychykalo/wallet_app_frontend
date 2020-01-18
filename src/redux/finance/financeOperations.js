import axios from 'axios';
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
import { closeModalAddTransaction } from '../global/globalActions';

const apiUrl = 'https://project1.goit.co.ua/api/transactions/';

export const getFinanceDataFetch = id => dispatch => {
  dispatch(financeDataFetchStart());
  axios
    .get(apiUrl + id)
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
  axios
    .post(apiUrl, submittedData)
    .then(data => {
      dispatch(financeAddTransactionFinish(data));
      dispatch(closeModalAddTransaction());
    })
    .catch(error => {
      dispatch(financeAddTransactionError(error));
    });
};
