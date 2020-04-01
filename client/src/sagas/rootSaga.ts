import { all, spawn } from 'redux-saga/effects';
import { watchRegisterRequest } from './register';
import { watchLoginRequest } from './login';
import { watchAuthRequest } from './auth';

export function* rootSaga() {
  return yield all([
    yield spawn(watchAuthRequest),
    yield spawn(watchRegisterRequest),
    yield spawn(watchLoginRequest),
    yield spawn(watchAuthRequest),
  ])
};
