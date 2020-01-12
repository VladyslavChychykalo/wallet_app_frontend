import { combineReducers } from 'redux';
import types from '../types';

const user = (state = null, { type, payload }) => {
  switch (type) {
    case types.LOGIN_SUCCESS:
      return payload.response.user;
    default:
      return state;
  }
};

const token = (state = null, { type, payload }) => {
  switch (type) {
    case types.LOGIN_SUCCESS:
      return payload.response.token;
    default:
      return state;
  }
};

const error = (state = null, { type, payload }) => {
  switch (type) {
    case types.LOGIN_ERROR:
      return payload.error;
    default:
      return state;
  }
};

const isAuth = (state = false, { type }) => {
  switch (type) {
    case types.LOGIN_SUCCESS:
      return true;

    default:
      return state;
  }
};

export default combineReducers({
  user,
  token,
  error,
  isAuth,
});
