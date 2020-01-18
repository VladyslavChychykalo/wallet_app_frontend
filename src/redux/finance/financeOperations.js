import axios from 'axios';
import {
  finaceDataFetchStart,
  finaceDataFetchFinish,
  finaceDataFetchError,
  finaceTotalBalanceFetchStart,
  finaceTotalBalanceFinish,
  finaceTotalBalanceFetchError,
  finaceTotalTypeBalanceFetchStart,
  // finaceTypeTotalBalanceFinish,
  // finaceTypeTotalBalanceFetchError,
  financeAddTransactionStart,
  financeAddTransactionFinish,
  financeAddTransactionError,
} from './financeActions';
import { closeModalAddTransaction } from '../global/globalActions';
// import apiURL from '../../services/api'

export const getFinaceDataFetch = () => dispatch => {
  dispatch(finaceDataFetchStart());
  axios
    .get('https://project1.goit.co.ua/api/transactions/<user_id>')
    .then(response => {
      dispatch(finaceDataFetchFinish(response.data));
    })
    .catch(erorr => {
      dispatch(finaceDataFetchError(erorr));
    });
};

export const getFinaceTotalBalanceFetch = () => dispatch => {
  dispatch(finaceTotalBalanceFetchStart());
  axios
    .get('https://project1.goit.co.ua/api/user_balance/<user_id>')
    .then(response => {
      dispatch(finaceTotalBalanceFinish(response.totalBalance));
    })
    .catch(erorr => {
      dispatch(finaceTotalBalanceFetchError(erorr));
    });
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
