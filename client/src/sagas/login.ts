import { call, put, takeEvery } from 'redux-saga/effects';
import {
  loginFormRequest,
  LoginFormRequestAction,
  loginFormSuccess,
  loginFormFailure,
} from '../actions/session/login';
import { config } from '../config';

async function reqToServer(data: any) {
  return await fetch(`${config.BASE_URL}/login`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: new Headers({
      'content-type': 'application/json',
    }),
  })
    .then(resp => resp.json())
}

function* loginRequest(action: LoginFormRequestAction) {
  const { name, password } = action.payload;

  try {
    const response = yield call(reqToServer, {name, password});

    if (response.statusCode === 400) {
      throw new Error(response.message);
    }

    yield put(loginFormSuccess(response));

    window.localStorage.setItem('authKey', response.token);
  } catch (error) {
    yield put(loginFormFailure({ error: error.message ?? error }));
  }
}

export function* watchLoginRequest() {
  yield takeEvery(loginFormRequest.type, loginRequest);
}