import { combineReducers } from 'redux';
import types from '../types';

const data = (state = [], { type, payload }) => {
  switch (type) {
    case types.FINANCE_DATA_FETCH_FINISH:
      return [...payload.data.transactionsList];
    case types.FINANCE_ADD_TRANSACTION_FINISH:
      return [...state, payload.data.transaction];
    case types.FINANCE_ADD_TRANSACTION_ERROR:
      return { ...payload.error };
    default:
      return state;
  }
};
const totalBalance = (state = 0, { type, payload }) => {
  switch (type) {
    case types.FINANCE_TOTAL_BALANCEFETCH_FINISH:
      return payload.response.totalBalance;
    default:
      return state;
  }
};

const typeTotalBalance = (state = null, { type, payload }) => {
  switch (type) {
    case types.FINANCE_TOTAL_BALANCEFETCH_FINISH:
      return payload.response.typeTotalBalance;
    default:
      return state;
  }
};

export default combineReducers({
  data,
  totalBalance,
  typeTotalBalance,
});
