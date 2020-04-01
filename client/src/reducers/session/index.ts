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


export const registerReducer = createReducer(initialState, {
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
      // TODO обработатоть нормально
      error: action.payload as any,
      isLoggedIn: false,
      hasRegister: false,
      isLoading: false,
    };
  },
});

export const loginReducer = createReducer(initialState, {
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
})


// Вынести редьюсеры в отдельные файлы
export const sessionReducer = Object.assign(loginReducer, registerReducer);