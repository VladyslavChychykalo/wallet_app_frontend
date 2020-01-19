import { combineReducers } from 'redux';
import types from '../types';

const isModalAddTransactionOpen = (state = false, { type }) => {
  switch (type) {
    case types.OPEN_MODALADDTRANSACTION:
      return true;
    case types.CLOSE_MODALADDTRANSACTION:
      return false;
    default:
      return state;
  }
};

const isModalLogoutOpen = (state = false, { type }) => {
  switch (type) {
    case types.OPEN_MODALLGOUTTRANSACTION:
      return true;
    case types.CLOSE_MODALGOUTTRANSACTION:
      return false;
    default:
      return state;
  }
};

const loadingReducer = (state = false, { type }) => {
  switch (type) {
    case types.GLOBAL_FETCH_START:
    case types.LOGIN_REQUEST:
    case types.REGISTER_REQUEST:
    case types.REFRESH_CURRENT_REQUEST:
    case types.FINANCE_ADD_TRANSACTION_START:
    case types.FINANCE_DELETE_TRANSACTION_START:
      return true;
    case types.LOGIN_SUCCESS:
    case types.LOGIN_ERROR:
    case types.REGISTER_SUCCESS:
    case types.REGISTER_ERROR:
    case types.REFRESH_CURRENT_SUCCESS:
    case types.REFRESH_CURRENT_ERROR:
    case types.GLOBAL_FETCH_FINISH:
    case types.GLOBAL_FETCH_ERROR:
    case types.FINANCE_ADD_TRANSACTION_FINISH:
    case types.FINANCE_ADD_TRANSACTION_ERROR:
    case types.FINANCE_DELETE_TRANSACTION_ERROR:
    case types.FINANCE_DELETE_TRANSACTION_FINISH:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  isModalAddTransactionOpen,
  isModalLogoutOpen,
  loading: loadingReducer,
});
