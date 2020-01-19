import types from '../types';

// Refresh

export const refreshRequest = () => ({
  type: types.REFRESH_CURRENT_REQUEST,
});

export const refreshSuccess = response => ({
  type: types.REFRESH_CURRENT_SUCCESS,
  payload: { response },
});

export const refreshError = error => ({
  type: types.REFRESH_CURRENT_ERROR,
  payload: { error },
});

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

// Logout
export const logOutSuccess = () => ({
  type: types.LOGOUT,
});

// set token in redux store
export const setTokenInStore = token => ({
  type: types.SET_TOKEN_IN_STORE,
  payload: {
    token,
  },
});
