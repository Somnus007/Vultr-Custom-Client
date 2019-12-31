import { all, takeLatest, put } from 'redux-saga/effects';
import { CommonType, PersistType } from '../../constants/ActionTypes';
import locales from '../../locales';

export function* changeLocale(action) {
  const { lang } = action;
  yield put({
    type: PersistType.SET_PERSIST_STATE,
    payload: { lang, locale: locales[lang] || locales['en-US'] },
  });
}

export default function* commonSaga() {
  yield all([takeLatest(CommonType.CHANGE_LOCALE, changeLocale)]);
}
