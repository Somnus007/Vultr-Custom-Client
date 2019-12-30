import Immutable from 'seamless-immutable';
import { PersistType } from '../../constants/ActionTypes';

const initialState = Immutable({
  accountInfo: null,
  auth: false,
});

export default function persistReducer(state = initialState, action) {
  switch (action.type) {
    case PersistType.SET_PERSIST_STATE:
      return state.merge({ ...action.payload });
    default:
      return state;
  }
}
