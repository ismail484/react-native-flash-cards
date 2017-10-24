import * as ActionTypes from '../actions/ActionTypes'
import initialState from './initialState'

export default function decksReducer(state = initialState.decks, action) {
  switch (action.type) {
    case ActionTypes.ADD_DECK:
      return [...state, action.deck]

    default:
      return state
  }
}
