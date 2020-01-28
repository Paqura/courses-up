import { combineReducers } from 'redux';


import { createAction, createReducer } from '@reduxjs/toolkit';

const increment = createAction('INCREMENT');

const counterReducer = createReducer({ count: 0 }, {
  [increment.type]: state => ({
    ...state,
    count: state.count + 1,
  }),
});


export default combineReducers({
  counter: counterReducer,
});
