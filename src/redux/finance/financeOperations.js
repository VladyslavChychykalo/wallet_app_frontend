import axios from 'axios';
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
import { closeModalAddTransaction } from '../global/globalActions';
// import apiURL from '../../services/api'

export const getFinaceDataFetch = () => dispatch => {
  dispatch(financeDataFetchStart());
  axios
    .get('https://project1.goit.co.ua/api/transactions/<user_id>')
    .then(response => {
      dispatch(financeDataFetchFinish(response.data));
    })
    .catch(erorr => {
      dispatch(financeDataFetchError(erorr));
    });
};

export const getFinaceTotalBalanceFetch = () => dispatch => {
  dispatch(financeTotalBalanceFetchStart());
  axios
    .get('https://project1.goit.co.ua/api/user_balance/<user_id>')
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
  axios
    .post('apiUrl', submittedData)
    .then(data => {
      dispatch(financeAddTransactionFinish(data));
      dispatch(closeModalAddTransaction());
    })
    .catch(error => {
      dispatch(financeAddTransactionError(error));
    });
};
