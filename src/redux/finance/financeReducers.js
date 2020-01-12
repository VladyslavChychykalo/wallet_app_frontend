import { combineReducers } from 'redux';
import types from '../types';

const data = (state = null, { type, payload }) => {
  switch (type) {
    case types.FETCH_TRANSACTIONS_SUCCESS:
      return payload.response.data;
    default:
      return state;
  }
};

const error = (state = null, { type, payload }) => {
  switch (type) {
    case types.FETCH_TRANSACTIONS_ERORR:
      return payload.error;
    default:
      return state;
  }
};

export default combineReducers({
  data,
  error,
});
