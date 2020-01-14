import { combineReducers } from 'redux';
import types from '../types';

const data = (state = null, { type, payload }) => {
  switch (type) {
    case types.FINANCE_DATA_FETCH_FINISH:
      return payload.response.data;
    default:
      return state;
  }
};
const totalBalance = (state = null, { type, payload }) => {
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

