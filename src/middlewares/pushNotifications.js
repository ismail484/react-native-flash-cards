import * as ActionTypes from '../actions/ActionTypes';
import { clearLocalNotification, setLocalNotification } from '../utils/helpers';

export default function() {
  return next => action => {
    if (action.type === ActionTypes.FINISH_QUIZ) {
      clearLocalNotification().then(setLocalNotification);
    }
    next(action);
  };
}
