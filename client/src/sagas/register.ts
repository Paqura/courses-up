import { call, put, takeEvery } from 'redux-saga/effects';
import { registerFormRequest, RegisterFormRequestAction, registerFormSuccess, registerFormFailure } from '../actions/session/register';

async function reqToServer(data: any) {
  return await fetch('http://localhost:8001/auth/register', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: new Headers({
      'content-type': 'application/json',
    }),
  })
    .then(resp => {
      if (resp.status !== 400) {
        return resp.json();
      }

      throw resp.statusText;
    })
}

function* registerRequest(action: RegisterFormRequestAction) {
  const { name, password } = action.payload;

  try {
    const response = yield call(reqToServer, {name, password});
    yield put(registerFormSuccess(response));
  } catch (error) {
    yield put(registerFormFailure(error));
  }
}

export function* watchRegisterRequest() {
  yield takeEvery(registerFormRequest.type, registerRequest);
}