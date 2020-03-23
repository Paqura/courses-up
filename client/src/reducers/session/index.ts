import { createReducer } from "@reduxjs/toolkit";
import {
  registerFormRequest,
  registerFormSuccess,
  RegisterFormSuccessAction,
  registerFormFailure,
  RegisterFormFailureAction,
} from "../../actions/register";
import {
  loginFormRequest,
  loginFormSuccess,
  loginFormFailure,
  LoginFormFailureAction,
  LoginFormSuccessAction,
} from "../../actions/login";

interface SessionUser {
  name: string;
  token: string;
}

interface Session {
  error: null | string;
  user: null | SessionUser;
  isLoggedIn: boolean;
}

const initialState: Session = {
  error: null,
  user: null,
  isLoggedIn: false,
};


export const sessionReducer = createReducer(initialState, {
  [registerFormRequest.type]: state => {
    return {
      ...state,
      error: null,
      isLoggedIn: false,
    };
  },

  [registerFormSuccess.type]: (state, action: RegisterFormSuccessAction) => {
    return {
      ...state,
      user: {
        ...action.payload.user,
        token: action.payload.token,
      },
      isLoggedIn: true,
    };
  },

  [registerFormFailure.type]: (state, action: RegisterFormFailureAction) => {
    return {
      ...state,
      user: null,
      isLoggedIn: false,
    };
  },

  [loginFormRequest.type]: state => {
    return {
      ...state,
      error: null,
      isLoggedIn: false,
    };
  },

  [loginFormSuccess.type]: (state, action: LoginFormSuccessAction) => {
    return {
      ...state,
      user: {
        ...action.payload.user,
        token: action.payload.token,
      },
      isLoggedIn: true,
    };
  },

  [loginFormFailure.type]: (state, action: LoginFormFailureAction) => {
    return {
      ...state,
      error: action.payload.error,
      user: null,
      isLoggedIn: false,
    };
  },
});