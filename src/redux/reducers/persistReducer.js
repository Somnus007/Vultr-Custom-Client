import Immutable from 'seamless-immutable';
import { PersistType } from '../../constants/ActionTypes';
import locales from '../../locales';

const defaultLang = 'en-US';

const initialState = Immutable({
  accountInfo: null,
  auth: false,
  lang: defaultLang,
  locale: locales[defaultLang],
});

export default function persistReducer(state = initialState, action) {
  switch (action.type) {
    case PersistType.SET_PERSIST_STATE:
      return state.merge({ ...action.payload });
    default:
      return state;
  }
}
