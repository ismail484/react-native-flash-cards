import * as ActionTypes from '../actions/ActionTypes';
import initialState from './initialState';
/**
 * Questions reducer
 * @method
 * @param  {Array}  [state=[]] Array of questions has shape {statement, answer, deck}
 * @param  {Object} action     [description]
 * @return {Array}            [description]
 */
export default function questionsReducer(state = initialState.questions, action) {
  switch (action.type) {
    case ActionTypes.ADD_QUESTION:
      return [...state, action.question];

    default:
      return state;
  }
}
