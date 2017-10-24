import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import decks from './decksReducer';
import questions from './questionsReducer';
import results from './resultsReducer';
import swipe from './swipeReducer';

export default combineReducers({
  decks,
  questions,
  results,
  swipe,
  form
});
