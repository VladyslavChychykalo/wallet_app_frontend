// import axios from 'axios';

// axios.defaults.headers.post['Content-Type'] = 'application/json';
// axios.defaults.headers.get['Content-Type'] = 'application/json';
// axios.defaults.headers.put['Content-Type'] = 'application/json';
// axios.defaults.headers.patch['Content-Type'] = 'application/json';

// // axios.defaults.baseURL = 'https://...';

// export const setToken = token => ({
//   headers: {
//     Authorization: `Bearer ${token}`,
//   },
// });

// export const w = () => null;

export default {
  // eslint-disable-next-line no-unused-vars
  login(credentials) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          user: {},
          token: 'bla-bla',
        });
      });
    }, 300);
  },
};
