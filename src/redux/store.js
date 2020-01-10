/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import ReduxThunk from 'redux-thunk';
import rootReducer from './rootReducer';

// const initialStore = {
//   session: {
//     user: null,
//     token: null,
//     error: null,
//     isAuth: false,
//   },
//   finance: {
//     data: null,
//     totalBalance: null,
//     typeTotalBalance: null,
//   },
//   global: {
//     isModalAddTransactionOpen: false,
//     isModalLogoutOpen: false,
//     isLoading: false,
//   },
// };

const middleware = [ReduxThunk];
const enhancer = composeWithDevTools(applyMiddleware(...middleware));

const store = createStore(rootReducer, enhancer);

export default store;
