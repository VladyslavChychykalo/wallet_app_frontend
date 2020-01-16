import axios from 'axios';
import {
  loginRequest,
  loginSuccess,
  loginError,
  registrationRequest,
  registrationSuccess,
  registrationError,
  refreshRequest,
  refreshSuccess,
  refreshError,
  logOutSuccess,
} from './sessionActions';
import { getToken } from './sessionSelectors';
// import { API } from '../../services/api';

axios.defaults.baseURL = 'https://project1.goit.co.ua/api';

const setAuthToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthToken = () => {
  axios.defaults.headers.common.Authorization = null;
};

export const login = credentials => dispatch => {
  dispatch(loginRequest());

  axios
    .post('/auth/sign-in', credentials)
    .then(response => {
      setAuthToken(response.data.token);
      dispatch(loginSuccess(response.data));
    })
    .catch(error => {
      dispatch(loginError(error));
    });
};

export const registration = credentials => dispatch => {
  dispatch(registrationRequest());

  axios
    .post('/auth/sign-up', credentials)
    .then(response => {
      setAuthToken(response.data.token);
      dispatch(registrationSuccess(response.data));
    })
    .catch(error => {
      dispatch(registrationError(error));
    });
};

export const refresh = () => (dispatch, getState) => {
  const token = getToken(getState());

  if (!token) {
    return;
  }

  dispatch(refreshRequest());

  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  axios
    .get('/users/current', options)
    .then(response => {
      dispatch(refreshSuccess(response.data));
    })
    .catch(error => {
      dispatch(refreshError(error));
    });
};

export const logOut = () => dispatch => {
  clearAuthToken();

  dispatch(logOutSuccess());
};
