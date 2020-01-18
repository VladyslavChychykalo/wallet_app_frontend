import axios from 'axios';
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
import { getUserId } from './financeSelectors';

axios.baseURL = 'https://project1.goit.co.ua/api';

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

export const getFinaceDataFetch = () => dispatch => {
  dispatch(finaceDataFetchStart());
};

export const getFinaceTotalBalanceFetch = () => dispatch => {
  dispatch(finaceTotalBalanceFetchStart());
};

export const getFinaceTotalTypeBalanceFetch = () => dispatch => {
  dispatch(finaceTotalTypeBalanceFetchStart());
};

export const addTransaction = submittedData => dispatch => {
  dispatch(financeAddTransactionStart());
  const {
    typeOfTransaction,
    timeOfTransaction,
    value,
    category,
    comment,
  } = submittedData;
  const userId = getUserId();
  const reqData = {
    userId,
    type: typeOfTransaction,
    transactionDate: timeOfTransaction,
    amount: value,
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
