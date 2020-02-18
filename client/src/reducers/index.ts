import { combineReducers } from 'redux';
import { notificationReducer } from './notification';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

export default (history: History) => combineReducers({
  router: connectRouter(history),
  notification: notificationReducer,
});