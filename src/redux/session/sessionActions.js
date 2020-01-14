import types from '../types';

// Login
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

// Registration
export const registrationRequest = () => ({
  type: types.REGISTER_REQUEST,
});

export const registrationSuccess = response => ({
  type: types.REGISTER_SUCCESS,
  payload: { response },
});

export const registrationError = error => ({
  type: types.REGISTER_ERROR,
  payload: { error },
});
