import { loginReducer } from "./login";
import { registerReducer } from "./register";
import { createReducer } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { authReducer } from "./auth";

export const sessionReducer = createReducer(initialState, {
  ...loginReducer,
  ...registerReducer,
  ...authReducer,
})