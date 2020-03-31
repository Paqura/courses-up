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
  hasRegister: boolean;
  isLoggedIn: boolean;
  user: null | SessionUser;
}

const initialState: Session = {
  error: null,
  hasRegister: false,
  isLoggedIn: false,
  user: null,
};


export const sessionReducer = createReducer(initialState, {
  [registerFormRequest.type]: state => {
    return {
      ...state,
      error: null,
      isLoggedIn: false,
      hasRegister: false,
    };
  },

  [registerFormSuccess.type]: (state, action: RegisterFormSuccessAction) => {
    return {
      ...state,
      user: {
        ...action.payload.user,
        token: action.payload.token,
      },
      hasRegister: true,
      isLoggedIn: false,
    };
  },

  [registerFormFailure.type]: (state, action: RegisterFormFailureAction) => {
    return {
      ...state,
      user: null,
      isLoggedIn: false,
      hasRegister: false,
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