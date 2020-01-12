import types from '../types';

export const loginRequest = () => ({
  type: types.LOGIN_REQUEST,
});

export const loginSuccess = response => ({
  type: types.LOGIN_SUCCESS,
  payload: { response },
});

export const loginError = error => ({
  type: types.LOGIN_ERROR,
  payload: { error },
});
