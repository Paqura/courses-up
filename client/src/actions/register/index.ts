import { createAction } from '@reduxjs/toolkit';
import { User } from '../../entities/user';

export const PREFIX = '@register';

// REQUEST -------------------------------------------------------

interface RegisterRequestPayload {
  name: string;
  password: string;
}

export interface RegisterFormRequestAction {
  payload: RegisterRequestPayload;
  type: typeof registerFormRequest.type;
}

export const registerFormRequest = createAction(`${PREFIX}/REQUEST`, (payload: RegisterRequestPayload) => ({
  payload,
}));

// SUCCESS --------------------------------------------------------

interface RegisterSuccessPayload {
  user: User;
  token: string;
}

export interface RegisterFormSuccessAction {
  payload: RegisterSuccessPayload;
  type: typeof registerFormSuccess.type;
}

export const registerFormSuccess = createAction(`${PREFIX}/SUCCESS`, (payload: RegisterSuccessPayload) => ({
  payload,
}));

// FAILURE --------------------------------------------------------

interface RegisterFailurePayload {
  error: null | string;
}

export interface RegisterFormFailureAction {
  payload: RegisterFailurePayload;
  type: typeof registerFormFailure.type;
}

export const registerFormFailure = createAction(`${PREFIX}/FAILURE`, (payload: RegisterFailurePayload) => ({
  payload,
}));

