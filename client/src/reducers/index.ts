import { combineReducers } from 'redux';
import { notificationReducer } from './notification';
import { formReducer } from './forms';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { sessionReducer } from './session';

export default (history: History) => combineReducers({
  router: connectRouter(history),
  notification: notificationReducer,
  forms: formReducer,
  session: sessionReducer,
});