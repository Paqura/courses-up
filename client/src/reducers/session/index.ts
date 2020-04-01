import { loginReducer } from "./login";
import { registerReducer } from "./register";
import { createReducer } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

export const sessionReducer = createReducer(initialState, {
  ...loginReducer,
  ...registerReducer,
})