import {
  LoginFormSuccessAction,
  LoginFormFailureAction,
  loginFormRequest,
  loginFormSuccess,
  loginFormFailure,
} from "../../actions/session/login";
import { Session } from "./initialState";

export const loginReducer = {
  [loginFormRequest.type]: (state: Session) => {
    return {
      ...state,
      error: null,
      isLoggedIn: false,
      isLoading: true,
    };
  },

  [loginFormSuccess.type]: (state: Session, action: LoginFormSuccessAction) => {
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

  [loginFormFailure.type]: (state: Session, action: LoginFormFailureAction) => {
    return {
      ...state,
      error: action.payload.error,
      isLoading: false,
      isLoggedIn: false,
      user: null,
    };
  },
}
