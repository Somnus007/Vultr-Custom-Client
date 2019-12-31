import { all } from 'redux-saga/effects';
import accountSaga from './accountSaga';
import commonSaga from './commonSaga';

export default function* root() {
  yield all([accountSaga(), commonSaga()]);
}
