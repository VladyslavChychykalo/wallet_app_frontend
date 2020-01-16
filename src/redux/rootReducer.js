import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import sessionReducer from './session/sessionReducer';
import globalReducers from './global/globalReducers';
// import financeReducers from './finance/financeReducers';

const sessionPersistConfig = {
  key: 'session',
  storage,
  whitelist: ['token'],
};

const rootReducer = combineReducers({
  session: persistReducer(sessionPersistConfig, sessionReducer),
  global: globalReducers,
  // financeReducers,
});

export default rootReducer;
