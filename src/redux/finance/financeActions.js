import types from '../types';

export const fetchTransactionsSuccess = data => ({
  type: types.FETCH_TRANSACTIONS_SUCCESS,
  payload: {
    data,
  },
});

export const fetchTransactionsErorr = erorr => ({
  type: types.FETCH_TRANSACTIONS_ERORR,
  payload: {
    erorr,
  },
});
