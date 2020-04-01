import { call, put, takeLatest } from 'redux-saga/effects';
import { checkAuthRequest, checkAuthSuccess, checkAuthFailure } from '../actions/session/auth';
import { getAuthToken } from '../utils/session';

const reqToAuth = async () => {
  const response = await fetch('http://localhost:8001/auth', {
      method: 'GET',
      headers: new Headers({
        authorization: `Bearer ${getAuthToken()}`
      }),
    });

  const json = await response.json();
  return json;
}

function* onCheckAuthRequest() {
  const result = yield call(reqToAuth);

  if (result.statusCode === 401) {
    yield put(checkAuthFailure());
  } else {
    yield put(checkAuthSuccess());
  }
}

export function* watchAuthRequest() {
  yield takeLatest(checkAuthRequest.type, onCheckAuthRequest);
}