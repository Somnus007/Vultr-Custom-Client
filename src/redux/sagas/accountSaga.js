import { all, takeLatest, put } from 'redux-saga/effects';
import { AccountType, PersistType } from '../../constants/ActionTypes';
import { AccountUrl } from '../../constants/Url';
import service from '../../services';

export function* login(action) {
  const { email, apiKey, callback } = action;
  let res = {};
  try {
    res = yield service.fetch(AccountUrl.AUTH_INFO, {
      method: 'get',
      headers: {
        'API-Key': apiKey,
      },
    });
  } catch (err) {
    console.log(err && err.response); //eslint-disable-line
  }
  if (res.email === email) {
    const authorizedDate = new Date().getTime();
    const accountInfo = {
      name: res.name,
      email,
      apiKey,
    };
    yield put({
      type: PersistType.SET_PERSIST_STATE,
      payload: { accountInfo, authorizedDate, authorized: true },
    });
    callback();
  }
}

export function* logout() {
  yield put({
    type: PersistType.SET_PERSIST_STATE,
    payload: { accountInfo: null, authorized: false, authorizedDate: 0 },
  });
}

export default function* accountSaga() {
  yield all([
    // takeEvery(actions.REGISTER, REGISTER),
    takeLatest(AccountType.LOGIN, login),
    takeLatest(AccountType.LOGOUT, logout),
  ]);
}
