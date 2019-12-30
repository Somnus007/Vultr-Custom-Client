import Immutable from 'seamless-immutable';
import { AccountType } from '../../constants/ActionTypes';

const initialState = Immutable({
  accountList: null,
});

export default function accountReducer(state = initialState, action) {
  switch (action.type) {
    case AccountType.SET_ACCOUNT_STATE:
      return state.merge({ ...action.payload });
    default:
      return state;
  }
}
