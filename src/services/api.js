import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';
axios.defaults.headers.patch['Content-Type'] = 'application/json';

axios.defaults.baseURL = 'http://localhost:3001/api';

export const setToken = token => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const w = () => null;

export const fetchCurrency = () =>
  fetch(
    'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5',
  ).then(res => res.json());
