import { all } from 'redux-saga/effects';
import accountSaga from './accountSaga';

export default function* root() {
  yield all([accountSaga()]);
}
