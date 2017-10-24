import * as ActionTypes from '../actions/ActionTypes';
import initialState from './initialState';

export default function swipeReducer (state = initialState.swipe, action) {
  switch (action.type) {
    case ActionTypes.SWIPED_LEFT:
      return {
        ...state,
        [action.title]: { right: false, left: true }
      };

    case ActionTypes.SWIPED_RIGHT:
      return {
        ...state,
        [action.title]: { right: true, left: false }
      };
    case ActionTypes.SWIPED_FINISH:
      return {
        ...state,
        [action.title]: { right: false, left: false }
      };
    default:
      return state;
  }
}
