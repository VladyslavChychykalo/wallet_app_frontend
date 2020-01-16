import types from '../types';

export const finaceDataFetchStart = () => ({
  type: types.FINANCE_DATA_FETCH_START,
});
export const finaceDataFetchFinish = response => ({
  type: types.FINANCE_DATA_FETCH_FINISH,
  payload: { response },
});
export const finaceDataFetchError = error => ({
  type: types.FINANCE_DATA_ERROR,
  payload: { error },
});

export const finaceTotalBalanceFetchStart = () => ({
  type: types.FINANCE_TOTAL_BALANCE_FETCH_START,
});
export const finaceTotalBalanceFinish = response => ({
  type: types.FINANCE_TOTAL_BALANCE_FETCH_FINISH,
  payload: { response },
});
export const finaceTotalBalanceFetchError = error => ({
  type: types.FINANCE_TOTAL_BALANCE_ERROR,
  payload: { error },
});

export const finaceTotalTypeBalanceFetchStart = () => ({
  type: types.FINANCE_TYPE_TOTAL_BALANCE_FETCH_START,
});
export const finaceTypeTotalBalanceFinish = response => ({
  type: types.FINANCE_FETCH_TYPE_TOTAL_BALANCE_FINISH,
  payload: { response },
});
export const finaceTypeTotalBalanceFetchError = error => ({
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
