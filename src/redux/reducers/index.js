import { combineReducers } from 'redux';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import account from './accountReducer';
import home from './homeReducer';
import persist from './persistReducer';

export default () =>
  combineReducers({
    // account: persistReducer(
    //   {
    //     key: 'account',
    //     storage,
    //     whitelist: ['info'],
    //   },
    //   account
    // ),
    persist,
    account,
    home,
  });
