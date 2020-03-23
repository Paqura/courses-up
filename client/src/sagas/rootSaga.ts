import { all, spawn } from 'redux-saga/effects';
import { watchRegisterRequest } from './register';
import { watchLoginRequest } from './login';

export function* rootSaga() {
  return yield all([
    yield spawn(watchRegisterRequest),
    yield spawn(watchLoginRequest),
  ])
};
