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
  finaceDataFetchStart,
  // finaceDataFetchFinish,
  // finaceDataFetchError,
  finaceTotalBalanceFetchStart,
  // finaceTotalBalanceFinish,
  // finaceTotalBalanceFetchError,
  finaceTotalTypeBalanceFetchStart,
  // finaceTypeTotalBalanceFinish,
  // finaceTypeTotalBalanceFetchError,
  financeAddTransactionStart,
  financeAddTransactionFinish,
  financeAddTransactionError,
} from './financeActions';
import { closeModalAddTransaction } from '../global/globalActions';

export const getFinaceDataFetch = () => dispatch => {
  dispatch(finaceDataFetchStart());
};

export const getFinaceTotalBalanceFetch = () => dispatch => {
  dispatch(finaceTotalBalanceFetchStart());
};

export const getFinaceTotalTypeBalanceFetch = () => dispatch => {
  dispatch(finaceTotalTypeBalanceFetchStart());
};

const apiUrl = 'http://localhost:3004/posts';
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
