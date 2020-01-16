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
  // finaceTypeTotalBalanceFetchError
} from './financeActions';

export const getFinaceDataFetch = () => dispatch => {
  dispatch(finaceDataFetchStart());
};

export const getFinaceTotalBalanceFetch = () => dispatch => {
  dispatch(finaceTotalBalanceFetchStart());
};

export const getFinaceTotalTypeBalanceFetch = () => dispatch => {
  dispatch(finaceTotalTypeBalanceFetchStart());
};
