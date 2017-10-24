import * as ActionTypes from '../actions/ActionTypes'
import initialState from './initialState'

export default function resultsReducer (state = initialState.results, action) {
  switch (action.type) {
    case ActionTypes.FINISH_QUIZ: {
      const today = action.quiz.day;
      return {
        ...state,
        [today]: state[today] ? [...state[today], action.quiz] : [action.quiz]
      };
    }

    default:
      return state;
  }
}
