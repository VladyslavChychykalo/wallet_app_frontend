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
} from './sessionActions';
import { getToken } from './sessionSelectors';
// import { API } from '../../services/api';

axios.defaults.baseURL = 'https://project1.goit.co.ua/api';

export const login = credentials => dispatch => {
  dispatch(loginRequest());

  axios
    .post('/auth/sign-in', credentials)
    .then(response => {
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
      Auth: `Bearer ${token}`,
    },
  };

  axios
    .get('/api/auth/current', options)
    .then(response => {
      dispatch(refreshSuccess(response.data));
    })
    .catch(error => {
      dispatch(refreshError(error));
    });
};
// ===================================================================================================

// Delete these stubs after server will exist

// export const login = () => {};
// export const registration = () => {};
