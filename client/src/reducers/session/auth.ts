import {
  checkAuthRequest,
  checkAuthFailure,
  checkAuthSuccess,
} from "../../actions/session/auth";
import { Session } from "./initialState";

export const authReducer = {
  [checkAuthRequest.type]: (state: Session): Session => ({
    ...state,
    isLoggedIn: false,
  }),

  [checkAuthSuccess.type]: (state: Session): Session => ({
    ...state,
    isLoggedIn: true,
  }),

  [checkAuthFailure.type]: (state: Session): Session => ({
    ...state,
    isLoggedIn: false,
  }),
};