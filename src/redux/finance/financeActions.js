import types from '../types';

// data

export const financeDataFetchStart = () => ({
  type: types.FINANCE_DATA_FETCH_START,
});
export const financeDataFetchFinish = response => ({
  type: types.FINANCE_DATA_FETCH_FINISH,
  payload: response,
});
export const financeDataFetchError = error => ({
  type: types.FINANCE_DATA_ERROR,
  payload: { error },
});
// balance
export const financeTotalBalanceFetchStart = () => ({
  type: types.FINANCE_TOTAL_BALANCE_FETCH_START,
});
export const financeTotalBalanceFinish = response => ({
  type: types.FINANCE_TOTAL_BALANCE_FETCH_FINISH,
  payload: { response },
});
export const financeTotalBalanceFetchError = error => ({
  type: types.FINANCE_TOTAL_BALANCE_ERROR,
  payload: { error },
});
// typeBalance
export const financeTotalTypeBalanceFetchStart = () => ({
  type: types.FINANCE_TYPE_TOTAL_BALANCE_FETCH_START,
});
export const financeTypeTotalBalanceFinish = response => ({
  type: types.FINANCE_FETCH_TYPE_TOTAL_BALANCE_FINISH,
  payload: { response },
});
export const financeTypeTotalBalanceFetchError = error => ({
  type: types.FINANCE_TYPE_TOTAL_BALANCE_ERROR,
  payload: { error },
});

// Add transaction actions

export const financeAddTransactionStart = () => ({
  type: types.FINANCE_ADD_TRANSACTION_START,
});
export const financeAddTransactionFinish = response => ({
  type: types.FINANCE_ADD_TRANSACTION_FINISH,
  payload: response,
});
export const financeAddTransactionError = error => ({
  type: types.FINANCE_ADD_TRANSACTION_ERROR,
  payload: error,
});
