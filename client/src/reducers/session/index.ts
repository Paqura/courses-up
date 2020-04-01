import { createReducer } from "@reduxjs/toolkit";
import {
  registerFormRequest,
  registerFormSuccess,
  RegisterFormSuccessAction,
  registerFormFailure,
  RegisterFormFailureAction,
} from "../../actions/session/register";
import {
  loginFormRequest,
  loginFormSuccess,
  loginFormFailure,
  LoginFormFailureAction,
  LoginFormSuccessAction,
} from "../../actions/session/login";

interface SessionUser {
  name: string;
  token: string;
}

interface Session {
  error: null | string;
  hasRegister: boolean;
  isLoading: boolean;
  isLoggedIn: boolean;
  user: null | SessionUser;
}

const initialState: Session = {
  error: null,
  hasRegister: false,
  isLoading: false,
  isLoggedIn: false,
  user: null,
};


export const sessionReducer = createReducer(initialState, {
  [registerFormRequest.type]: state => {
    return {
      ...state,
      error: null,
      isLoading: true,
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
      isLoading: false,
    };
  },

  [registerFormFailure.type]: (state, action: RegisterFormFailureAction) => {
    return {
      ...state,
      user: null,
      isLoggedIn: false,
      hasRegister: false,
      isLoading: false,
    };
  },

  [loginFormRequest.type]: state => {
    return {
      ...state,
      error: null,
      isLoggedIn: false,
      isLoading: true,
    };
  },

  [loginFormSuccess.type]: (state, action: LoginFormSuccessAction) => {
    return {
      ...state,
      user: {
        ...action.payload.user,
        token: action.payload.token,
      },

      isLoading: false,
      isLoggedIn: true,
    };
  },

  [loginFormFailure.type]: (state, action: LoginFormFailureAction) => {
    return {
      ...state,
      error: action.payload.error,
      isLoading: false,
      isLoggedIn: false,
      user: null,
    };
  },
});