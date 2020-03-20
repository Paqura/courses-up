import { all, spawn } from 'redux-saga/effects';
import { watchRegisterRequest } from './register';

export function* rootSaga() {
  return yield all([
    yield spawn(watchRegisterRequest),
  ])
};
