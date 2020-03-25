import { all, spawn } from 'redux-saga/effects';
import { watchRegisterRequest } from './register';
import { watchLoginRequest, watchAuthRequest } from './login';

export function* rootSaga() {
  return yield all([
    yield spawn(watchRegisterRequest),
    yield spawn(watchLoginRequest),
    yield spawn(watchAuthRequest),
  ])
};
