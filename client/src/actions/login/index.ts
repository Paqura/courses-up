import { createAction } from '@reduxjs/toolkit';
import { User } from '../../entities/user';

export const PREFIX = '@login';

// REQUEST -------------------------------------------------------

interface LoginRequestPayload {
  name: string;
  password: string;
}

export interface LoginFormRequestAction {
  payload: LoginRequestPayload;
  type: typeof loginFormRequest.type;
}

export const loginFormRequest = createAction(`${PREFIX}/REQUEST`, (payload: LoginRequestPayload) => ({
  payload,
}));

// SUCCESS --------------------------------------------------------

interface LoginSuccessPayload {
  user: User;
  token: string;
}

export interface LoginFormSuccessAction {
  payload: LoginSuccessPayload;
  type: typeof loginFormSuccess.type;
}

export const loginFormSuccess = createAction(`${PREFIX}/SUCCESS`, (payload: LoginSuccessPayload) => ({
  payload,
}));

// FAILURE --------------------------------------------------------

interface LoginFailurePayload {
  error: null | string;
}

export interface LoginFormFailureAction {
  payload: LoginFailurePayload;
  type: typeof loginFormFailure.type;
}

export const loginFormFailure = createAction(`${PREFIX}/FAILURE`, (payload: LoginFailurePayload) => ({
  payload,
}));
