import {
  registerFormRequest,
  registerFormSuccess,
  RegisterFormSuccessAction,
  registerFormFailure,
  RegisterFormFailureAction,
} from "../../actions/session/register";
import { Session } from "./initialState";

export const registerReducer = {
  [registerFormRequest.type]: (state: Session) => {
    return {
      ...state,
      error: null,
      isLoading: true,
    };
  },

  [registerFormSuccess.type]: (state: Session, action: RegisterFormSuccessAction) => {
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

  [registerFormFailure.type]: (state: Session, action: RegisterFormFailureAction) => {
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
};