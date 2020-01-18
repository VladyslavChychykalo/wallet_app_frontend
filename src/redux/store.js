/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import rootReducer from './rootReducer';

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [ReduxThunk];
const enhancer = composeWithDevTools(applyMiddleware(...middleware));

export const store = createStore(rootReducer, enhancer);

export const persistor = persistStore(store);

// export default store;
