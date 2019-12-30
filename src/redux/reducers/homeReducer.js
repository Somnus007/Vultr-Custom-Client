import Immutable from 'seamless-immutable';
import { HomeType } from '../../constants/ActionTypes';

const initialState = Immutable({
  movieList: null,
});

export default function homeReducer(state = initialState, action) {
  switch (action.type) {
    case HomeType.SET_HOME_STATE:
      return state.merge({ ...action.payload });
    default:
      return state;
  }
}
