import { createReducer } from "@reduxjs/toolkit";
import { registerFormRequest, registerFormSuccess } from "../../actions/register";

interface User {
  name: string;
}

interface Session {
  error: null | string;
  user: null | User;
  isLoggedIn: boolean;
}

const initialState: Session = {
  error: null,
  user: null,
  isLoggedIn: false,
};

export const sessionReducer = createReducer(initialState, {
  [registerFormRequest.type]: (state, action) => {
    return {
      ...state,
      error: null,
      isLoggedIn: false,
    };
  },

  [registerFormSuccess.type]: (state, action) => {
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