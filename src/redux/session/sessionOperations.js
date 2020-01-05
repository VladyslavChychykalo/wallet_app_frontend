import { loginRequest, loginSuccess, loginError } from './sessionActions';
import API from '../../services/api';

export const login = credentials => dispatch => {
  dispatch(loginRequest());

  API.login(credentials)
    .then(response => {
      console.log(response);
      dispatch(loginSuccess(response));
    })
    .catch(error => dispatch(loginError(error)));
};

export const registration = () => {};
