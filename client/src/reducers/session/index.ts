import { createReducer } from "@reduxjs/toolkit";
import { registerFormRequest, registerFormSuccess, RegisterFormSuccessAction } from "../../actions/register";

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
  [registerFormRequest.type]: (state) => {
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
});