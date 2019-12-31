import { combineReducers } from 'redux';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import { connectRouter } from 'connected-react-router';
import account from './accountReducer';
import home from './homeReducer';
import persist from './persistReducer';
import common from './commonReducer';

export default history =>
  combineReducers({
    // account: persistReducer(
    //   {
    //     key: 'account',
    //     storage,
    //     whitelist: ['info'],
    //   },
    //   account
    // ),
    router: connectRouter(history),
    persist,
    account,
    home,
    common,
  });
