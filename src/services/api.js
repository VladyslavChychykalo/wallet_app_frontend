import axios from 'axios';
import types from '../redux/types';

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';
axios.defaults.headers.patch['Content-Type'] = 'application/json';

// axios.defaults.baseURL = 'https://...';

export const setToken = token => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const w = () => null;

export const fetchFinance = () => {
  return dispatch => {
    dispatch({ type: types.FINANCE_REQUEST });

    axios
      .get('api/finance')
      .then(res => dispatch({ type: types.FINANCE_SUCCESS, payload: res.data }))
      .catch(err => dispatch({ type: types.FINANCE_ERROR, payload: err }));
  };
};
