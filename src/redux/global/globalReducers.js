import { combineReducers } from 'redux';
import { Type } from './globalActions';

const isModalAddTransactionOpen = (state = false, { type }) => {
  switch (type) {
    case Type.OPEN_MODALADDTRANSACTION:
      return true;
    case Type.CLOSE_MODALADDTRANSACTION:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  isModalAddTransactionOpen,
});
