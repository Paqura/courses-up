import { createAction } from "@reduxjs/toolkit";

const PREFIX = '@AUTH';

export const checkAuthRequest = createAction(`${PREFIX}/AUTH_REQUEST`);
export const checkAuthSuccess = createAction(`${PREFIX}/AUTH_SUCCESS`);
export const checkAuthFailure = createAction(`${PREFIX}/AUTH_FAILURE`);