import Immutable from 'seamless-immutable';
import { CommonType } from '../../constants/ActionTypes';

const initialState = Immutable({
  httpErrorStatus: 0,
});

export default function commonReducer(state = initialState, action) {
  switch (action.type) {
    case CommonType.SET_COMMON_STATE:
      return state.merge({ ...action.payload });
    default:
      return state;
  }
}
