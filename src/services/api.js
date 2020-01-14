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

export const fetchCurrency = () =>
  axios.get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');
