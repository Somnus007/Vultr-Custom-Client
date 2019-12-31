import { all, takeLatest, put } from 'redux-saga/effects';
import { AccountType, PersistType } from '../../constants/ActionTypes';

export function* login(action) {
  yield put({
    type: PersistType.SET_PERSIST_STATE,
    payload: { accountInfo: action.payload.info, authorized: true },
  });
}

export function* logout() {
  yield put({
    type: PersistType.SET_PERSIST_STATE,
    payload: { accountInfo: null, authorized: false },
  });
}

export default function* accountSaga() {
  yield all([
    // takeEvery(actions.REGISTER, REGISTER),
    takeLatest(AccountType.LOGIN, login),
    takeLatest(AccountType.LOGOUT, logout),
  ]);
}
