import { createAction } from '@reduxjs/toolkit';

export const PREFIX = '@register';

interface RegisterPayload {
  name: string;
  password: string;
}

export interface RegisterFormAction {
  payload: RegisterPayload;
  type: typeof registerForm.type;
}

export const registerForm = createAction(`${PREFIX}/REQUEST`, (payload: RegisterPayload) => ({
  payload,
}));
