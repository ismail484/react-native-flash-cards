import * as ActionTypes from './ActionTypes';
import { DateToString } from '../utils/helpers';

export function addDeck(deck) {
  return { type: ActionTypes.ADD_DECK, deck };
}

export function addQuestion(question) {
  return { type: ActionTypes.ADD_QUESTION, question };
}

export function finishQuiz({ deck, score }) {
  return {
    type: ActionTypes.FINISH_QUIZ,
    quiz: {
      deck,
      score,
      timestamp: Date.now(),
      day: DateToString()
    }
  };
}

export function swipedLeft(title = 'quiz') {
  return {
    type: ActionTypes.SWIPED_LEFT,
    title,

  };
}

export function swipedRight(title = 'quiz') {
  return {
    type: ActionTypes.SWIPED_RIGHT,
    title,

  };
}

export function swipedFinish(title = 'quiz') {
  return {
    type: ActionTypes.SWIPED_FINISH,
    title,

  };
}
